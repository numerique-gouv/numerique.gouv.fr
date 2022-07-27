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
  title: "... fait œuvre de transparence"
  content-text: |-
    Ses **statistiques d’utilisation** et les **résultats de ses enquêtes** usagers sont rendus publics.

    Lorsqu’il existe des intermédiaires entre l’administration et les usagers, l’administration rend publiques les conditions pour devenir intermédiaire agréé, la liste des intermédiaires, les bonnes pratiques à respecter.

    La démarche est **transparente sur les modalités de gestion des données personnelles** et l’usager peut savoir qui y a eu accès.

    Si le traitement du dossier fait appel à un algorithme, l’usager en est informé et les règles sont rendues publiques.
- principe: 
  order: 8
  title: "... a un pilote à bord, qui connaît les besoins des usagers"
  content-text: |-
    Chaque démarche en ligne est **pilotée par une personne identifiée**, qui fait le lien entre les agents et les organisations concernés.

    Responsable de la qualité de la démarche, elle **arbitre, priorise et propose des améliorations**.

    Cette personne **centralise et fait circuler les informations sur la démarche** : qualité, statistiques d’utilisation, réclamations, questions posées, projets d’évolution...

    Pour les démarches très utilisées, elle **coordonne** les actions à conduire.

    Les partenaires de la démarche **connaissent son nom** et peuvent lui signaler un problème.
- principe: 
  order: 9
  title: "... permet un traitement et un suivi 100% numériques"
  content-text: |-
    Les données ou documents produits par l’usager sont adressés au service en charge du dossier **par voie numérique**, sauf exception.

    **Aucune ressaisie ou impression** de document n’est nécessaire.

    Le service chargé du dossier envoie **un accusé de réception numérique** à l’usager, qui est informé par voie électronique du suivi de sa démarche tout au long du traitement de son dossier.
- principe: 
  order: 10
  title: "... s’améliore en continu"
  content-text: |
    La démarche en ligne **évolue régulièrement en prenant en compte l’avis des usagers** (enquête annuelle, tests utilisateurs, réclamations…), **des agents et des partenaires**, ainsi que les statistiques d’utilisation.

    **Les réclamations sont analysées et traitées** comme des signaux prioritaires.
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
