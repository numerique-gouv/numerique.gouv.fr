import os
import csv
import requests
from bs4 import BeautifulSoup
import pprint
import yaml

base_url="http://www.modernisation.gouv.fr"
page_relative_url="/outils-et-methodes-pour-transformer/projets-informatiques-de-letat-avis-conformes-emis-par-la-dinsic"

requete = requests.get(base_url+page_relative_url)
print requete.encoding
page = requete.content
soup = BeautifulSoup(page, "lxml")
avis = soup.select("#node-198118 > div.contenu-node > div.contenu-node-inner.wrapper.clearfix > div > div > div > div > div")

res_ministeres = []

ministeres = avis[1].findChildren("div" , recursive=False)
for ministere in ministeres:

    res_titre = ministere.h4.text
    url_image=ministere.p.img['src']
    res_image =  "/assets/img/avis-conformes/"+url_image.split("/").pop()
    requete = requests.get(base_url+url_image, stream=True)
    file_image = open(".."+res_image, 'w')
    file_image.write(requete.content)
    file_image.close()
    annees = ministere.findChildren("div" , recursive=False)
    res_annees = []

    for annee in annees:
        res_annee = annee.span.text
        avis = annee.findChildren("div" , recursive=False)
        res_avis = []
        for avi in avis:
            url_pdf = avi.a['href']
            res_pdf = url_pdf.split("/").pop()
            requete = requests.get(base_url+url_pdf, stream=True)
            file_pdf = open("../_uploads/"+res_pdf, 'w')
            file_pdf.write(requete.content)
            file_pdf.close()
            res_nom,res_text = avi.a.text.split("(", 1)
            res_text = res_text[:-1]
            res_avi = {
              "titre":res_nom,
              "pdf":"/uploads/"+res_pdf,
              "description":res_text
            }
            res_avis.append(res_avi)

        res_avis_annee = {
          "date" : res_annee,
          "avis" : res_avis
        }
        res_annees.append(res_avis_annee)

    res_ministere = {
      "titre" : res_titre,
      "image" : res_image,
      "annees" : res_annees
    }
    res_ministeres.append(res_ministere)

#pprint.pprint(res_ministeres)


fichier = open('nom_fichier.yml', "w")
fichier.write(yaml.safe_dump(res_ministeres, default_flow_style=False, encoding=('utf-8')))
fichier.close()



