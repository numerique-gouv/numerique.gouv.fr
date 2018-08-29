# DINSIC SITE

![CircleCI](https://circleci.com/gh/MatthiasFeraga/site-dinsic/tree/master.svg?style=svg&circle-token=ad2054b5900fbfd4b3971014fa75e8f9ec3bed5f)
[![devDependencies](https://david-dm.org/MatthiasFeraga/site-dinsic/dev-status.svg)](https://david-dm.org/MatthiasFeraga/site-dinsic#info=devDependencies)

Bienvenu à toi développeur ou utilisateur du site de la DINSIC.
[Un wiki est disponible au lien suivant](https://github.com/MatthiasFeraga/site-dinsic/wiki)

## System Preparation

### Required
[Git](https://git-scm.com)  
[Ruby and Ruby Gems](https://rvm.io/rvm/install)  
[Jekyll](http://jekyllrb.com/) - `gem install jekyll`  
[Bundler](http://bundler.io/) - `gem install bundler` (mac users may need sudo)  

[NodeJS](http://nodejs.org) - use the installer.  
[Yarn](https://yarnpkg.com/en/docs/install) - follow installation instructions  
[GulpJS](https://github.com/gulpjs/gulp) - `npm install -g gulp` (mac users may need sudo)  

### Optional
[Composer](https://getcomposer.org) (installs PHPMailer)  
[Make](https://www.gnu.org/software/make) (used with rsync for deploying)  

# Jekyll Foundation

[![Build Status](https://travis-ci.org/Foundation-for-Jekyll-sites/jekyll-foundation.svg)](https://travis-ci.org/Foundation-for-Jekyll-sites/jekyll-foundation)
[![devDependencies](https://david-dm.org/Foundation-for-Jekyll-sites/jekyll-foundation/dev-status.svg)](https://david-dm.org/Foundation-for-Jekyll-sites/jekyll-foundation#info=devDependencies)
[![Join the chat at https://gitter.im/core77/jekyll-foundation](https://badges.gitter.im/core77/jekyll-foundation.svg)](https://gitter.im/core77/jekyll-foundation?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Quickstart your Jekyll (v3) project with Zurb Foundation for Sites (v6, sass).

This package is meant to build your Site on your local machine.

It provides a [Gulp.js](http://gulpjs.com/) workflow with

# Troubleshooting
[rvm](https://github.com/rvm/rvm/issues/4354) Fix pour problème rvm sous GitBash et Windows.



### Ansible

Pour la configuration du serveur,  nous avons utilisé les rôles ansible suivants:

https://github.com/geerlingguy/ansible-role-apache
https://github.com/geerlingguy/ansible-role-php`


####Installer un serveur
`ansible-playbook ./ansible/install-server.yml -i ./ansible/host`
####Le syncroniser
`ansible-playbook ./ansible/syncronise-server.yml -i ./ansible/host`


## La chaine de developpement

1. Branche dev pour les developpement courant
2. Branche siteleaf pour la compatibilité avec le CRM
3. Branche master (CI)
