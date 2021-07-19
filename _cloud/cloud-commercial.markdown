---
title: Le Cloud commercial
date: 2021-07-08 11:25:00 +02:00
permalink: "/services/cloud/cloud-commercial/"
menu:
  title: Le Cloud externe
  weight: 40
style: |-
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
      background-color: #f5f5f5;
      min-height: 150px;
      padding: 20px 70px 20px 15px;
      box-shadow: 0 0 15px rgba(0,0,0,0.2);
      display: block;
  }
  .main-timeline .timeline-content:before,
  .main-timeline .timeline-content:after{
      content: '';
      background: #078280;
      height: 100%;
      width: 15px;
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;
  }
  .main-timeline .timeline-content:after{
      height: 150px;
      width: 150px;
      border-radius: 50%;
      transform: translateY(-50%);
      top: 50%;
      left: auto;
      right: -75px;
  }
  .main-timeline .timeline-content:hover{ text-decoration: none; }
  .main-timeline .timeline-icon{
      color: #fff;
      background: #078280;
      font-size: 45px;
      text-align: center;
      line-height: 108px;
      height: 105px;
      width: 105px;
      border-radius: 50%;
      box-shadow: 0 0 0 8px #fff;
      transform: translateY(-50%);
      position: absolute;
      top: 50%;
      right: -52px;
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
      font-weight: 700;
      margin: 0 0 7px 0;
  }
  .main-timeline .description{
      font-size: 14px;
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
      left: -52px;
  }
  .main-timeline .timeline:nth-child(4n+2) .timeline-content:before,
  .main-timeline .timeline:nth-child(4n+2) .timeline-content:after,
  .main-timeline .timeline:nth-child(4n+2) .timeline-icon{
      background: #008198;
  }
  .main-timeline .timeline:nth-child(4n+2) .title{ color: #008198; }
  .main-timeline .timeline:nth-child(4n+3) .timeline-content:before,
  .main-timeline .timeline:nth-child(4n+3) .timeline-content:after,
  .main-timeline .timeline:nth-child(4n+3) .timeline-icon{
      background: #154A84;
  }
  .main-timeline .timeline:nth-child(4n+3) .title{ color: #154A84; }
  .main-timeline .timeline:nth-child(4n+4) .timeline-content:before,
  .main-timeline .timeline:nth-child(4n+4) .timeline-content:after,
  .main-timeline .timeline:nth-child(4n+4) .timeline-icon{
      background: #FE4954;
  }
  .main-timeline .timeline:nth-child(4n+4) .title{ color: #FE4954; }
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
layout: cloud
---

<h4 style="margin-top:-20px">Pour l’ensemble des acteurs publics</h4>

Mise à disposition des ministères, des collectivités territoriales et de l’ensemble de la sphère publique, l’offre de **Cloud commercial** donne accès aux catalogues de services des principaux fournisseurs de Cloud français et mondiaux.

Accessible facilement via l’UGAP et issue d’une collaboration avec la direction des achats de l’État (DAE) et la direction interministérielle du numérique (DINUM), cette offre rend accessible une variété de services d’infrastructure et de plateforme (IaaS et PaaS) et permet de choisir la solution la mieux adaptée à vos besoins.

Le marché Cloud commercial propose ainsi un large éventail de solutions et de garanties pour répondre à vos enjeux de sécurité.

### Les caractéristiques du Cloud externe

**SecNumCloud**
Offre des garanties relatives au prestataire, à son personnel, à la localisation des données et de leur traitement au sein de l’UE ainsi qu’au droit applicable à ces données. [> Retrouvez la liste des fournisseurs qualifiés SecNumCloud.](https://www.ssi.gouv.fr/administration/qualifications/prestataires-de-services-de-confiance-qualifies/prestataires-de-service-dinformatique-en-nuage-secnumcloud/)

**Droit applicable**
Offre une possibilité de localisation du stockage, du traitement, de l’administration et de la supervision dans l’Union Européenne. Dispose de fournisseurs exempts de toutes législations imposant le transfert de données personnelles hors Union européenne.

**Localisation France ou UE**
Offre une possibilité de localisation du stockage, du traitement, de l’administration et de la supervision dans l’Union Européenne.

**Richesse du catalogue**
Dispose d'une large gamme de services communs et innovants afin de répondre à l'ensemble des besoins de la sphère publique

**Appairage direct**
Offre la possibilité d’établir une connexion entre votre réseau et celui du fournisseur afin de bénéficier de meilleures performances et de coûts de données sortantes réduits.

*Certaines de ces caractéristiques sont disponibles uniquement auprès de certains fournisseurs des offres de Cloud externe de confiance. Les caractéristiques de l’offre sont susceptibles d’évoluer au cours du temps, ainsi que la composition du panel d’offres présentées au sein du marché Cloud externe.*

<div align="center" style="margin-bottom: 40px"><a href="https://www.ugap.fr/catalogue-marche-public/services-dinformatique-en-nuage-cloud-externe_103007.html" class="button" alt="Accéder l’offre de Cloud externe - lien externe"><b>Accéder l’offre de Cloud externe</b></a></div>

<div class="row">
<div class="col-md-12">
<div class="main-timeline">
<div class="timeline">
<div class="timeline-content">
<div class="timeline-icon">
<img src="/uploads/conseil-strategie-transformation-numerique/Etape-1-blanc-2.png" alt="Etape 1" />
</div>
<h3 class="title">SecNumCloud</h3>
<p class="description">Offre des garanties relatives au prestataire, à son personnel, à la localisation des données et de leur traitement au sein de l’UE ainsi qu’au droit applicable à ces données. <a href="https://ssi.gouv.fr/secnumcloud">> Retrouvez la liste des fournisseurs qualifiées SecNumCloud</a>
</p>
</div>
</div>
<div class="timeline">
<div class="timeline-content">
<div class="timeline-icon">
<img src="/uploads/conseil-strategie-transformation-numerique/Etape-2-blanc-2.png" alt="Etape 2" />
</div>
<h3 class="title">Localisation France ou UE</h3>
<p class="description">Offre une possibilité de localisation du stockage, du traitement, de l’administration et de la supervision dans l’Union européenne.
</p>
</div>
</div>
<div class="timeline">
<div class="timeline-content">
<div class="timeline-icon">
<img src="/uploads/conseil-strategie-transformation-numerique/Etape-3-blanc-2.png" alt="Etape 3" />
</div>
<h3 class="title">Droit applicable</h3>
<p class="description">Dispose de fournisseurs exempts de toutes législations imposant le transfert de données personnelles hors Union européenne.
</p>
</div>
</div>
<div class="timeline">
<div class="timeline-content">
<div class="timeline-icon">
<img src="/uploads/conseil-strategie-transformation-numerique/Etape-4-blanc-2.png" alt="Etape 4" />
</div>
<h3 class="title">Richesse du catalogue</h3>
<p class="description">Dispose d’une large gamme de services communs et innovants afin de répondre à l’ensemble des besoins de la sphère publique.</p>
</div>
</div>
<div class="timeline">
<div class="timeline-content">
<div class="timeline-icon">
<img src="/uploads/conseil-strategie-transformation-numerique/Etape-4-blanc-2.png" alt="Etape 4" />
</div>
<h3 class="title">Appairage direct</h3>
<p class="description">Offre la possibilité d’établir une connexion entre votre réseau et celui du fournisseur afin de bénéficier de meilleures performances et de coûts de données sortantes réduits.</p>
</div>
</div>
</div>
</div>
</div>