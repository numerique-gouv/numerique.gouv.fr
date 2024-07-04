---
title: Focus sur les succès du cloud public
date: 2024-07-03 13:49:00 +02:00
categories:
- Actualités
tags:
- Cloud
- Numérique
- Sécurité
chapeau-text: "De nombreux projets d'utilité publique ont été rendus possibles grâce
  au cloud ces dernières années, notamment dans le domaine de la dématérialisation,
  donnant ainsi une opportunité au cœur des enjeux de simplification et d’accessibilité
  des services publics.\n\nLa migration vers le cloud de l’État est un moyen de produire
  des services numériques plus réactifs, centrés sur les utilisateurs, plus performants
  et plus durables. "
une-ou-diaporama:
- image: "/uploads/Design%20sans%20titre(1).png"
---



<script>
  function myFunction(id) {
    let x = document.getElementById(id);
    let button = document.getElementById("accordion-button");

    if (x.className.indexOf("show") == -1) {
      x.className += " show";
      button.className += " is-active"
    } else {
      x.className = x.className.replace(" show", "");
      button.className = button.className.replace(" is-active", "");
    }
  }

</script>

<div class="margin-bottom-3 accordion no-bullet" data-allow-all-closed="true">
  <div class="accordion-item">
    <button onclick="myFunction('indicateurs-projets-proactive')" id="accordion-button" class="accordion-title" aria-controls="qui" aria-expanded="false">Indicateurs obligatoires pour les projets d'administrations proactive</button>
    <div class="accordion-content" id="indicateurs-projets-proactive">
            <p>Pour les projets portant sur l’administration proactive, les indicateurs suivants seront obligatoires :</p>
      <ul>
        <li><strong>Nombre d’usagers ayant bénéficié des effets d’une proactivité</strong> (en distinguant information et attribution automatique d’un droit / d’une action de l’administration) ;</li>
        <li><strong>Taux de conversion suite à une information proactive (nombre de démarches réalisées / nombre d’usagers contactés hors attribution automatique de droit)</strong></li>
      </ul>
    </div>
  </div>
  <div class="accordion-item">
    <button onclick="myFunction('indicateurs-projets-mise-a-dispo')" id="accordion-button" class="accordion-title" aria-controls="indicateurs-projets-mise-a-dispo" aria-expanded="false">Indicateurs obligatoires pour les projets de création ou amélioration de la mise à disposition de données à des tiers</button>
    <div class="accordion-content" id="indicateurs-projets-mise-a-dispo">
      <p>Pour les projets portant sur la création ou l’amélioration de la mise à disposition de données à des tiers, les indicateurs suivants seront obligatoires :</p>
      <ul>
        <li><strong>Nombre de projets réutilisant la donnée</strong> mise à disposition (dans le cas d'une mise à disposition par fichier) ;</li>
        <li><strong>Nombre de transmissions effectives de la donnée</strong> (dans le cas d'une API) ;</li>
        <li><strong>Temps écoulé entre la demande d’accès et l’accès effectif</strong> à la donnée par un tiers</li>
      </ul>
    </div>
  </div>
  </div>