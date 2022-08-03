---
title: Cadre de recommandations pour le partage de données par API  dans l’administration
permalink: "/publications/recommandations-partage-donnees-api-test/"
position: 21
chapeau-text: 'Élaboré par la DINUM avec les administrateurs ministériels des données,
  des algorithmes et des codes sources (AMDAC), ce cadre de recommandations précise
  le cadre d’action et identifie les bonnes pratiques à poursuivre en matière d’usage
  et d’exposition d’API par les administrations. L'objectif : favoriser le partage
  de données entre elles et ainsi faciliter les démarches des usagers.'
une-ou-diaporama:
- image: "/assets/img/main/image_DINSIC.jpg"
files:
- file: "/uploads/DINUM_Cadre-de-recommandations_API.pdf"
  nom: Version imprimable du cadre de recommandations
principes:
- principe: 
  order: 1
  content-text: |-
    <div class="h2 text-center">Découvrabilité</div>
    <h3>Catalogue de données et services disponibles</h3>
    #### **Recommandation 1**
    En complément de la description (métadonnées), les données et services publiquement accessibles sont visibles sur un catalogue exposé sur Internet, référencé sur les moteurs de recherche usuels et intelligibles (la description des API au sein du catalogue ou de l’API manager propose un contenu destiné aux opérationnels, fonctionnels comme techniques).
    <br>
    <br>

    La description d’une donnée doit référencer les API qui l’exposent. L’exemple ci-dessous présente les API disponibles pour la [« base Sirene des entreprises et de leurs établissements »](https://www.data.gouv.fr/fr/datasets/base-sirene-des-entreprises-et-de-leurs-etablissements-siren-siret/ "base Sirene des entreprises et de leurs établissements - Lien externe"), sur la page correspondant à ce jeu de données sur data.gouv.fr :
    <br>
    <br>
    <figure class='image-center' style='width: 75%;'>
      <img src="/uploads/capture-liste-api.png" alt="Capture de la page du jeu de données Base Sirene sur la plateforme data.gouv.fr, sur laquelle on voit la liste de 3 API disponibles pour ce jeu de données"/>
    </figure>

    **Exemples :**
    * api.gouv.fr vise à référencer toutes les API publiques de l’État
    * API Impôt Particulier vise à référencer la donnée fiscale des particuliers
- principe: 
  order: 2
  content-text: |-
    #### **Recommandation 2**

    **À chaque API exposée correspond :**

    * Une documentation fonctionnelle présentant la sémantique des données, leur qualité ainsi que leur source et leurs propriétés usuelles. Elle explicite également le processus de demande d’accès et l’éligibilité des réutilisateurs. Si un catalogue existe, un lien vers la description de la donnée est proposé ;
    * Une documentation technique présentant les modalités d’interrogation et de récupération de la donnée ;
    * Les conditions générales d’utilisation précisant les conditions contractuelles d’accès à l’API.


    La spécification d’une API respecte les standards répandus au sein de la communauté (norme OpenAPI en 2022). Cette description ne doit pas doublonner avec celle d’une donnée existante, ni ne s’affranchit de la nécessité de décrire la donnée dans un catalogue de donnée (principe de découvrabilité). Une API fournissant plusieurs jeux de données doit être décrite une seule fois et intégrer les liens vers chaque description des données fournies.
    <br>
    <br>

    La description d’une API précise également les périodes de validité de l’interface (cf. recommandations 7 & 8) et son niveau de service (cf. recommandations 10 & 11).
- principe: 
  order: 3
  content-text: |-
    <div class="h2 text-center">Accès à la donnée</div>
    <h3>Gestion des habilitations d’accès aux API à accès restreint</h3>
    #### **Recommandation 3**
    L’accès aux API à accès restreint se fait par demande du réutilisateur (administrations, éditeurs, entreprises…).
    <br>
    <br>

    Les API peuvent s’appuyer sur un mécanisme d’authentification de l’utilisateur final assurant une gestion des droits au sein de la plateforme qui les fournit. Les dispositifs d’authentification des citoyens, des agents ou des personnes morales conçus par les pouvoirs publics pourront être utilisés, en particulier lorsque le consentement de l’utilisateur est nécessaire pour faire circuler la donnée :
    * Pour les personnes physiques : FranceConnect, AgentConnect et EduConnect
    * Pour les personnes morales : ProConnect
- principe: 
  order: 4
  content-text: |-
    #### **Recommandation 4**

    Si le droit d’accès n’est pas préétabli, le processus de demande se fait de la manière la plus simple possible pour le réutilisateur.
    <br>
    <br>

    Dans le cadre de demandes d’accès prévues par la loi et si le demandeur est éligible, une réponse sera transmise aux réutilisateurs dans un délai recommandé de 15 jours calendaires. Le code des relations entre le public et l’administration prévoit un délai légal maximum de 30 jours pour répondre à une demande ([article R311-13](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000031370409 "article R311-13 - lien externe")).
- principe: 
  order: 5
  content-text: |-
    <h3>Bac à sable d'expérimentation public</h3>
    #### **Recommandation 5**

    À chaque API devrait correspondre une version « bac à sable », accessible en fonction du caractère des données ouvertes ou en accès restreint, exposant une version fictive des données et présentant les mêmes modalités techniques d’exposition.
    <br>
    <br>

    Pour les API ouvertes, le bac à sable potentiel est accessible au grand public, sans demande préalable du réutilisateur. Pour les API à accès restreint, le bac à sable contenant des données fictives pourrait être accessible au réutilisateur après demande d’un jeton au fournisseur de données, bien que cette pratique ne soit pas recommandée.
- principe: 
  order: 6
  title: 
  content-text: |-
    <div class="h2 text-center">Exploitation des données</div>
    <h3>Utilisation des standards technologiques du moment pour faciliter l’interopérabilité</h3>
    #### **Recommandation 6**

    Les données et services sont exposés selon des standards techniques communément partagés et adoptés.
    <br>
    <br>

    En 2022, le principe d’architecture et d’encodage le plus connu et pratiqué est le standard REST Json pour les API synchrones. Il est utilisé par exemple pour les spécifications du [standard OpenAPI](https://spec.openapis.org/oas/v3.1.0 "standard OpenAPI - Lien externe") ou [les standards « API » de l'OGC](https://ogcapi.ogc.org "les standards « API » de l'OGC - Lien externe"). Concernant les API asynchrones, le principe AsyncAPI est le plus répandu.
    <br>
    <br>

    **Bonne pratique** : L’approche <span lang="en">« contract first »</span>, par opposition à l’approche <span lang="en">« code first »</span>, est recommandée dans le développement de nouvelles interfaces car elle permet de les stabiliser et de faire travailler plusieurs équipes en parallèle au sein d’une même architecture.
- principe: 
  order: 7
  content-text: |-
    <h3>Stabilité du modèle des interfaces</h3>
    #### **Recommandation 7**
    Les données et services sont exposés selon une interface (modalités d’appel et structuration des données échangées) définie pour une période donnée.
    <br>
    <br>

    Les développements agile ou nécessitant une évolution prévisible seront rendus identifiables et préciseront une période de validité courte de 1 à 2 mois.
- principe: 
  order: 8
  content-text: |-
    #### **Recommandation 8**

    Ces périodes de validité de l’interface sont explicitement présentées aux réutilisateurs dans la documentation. Les modifications prévisibles s’accompagneront de l’actualisation préalable des informations descriptives intégrant des liens vers des communications et guides permettant aux réutilisateurs d’anticiper les évolutions. Les réutilisateurs pourront basculer durant une période définie et communiquée sur la version modifiée de l’interface. Durant ce laps de temps, deux interfaces cohabiteront, la version précédente dépréciée et la nouvelle version.
    <br>
    <br>

    Le détail de ces informations sera présenté en détail dans les conditions générales d’utilisation de l’API.
- principe: 
  order: 9
  content-text: |-
    #### **Recommandation 9**

    Toute modification non rétro-compatible impose un versioning en tant que version majeure et une cohabitation de l’ancien et du nouveau modèle pendant une période de recouvrement. Celle-ci doit être communiquée à l’avance en diffusant le nouveau contrat d’interface de l’API. À défaut d’information préalable ou d’accord des réutilisateurs, la période de cohabitation sera comprise entre 6 mois et 1 an.
    <br>
    <br>

    Si une évolution de la donnée interdit le maintien de l’ensemble des fonctionnalités de l’API (exemple : modification d’un schéma avec abandon de certaines informations), il sera indiqué quelles requêtes ou parties du protocole seront maintenues.
layout: reco-api-new
---
