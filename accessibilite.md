---
title: Accessibilité
permalink: "/accessibilite/"
position: 8
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
Le site numerique.gouv.fr est en totale conformité avec le référentiel général d’amélioration de l’accessibilité, [RGAA version 4.0](/publications/rgaa-accessibilite/).
Voir section « Résultats des tests ».

### Résultats des tests
L’audit de conformité finalisé le 26 mars 2021 par la société Access42 révèle que le site est conforme à 100% au RGAA version 4.0. L’échantillon des pages du site ayant fait l’objet d’une vérification de conformité est le suivant :
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

#### Contenus non accessibles
Malgré le travail de mise en accessibilité effectué, certains contenus, listés ci-dessous, ne peuvent être rendus à 100% accessibles pour les raisons suivantes.

##### Dérogations pour charge disproportionnée
Certains contenus anglais ne peuvent pas être signalés comme tels (par exemple « <span lang="en">meetup</span> ») à certains endroits (titres), car le code HTML est alors visible dans le <span lang="en">title</span> de la page. La correction de ce point nécessiterait des travaux correctifs importants pour un impact utilisateur ici assez faible.

Le CMS génère parfois automatiquement quelques balises paragraphes vides superflues. Après des essais infructueux, il a été conclu que corriger ce point ne pourrait être réalisé aisément.
Des balises <span lang="en">Blockquote</span>  apparaissent, elles sont la transcription html automatique des balises markdown « > » (permettant  des mises en forme, à l’image des div), langage largement utilisé pour l’édition de ce site, et privilégié par le CMS utilisé. L’ajout d’un « role="presentation" » ou une réécriture en html ont été effectués chaque fois que possible. Une automatisation est en cours d’étude. Des balises <span lang="en">blockquote</span> subsistent à ce jour.

##### Contenus non soumis à l’obligation d’accessibilité
Contenus tiers
* Le fil d’actualité Twitter sur la page d’Accueil
* L’affichage de plus de résultats et le système de filtres sur les pages Recherche, Actualités et Agenda (Algolia – des échanges sont en cours avec l’éditeur pour tenter d’optimiser ces points)
* Player vidéo (Dailymotion, Youtube)

### Établissement de cette déclaration d’accessibilité
Cette déclaration a été établie le 26 mars 2021. 

#### Technologies utilisées pour la réalisation du site :
* HTML5
* CSS
* JavaScript
* Ruby
* Jekyll

#### Technologies d’assistance et outils utilisés pour vérifier l’accessibilité
* NVDA
* JAWS
* VoiceOver

La vérification de l’accessibilité est le résultat de tests manuels, assistés par des outils (feuilles CSS dédiés, extensions HeadingsMaps et WebDeveloper Toolbar, Color Contrast Analyser).


## Amélioration et contact
Vous pouvez nous aider à améliorer l'accessibilité du site en nous signalant les problèmes éventuels que vous rencontrez. Pour ce faire, envoyez-nous un courriel à communication.dinum@modernisation.gouv.fr.

## Défenseur des droits
Si vous nous avez signalé un défaut d'accessibilité qui vous empêche d'accéder à un contenu ou à un des services de numerique.gouv.fr et que vous n'avez pas obtenu de réponse satisfaisante, vous êtes en droit de faire part de vos doléances et de saisir le Défenseur des droits avec une des méthodes suivantes :

* Écrire un message au Défenseur des droits via [ce formulaire de contact](https://formulaire.defenseurdesdroits.fr/)
* Contacter le [délégué du Défenseur des droits dans votre région](https://www.defenseurdesdroits.fr/saisir/delegues)
* Envoyer un courrier par la poste (gratuit, ne pas mettre de timbre)
<br>Défenseur des droits
<br>Libre réponse 71120
<br>75342 Paris CEDEX 07


Cette déclaration a été mise à jour le 17 décembre 2020.