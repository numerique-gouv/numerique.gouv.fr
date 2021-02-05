---
title: test accordéon
date: 2021-02-05 12:17:00 +01:00
---

<style>
.accordion {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
  transition: 0.4s;
}

.active, .accordion:hover {
  background-color: #ccc; 
}

.panel {
  padding: 0 18px;
  display: none;
  background-color: white;
  overflow: hidden;
}
</style>

<div align="center"><a href="/uploads/organigramme_DINUM.pdf" class="button">Consulter l'organigramme (pdf - 106 Ko)</a></div>

<button class="accordion">Version accessible de l'organigramme</button>
<div class="panel"><div class="accordion no-bullet" data-accordion="" data-allow-all-closed="true">
<div class="accordion-item" data-accordion-item="">
<a href="#" class="accordion-title" aria-controls="organigramme" id="organigramme-label" aria-expanded="false">Version accessible de l'organigramme</a>
<div class="accordion-content" data-tab-content="" id="organigramme" aria-labelledby="organigramme-label" aria-hidden="true" style="display: none;">
<p><b>Sont rattachés à la direction&nbsp;:</b> le programme TECH.GOUV, le département Infrastructures et Services Opérés (ISO), le département Etalab (cycle de vie de la donnée), le département Performance des Services Numériques (PSN), ainsi que le secrétariat général.</p>
<p>Chacun est divisé en missions ou pôles. En voici le détail, avec le nom des responsables.</p>
<br>
<ul><li><b>Programme TECH.GOUV</b>&nbsp;: Xavier Albouy
  <ul>
    <li><b>Mission LABEL&nbsp;:</b> Sabine Guillaume</li>
    <li><b>Mission IDNUM&nbsp;:</b> Christine Balian</li>
    <li><b>Mission DATA&nbsp;:</b> Romain Talès</li>
    <li><b>Mission INFRA&nbsp;:</b> Paul-Emmanuel Caillard</li>
    <li><b>Mission PILOT&nbsp;:</b> Xavier Albouy</li>
    <li><b>Mission TALENTS&nbsp;:</b> Charlotte Cador</li>
    <li><b>Mission BETA&nbsp;:</b> Florian Delezenne</li>
    <li><b>Mission TRANSFO&nbsp;:</b> Patrick Ruestchmann</li>
  </ul></li>
<br>
<li><b>Département ISO (Infrastructures et Services Opérés)</b>&nbsp;: Guy Duplaquet. Adjoint&nbsp;: Louis Di Benedetto
  <ul>
    <li><b>Pôle RIE</b></li>
    <li><b>Pôle Hypervision&nbsp;:</b> Franck Davy</li>
    <li><b>Pôle Production&nbsp;:</b> Gilles Corbi</li>
    <li><b>Pôle Pilotage de la Qualité et des Partenariats&nbsp;:</b> Louis Di Benedetto</li>
  </ul></li>
<br>
<li><b>Département Etalab - Cycle de vie de la donnée</b>&nbsp;: Laure Lucchesi
  <ul>
    <li><b>Pôle Droit et Société&nbsp;:</b> Perica Sucevic</li>
    <li><b>Pôle Exploitation des Données&nbsp;:</b> Paul-Antoine Chevalier</li>
    <li><b>Pôle Accompagnement et Communautés&nbsp;:</b> Soizic Pénicaud</li>
    <li><b>Pôle Ouverture et Partage des Données&nbsp;:</b> Romain Talès</li>
  </ul></li>
<br>
<li><b>Département Performance des services numériques (PSN)</b>&nbsp;: Florent Tournois.
  <ul>
    <li><b>Pôle Conseil et maîtrise des risques</li>
    <li><b>Pôle Produits numériques partagés&nbsp;:</b> Jean-Louis Barthelémy</li>
    <li><b>Pôle Architecture et sécurité</b></li>
    <li><b>Pôle Design des services numériques&nbsp;:</b> Marine Boudeau</li>
  </ul></li>
<br>
<li><b>Le secrétariat général&nbsp;:</b> Catherine Ferréol</li>
<li><b>La direction&nbsp;:</b> Nadi Bou Hanna. Adjoint&nbsp;: Xavier Albouy</li>
</ul>
<br>
</div>
</div>
<br>
<br>
</div>
<script>
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
</script>