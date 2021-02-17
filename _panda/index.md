---
title: Accompagnement à la circulation de la donnée
permalink: "/publications/accompagnement-circulation-donnees/"
menu:
  title: Présentation
  weight: 10
layout: panda
---

# Introduction

Née de l’ouverture des données publiques, dès 2011, les administrations ont commencé à publier des données publiques dans des formats librement réutilisables sur la plateforme www.data.gouv.fr afin de permettre à des tiers (public/ privé) de les exploiter. Depuis, la DINSIC a développé plusieurs plateformes permettant de fluidifier la circulation des données publiques et à accès restreint.

Pensée initialement comme un vecteur de transparence, la politique publique d'ouverture des données a notamment permis à de nombreuses administrations d’avoir accès aux données d’autres administrations. L’ouverture des données a ainsi été un catalyseur permettant une réelle prise de conscience quant à la nécessité de faire circuler les données.

D'autres données ne sont pas des données publiques, elles sont confidentielles et peuvent concerner les particuliers ou les personnes morales. Ces données ne sont délivrées qu'aux administrations légitimes.

L'accès à ces données nécessite donc une autorisation qui est étudiée au regard de la réglementation en vigueur.
Dans le cadre de la mise en œuvre du programme Dites-le nous une fois piloté par la DINSIC, des plateformes et des outils ont été développés afin de simplifier les démarches administratives en agissant sur la suppression des pièces justificatives qui émanent des administrations.

L’administration sera tenue d’informer l’usager sur ces échanges en lui indiquant les informations qui lui sont nécessaires pour traiter sa démarche et les informations qu’elle se procure auprès d’autres administrations. L'administration doit également assurer la traçabilité des échanges jusqu’à 36 mois suivant la démarche.

**Pour organiser l’ensemble de ces échanges d’informations, les administrations pourront s’appuyer sur une offre de service et de produits, opérés par la DINSIC, qui permettront le développement d’échange d’informations entre administrations**.

# Vous souhaitez accéder à des données
## Catalogue de données
### API Particulier

**Informations issues de la Direction Générales des Finances Publiques (DGFIP):**

* Déclarants du foyer fiscal - Le foyer fiscal se compose du contribuable lui-même, du conjoint ou partenaire de Pacs
* Adresse connue au 1er janvier de l’année d’imposition (exemple au 1er janvier 2018 pour les revenus de 2017)
* Nombre de parts
* Revenu fiscal de référence
* Nombre de personnes à charge
* Situation familiale
* Montant des impots
* Revenu net avant correction
* Revenu imposable
* Revenu brut global
* Date de mise en recouvrement de l’avis d’impôt
* Date d’établissement

**Information issues de la Caisse Nationale d'Assurance Familiale:**

* Liste des allocataires
* Liste des enfants
* Adresse au format de la Poste
* Valeur du quotient familial
* Année et mois du quotient familial

### API Entreprise

* Association
* Document association
* INSEE Entreprise
* INSEE Etablissement
* Bilans Entreprises BDF
* Exercice
* Extrait INPI
* Extrait RCS
* Liasse fiscale
* Attestation Fiscale
* Attestation Sociale
* Attestation AGEFIPH
* Cotisation MSA
* Carte Pro FNTP
* Certificat CNETP
* Certificat OPQIBI
* Certificat PROBTP
* Certificat Qualibat

### API France Connectées

* API Impôts Particuliers
* API SIV (Système d'immatriculation des véhicules)
* API France Connect
* API Attestation de droits AMELI
* API Justif'Adresse

## Exemple de démarche : demande de bourse des collèges

En 2018, toutes les demandes des bourses au collège ont été dématérialisées grâce à API Particulier. Les revenus de la famille ont été directement récupérés au niveau des centres des impôts. En septembre 2018, nous avons eu 650 000 appels réussis ce qui correspond à autant de justificatifs qui onnt été évités. C’est à nouveau un gain de temps pour les familles. Certains parents devaient prendre une demi journée de RTT pour déposer leur dossier, d’autres demander à leurs enfants de faire la queue pendant la récréation….

### Incription aux activités périscolaires de la ville de la Lyon

Le quotient familial municipal sert à obtenir des réducations sur le prix des repas de la cantine scolaire dans les écoles publiques ou privées, sur les tarifs des activités périscolaires (les accueils du soir) et extrascolaires (ateliers du mercredi). Il est déterminé en fonction des revenus et de la composition de la famille.


## Conventionner via l'outil _signup_

La DINSIC met en œuvre un outil interministériel centralisé de contractualisation entre fournisseurs de services (consommateur d'API) et fournisseur de données (producteur d'api), c'est l'outil *signup.api.gouv.fr*.

**Pour les fournisseurs de service :**

* Gère les demandes d’accès à une ou plusieurs API
* Permet de sélectionner les périmètres de données (scope) dans chaque API
* Permet à plusieurs comptes d’accéder aux abonnements d'un fournisseur de service. Ces comptes sont réunies dans une organisation (ie un SIRET)
* Permet de gérer le renouvellement des autorisations (tokens) avec un seul compte
* Donne accès à l’ensemble des contrats d’une organisation
* Gère les demandes de tokens vers des api manager des producteurs d'API

Le fournisseur de service (FS) doit demander une autorisation pour pouvoir être destinataire de données via les API. In fine, il sera destinataire de la clef de sécurité (token) utilisée dans le service en ligne ou le backoffice. Cette démarche, validée par l’ANSSI, est dématérialisée à travers une interface (signup).

Il sera demandé au fournisseur de service les informations suivantes :

* L’intitulé du service en ligne et l’utilisation faite des données
* L’identité de son organisation : pré-remplissage des données sur fourniture du SIRET (via une API)
* 3 contacts:
  * Le délégué à la protection des données personnelles préalablement informé de la démarche
  * Le responsable du traitement, responsable métier du service en ligne
  * Le responsable technique, destinataire de la clef de sécurité
* Le cadre juridique qui justifie du droit d'en connaître de l'administration: il s’agit d’indiquer le cadre légal et réglementaire qui légitime l’administration à collecter les informations demandées. En complément, les collectivités peuvent aussi fournir une délibération.
* Sélection des données demandées:
  * Un fournisseur de service peut dans le cadre d’une démarche demander l’accès à des API de plusieurs ministères
  * Pour une même API un fournisseur de données peut proposer d’accéder à des données différentes que l’on qualifie « grappe de données » et qui techniquement sont regroupées sous le vocable de scope
* Validation des modalités d'utilisation

**Pour les fournisseurs de données :**

* Instruction juridique et technique des demandes d’accès aux API pour le compte des ministères. 
* Automatisation de la délivrance des tokens avec interaction vers l’API management des ministères
* Peut contrôler à chaque appel la validité du contrat

**Le formulaire proposé est un socle minimal et peut être adapté aux besoins spécifiques de chaque ministère.**

## Partenaires

# Vous souhaitez mettre des données à disposition
## Faire connaître son API : publier mon api sur api.gouv.fr

Ce catalogue d'API facilite le décloisonnement des données détenues par l’administration, afin de dynamiser le développement et l’évolution rapide de nouveaux services publics. Il permet de créer des services développés par les administrations et par tous les innovateurs susceptibles d’utiliser cette nouvelle ressource.

Les administrations déclarent elles-mêmes leurs API, pour peu qu’elles respectent un ensemble simple de conditions :
* disposer d’une description fonctionnelle claire et succincte de l'API à renseigner sur api.gouv.fr,
* proposer une documentation technique en ligne et claire,
* décrire une procédure en ligne pour demander l'accès à l'API si elle n'est pas totalement ouverte.

Principal critère d'acceptation de l’API : celle-ci doit pouvoir être testée en moins d'une journée et intégrée en moins d'une semaine.

Au delà des conditions exposées ci dessus, api.gouv.fr encourage un ensemble de bonnes pratiques. Comme celle de produire une documentation au format OPEN API, de fournir des exemples de services utilisant leurs API ou encore de proposer une page de statistiques démontrant la facilité d'utilisation pour l'API concernée : nombre de hits, mais surtout mesures sectorielles comme le nombre de candidatures simplifiées aux marchés publics (API Entreprise).

Les producteur d’API sont également invités à décrire simplement les conditions d'accès à leur API (CGU, licence..) et à simplifier au maximum l'enrôlement.

Les fournisseurs d’API sont responsables de l’exposition de leurs ressources. Ils définissent les conditions d’utilisation que devront respecter les consommateurs d’API. Les fournisseurs d’API référencés sur api.gouv.fr sont tous issus de la sphère publique : l’État ou ses représentants, collectivités, autorités administratives…

Les consommateurs d’API quant à eux prennent contact avec les fournisseurs pour consommer leurs ressources. Les consommateurs sont issus de la sphère publique ou de la sphère privée (associations, startup, éditeurs, entreprises, etc.). Dans le cas des API ouvertes, sans conditions, il n’est pas nécessaire de contacter le fournisseur avant de consommer les ressources.

## Accompagnement à la mise à disposition des données
### Construire une API

### Intégrer une API dans un bouquet de service de la DINSIC

### APIM

### Je souhaite exposer les données mais ne dispose pas de moyens techniques

## Signup

# Base juridique

Simplifier les formalités administratives des Français. C’est la promesse de la « loi pour un État au service d’une société de confiance » qui comporte 2 piliers : faire confiance et faire simple et s’adresse à tous les usagers - particuliers ou entreprises - dans leurs relations quotidiennes avec les administrations.

Publié le 18 janvier 2019, le décret « relatif aux échanges d’informations et de données entre administrations » complète le principe du « Dites-le-nous une fois » un des piliers de cette loi, qui consacre un changement de taille dans les relations entre usagers et administrations : désormais, un usager - particulier ou entreprise - entreprenant une démarche administrative **ne sera plus tenu de fournir certaines informations ou pièces justificatives** (revenu fiscal de référence, justificatif d’identité, attestation de droit délivrées par les organismes de sécurité sociale) déjà détenues par l’administration.

[Consultez le décret n° 2019-31 du 18 janvier 2019 relatif aux échanges d’informations et de données entre administrations dans le cadre des démarches administratives](https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000038029589&dateTexte=&categorieLien=id)

[Consultez le décret n° 2019-33 du 18 janvier 2019 fixant la liste des pièces justificatives que le public n’est plus tenu de produire](https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000038029642&dateTexte=&categorieLien=id)

## Développer les échanges de données entre administrations

[Afin de simplifier les échanges entree administrations, le décret n° 2019-31 liste d'une part les domaines et les procédures concernées et d'autre part les informations et les administrations chargées de mettre à disposition ces informations.](https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000038029589&dateTexte=&categorieLien=id)

Pour les particuliers, sont concernées les procédures relevant :

* de l’emploi, du chômage, de l’identité (état civil)
* de la santé et de la solidarité (aides sociales, handicap, perte d’autonomie, retraite, sécurité sociale, etc.)



Pour les entreprises, sont concernées les procédures relevant :

* de réglementations particulières (en matière d’agriculture et de forêt, de bâtiments et de travaux publics…)
* des aides publiques
* de la création, cessation, modification, reprise et transmission de l’entreprise
* de la fiscalité
* de la gestion des ressources humaines et la formation professionnelle
* de la législation sur les baux commerciaux et professionnels
* de la comptabilité, le financement et l’assurance de l’entreprise
* des marchés publics (pour ce qui concerne la constitution du dossier de candidature)
* de la règlementation en matière commerciale


L’administration sera tenue d’informer l’usager sur ces échanges en lui indiquant les informations qui lui sont nécessaires pour traiter sa démarche, les informations qu’elle se procure auprès d’autres administrations et d’assurer la traçabilité des échanges jusqu’à 36 mois suivant la démarche.

Pour organiser l’ensemble de ces échanges d’informations, les administrations pourront s’appuyer sur une offre de service et de produits, opérés par la DINSIC, qui permettront le développement d’échange d’informations entre administrations.

## Réduire le nombre d’informations et de pièces justificatives demandées aux usagers

[Le décret n° 2019-33 fixe quant à lui la « liste des pièces justificatives que le public n’est plus tenu de produire à l’appui des procédures administratives »](https://www.legifrance.gouv.fr/affichTexte.do?cidTexte=JORFTEXT000038029642&dateTexte=&categorieLien=id) dès lors que les échanges organisés par le premier décret sont effectifs. 

Ainsi, dans le cadre des procédures de marchés publics et de demandes d’aides publique, les entreprises et organismes à but non lucratif, ne seront plus tenus de transmettre un certain nombre de pièces telles que :


* l’attestation de régularité fiscale délivrée par la direction générale des finances publiques
* l’extrait d’immatriculation au registre du commerce et des sociétés et les statuts de la personne morale
* les attestations de régularité sociale et de vigilance délivrées par les organismes chargés du recouvrement des cotisations sociales
* la carte professionnelle d’entrepreneur de travaux publics délivrée par la Fédération nationale des travaux publics
* le certificat attestant la régularité de la situation de l’employeur au regard de l’obligation d’emploi des travailleurs handicapés


Les particuliers, quant à eux n’auront plus à fournir à l’appui de leurs démarches : 

* l’avis d’imposition à l’impôt sur le revenu,
* l’attestation de droit délivrée par les organismes de sécurité sociale
* un justificatif d’identité, lorsqu’il est fait usage du dispositif « FranceConnect » mis en œuvre par la DINSIC.
