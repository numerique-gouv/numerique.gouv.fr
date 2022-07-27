---
title: Cadre de recommandations pour le partage de données par API dans l’administration
date: 2022-07-27 16:35:00 +02:00
permalink: "/publications/reco-api/"
position: 16
une-ou-diaporama:
- image: "/assets/img/main/image_DINSIC.jpg"
subtitle: Une démarche en ligne exemplaire...
principes:
- principe: Titre principe
  order: 1
  title: Découvrabilité
  content-text: |
    ## Catalogue de données et services disponibles
    ### Recommandation 1

    En complément de la description (métadonnées), les données et services publiquement accessibles sont visibles sur un catalogue exposé sur Internet, référencé sur les moteurs de recherche usuels et intelligibles (la description des API au sein du catalogue ou de l’API manager propose un contenu destiné aux opérationnels, fonctionnels comme techniques).

    La description d’une donnée doit référencer les API qui l’exposent. L’exemple présenté ci-dessous met ainsi en évidence les ressources accessibles sur la page présentant le jeu de données « base SIREN des entreprises et de leurs établissements ».

    **Exemples :**
    * api.gouv.fr vise à référencer toutes les API publiques de l’État
    * API Impôt Particulier vise à référencer la donnée fiscale des particuliers
- principe: 
  order: 2
  title: 
  content-text: "### Recommandation 2\n\n**À chaque API exposée correspond :**\n*
    Une documentation fonctionnelle présentant la sémantique des données, leur qualité
    ainsi que leur source et leurs propriétés usuelles. Elle explicite également le
    processus de demande d’accès et l’éligibilité des réutilisateurs. Si un catalogue
    existe, un lien vers la description de la donnée est proposé ;\n* Une documentation
    technique présentant les modalités d’interrogation et de récupération de la donnée
    ; \n* Les conditions générales d’utilisation précisant les conditions contractuelles
    d’accès à l’API.\n\nLa spécification d’une API respecte les standards répandus
    au sein de la communauté (norme OpenAPI en 2022). Cette description ne doit pas
    doublonner avec celle d’une donnée existante, ni ne s’affranchit de la nécessité
    de décrire la donnée dans un catalogue de donnée (principe de découvrabilité).
    Une API fournissant plusieurs jeux de données doit être décrite une seule fois
    et intégrer les liens vers chaque description des données fournies.\n\nLa description
    d’une API précise également les périodes de validité de l’interface (cf. recommandations
    7 & 8) et son niveau de service (cf. recommandations 10 & 11).\n"
- principe: 
  order: 3
  title: Accès à la donnée
  content-text: "## Gestion des habilitations d’accès aux API à accès restreint\n###
    Recommandation 3\n\nL’accès aux API à accès restreint se fait par demande du réutilisateur
    (administrations, éditeurs, entreprises…).\n\nLes API peuvent s’appuyer sur un
    mécanisme d’authentification de l’utilisateur final assurant une gestion des droits
    au sein de la plateforme qui les fournit. Les dispositifs d’authentification des
    citoyens, des agents ou des personnes morales conçus par les pouvoirs publics
    pourront être utilisés, en particulier lorsque le consentement de l’utilisateur
    est nécessaire pour faire circuler la donnée : \n* Pour les personnes physiques
    : FranceConnect, AgentConnect et EduConnect\n* Pour les personnes morales : ProConnect
    \n\n"
- principe: 
  order: 4
  title: 
  content-text: |
    ### Recommandation 4

    Si le droit d’accès n’est pas préétabli, le processus de demande se fait de la manière la plus simple possible pour le réutilisateur. Dans le cadre de demandes d’accès prévues par la loi et si le demandeur est éligible, une réponse sera transmise aux réutilisateurs dans un délai recommandé de 15 jours calendaires. Le code des relations entre le public et l’administration prévoit un délai légal maximum de 30 jours pour répondre à une demande ([article R311-13](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000031370409 "article R311-13 - Lien externe")).
- principe: 
  order: 5
  title: 
  content-text: "## Bac à sable d'expérimentation public\n### Recommandation 5\n\nÀ
    chaque API devrait correspondre une version « bac à sable », accessible en fonction
    du caractère des données ouvertes ou en accès restreint, exposant une version
    fictive des données et présentant les mêmes modalités techniques d’exposition.\n\nPour
    les API ouvertes, le bac à sable potentiel est accessible au grand public, sans
    demande préalable du réutilisateur. Pour les API à accès restreint, le bac à sable
    contenant des données fictives pourrait être accessible au réutilisateur après
    demande d’un jeton au fournisseur de données, bien que cette pratique ne soit
    pas recommandée.  \n"
- principe: 
  order: 6
  title: Exploitation des données
  content-text: "## Utilisation des standards technologiques du moment pour faciliter
    l’interopérabilité\n### Recommandation 6\n\nLes données et services sont exposés
    selon des standards techniques communément partagés et adoptés.\n\nEn 2022, le
    principe d’architecture et d’encodage le plus connu et pratiqué est le standard
    REST Json pour les API synchrones. Il est utilisé par exemple pour les spécifications
    du [standard OpenAPI](https://spec.openapis.org/oas/v3.1.0 \"standard OpenAPI
    - Lien externe\") ou [les standards  « API » de l'OGC](https://ogcapi.ogc.org
    \"les standards  « API » de l'OGC - Lien externe\"). Concernant les API asynchrones,
    le principe AsyncAPI est le plus répandu.\n\n<p>\U0001F44D <b>Bonne pratique :</b>
    L’approche <span lang=\"en\">« contract first »</span>, par opposition à l’approche
    <span lang=\"en\">« code first »</span>, est recommandée dans le développement
    de nouvelles interfaces car elle permet de les stabiliser et de faire travailler
    plusieurs équipes en parallèle au sein d’une même architecture. </p>\n"
- principe: 
  order: 7
  title: 
  content-text: "## Stabilité du modèle des interfaces\n### Recommandation 7\n\nLes
    données et services sont exposés selon une interface (modalités d’appel et structuration
    des données échangées) définie pour une période donnée. \nLes développements Agile
    ou nécessitant une évolution prévisible seront rendus identifiables et préciseront
    une période de validité courte de 1 à 2 mois.\n"
- principe: 
  order: 8
  title: 
  content-text: |
    ### Recommandation 8

    Ces périodes de validité de l’interface sont explicitement présentées aux réutilisateurs dans la documentation. Les modifications prévisibles s’accompagneront de l’actualisation préalable des informations descriptives intégrant des liens vers des communications et guides permettant aux réutilisateurs d’anticiper les évolutions. Les réutilisateurs pourront basculer durant une période définie et communiquée sur la version modifiée de l’interface. Durant ce laps de temps, deux interfaces cohabiteront, la version précédente dépréciée et la nouvelle version.

    Le détail de ces informations sera présenté en détail dans les conditions générales d’utilisation de l’API.
- principe: 
  order: 9
  title: 
  content-text: "### Recommandation 9\n\nToute modification non rétro-compatible impose
    un versionning en tant que version majeure et une cohabitation de l’ancien et
    du nouveau modèle pendant une période de recouvrement. Celle-ci doit être communiquée
    à l’avance en diffusant le nouveau contrat d’interface de l’API. À défaut d’information
    préalable ou d’accord des réutilisateurs, la période de cohabitation sera comprise
    entre 6 mois et 1 an.\n\nSi une évolution de la donnée interdit le maintien de
    l’ensemble des fonctionnalités de l’API (exemple : modification d’un schéma avec
    abandon de certaines informations), il sera indiqué quelles requêtes ou parties
    du protocole seront maintenues. \n"
- principe: 
  order: 10
  title: Qualité de service
  content-text: |
    ## Indications sur le temps de réponse et la tenue en charge
    ### Recommandation 10

    La charge admise par une API est consultable en toute transparence par les réutilisateurs :
    * Dans le cas d’une API authentifiée, la charge est exprimée sous forme de métriques propres à chaque réutilisateur, comme le nombre d’appels sur une période donnée par exemple ;
    * Dans le cas d’une API non authentifiée, la charge tenable est exprimée dans son ensemble, tous réutilisateurs confondus ;
    * Dans le cas d’une infrastructure permettant, via une API, des requêtes complexes, ou servant de nombreuses données, la charge tenable estimée indiquera les critères utilisés et le caractère estimatif de cette évaluation ;
    * Dans le cas d’une API sujette à des fortes évolutions en fonction de la saisonnalité, le temps de réponse maximal sera précisé ainsi que les risques de rupture de service.
- principe: 
  order: 11
  title: 
  content-text: "### Recommandation 11\n\nLes temps de réponse moyens et maximaux
    sont présentés dans la documentation de l’API. Les temps de réponse mesurés ou
    estimés sont fournis à titre indicatif et non contractuel. Tout autre démarche
    relève d’un d’accord entre le fournisseur d’API et les réutilisateurs en fonction
    de leurs cas d’usages. \n"
- principe: 
  order: 
  title: 
  content-text: |
    Transparence sur la disponibilité de l’API
    Recommandation 12

    L’état de l’API représente sa capacité à être appelée dans les conditions réelles par un réutilisateur. Il est rendu accessible aux réutilisateurs et consultable en temps réel sous forme d’une URL, indiquée dans la description de l’API, permettant de tester que l'API se déclare disponible et requetable. En complément, il est souhaitable de permettre de consulter un historique entre 6 mois et une année.

    **Exemple :**
    Le suivi de la disponibilité des API du bouquet API Entreprise est disponible sur  [status.entreprise.api.gouv.fr](https://status.entreprise.api.gouv.fr/ "status.entreprise.api.gouv.fr - Lien externe")
- principe: 
  order: 12
  title: 
  content-text: "## Suivi des consommations des données et services\n### Recommandation
    13\nLes consommations des API sont enregistrées pour être ensuite restituées aux
    bénéficiaires (réutilisateur, producteur, API managers ou exploitants).\n\n\U0001F44D
    **Bonne pratique :** les bénéficiaires ont accès à travers un portail à une restitution
    en temps réel ou ponctuelle de ces statistiques de consommation des données ainsi
    que celles des autres bénéficiaires.\n"
- principe: 
  order: 14
  title: Curation de la donnée
  content-text: |
    ## Mise en place d’une boucle de retour sur la qualité des données
    ### Recommandation 14

    Les réutilisateurs disposent d’un moyen technique ou organisationnel leur permettant de faire des retours sur la qualité des données vers leur gestionnaire ou via la description des données au sein de leur catalogue d’origine. Les réutilisateurs disposent également d’un moyen technique ou organisationnel leur permettant de faire des retours sur la qualité des API exposées vers leur fournisseur ou via la description de l’API.

    **Exemple :**
    Le dispositif Datapass pouvant être utilisé par les API en accès restreint permet de faire un retour sur la qualité des données disponibles via celles-ci.
- principe: 
  order: 15
  title: Modèle économique
  content-text: |
    ## Gratuité de la donnée et de l’exposition
    ### Recommandation 15

    L’accès à la donnée et aux services doit être égalitaire. Les fournisseurs de données cherchent à adapter les modalités d’accès aux besoins des réutilisateurs.
- principe: 
  order: 16
  title: 
  content-text: |
    ### Recommandation 16

    Les données ainsi que les API sont mises à disposition gratuitement, pour les réutilisateurs uniquement, sauf exceptions devant faire l’objet d’une justification par l’administration productrice.

    **Exemple :**
    Dans le cas où des usages nécessiteraient une qualité de service au-dessus de ce que la multitude d’utilisateurs a couramment besoin, comme par exemple une bande passante élevée pour de la donnée temps-réel volumineuse desservie sur quelques organismes, il sera possible d’organiser un système freemium avec une égalité d’accès à des APIs par défaut et des APIs faisant l’objet de redevances pour les usages les plus exigeants.
files:
- file: "/uploads/10_principes_demarches-en-ligne.pdf"
  nom: Version imprimable des 10 principes
- file: "/uploads/Affiche-10-principes_HD.PDF"
  nom: Affiche des 10 principes (HD)
- file: "/uploads/10_principes_description-textuelle.pdf"
  nom: Description textuelle de l'affiche
Field name: 
layout: dix-principes
---

[> Lire notre article pour en savoir plus sur ce cadre de recommandations et son élaboration](https://numerique.gouv.fr/actualites/****")
