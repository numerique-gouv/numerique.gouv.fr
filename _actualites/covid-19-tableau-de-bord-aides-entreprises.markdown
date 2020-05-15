---
title: "[Entretien] Covid-19 : Un tableau de bord interactif pour suivre les aides
  aux entreprises"
date: 2020-05-15 05:12:00 +02:00
categories:
- Interview
tags:
- Covid-19
- Entreprises
- Open Data
- Data science
- Etalab
- TECH.GOUV
- Données publiques
chapeau-text: Chaque Français peut désormais suivre l’attribution des aides apportées
  aux entreprises dans le cadre du Covid-19, grâce à un tableau de bord interactif
  réalisé par la direction interministérielle du numérique (DINUM) pour le compte
  des ministères économiques et financiers. Sorti fin avril avec les données du fonds
  de solidarité, le service continue de s’enrichir et intègre depuis ce jeudi 14 mai
  les prêts garantis par l’État (PGE) et les reports d’échéances fiscales.
une-ou-diaporama:
- image: "/uploads/Covid-19_tableau_bord_suivi_aides_entreprises.png"
---

Face à l’épidémie du Coronavirus Covid-19, le Gouvernement a mis en place un ensemble de mesures de soutien immédiates à destination des entreprises : fonds de solidarité, report de paiement d’échéances sociales et/ou fiscales, prêt garanti par l’État… Comment se répartissent ces aides par secteur d’activités et par département ?

Afin d’offrir une visibilité à tous les Français, Bruno Le Maire, ministre de l’Économie et des Finances, et Gérald Darmanin, ministre de l’Action et des Comptes publics, ont souhaité mettre à la disposition de tous un tableau de bord interactif.

Cet outil a été réalisé par la direction interministérielle du numérique (DINUM).

**Retour sur sa création avec le pilote du projet Romain Talès, chef de la mission DATA au sein du programme TECH.GOUV d’accélération de la transformation numérique du service public.**
<br>
<br>

#### **Quel était le besoin des ministères économiques et financiers ?**

<figure class='image-left' style='width: 15%;'><img src="/uploads/R-T-photo.jpg"/></figure>**Romain Talès –** Dans le cadre de l’épidémie Covid-19, le Gouvernement, en particulier les ministères économiques et financiers, ont mis en place d’importants moyens afin d’accompagner les entreprises en difficulté. Il est rapidement apparu nécessaire de donner un maximum de visibilité à l’ensemble des Français sur les différentes aides attribuées.

#### **Quelle a été votre intervention sur ce projet ?**

**R.T. –** La DINUM a souhaité mettre son expertise en matière de conception d’outils numériques, et de données, au service des ministères économiques et financiers. Nous leur avons proposé de réaliser un tableau de bord en ligne interactif, qui permette de visualiser et parcourir les aides attribuées par secteurs d’activités et par zone géographique.

Nous venions justement de réaliser un premier tableau de bord clé dans la gestion de la crise Covid-19, au fonctionnement similaire : [le tableau de bord de progression de l’épidémie](https://www.gouvernement.fr/info-coronavirus/carte-et-donnees), publié sur le site gouvernement.fr.

Forte de cette expérience, une équipe de 4 personnes aux compétences complémentaires, au sein du département Etalab de la DINUM, a conçu et réalisé une première version de ce nouveau tableau de bord, en 15 jours, depuis la récupération des données jusqu’au développement de l’outil de visualisation, en étroite collaboration avec les ministères.

#### **Par quoi avez-vous commencé pour réaliser ce tableau de bord ?**

**R.T. –** Première action cruciale : récupérer la matière première. Un tableau de bord comme celui-là repose avant tout bien sûr sur des données, et des données de qualité. En charge du pilotage global, j’ai tout d’abord obtenu auprès de la direction générale des finances publiques (DGFiP) les données relatives aux entreprises bénéficiaires du fonds de solidarité comprenant les montants attribués ainsi que la date d’attribution.

Un croisement avec la base des immatriculations des entreprises de l’INSEE (base SIRENE) nous a permis de connaître pour chacune le secteur d’activité et la localisation géographique, informations agrégées à la maille départementale et régionale. Une étape facilitée par le travail que nous menons depuis des années avec les administrations dans l’ouverture de leurs données puisque cette base était déjà disponible en open data sur data.gouv.fr.

#### **Qu’avez-vous fait à partir de ces données ?**

**R.T. –** Notre data engineer les a ensuite complétées grâce à l’[API Entreprise](https://entreprise.api.gouv.fr/) qui permet de récupérer les infos des entreprises retirées à leur demande de la base SIRENE disponible en open data. Il a structuré et nettoyé l’ensemble des données récoltées pour faciliter leur visualisation.

Restait à rendre ces données simples et agréables à consulter par tous. C’est là qu’intervient notre développeur frontend, qui a conçu le graphisme, l’UX, les modes de visualisation et enfin le code de l’outil final. De son côté notre directeur technique a bâti l’infrastructure technique globale permettant d’assurer l’hébergement ainsi que la résilience du produit.

Quant à moi, je poursuis l’enrichissement du tableau de bord avec les administrations concernées par la production des données. Selon la même méthode, nous avons ainsi intégré le 14 mai de nouvelles aides : le prêt garanti par l’État et le report d’échéances fiscales. L’objectif est d’apporter la vision la plus exhaustive possible de l’attribution des mesures de soutien aux entreprises.

#### **Pour quel résultat final ?**

**R.T. –** Le tableau de bord permet de visualiser les différentes aides attribuées aux entreprises, leurs montants, ainsi que leur répartition par secteurs d’activités, par département et par région, sous la forme de chiffres clés, de graphiques et d’une carte de France interactive. Les informations sont mises à jour sur une base quotidienne pour le fonds de solidarité et hebdomadaire pour les reports d’échéances fiscales ainsi que les prêts garantis par l’État.

L’ensemble des données utilisées est disponible [en open data sur data.gouv.fr](https://www.data.gouv.fr/fr/datasets/aides-aux-entreprises-dans-le-cadre-de-lepidemie-de-covid-19-en-france/) et le [code source](https://github.com/etalab/dashboard-aides-entreprises) de l’outil est libre.

#### **Que retenez-vous de ce projet ?**

**R.T. –** Le travail mené autour de ce tableau de bord montre tout l’intérêt de la donnée et du numérique à la fois au service de la relation de confiance avec les Français– nous leur offrons une transparence en temps réel sur un dispositif public et l’utilisation d’argent public – mais aussi au service de l’efficacité du pilotage de l’action publique elle-même.

Le tableau de bord apporte aux territoires, aux administrations centrales, comme aux opérateurs, une visibilité claire, au jour le jour, sur la mise en œuvre des mesures de soutien, et leur permet ainsi, le cas échéant, d’identifier des pistes d’adaptation en fonction des données remontées. Par exemple, connaître les secteurs ayant reçu le plus d’aides par département est un bon indicateur pour détecter les plus impactés par la crise, et le cas échéant aider à cibler de futures actions.

Le rapport des administrations aux données doit être véritablement repensé à l’aune de la situation exceptionnelle que nous traversons, qui met en lumière la nécessité d’avoir des données de qualité, à jour, partagées, et dont les missions de service public peuvent tirer le potentiel maximal.


<a href="https://www.economie.gouv.fr/covid19-soutien-entreprises/aides-versees-fonds-solidarite"><img src="/uploads/capture-tdb-aides-entreprises.png" width="200" style="border:1px solid gray" alt="Accéder au tableau de bord interactif"/>
</a>
{: .text-center}
> **[Accéder au tableau de bord interactif](https://www.economie.gouv.fr/covid19-soutien-entreprises/aides-versees-fonds-solidarite)**
{: .lien-important}
