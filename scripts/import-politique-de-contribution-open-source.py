# -*- coding: UTF-8 -*-
from git import Repo
import shutil
import os
import glob
import re
import yaml

def get_yaml(f):
  pointer = f.tell()
  if f.readline() != '---\n':
    f.seek(pointer)
    return ''
  readline = iter(f.readline, '')
  readline = iter(readline.next, '---\n')
  return ''.join(readline)

def supprime_accentuation(ligne):
  ligne = ligne.encode('UTF-8')
  accents = {
    'a': ['à', 'ã', 'á', 'â'],
    'e': ['é', 'è', 'ê', 'ë'],
    'i': ['î', 'ï'],
    'u': ['ù', 'ü', 'û'],
    'o': ['ô', 'ö'],
    '-': [' ']
    }
  for (char, accented_chars) in accents.iteritems():
    for accented_char in accented_chars:
      ligne = ligne.replace(accented_char, char)
  return ligne.lower()

def write_yaml_md(dir, page):
  page.markdownify_content()
  filename = dir+"/"+page.filename
  if os.path.exists(filename):
      os.remove(filename)
  with open(filename, 'a') as the_file:
    the_file.write('---\n')
    data = dict(
      title = page.title,
      menu = dict(
        title = page.title_menu,
        weight = page.title_weight))
    yaml.dump(data, the_file, default_flow_style=False)
    the_file.write('layout: politique-logiciel-libre\n')
    permalink = "/publication/politique-logiciel-libre/"
    if page.title_weight != 10:
      permalink = permalink + re.sub(r'(.*)\.md',r'\1',page.filename)+'/'
      re.purge()
    the_file.write('permalink: '+permalink)
    the_file.write('\n---\n')
    the_file.write(page.content)


class Page:
  def __init__(self, filename, content, title, title_menu,title_weight):
      self.filename = filename
      self.content = content
      self.title = title
      self.title_menu = title_menu
      self.title_weight = title_weight

  def markdownify_content(self):
      self.content = re.sub(r'{{< relref "(.*).md#*.*" >}} *',r'\1', self.content)
      re.purge()
      self.content = re.sub(r'{{% (\w*) "(.*)" *%}}([\s\S]*?){{% \/\1 %}}',r'*\2*\3', self.content)
      re.purge()


rw_dir = './repo'

dirpath = os.path.join(rw_dir)
if os.path.exists(dirpath) and os.path.isdir(dirpath):
    shutil.rmtree(dirpath)

repo = Repo.clone_from("https://github.com/DISIC/politique-de-contribution-open-source.git", os.path.join(rw_dir), branch='master')

pages = []
for filename in glob.glob(rw_dir+"/*"):
  match = re.search('\.*(?<!\.en)(?<!\README)\.md', filename)
  if match:
    with open(filename) as f:
       config = yaml.load(get_yaml(f))
       content = f.read()
       page = Page(re.sub(r'\.\/.*\/(.*\.md)',r'\1',filename), content, config['title'], config['menu']['main']['name'], config['menu']['main']['weight'])
       re.purge()
       pages.append(page)

for page in pages:
  write_yaml_md('../_politique-logiciel-libre', page)

if os.path.exists(dirpath) and os.path.isdir(dirpath):
  shutil.rmtree(dirpath)
