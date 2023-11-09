---
title: Le Cloud interne
date: 2021-07-08 17:39:00 +02:00
permalink: "/services/cloud/cloud-interne/"
menu:
  title: Le Cloud interne
  weight: 60
style: |
  .button {
  background-color: #0d5c98;
  border: 1px solid white;
  color: white;
  padding: 10px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-style: normal;
  margin: 4px 2px;
  cursor: pointer;
  }

  .main-timeline{
      font-family: "Open Sans", Arial, sans-serif;
      position: relative;
  }
  .main-timeline:after{
      content: '';
      display: block;
      clear: both;
  }
  .main-timeline .timeline{
      width: 60%;
      padding: 0 0 0 10px;
      margin: 0 30px 20px 0;
      float: left;
      position: relative;
      z-index: 1;
  }
  .main-timeline .timeline-content{
      color: #333;
      min-height: 150px;
      padding: 20px 70px 20px 15px;
      box-shadow: 0 0 15px rgba(0,0,0,0.2);
      display: block;
  }
  .main-timeline .timeline-content:hover{ text-decoration: none; }
  .main-timeline .timeline-icon{
      color: #fff;
      background: #078280;
      font-size: 45px;
      text-align: center;
      line-height: 108px;
      height: 70px;
      width: 70px;
      border-radius: 50%;
      box-shadow: 0 0 0 8px #fff;
      transform: translateY(-50%);
      position: absolute;
      top: 50%;
      right: -35px;
  }
  .main-timeline .timeline-icon {
      padding: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
  }
  .main-timeline .title{
      color: #078280;
      font-size: 22px;
      font-weight: 500;
      margin: 0 0 7px 0;
  }
  .main-timeline .title-gauche{
      color: #078280;
      font-size: 22px;
      font-weight: 500;
      margin: 0 0 7px 0;
      text-align: right;
  }
  .main-timeline .description{
      font-size: 14px;
      margin: 0;
  }
  .main-timeline .description-gauche{
      font-size: 14px;
      text-align: right;
      margin: 0;
  }
  .main-timeline .timeline:nth-child(even){
      float: right;
      padding: 0 10px 0 0;
      margin: 0 0 20px 30px;
  }
  .main-timeline .timeline:nth-child(even) .timeline-content{ padding: 20px 15px 20px 70px; }
  .main-timeline .timeline:nth-child(even) .timeline-content:before{
      left: auto;
      right: 0;
  }
  .main-timeline .timeline:nth-child(even) .timeline-content:after{
      right: auto;
      left: -75px;
  }
  .main-timeline .timeline:nth-child(even) .timeline-icon{
      right: auto;
      left: -35px;
  }
  .main-timeline .timeline:nth-child(4n+2) .timeline-content:before,
  .main-timeline .timeline:nth-child(4n+2) .timeline-content:after,
  .main-timeline .timeline:nth-child(4n+2) .timeline-icon{
      background: #5b6fb3;
  }
  .main-timeline .timeline:nth-child(4n+2) .title{ color: #5b6fb3; }
  .main-timeline .timeline:nth-child(4n+3) .timeline-content:before,
  .main-timeline .timeline:nth-child(4n+3) .timeline-content:after,
  .main-timeline .timeline:nth-child(4n+3) .timeline-icon{
      background: #144392;
  }
  .main-timeline .timeline:nth-child(4n+3) .title-gauche{ color: #144392; }
  .main-timeline .timeline:nth-child(4n+4) .timeline-content:before,
  .main-timeline .timeline:nth-child(4n+4) .timeline-content:after,
  .main-timeline .timeline:nth-child(4n+4) .timeline-icon{
      background: #e22724;
  }
  .main-timeline .timeline:nth-child(4n+4) .title{ color: #e22724; }
  .main-timeline .timeline:nth-child(4n+5) .timeline-content:before,
  .main-timeline .timeline:nth-child(4n+5) .timeline-content:after,
  .main-timeline .timeline:nth-child(4n+5) .timeline-icon{
      background: #ca4f16;
  }
  .main-timeline .timeline:nth-child(4n+5) .title-gauche{ color: #ca4f16; }
  @media screen and (max-width:767px){
      .main-timeline .timeline,
      .main-timeline .timeline:nth-child(even){
          width: 100%;
          padding: 0 75px 0 30px;
          margin: 0 0 20px;
      }
      .main-timeline .timeline:nth-child(even){ padding: 0 30px 0 75px; }
      .main-timeline .timeline .timeline-content:after{ right: 0; }
      .main-timeline .timeline:nth-child(even) .timeline-content:after{ left: 0; }
      .main-timeline .timeline .timeline-icon{ right: 20px; }
      .main-timeline .timeline:nth-child(even) .timeline-icon{ left: 20px; }
  }
  @media screen and (max-width:567px){
      .main-timeline .timeline{ padding: 0 35px 0 10px; }
      .main-timeline .timeline:nth-child(even){ padding: 0 10px 0 30px; }
      .main-timeline .timeline .timeline-content{ padding: 30px 50px 30px 20px; }
      .main-timeline .timeline:nth-child(even) .timeline-content{ padding: 30px 20px 30px 50px; }
      .main-timeline .timeline .timeline-content:after{
          height: 80px;
          width: 80px;
          right: 0;
      }
      .main-timeline .timeline:nth-child(even) .timeline-content:after{ left: 0; }
      .main-timeline .timeline .timeline-icon{
          font-size: 30px;
          line-height: 50px;
          height: 50px;
          width: 50px;
          box-shadow: 0 0 0 5px #fff;
          right: 20px;
          right: 15px;
          padding: 5px;
      }
      .main-timeline .timeline:nth-child(even) .timeline-icon{
          left: 15px;
          padding: 5px;
      }
      .main-timeline .title{ font-size: 18px; }
  }
  .titre-couleur > strong {
      color: #fff;
      padding-right: 5px;
      padding-left: 5px;
  }
  .fond-orange > strong {
      background: #078280
  }
  .fond-bleu > strong {
      background: #00b9f2
  }
  .fond-rouge > strong {
      background: #ff3333
  }
  .fond-vert > strong {
      background: #36adb4
  }

  .wrapper {
    max-width: 940px;
    margin: 0 20px;
    display: grid;
    grid-gap: 10px;
  }

  .wrapper {
    display: flex;
    flex-wrap: wrap;
  }

  .wrapper {
    display: grid;
    margin: 0 auto;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-auto-rows: minmax(150px, auto);
  }

  .panel {
    /* needed for the flex layout*/
    margin-left: 5px;
    margin-right: 5px;
    flex: 1 1 200px;
  }

  .wrapper > * {
    padding: 10px;
    font-size: 100%;
    margin-bottom: 10px;
  }


  .titre-caracteristique {
    color: #095D9C;
    font-weight: bold;
  }
une:
  image: "/uploads/cloud_page_fille.png"
layout: cloud
---

<h4 style="margin-top:-20px">Dédié aux services sensibles de l’État</h4>

Réservé aux administrations d’État, le Cloud interne a vocation à héberger leurs services numériques, traitements et données sensibles, à l’image du Cloud de confiance qui, lui, est ouvert à l’ensemble des administrations.

L’offre de Cloud interne, interministérielle, permet de bénéficier d’un Cloud souverain maîtrisé et opéré par des agents de l’État, hébergé dans les centres de production informatique de l’État et reposant sur les technologies open source OpenStack.

Ces infrastructures sont aptes à recevoir des produits en cours de développement tout comme des produits en production avec des besoins de haute disponibilité.

Ces deux offres sont accessibles et manipulables directement via API.

**Ce cloud interne se décline en deux offres :**

* **Nubo,** opérée par la DGFiP, adaptée à l’hébergement de données sensibles,

* **π (Pi),** opérée par le ministère de l’Intérieur, adaptée à l’hébergement de données sensibles jusqu’au niveau Diffusion restreinte.

<h3 style="margin-bottom:40px; margin-top:50px">Les caractéristiques du Cloud interne</h3>

<div class="row">
<div class="col-md-12">
<div class="main-timeline">
<div class="timeline">
<div class="timeline-content">
<div class="timeline-icon">
<img src="/uploads/Secnumcloud_blanc.svg" alt="" />
</div>
<h3 class="title-gauche">SecNumCloud</h3>
<p class="description-gauche">Offre d’un niveau de confiance jugé acceptable vis-à-vis du référentiel SecNumCloud (non soumis à la qualification).
</p>
</div>
</div>
<div class="timeline">
<div class="timeline-content">
<div class="timeline-icon">
<img src="/uploads/Localisation-france_blanc.svg" alt="" />
</div>
<h3 class="title">Localisation France</h3>
<p class="description">Offre une garantie de localisation du stockage, du traitement, de l’administration et de la supervision en France.
</p>
</div>
</div>
<div class="timeline">
<div class="timeline-content">
<div class="timeline-icon">
<img src="/uploads/OpenStack.svg" alt="" />
</div>
<h3 class="title-gauche">OpenStack</h3>
<p class="description-gauche">Assure une maîtrise complète de l’infrastructure par l’État et un niveau important de portabilité et de réversibilité.
</p>
</div>
</div>
<div class="timeline">
<div class="timeline-content">
<div class="timeline-icon">
<img src="/uploads/Internet_blanc.svg" alt="" />
</div>
<h3 class="title">RIE et Internet</h3>
<p class="description">Dispose de zones dédiées permettant d’être exposé soit au réseau interministériel de l’État (RIE), et ainsi de profiter d’un niveau de résilience élevé, soit à Internet.</p>
</div>
</div>
</div>
</div>
</div>

<h3 style="margin-top:40px">Le Cloud Nubo</h3>
Opérée par la DGFiP pour l’ensemble des ministères, l’offre Cloud Nubo est destinée à accueillir des services, données et traitements sensibles de l’État, hors Diffusion restreinte.

Fin juin 2023, l’offre Cloud Nubo héberge 277 projets applicatifs, répartis sur 9200 machines virtuelles, au sein de 1362 espaces cloud.

* **Socle technique** : Nubo est une offre de service orientée IaaS, basée sur la version communautaire OpenStack, en lien avec la fondation OpenStack, avec une montée de version majeure régulière.

* **Modèle de résilience** : Les infrastructures de Nubo sont déployées sur 2 sites en Ile-de-France. Chaque site dispose de 2 régions indépendantes (une région exposée RIE, et une région pour l’exposition Internet) permettant aux bénéficiaires d’organiser une résilience multi-sites pour les projets nécessitant un haut niveau de disponibilité. Pour faciliter la résilience multi-sites des projets bénéficiaires, une nouvelle offre de répartition de charge bi-sites est prévue à horizon fin 2023.

* **Catalogue de services** : Le catalogue de services de Nubo, orienté IaaS, propose des services Cloud communs (ressources de calcul, de stockage et de réseau) exposés en self-service via des API, et facturés suivant un mode de consommation à l’usage et un tarif garanti par une convention DINUM.

* **Niveau de service / Support** : Nubo s’engage sur une disponibilité de 98% pour chaque région, et un délai de prise en compte du support en 4h sur une plage horaire de 8h – 20h en jours ouvrés. Un projet nécessitant un niveau de disponibilité supérieur doit se déployer sur 2 régions.

* **Accompagnement** : Nubo met à disposition une équipe d’accompagnement, différents modes de communication (formulaires, adresse courriel dédiée, flux rss, salon Tchap), ainsi qu’un portail proposant des informations (actualités, nouveautés, interventions programmées), de la documentation, des outils web (portail de service, suivi de la consommation, niveaux de service, FAQ, suivi des demandes), et une bibliothèque logicielle, contenant des programmes prêts à l’emploi à destination des projets.

<div align="center"><div class="lien-important"><p style="margin-bottom: 0px"><a href="https://portailnubo.dgfip.finances.rie.gouv.fr" title="En savoir plus sur l’offre Nubo - Lien externe">En savoir plus sur l’offre Nubo</a></p></div>(lien accessible depuis le réseau interministériel de l’État).</div>

<h3 style="margin-top:40px">Cloud π (Pi)</h3>
Dédié aux services de l’État, opéré par le ministère de l’Intérieur, Cloud π offre la particularité de pouvoir héberger des produits manipulant des données de type diffusion restreinte (DR). L’offre de services du Cloud π est orientée infrastructure à la demande, directement disponible via un portail ou des API.

A fin septembre 2023, Cloud π première génération compte 9 800 machines virtuelles et le Cloud π seconde génération compte 6 000 machines virtuelles.

* **Socle technique** : L’offre π était basée sur une distribution OpenStack HPE Helion. La migration entre les deux générations de Cloud est en cours. Le décommissionnent de la première génération est prévue pour la fin de l’année 2023.

* **Modèle de résilience** : Les infrastructures de π sont déployées sur 2 sites en Ile-de-France. Chaque site dispose de 3 <span lang="en">« availability zones »</span> (AZ) indépendantes, et permet d’avoir une exposition internet ou RIE.

* **Catalogue de services** : π propose un catalogue de services orientés IaaS (Compute, Stockage, Réseau notamment).

* **Niveau de service / Support** : π s’engage sur un contrat de service avec un niveau de disponibilité de 98% à 99,9% en fonction des composants (portail, puissance informatique, API OpenStack), et un support en 24h/24 – 7j/7

* **Accompagnement** : π propose un portail, avec de la documentation en ligne à destination des projets.

<div align="center"><div class="lien-important"><p style="margin-bottom: 0px"><a href="https://pi.interieur.rie.gouv.fr/description-de-loffre-cloud/" title="En savoir plus sur l’offre Pi - Lien externe">En savoir plus sur l’offre Pi</a></p></div>(lien accessible depuis le réseau interministériel de l’État).</div>

<div class="encadre"><div style="margin-bottom: 40px; margin-top: 60px;" align="center"><b>Vous souhaitez recourir au Cloud interne&nbsp;? Obtenir plus d’infos sur les modalités d’accès&nbsp;?</b><a href="mailto:infonuage.dinum@modernisation.gouv.fr" class="button" title="Contactez-nous à infonuage.dinum@modernisation.gouv.fr - Ouvre une messagerie courriel"><b>Contactez-nous à infonuage.dinum@modernisation.gouv.fr</b></a></div></div>