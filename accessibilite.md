---
title: Accessibilité
permalink: "/accessibilite/"
position: 8
date_de_modification: 31 mars 2024
layout: page-annexe
---

## Déclaration d'accessibilité
La direction interministérielle du numérique (DINUM) s’engage à rendre ses sites internet accessibles conformément à l’article 47 de la loi n° 2005-102 du 11 février 2005.

La présente déclaration d’accessibilité s’applique au site numerique.gouv.fr.

### Schéma pluriannuel et plan annuel de la DINUM
La direction interministérielle du numérique est engagée dans un processus d’amélioration de l’accessibilité de l’ensemble de ses sites.

Le schéma pluriannuel décrit les points importants sur lesquels la DINUM s’appuiera pour améliorer l’accessibilité numérique de l’ensemble de ses sites web et applications.
* [Consulter le schéma pluriannuel d’accessibilité 2020-2022 (pdf - 1,7 Mo)](/uploads/DINUM_SchemaPluriannuel_2020.pdf)

Il s’accompagne de plans d’action annuels qui détaillent les opérations programmées et mises en œuvre chaque année, ainsi que l’état de suivi de ces actions.
* [Consulter le plan annuel d’accessibilité 2021 (pdf - 900 Ko)](/uploads/DINUM-plan-annuel-2021.pdf)
* [Consulter le plan annuel d’accessibilité 2020 (pdf - 1 Mo)](/uploads/DINUM_PlanAnnuel_2020.pdf)

### État de conformité
Le site numerique.gouv.fr est **totalement conforme au référentiel général d’amélioration de l’accessibilité**, [RGAA version 4.1](/publications/rgaa-accessibilite/).
Voir section « Résultats des tests ».

### Résultats des tests
L’audit de conformité finalisé le 26 mars 2021 par la société Access42 révèle que le site est conforme à 100% au RGAA version 4.1. 

### Contenus non accessibles
Malgré le travail de mise en accessibilité effectué, certains contenus, listés ci-dessous, ne peuvent être rendus à 100% accessibles pour les raisons suivantes.

#### Dérogations pour charge disproportionnée
{: .margin-top-2 .margin-bottom-1}
Certains termes anglais ne peuvent pas être signalés comme tels (par exemple « <span lang="en">meetup</span> ») à certains endroits comme les titres, car le code html est alors visible dans le <span lang="en">title</span> de la page. La correction de ce point nécessiterait des travaux correctifs importants pour un impact utilisateur ici assez faible.

Le CMS génère parfois automatiquement quelques balises paragraphes vides superflues. Après des essais infructueux, il a été conclu que corriger ce point ne pourrait être réalisé aisément pour un impact utilisateur très faible, le contenu restant accessible et compréhensible.

Des balises <span lang="en">blockquote</span>  apparaissent, elles sont la transcription html automatique des balises markdown « > » (permettant des mises en forme, à l’image des div en html), langage largement utilisé pour l’édition de ce site, et privilégié par le CMS utilisé. L’ajout d’un « role="presentation" » ou une réécriture en html ont été effectués chaque fois que possible. Une automatisation est en cours d’étude. Des balises <span lang="en">blockquote</span> subsistent à ce jour sur les anciens contenus.

Sur les pages Recherche, Actualités et Agenda, l’affichage de plus de résultats et le système de filtres présentent des erreurs d'un point de vue accessibilité (contrastes de couleurs, intitulé du bouton en anglais, gestion du focus). Des essais de correction et de surcharge du comportement par défaut ont été menés sans succès, car la fonctionnalité repose sur un service externe non modifiable.  


#### Contenus non soumis à l’obligation d’accessibilité
{: .margin-top-2 .margin-bottom-0}
##### Contenus tiers
{: .margin-top-0 .margin-bottom-1}
* Le fil d’actualité Twitter sur la page d’Accueil
* Player vidéo (<span lang="en">Dailymotion, Youtube</span>)

### Établissement de cette déclaration d’accessibilité
Cette déclaration a été établie le 26 mars 2021. 

#### Technologies utilisées pour la réalisation du site :
{: .margin-top-2 .margin-bottom-1}
* HTML5
* CSS
* JavaScript
* Ruby
* Jekyll

#### Technologies d’assistance et outils utilisés pour vérifier l’accessibilité :
{: .margin-top-2 .margin-bottom-1}
* NVDA
* <span lang="en">JAWS</span>
* <span lang="en">VoiceOver</span>

La vérification de l’accessibilité est le résultat de tests manuels, assistés par des outils (feuilles CSS dédiés, extensions <span lang="en">HeadingsMaps</span> et <span lang="en">WebDeveloper Toolbar, Color Contrast Analyser</span>).

#### Pages du site ayant fait l’objet de la vérification de conformité
{: .margin-top-2 .margin-bottom-1}
L’échantillon des pages du site ayant fait l’objet d’une vérification de conformité est le suivant :
1. [Accueil](https://www.numerique.gouv.fr/)
2. [Mentions légales](/mentions-legales/) 	
3. [Accessibilité](/accessibilite/)
4. [Nous contacter](https://www.numerique.gouv.fr/contact/)
5. [Plan du site](https://www.numerique.gouv.fr/plan-du-site/)
6. [Recherche](https://www.numerique.gouv.fr/rechercher/?query=projet)
7. [La DINUM](https://www.numerique.gouv.fr/dinum/)
8. [Actualités](https://www.numerique.gouv.fr/actualites/)
9. [Actualité « Lancement de Vis mon job... » ](https://www.numerique.gouv.fr/actualites/lancement-de-vis-mon-job-des-etudiants-a-la-rencontre-des-professionnels-du-numerique-de-letat/)
10. [Agenda](https://www.numerique.gouv.fr/agenda/)
11. [Page agenda « Design public - <span lang="en">Meetup</span> #3 »](https://www.numerique.gouv.fr/agenda/design-public-meetup-3/)
12. [Publications](https://www.numerique.gouv.fr/publications/)
13. [Publication « RGAA 4 »](https://www.numerique.gouv.fr/publications/rgaa-accessibilite/methode/criteres/)
14. [Service « Partagez vos talents numériques »](https://www.numerique.gouv.fr/services/partagez-vos-talents-numeriques/)	
15. [Outil agent « Tchap »](https://www.numerique.gouv.fr/outils-agents/tchap-messagerie-instantanee-etat/)
16. [Recrutement](https://www.numerique.gouv.fr/rejoignez-nous/)

## Retour d’information et contact
{: .margin-top-2 .margin-bottom-1}
<p style="margin-bottom: 0px">Il est important de rappeler qu’en vertu de l’article 11 de la loi de février 2005 :</p>
<blockquote class="citation" style="margin-bottom: 25px; margin-top: 0px"><p>La personne handicapée a droit à la compensation des conséquences de son handicap, quels que soient l’origine et la nature de sa déficience, son âge ou son mode de vie.</p></blockquote>
La DINUM s'engage à prendre les moyens nécessaires afin de donner accès, dans un délai raisonnable, aux informations et fonctionnalités recherchées par la personne handicapée, que le contenu fasse l'objet d'une dérogation ou non.

La DINUM invite les personnes qui rencontreraient des difficultés à la contacter  par courriel à [communication.dinum@modernisation.gouv.fr](mailto:communication.dinum@modernisation.gouv.fr) afin qu’une assistance puisse être apportée (alternative accessible, information et contenu donnés sous une autre forme).

## Voies de recours
{: .margin-top-2 .margin-bottom-1}
Si vous constatez un défaut d'accessibilité vous empêchant d'accéder à un contenu ou une fonctionnalité du site, que vous nous le signalez et que vous ne parvenez pas à obtenir une réponse de notre part, vous êtes en droit de faire parvenir vos doléances ou une demande de saisine au Défenseur des droits.

Plusieurs moyens sont à votre disposition :
* [un formulaire de contact](https://formulaire.defenseurdesdroits.fr/defenseur/code/afficher.php?ETAPE=informations) ;
* [la liste du ou des délégués de votre région](http://www.defenseurdesdroits.fr/office/) avec leurs informations de contact direct ;
* un numéro de téléphone : 09 69 39 00 00 ;
* une adresse postale (courrier gratuit, sans affranchissement) : Le Défenseur des droits - Libre réponse 71120 - 75342 Paris CEDEX 07.

