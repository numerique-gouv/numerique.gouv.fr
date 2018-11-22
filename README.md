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



## La chaine de developpement

1. Branche dev pour les developpement courant
2. Branche preprode pour la compatibilité avec le CRM
3. Branche master (CI)

## Gestion des deux repos

git remote add test-dinsic git@github.com:MatthiasFeraga/site-dinsic.git
git fetch test-dinsic


## Exporter la variable d'env algolia
creer un fichier .env à la racine
écrire dans le fichier: 

    ALGOLIA_API_KEY="******************************"
    
entrer la commande

    export $(grep -v '^#' .env | xargs)
