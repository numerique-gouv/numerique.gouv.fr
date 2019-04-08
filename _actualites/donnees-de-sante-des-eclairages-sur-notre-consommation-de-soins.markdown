---
title: 'Données de santé : des éclairages sur notre consommation de soins'
date: 2015-02-16 14:28:00 +01:00
published: false
categories:
- Article
tags:
- données ouvertes
- Open data
chapeau-text: Le 26 janvier 2015 s’est tenu, dans les locaux de La Paillasse, à Paris,
  le premier hackathon dédié aux données de santé, organisé par l’Assurance maladie
  et Etalab, la mission du SGMAP en charge de l’ouverture des données publiques. Inédits
  tant sur la nature des données que sur leur volume, les travaux ont permis d’apporter
  des éclairages sur la consommation de soins des Français.
une-ou-diaporama:
- image: "/uploads/hackathon_sante_une_1.jpg"
---

### Des données de santé massives et essentielles

<figure class='image-left' style='width: 40%; margin-right: 10px;'><img src="/uploads/hackathon_sante.jpg"/></figure> Le hackathon Santé du 26 janvier dernier, organisé par la mission Etalab et l’Assurance maladie, a été l’occasion de travailler sur des jeux de données inédits : des agrégations du « Damir », le fichier des dépenses de l’Assurance maladie inter-régimes. Ces bases regroupent l’ensemble des remboursements mensuels effectués par le régime général de l’Assurance maladie depuis 2010 (hors prestations hospitalières) par type de prestations (consultations, médicaments…), d’exécutants (médecins, dentistes, pharmaciens, laboratoires d’analyse, spécialistes, etc.) et de prescripteurs. Le tout entièrement « anonymisé », c’est-à-dire qu’il est impossible d’identifier les patients et les médecins. Des données essentielles pour mieux comprendre notre système de santé et notre consommation de soins. Leur ouverture est « un mouvement incontournable » a insisté Marisol Touraine, ministre des Affaires sociales, de la Santé et des Droits des femmes, en marge du hackathon.

Ces fichiers - [prochainement publiés en données ouvertes sur data.gouv.fr ](https://www.data.gouv.fr/fr/organizations/caisse-nationale-de-l-assurance-maladie-des-travailleurs-salaries/){: target="_blank"} sous le nom de « Open Damir » - constituent une ressource massive de données, équivalant à plus de 1,5 milliard de lignes csv (un format informatique ouvert). C’est la première fois qu’un hackathon propose autant de données publiques en France. Elles ont été requêtées, analysées, traitées, croisées par les 80 participants du hackathon, issus d’horizons divers : organismes publics du secteur médical, entreprises, assureurs, start-ups…

 

### Analyse des données de santé : les premiers enseignements

<figure class='image-right' style='width: 40%; margin-left: 10px;'><img src="/uploads/hackathon_sante2.jpg"/></figure> 13 équipes se sont constituées pour contribuer à l’analyse de notre système de santé, à travers les données de dépenses de l’Assurance maladie.  Plusieurs travaux, utilisant uniquement des données publiques et ouvertes, ont montré un **lien entre l’offre et la consommation de soins** : lorsqu’on augmente la densité de médecins de 100 pour 100 000 habitants dans un département, le nombre de visites chez un généraliste par affilié augmente de 0,5 par an.

La start-up Withings s’est quant à elle penchée sur [l’influence des modes de vie](https://blog.withings.com/2015/01/30/withings-participe-au-hackathon-lassurance-maladie-etalab/){: target="_blank"} sur les dépenses de santé. Pour cela, ses développeurs ont croisé les données du Damir avec celles issues des objets connectés créés par la start-up (trackeurs d’activité, pèse-personnes…), dont ils sont propriétaires. Ils ont notamment observé **une corrélation entre le nombre moyen de pas effectués par jour** (données propriétaires) et **les dépenses en médecine générale**, par département (données publiques). Dans les départements où la moyenne de pas est la plus élevée, les dépenses de santé par personne sont les plus faibles. Ils établissent ainsi un lien entre la sédentarité et la consommation de soins.

Une autre équipe de développeurs a travaillé sur **l’anonymisation des données**, une problématique essentielle en ce qui concerne les données de santé. Elle a tenté de la « craquer », pour vérifier qu’il n’y avait aucun risque de ré-identification directe ou indirecte des personnes concernées.  Elle complétait des tests préalables à l’ouverture des données de santé effectués par la CNAMTS. Pour cette équipe, l’échec a été un succès : aucune ré-identification n’a été possible.

 


>### Le hackathon ou comment réutiliser des données ouvertes pour produire du service
>
>Un hackathon permet de faire travailler ensemble et de manière collaborative, pendant une ou deux journées, des personnes dotées de compétences techniques (programmateurs, datascientists…) et des experts métiers sur un sujet précis ou autour de ressources particulières. Des hackathons – ou open data camps - sont régulièrement organisés par la mission Etalab de manière à anticiper ou à accompagner l’ouverture de données publiques sur le portail [data.gouv.fr](https://www.data.gouv.fr/fr/){: target="_blank"} . Des données sont mises à la disposition des participants afin qu’ils produisent des visualisations de données (« dataviz »), des analyses et des applications. A la suite d’un hackathon, les données sont généralement ouvertes à tous, publiées sur data.gouv.fr.
{: .encadre}