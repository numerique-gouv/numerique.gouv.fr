---
title: Notes de révision du RGAA 3 2017 vers RGAA 4 - RGAA
permalink: "/publications/rgaa-accessibilite/documentation-rgaa/notes-revision-rgaa3-rgaa4.0/"
menu:
  title: Notes de révision du RGAA 3 2017 vers RGAA 4
  weight: 53
layout: rgaa-accessibilite
---

<div id="notes-revision">
<p>Ces notes de révision concernent le passage de la version 3 2017 à la version 4 du RGAA.</p>

<h3>Documents du référentiel technique impactés par la mise à jour</h3>
<ul>
<li>Référentiel technique</li>
<li>Glossaire</li>
<li>Cas particuliers</li>
<li>Notes techniques</li>
</ul>

<h3>Résumé des modifications notables</h3>
<p>De nombreux critères et tests ont été modifiés afin que le référentiel technique reste le plus fidèle possible à ce que proposent les critères WCAG 2.1.</p>
<p>Les critères RGAA de niveau triple A (AAA) ont été retirés du référentiel, étant donné que la directive européenne ne tient pas compte elle-même des critères WCAG triple A qu'elle rappelle juste en annexe technique</a>.</p>
<p>Pour information et rappel, une traduction a été effectuée pour répondre aux besoins techniques immédiats : <a href="/publications/rgaa-accessibilite/annexe-aaa/">Annexe – Critères de succès triple A (AAA) des WCAG 2.1</a>.</p>

<h3>Modifications générales sur tout ou partie des documents</h3>
<ul>
<li>Suppression des niveaux RGAA.</li>
<li>Suppression de la référence aux principes WCAG.</li>
<li>La mention "ARIA" a été systématiquement remplacée par "WAI-ARIA".</li>
<li>La mention "propriété" WAI-ARIA a été remplacée par "attribut".</li>
<li>Lorsqu'il est fait mention d'une balise ou d'un élément HTML, l'entité en question est délimitée par des chevrons ouvrant et fermant.</li>
<li>Les notes techniques et les cas particuliers sont désormais directement associés au critère dont ils relèvent.</li>
</ul>

<h2>Référentiel technique</h2>

<h3>Modification du Critère 1.1 [A] Chaque image a-t-elle une alternative textuelle ?</h3>
<p>
WCAG n’exige pas la présence systématique d’un attribut alt mais la présence d’une alternative textuelle lorsque nécessaire quelle que soit la technique utilisée à partir du moment où elle est compatible avec l’accessibilité. Le critère est donc restreint au cas des images porteuses d’informations et la définition de glossaire "alternative textuelle" est modifiée pour préciser les différentes techniques permettant d'associer une alternative textuelle.
</p>

<h4>Ancien critère 1.1</h4>
<p>Critère 1.1 [A] Chaque image a-t-elle une alternative textuelle ?</p>

<h4>Nouveau critère 1.1</h4>
<p>Critère 1.1 Chaque image porteuse d’information a-t-elle une alternative textuelle ?</p>


<h3>Modification du test 1.1.1</h3>
<p>WCAG n’exige pas la présence systématique d’un attribut <code>alt</code> mais la présence d’une alternative textuelle lorsque nécessaire quelle que soit la technique utilisée à partir du moment où elle est compatible avec l’accessibilité.
Prise en compte de l’attribut WAI-ARIA <code>role="img"</code>.</p>

<h4>Ancien test 1.1.1</h4>
<p>Test 1.1.1 : Chaque image (balise <code>img</code>) a-t-elle un attribut <code>alt</code> ?</p>

<h4>Nouveau test 1.1.1</h4>
<p>Test 1.1.1 : Chaque image (balise <code>&lt;img&gt;</code> ou balise possédant l’attribut WAI-ARIA <code>role="img"</code>) porteuse d’information a-t-elle une alternative textuelle ?</p>


<h3>Modification du test 1.1.2</h3>
<p>WCAG n’exige pas la présence systématique d’un attribut <code>alt</code> mais la présence d’une alternative textuelle lorsque nécessaire quelle que soit la technique utilisée à partir du moment où elle est compatible avec l’accessibilité.</p>

<h4>Ancien test 1.1.2</h4>
<p>Test 1.1.2 : Chaque zone (balise <code>area</code>) d'une image réactive a-t-elle un attribut <code>alt</code> ?</p>

<h4>Nouveau test 1.1.2</h4>
<p>Test 1.1.2 : Chaque zone d'une image réactive (balise <code>&lt;area&gt;</code>) porteuse d’information a-t-elle une alternative textuelle ?</p>


<h3>Modification du test 1.1.3</h3>
<p>WCAG n’exige pas la présence systématique d’un attribut <code>alt</code> mais la présence d’une alternative textuelle lorsque nécessaire quelle que soit la technique utilisée à partir du moment où elle est compatible avec l’accessibilité.</p>

<h4>Ancien test 1.1.3</h4>
<p>Test 1.1.3 : Chaque bouton de type <code>image</code> (balise <code>input</code> avec l'attribut <code>type="image"</code>) a-t-il un attribut <code>alt</code> ?</p>

<h4>Nouveau test 1.1.3</h4>
<p>Test 1.1.3 : Chaque bouton de type <code>image</code> (balise <code>&lt;input&gt;</code> avec l'attribut <code>type="image"</code>) a-t-il une alternative textuelle ?</p>


<h3>Ajout du test 1.1.5</h3>
<p>Reprise du test 1.3.8 en séparant le test de présence et de pertinence test 1.3.9.</p>

<h4>Nouveau test 1.1.5</h4>
<p>Test 1.1.5 : Chaque image vectorielle (balise <code>&lt;svg&gt;</code>) porteuse d'information, vérifie-t-elle ces conditions ?</p>
<ul>
  <li>La balise <code>&lt;svg&gt;</code> possède un attribut WAI-ARIA <code>role="img"</code>.</li>
  <li>La balise <code>&lt;svg&gt;</code> a une alternative textuelle.</li>
</ul>


<h3>Ajout du test 1.1.6</h3>
<p>Reprise du test 1.3.4 en séparant le test de présence et de pertinence test 1.3.5.</p>

<h4>Nouveau test 1.1.6</h4>
<p>Test 1.1.6 : Chaque image objet (balise <code>&lt;object&gt;</code> avec l'attribut <code>type="image/…"</code>) porteuse d'information, vérifie-t-elle une de ces conditions ?</p>
<ul>
  <li>La balise <code>&lt;object&gt;</code> possède une alternative textuelle.</li>
  <li>L'élément <code>&lt;object&gt;</code> est immédiatement suivi d'un lien ou bouton adjacent permettant d'accéder à un contenu alternatif.</li>
  <li>Un mécanisme permet à l'utilisateur de remplacer l'élément <code>&lt;object&gt;</code> par un contenu alternatif.</li>
</ul>


<h3>Ajout du test 1.1.7</h3>
<p>Reprise du test 1.3.6 en séparant le test de présence et de pertinence test 1.3.7.</p>

<h4>Nouveau test 1.1.7</h4>
<p>Test 1.1.7 : Chaque image embarquée (balise <code>&lt;embed&gt;</code> avec l'attribut <code>type="image/…"</code>) porteuse d'information, vérifie-t-elle une de ces conditions ?</p>
<ul>
  <li>La balise <code>&lt;embed&gt;</code> possède une alternative textuelle</li>
  <li>L'élément <code>&lt;embed&gt;</code> est immédiatement suivie d'un lien ou bouton adjacent permettant d'accéder à un contenu alternatif.</li>
  <li>Un mécanisme permet à l'utilisateur de remplacer l'élément <code>&lt;embed&gt;</code> par un contenu alternatif.</li>
</ul>


<h3>Ajout du test 1.1.8</h3>
<p>Reprise du test 1.3.10 en séparant le test de présence et de pertinence test 1.3.11.</p>

<h4>Nouveau test 1.1.8</h4>
<p>Test 1.1.8 : Chaque image bitmap (balise <code>&lt;canvas&gt;</code>) porteuse d'information, vérifie-t-elle une de ces conditions ?</p>
<ul>
  <li>La balise <code>&lt;canvas&gt;</code> possède une alternative textuelle</li>
  <li>Un contenu alternatif est présent entre les balises <code>&lt;canvas&gt;</code> et <code>&lt;/canvas&gt;</code></li>
  <li>L'élément <code>&lt;canvas&gt;</code> est immédiatement suivi d'un lien ou bouton adjacent permettant d'accéder à un contenu alternatif.</li>
  <li>Un mécanisme permet à l'utilisateur de remplacer l'élément <code>&lt;canvas&gt;</code> par un contenu alternatif.</li>
</ul>


<h3>Modification du Critère 1.2</h3>
<p>
WCAG n’exige pas la présence d’une alternative vide mais exige que l’image de décoration soit ignorée par les technologies d’assistance.
</p>

<h4>Ancien critère 1.2</h4>
<p>Critère 1.2 [A] Pour chaque image de décoration ayant une alternative textuelle, cette alternative est-elle vide ?</p>

<h4>Nouveau critère 1.2</h4>
<p>Critère 1.2 Chaque image de décoration est-elle correctement ignorée par les technologies d'assistance ?</p>


<h3>Modification de la note technique du critère 1.2</h3>
<p>
Suppression du passage faisant référence à l’attribut WAI-ARIA <code>role=”presentation”</code> suite à intégration de ce rôle dans le critère 1.1 et prise en compte de l’usage des balises <code>&lt;use&gt;</code> dans les <code>&lt;svg&gt;</code>.
</p>

<h4>Ancienne note technique</h4>
<div>
<p>Lorsqu'une image est associée à une légende, la note technique WCAG recommande de renseigner systématiquement l'alternative de l'image (cf. critère 1.10). Dans ce cas le critère 1.2 est non applicable.</p>
<p>Un attribut WAI-ARIA <code>role=”presentation”</code> ne peut pas être utilisé pour déclarer une image de décoration conformément aux indications données par la spécification sur les restrictions de l'utilisation des rôles WAI-ARIA.</p>
</div>

<h4>Nouvelle note technique</h4>
<div>
<p>Lorsqu'une image est associée à une légende, la note technique WCAG recommande de prévoir systématiquement <ins>une alternative textuelle (cf. critère 1.9)</ins>. Dans ce cas le critère 1.2 est non applicable.</p>
<p><ins>Dans le cas d'une image vectorielle (balise <code>&lt;svg&gt;</code>) de décoration qui serait affichée au travers d'un élément <code>&lt;use href="..."&gt;</code> enfant de l'élément <code>&lt;svg&gt;</code>, le test 1.2.4 s'appliquera également à la balise <code>&lt;svg&gt;</code> associée par le biais de la balise <code>&lt;use&gt;</code></ins>.</p>
<p>Un attribut WAI-ARIA <code>role="presentation"</code> <ins>peut être utilisé sur les images de décoration et les zones non cliquables de décoration. Le rôle "<code>none</code>" introduit en ARIA 1.1 et synonyme du rôle "<code>presentation</code>" peut être aussi utilisé. Il reste préférable cependant d'utiliser le rôle "<code>presentation</code>" en attendant un support satisfaisant du rôle "<code>none</code>"</ins>.</p>
</div>


<h3>Modification du test 1.2.1</h3>
<p>
Prise en compte des images de décoration sans alternative textuelle mais possédant un attribut WAI-ARIA <code>aria-hidden="true"</code> ou <code>role="presentation"</code> et modification de la formulation des conditions suite à la prise en compte de l’ensemble des techniques permettant de fournir une alternative textuelle.
</p>

<h4>Ancien test 1.2.1</h4>
<p>Test 1.2.1 : Chaque image (balise <code>img</code>) de décoration, sans légende, et ayant un attribut <code>alt</code>, vérifie-t-elle ces conditions ?</p>
<ul>
<li>Le contenu de l'attribut <code>alt</code> est vide (<code>alt=""</code>).</li>
<li>L'image de décoration ne possède pas d'attribut <code>title</code>.</li>
<li>La balise <code>img</code> est dépourvue de rôle, propriété ou état ARIA visant à labelliser l'image (<code>aria-label</code>, <code>aria-describedby</code>, <code>aria-labelledby</code> par exemple).</li>
</ul>

<h4>Nouveau test 1.2.1</h4>
<p>Test 1.2.1 : Chaque image (balise <code>&lt;img&gt;</code>) de décoration, sans légende, vérifie-t-elle une de ces conditions ?</p>
<ul>
<li>La balise <code>&lt;img&gt;</code> possède un attribut <code>alt</code> vide (<code>alt=""</code>) et est dépourvue de tout autre attribut permettant de fournir une alternative textuelle.</li>
<li>La balise <code>&lt;img&gt;</code> possède un attribut WAI-ARIA <code>aria-hidden="true"</code> ou <code>role="presentation"</code>.</li>
</ul>


<h3>Modification du test 1.2.2</h3>
<p>
Prise en compte des zones non cliquables de décoration sans alternative textuelle mais possédant un attribut WAI-ARIA <code>aria-hidden="true"</code> ou <code>role="presentation"</code> et modification de la formulation des conditions suite à la prise en compte de l’ensemble des techniques permettant de fournir une alternative textuelle.
</p>

<h4>Ancien test 1.2.2</h4>
<p>Test 1.2.2 : Chaque zone non cliquable (balise <code>area</code> sans attribut <code>href</code>) de décoration, et ayant un attribut <code>alt</code>, vérifie-t-elle ces conditions ?</p>
<ul>
<li>Le contenu de l'attribut <code>alt</code> est vide (<code>alt=""</code>).</li>
<li>La zone non cliquable ne possède pas d'attribut <code>title</code>.</li>
<li>La balise <code>area</code> est dépourvue de rôle, propriété ou état ARIA visant à labelliser l'image (<code>aria-label</code>, <code>aria-describedby</code>, <code>aria-labelledby</code> par exemple).</li>
</ul>

<h4>Nouveau test 1.2.2</h4>
<p>Test 1.2.2 : Chaque zone non cliquable (balise <code>area</code> sans attribut <code>href</code>) de décoration vérifie-t-elle une de ces conditions ?</p>
<ul>
<li>La balise <code>&lt;area&gt;</code> possède un attribut <code>alt</code> vide (<code>alt=""</code>) et est dépourvue de tout autre attribut permettant de fournir une alternative textuelle.</li>
<li>La balise <code>&lt;area&gt;</code> possède un attribut WAI-ARIA <code>aria-hidden="true"</code> ou <code>role="presentation"</code>.</li>
</ul>


<h3>Modification du test 1.2.3</h3>
<p>
Modification de la formulation des conditions suite à la prise en compte de l’ensemble des techniques permettant de fournir une alternative textuelle.
</p>

<h4>Ancien test 1.2.3</h4>
<p>Test 1.2.3 : Chaque image objet (balise <code>object</code> avec l'attribut <code>type="image/…"</code>) de décoration, sans légende, vérifie-t-elle ces conditions ?</p>
<ul>
<li>La balise <code>object</code> possède un attribut <code>aria-hidden="true"</code>.</li>
<li>L'alternative textuelle entre <code>&lt;object&gt;</code> et <code>&lt;/object&gt;</code> est vide.</li>
<li>La balise <code>object</code> ou l'un de ses enfants est dépourvue d'attribut <code>title</code>.</li>
<li>La balise <code>object</code> ou l'un de ses enfants est dépourvue de rôle, propriété ou état ARIA visant à labelliser l'image (<code>aria-label</code>, <code>aria-describedby</code>, <code>aria-labelledby</code> par exemple).</li>
</ul>

<h4>Nouveau test 1.2.3</h4>
<p>Test 1.2.3 : Chaque image objet (balise <code>&lt;object&gt;</code> avec l'attribut <code>type="image/…"</code>) de décoration, sans légende, vérifie-t-elle une de ces conditions ?</p>
<ul>
<li>La balise <code>&lt;object&gt;</code> possède un attribut WAI-ARIA <code>aria-hidden="true"</code>.</li>
<li>La balise <code>&lt;object&gt;</code> est dépourvue d'alternative textuelle.</li>
<li>Il n’y a aucun texte faisant office d’alternative textuelle entre <code>&lt;object&gt;</code> et <code>&lt;/object&gt;</code>.</li>
</ul>


<h3>Modification du test 1.2.4</h3>
<p>
Modification de la formulation des conditions suite à la prise en compte de l’ensemble des techniques permettant de fournir une alternative textuelle.
</p>

<h4>Ancien test 1.2.4</h4>
<p>Test 1.2.4 : Chaque image vectorielle (balise <code>svg</code>) de décoration, sans légende, vérifie-t-elle ces conditions ?</p>
<ul>
<li>La balise <code>svg</code> possède un attribut <code>aria-hidden="true"</code>.</li>
<li>Les balises <code>title</code> et <code>desc</code> sont absentes ou vides.</li>
<li>La balise <code>svg</code> ou l'un de ses enfants est dépourvue d'attribut <code>title</code>.</li>
<li>La balise <code>svg</code> ou l'un de ses enfants est dépourvue de rôle, propriété ou état ARIA visant à labelliser l'image vectorielle (<code>aria-label</code>, <code>aria-describedby</code>, <code>aria-labelledby</code> par exemple).</li>
</ul>

<h4>Nouveau test 1.2.4</h4>
<p>Test 1.2.4 : Chaque image vectorielle (balise <code>&lt;svg&gt;</code>) de décoration, sans légende, vérifie-t-elle une de ces conditions ?</p>
<ul>
<li>La balise <code>&lt;svg&gt;</code> possède un attribut WAI-ARIA <code>aria-hidden="true"</code>.</li>
<li>La balise <code>&lt;svg&gt;</code> et ses enfants sont dépourvus d'alternative textuelle.</li>
<li>Les balises <code>title</code> et <code>desc</code> sont absentes ou vides.</li>
<li>La balise <code>&lt;svg&gt;</code> et ses enfants sont dépourvus d'attribut <code>title</code>.</li>
</ul>


<h3>Modification du test 1.2.5</h3>
<p>
Modification de la formulation des conditions suite à la prise en compte de l’ensemble des techniques permettant de fournir une alternative textuelle.
</p>

<h4>Ancien test 1.2.5</h4>
<p>Test 1.2.5 : Chaque image bitmap (balise <code>canvas</code>) de décoration, sans légende, vérifie-t-elle ces conditions ?</p>
<ul>
<li>La balise <code>canvas</code> possède un attribut <code>aria-hidden="true"</code>.</li>
<li>Le contenu entre <code>&lt;canvas&gt;</code> et <code>&lt;/canvas&gt;</code> est dépourvue de contenus textuels.</li>
<li>La balise <code>canvas</code> ou l'un de ses enfants est dépourvue d'attribut <code>title</code>.</li>
<li>La balise <code>canvas</code> ou l'un de ses enfants est dépourvue de rôle, propriété ou état ARIA visant à labelliser l'image (<code>aria-label</code>, <code>aria-describedby</code>, <code>aria-labelledby</code> par exemple).</li>
</ul>

<h4>Nouveau test 1.2.5</h4>
<p>Test 1.2.5 : Chaque image bitmap (balise <code>&lt;canvas&gt;</code>) de décoration, sans légende, vérifie-t-elle une de ces conditions ?</p>
<ul>
<li>La balise <code>&lt;canvas&gt;</code> possède un attribut WAI-ARIA <code>aria-hidden="true"</code>.</li>
<li>La balise <code>&lt;canvas&gt;</code> et ses enfants sont dépourvus d'alternative textuelle.</li>
<li>Les balises <code>title</code> et <code>desc</code> sont absentes ou vides.</li>
<li>Il n’y a aucun texte faisant office d’alternative textuelle entre <code>&lt;canvas&gt;</code> et <code>&lt;/canvas&gt;</code>.</li>
</ul>


<h3>Modification du test 1.2.6</h3>
<p>
Modification de la formulation des conditions suite à la prise en compte de l’ensemble des techniques permettant de fournir une alternative textuelle.
</p>

<h4>Ancien test 1.2.6</h4>
<p>Test 1.2.6 : Chaque image embarquée (balise <code>embed</code> avec l'attribut <code>type="image/…"</code>) de décoration, sans légende, vérifie-t-elle ces conditions ?</p>
<ul>
<li>La balise <code>embed</code> possède un attribut <code>aria-hidden="true"</code>.</li>
<li>La balise <code>embed</code> ou l'un de ses enfants est dépourvue d'attribut <code>title</code>.</li>
<li>La balise <code>embed</code> ou l'un de ses enfants est dépourvue de rôle, propriété ou état ARIA visant à labelliser l'image (<code>aria-label</code>, <code>aria-describedby</code>, <code>aria-labelledby</code> par exemple).</li>
</ul>

<h4>Nouveau test 1.2.6</h4>
<p>Test 1.2.6 : Chaque image embarquée (balise <code>&lt;embed&gt;</code> avec l'attribut <code>type="image/…"</code>) de décoration, sans légende, vérifie-t-elle une de ces conditions ?</p>
<ul>
<li>La balise <code>&lt;embed&gt;</code> possède un attribut WAI-ARIA <code>aria-hidden="true"</code>.</li>
<li>La balise <code>&lt;embed&gt;</code> et ses enfants sont dépourvus d'alternative textuelle.</li>
</ul>


<h3>Suppression des notes techniques du critère 1.3</h3>
<p>
Critère 1.3 [A] : attribut <code>title</code> : suite à l'utilisation de l'attribut <code>title</code> dans le calcul du nom accessible d'une alternative textuelle.
</p>
<p>
Critère 1.3 [A] : balise <code>&lt;title&gt;</code> dans les éléments SVG : suite à la création du test 1.1.5 et au support désormais effectif des balises <code>&lt;title&gt;</code> et <code>&lt;desc&gt;</code> lorsqu’elles sont associées à l’élément <code>&lt;svg&gt;</code> via les attributs WAI-ARIA <code>aria-labelledby</code> et <code>aria-describedby</code>, cette note n’a plus de raison d’être.
</p>

<h4>Ancienne note technique (attribut <code>title</code>)</h4>
<p>La note WCAG interdit l'utilisation de l'attribut <code>title</code> en remplacement de l'attribut <code>alt</code>, néanmoins il est souvent utile d'utiliser l'attribut <code>title</code> pour faire apparaître une infobulle (<code>tooltip</code>) sur les images particulièrement obscures. Si l'attribut <code>title</code> est utilisé de cette manière, le contenu de l'attribut <code>title</code> doit être strictement identique à celui de l'alternative.</p>

<h4>Ancienne note technique (balise <code>&lt;title&gt;</code> dans les éléments SVG)</h4>
<p>Le manque de support de l'élément <code>&lt;title&gt;</code> par les technologies d'assistance crée une difficulté dans le cas de l'utilisation de l'élément <code>&lt;desc&gt;</code> pour implémenter l'alternative courte de l'image si l'image nécessite une description détaillée. Dans ce cas il est recommandé d'utiliser un texte adjacent ou un lien adjacent pour créer la description détaillée.</p>
<p>Les tests 1.3.9 et 1.3.12 sont utilisés pour vérifier que l'implémentation de l'alternative est compatible avec l'accessibilité (par exemple avec la base de référence considérée).</p>


<h3>Modification du test 1.3.1</h3>
<p>
Prise en compte de l’ensemble des techniques permettant d’associer une alternative textuelle à une balise <code>&lt;img&gt;</code>.
</p>

<h4>Ancien test 1.3.1</h4>
<p>Test 1.3.1 : Chaque image (balise <code>img</code>) porteuse d'information, ayant un attribut <code>alt</code>, vérifie-t-elle ces conditions ?</p>
<ul>
<li>Le contenu de l'attribut <code>alt</code> est pertinent.</li>
<li>S'il est présent, le contenu de l'attribut <code>title</code> est identique au contenu de l'attribut <code>alt</code>.</li>
<li>S'il est présent, le contenu de la propriété <code>aria-label</code> est identique au contenu de l'attribut <code>alt</code>.</li>
<li>S'il est présent, le contenu du passage de texte lié via la propriété <code>aria-labelledby</code> est identique au contenu de l'attribut <code>alt</code>.</li>
</ul>

<h4>Nouveau test 1.3.1</h4>
<p>Test 1.3.1 : Pour chaque image (balise <code>&lt;img&gt;</code> ou balise possédant l’attribut <code>WAI-ARIA role="img"</code>) porteuse d'information, ayant une alternative textuelle, cette alternative est-elle pertinente (hors cas particuliers) ?</p>
<ul>
<li>S'il est présent, le contenu de l'attribut <code>alt</code> est pertinent.</li>
<li>S'il est présent, le contenu de l'attribut <code>title</code> est pertinent.</li>
<li>S'il est présent, le contenu de l'attribut WAI-ARIA <code>aria-label</code> est pertinent.</li>
<li>S'il est présent, le passage de texte associé via l'attribut WAI-ARIA <code>aria-labelledby</code> est pertinent.</li>
</ul>


<h3>Modification du test 1.3.2</h3>
<p>
Prise en compte de l’ensemble des techniques permettant d’associer une alternative textuelle à une zone cliquable.
</p>

<h4>Ancien test 1.3.2</h4>
<p>Test 1.3.2 : Chaque zone (balise <code>area</code>) d'une image réactive porteuse d'information, ayant un attribut <code>alt</code>, vérifie-t-elle ces conditions ?</p>
<ul>
<li>Le contenu de l'attribut <code>alt</code> est pertinent.</li>
<li>S'il est présent, le contenu de l'attribut <code>title</code> est identique au contenu de l'attribut <code>alt</code>.</li>
<li>S'il est présent, le contenu de la propriété <code>aria-label</code> est identique au contenu de l'attribut <code>alt</code>.</li>
<li>S'il est présent, le contenu du passage de texte lié via la propriété <code>aria-labelledby</code> est identique au contenu de l'attribut <code>alt</code>.</li>
</ul>

<h4>Nouveau test 1.3.2</h4>
<p>Test 1.3.2 : Pour chaque zone (balise <code>&lt;area&gt;</code>) d'une image réactive porteuse d'information, ayant une alternative textuelle, cette alternative est-elle pertinente (hors cas particuliers) ?</p>
<ul>
<li>S'il est présent, le contenu de l'attribut <code>alt</code> est pertinent.</li>
<li>S'il est présent, le contenu de l'attribut <code>title</code> est pertinent.</li>
<li>S'il est présent, le contenu de l'attribut WAI-ARIA <code>aria-label</code> est pertinent.</li>
<li>S'il est présent, le passage de texte associé via l'attribut WAI-ARIA <code>aria-labelledby</code> est pertinent.</li>
</ul>


<h3>Modification du test 1.3.3</h3>
<p>
Prise en compte de l’ensemble des techniques permettant d’associer une alternative textuelle à un bouton de type image.
</p>

<h4>Ancien test 1.3.3</h4>
<p>Test 1.3.3 : Chaque bouton de type image (balise <code>input</code> avec l'attribut <code>type="image"</code>), ayant un attribut <code>alt</code>, vérifie-t-il ces conditions ?</p>
<ul>
<li>Le contenu de l'attribut <code>alt</code> est pertinent.</li>
<li>S'il est présent, le contenu de l'attribut <code>title</code> est identique au contenu de l'attribut <code>alt</code>.</li>
<li>S'il est présent, le contenu de la propriété <code>aria-label</code> est identique au contenu de l'attribut <code>alt</code>.</li>
<li>S'il est présent, le contenu du passage de texte lié via la propriété <code>aria-labelledby</code> est identique au contenu de l'attribut <code>alt</code>.</li>
</ul>

<h4>Nouveau test 1.3.3</h4>
<p>Test 1.3.3 : Pour chaque zone bouton de type image (balise <code>&lt;input&gt;</code> avec l'attribut <code>type="image"</code>), ayant une alternative textuelle, cette alternative est-elle pertinente (hors cas particuliers) ?</p>
<ul>
<li>S'il est présent, le contenu de l'attribut <code>alt</code> est pertinent.</li>
<li>S'il est présent, le contenu de l'attribut <code>title</code> est pertinent.</li>
<li>S'il est présent, le contenu de l'attribut WAI-ARIA <code>aria-label</code> est pertinent.</li>
<li>S'il est présent, le passage de texte associé via l'attribut WAI-ARIA <code>aria-labelledby</code> est pertinent.</li>
</ul>


<h3>Suppression du test 1.3.4</h3>
<p>
Remplacement par le test 1.1.6.
</p>

<h4>Ancien test 1.3.4</h4>
<p>Test 1.3.4 : Chaque image objet (balise <code>object</code> avec l'attribut <code>type="image/..."</code>) porteuse d'information vérifie-t-elle une de ces conditions (hors cas particuliers)</p>
<ul>
<li>L'image objet est immédiatement suivie d'un lien adjacent permettant d'afficher une page ou un passage de texte contenant une alternative pertinente.</li>
<li>Un mécanisme permet à l'utilisateur de remplacer l'image objet par un texte alternatif pertinent.</li>
<li>Un mécanisme permet à l'utilisateur de remplacer l'image objet par une image possédant une alternative pertinente.</li>
</ul>


<h3>Modification du test 1.3.5</h3>
<p>
Mise en cohérence de la formulation suite à la création du test 1.1.6 et prise en compte de l’ensemble des techniques permettant d’associer une alternative textuelle.
</p>
<p>
Le test 1.3.5 est renuméroté en test 1.3.4.
</p>

<h4>Ancien test 1.3.5</h4>
<p>Test 1.3.5 : Chaque image objet (balise <code>object</code> avec l'attribut <code>type="image/..."</code>) porteuse d'information, qui utilise une propriété <code>aria-label</code>, <code>aria-labelledby</code> ou un attribut <code>title</code>, vérifie-t-elle ces conditions (hors cas particuliers) ?</p>
<ul>
<li>S'il est présent, le contenu de l'attribut <code>title</code> est identique au contenu de l'attribut <code>aria-label</code>.</li>
<li>S'il est présent, le contenu de l'attribut <code>title</code> est identique au passage de texte lié par la propriété <code>aria-labelledby</code>.</li>
</ul>

<h4>Nouveau test 1.3.4</h4>
<p>Test 1.3.4 : Pour chaque image objet (balise <code>object</code> avec l'attribut <code>type="image/..."</code>) porteuse d'information, ayant une alternative textuelle ou un contenu alternatif, cette alternative est-elle pertinente (hors cas particuliers) ?</p>
<ul>
<li>S'il est présent, le contenu de l'attribut <code>title</code> est pertinent.</li>
<li>S'il est présent, le contenu de l'attribut WAI-ARIA <code>aria-label</code> est pertinent.</li>
<li>S'il est présent, le passage de texte associé via l'attribut WAI-ARIA <code>aria-labelledby</code> est pertinent.</li>
<li>S'il est présent le contenu alternatif est pertinent.</li>
</ul>


<h3>Suppression du test 1.3.6</h3>
<p>
Remplacement par le test 1.1.7.
</p>

<h4>Ancien test 1.3.6</h4>
<p>Test 1.3.6 : Chaque image embarquée (balise <code>embed</code> avec l'attribut <code>type="image/..."</code>) porteuse d'information vérifie-t-elle une de ces conditions (hors cas particuliers)</p>
<ul>
<li>L'image embarquée est immédiatement suivie d'un lien adjacent permettant d'afficher une page ou un passage de texte contenant une alternative pertinente.</li>
<li>Un mécanisme permet à l'utilisateur de remplacer l'image embarquée par un texte alternatif pertinent.</li>
<li>Un mécanisme permet à l'utilisateur de remplacer l'image embarquée par une image possédant une alternative pertinente.</li>
</ul>


<h3>Modification du test 1.3.7</h3>
<p>
Mise en cohérence de la formulation suite à la création du test 1.1.7 et prise en compte de l’ensemble des techniques permettant d’associer une alternative textuelle.
</p>
<p>
Le test 1.3.7 est renuméroté en test 1.3.5.
</p>

<h4>Ancien test 1.3.7</h4>
<p>Test 1.3.7 : Chaque image embarquée (balise <code>embed</code> avec l'attribut <code>type="image/..."</code>) porteuse d'information, qui utilise une propriété <code>aria-label</code>, <code>aria-labelledby</code> ou un attribut <code>title</code>, vérifie-t-elle ces conditions (hors cas particuliers) ?</p>
<ul>
<li>S'il est présent, le contenu de l'attribut <code>title</code> est identique au contenu de l'attribut <code>aria-label</code>.</li>
<li>S'il est présent, le contenu de l'attribut <code>title</code> est identique au passage de texte lié par la propriété <code>aria-labelledby</code>.</li>
</ul>

<h4>Nouveau test 1.3.5</h4>
<p>Test 1.3.5 : Pour chaque image embarquée (balise <code>&lt;embed&gt;</code> avec l'attribut <code>type="image/..."</code>) porteuse d'information, ayant une alternative textuelle ou un contenu alternatif, cette alternative est-elle pertinente (hors cas particuliers) ?</p>
<ul>
<li>S'il est présent, le contenu de l'attribut <code>title</code> est pertinent.</li>
<li>S'il est présent, le contenu de l'attribut WAI-ARIA <code>aria-label</code> est pertinent.</li>
<li>S'il est présent, le passage de texte associé via l'attribut WAI-ARIA <code>aria-labelledby</code> est pertinent.</li>
<li>S'il est présent le contenu alternatif est pertinent.</li>
</ul>


<h3>Suppression du test 1.3.8</h3>
<p>
Remplacement par le test 1.1.5.
</p>

<h4>Ancien test 1.3.8</h4>
<p>Test 1.3.8 : Chaque image vectorielle (balise <code>svg</code>) porteuse d'information, en l'absence d'alternative, vérifie-t-elle ces conditions (hors cas particuliers)</p>
<ul>
<li>La balise <code>svg</code> possède un <code>role="img"</code>.</li>
<li>La balise <code>svg</code> possède une propriété <code>aria-label</code> dont le contenu est pertinent et identique à l'attribut <code>title</code> s'il est présent.</li>
<li>La balise <code>svg</code> possède une balise <code>&lt;title&gt;</code> dont le contenu est pertinent et contient un passage de texte identique à la propriété <code>aria-label</code>.</li>
</ul>


<h3>Modification du test 1.3.9</h3>
<p>
Mise en cohérence de la formulation suite à la création du test 1.1.5 et prise en compte de l’ensemble des techniques permettant d’associer une alternative textuelle.
</p>
<p>
Le test 1.3.9 est renuméroté en test 1.3.6.
</p>

<h4>Ancien test 1.3.9</h4>
<p>Test 1.3.9 : Pour chaque image vectorielle (balise svg) porteuse d'information et possédant une alternative, cette alternative est-elle correctement restituée par les technologies d'assistance ?</p>

<h4>Nouveau test 1.3.6</h4>
<p>Test 1.3.6 : Pour chaque image vectorielle (balise <code>&lt;svg&gt;</code>) porteuse d'information, ayant une alternative textuelle, cette alternative est-elle pertinente (hors cas particuliers) ?</p>
<ul>
<li>S'il est présent, le contenu de l'attribut <code>title</code> est pertinent.</li>
<li>S'il est présent, le contenu de l'attribut WAI-ARIA <code>aria-label</code> est pertinent.</li>
<li>S'il est présent, le passage de texte associé via l'attribut WAI-ARIA <code>aria-labelledby</code> est pertinent.</li>
</ul>

<h3>Suppression du test 1.3.10</h3>
<p>
Remplacement par le test 1.1.8.
</p>

<h4>Ancien test 1.3.10</h4>
<p>Test 1.3.10 : Chaque image bitmap (balise <code>canvas</code>) porteuse d'information vérifie-t-elle une de ces conditions (hors cas particuliers)</p>
<ul>
<li>Le contenu de l'alternative (contenu entre <code>&lt;canvas&gt;</code> et <code>&lt;/canvas&gt;</code>) est pertinent.</li>
<li>L'image bitmap est immédiatement suivie d'un lien adjacent permettant d'afficher une page ou un passage de texte contenant une alternative pertinente.</li>
<li>Un mécanisme permet à l'utilisateur de remplacer l'image bitmap par un texte alternatif pertinent.</li>
<li>Un mécanisme permet à l'utilisateur de remplacer l'image bitmap par une image possédant une alternative pertinente.</li>
</ul>


<h3>Modification du test 1.3.11</h3>
<p>
Mise en cohérence de la formulation suite à la création du test 1.1.8 et prise en compte de l’ensemble des techniques permettant d’associer une alternative textuelle.
</p>
<p>
Le test 1.3.11 est renuméroté en test 1.3.7.
</p>

<h4>Ancien test 1.3.11</h4>
<p>Test 1.3.11 : Chaque image bitmap (balise <code>canvas</code>) porteuse d'information, qui utilise une propriété <code>aria-label</code>, <code>aria-labelledby</code> ou un attribut <code>title</code>, vérifie-t-elle ces conditions (hors cas particuliers) ?</p>
<ul>
<li>S'il est présent, le contenu de l'attribut <code>title</code> est identique au contenu de l'attribut <code>aria-label</code>.</li>
<li>S'il est présent, le contenu de l'attribut <code>title</code> est identique au passage de texte lié par la propriété <code>aria-labelledby</code>.</li>
</ul>

<h4>Nouveau test 1.3.7</h4>
<p>Test 1.3.7 : Pour chaque image bitmap (balise <code>canvas</code>) porteuse d'information, ayant une alternative textuelle ou un contenu alternatif, cette alternative est-elle pertinente (hors cas particuliers) ?</p>
<ul>
<li>S'il est présent, le contenu de l'attribut <code>title</code> est pertinent.</li>
<li>S'il est présent, le contenu de l'attribut WAI-ARIA <code>aria-label</code> est pertinent.</li>
<li>S'il est présent, le passage de texte associé via l'attribut WAI-ARIA <code>aria-labelledby</code> est pertinent.</li>
<li>S'il est présent le contenu alternatif est pertinent.</li>
</ul>


<h3>Renumérotation des tests 1.3.12 et 1.3.13</h3>
<p>
Pour tenir compte des suppressions précédentes, les tests 1.3.12 et 1.3.13 sont renumérotés respectivement en tests 1.3.8 et 1.3.9.
</p>


<h3>Modification du test 1.4.1</h3>
<p>
Prise en compte de l’ensemble des techniques permettant d’associer une alternative textuelle à une balise <code>&lt;img&gt;</code>.
</p>

<h4>Ancien test 1.4.1</h4>
<p>Test 1.4.1 : Chaque image (balise <code>img</code>) utilisée comme CAPTCHA ou comme image-test, ayant un attribut <code>alt</code>, vérifie-t-elle ces conditions ?</p>
<ul>
<li>Le contenu de l'attribut <code>alt</code> permet de comprendre la nature et la fonction de l'image.</li>
<li>S'il est présent, le contenu de l'attribut <code>title</code> est identique au contenu de l'attribut <code>alt</code>.</li>
<li>S'il est présent, le contenu de la propriété <code>aria-label</code> est identique au contenu de l'attribut <code>alt</code>.</li>
<li>S'il est présent, le contenu du passage de texte lié via la propriété <code>aria-labelledby</code> est identique au contenu de l'attribut <code>alt</code>.</li>
</ul>

<h4>Nouveau test 1.4.1</h4>
<p>Test 1.4.1 : Pour chaque image (balise <code>&lt;img&gt;</code>) utilisée comme CAPTCHA ou comme image-test, ayant une alternative textuelle, cette alternative est-elle pertinente ?</p>
<ul>
<li>S'il est présent, le contenu de l'attribut <code>alt</code> est pertinent.</li>
<li>S'il est présent, le contenu de l'attribut <code>title</code> est pertinent.</li>
<li>S'il est présent, le contenu de l'attribut WAI-ARIA <code>aria-label</code> est pertinent.</li>
<li>S'il est présent, le passage de texte associé via l'attribut WAI-ARIA <code>aria-labelledby</code> est pertinent.</li>
</ul>


<h3>Modification du test 1.4.2</h3>
<p>
Prise en compte de l’ensemble des techniques permettant d’associer une alternative textuelle à une zone cliquable.
</p>

<h4>Ancien test 1.4.2</h4>
<p>Test 1.4.2 : Chaque zone (balise <code>area</code>) d'une image réactive utilisée comme CAPTCHA ou comme image-test, ayant un attribut <code>alt</code>, vérifie-t-elle ces conditions ?</p>
<ul>
<li>Le contenu de l'attribut <code>alt</code> permet de comprendre la nature et la fonction de l'image.</li>
<li>S'il est présent, le contenu de l'attribut <code>title</code> est identique au contenu de l'attribut <code>alt</code>.</li>
<li>S'il est présent, le contenu de la propriété <code>aria-label</code> est identique au contenu de l'attribut <code>alt</code>.</li>
<li>S'il est présent, le contenu du passage de texte lié via la propriété <code>aria-labelledby</code> est identique au contenu de l'attribut <code>alt</code>.</li>
</ul>

<h4>Nouveau test 1.4.2</h4>
<p>Test 1.4.2 : Pour chaque zone (balise <code>&lt;area&gt;</code>) d'une image réactive utilisée comme CAPTCHA ou comme image-test, ayant une alternative textuelle, cette alternative est-elle pertinente ?</p>
<ul>
<li>S'il est présent, le contenu de l'attribut <code>alt</code> est pertinent.</li>
<li>S'il est présent, le contenu de l'attribut <code>title</code> est pertinent.</li>
<li>S'il est présent, le contenu de l'attribut WAI-ARIA <code>aria-label</code> est pertinent.</li>
<li>S'il est présent, le passage de texte associé via l'attribut WAI-ARIA <code>aria-labelledby</code> est pertinent.</li>
</ul>


<h3>Modification du test 1.4.3</h3>
<p>
Prise en compte de l’ensemble des techniques permettant d’associer une alternative textuelle à un bouton de type image
</p>

<h4>Ancien test 1.4.3</h4>
<p>Test 1.4.3 : Chaque bouton associé à une image (balise <code>input</code> avec l'attribut <code>type="image"</code>) utilisée comme CAPTCHA ou comme image-test, ayant un attribut <code>alt</code>, vérifie-t-elle ces conditions ?</p>
<ul>
<li>Le contenu de l'attribut <code>alt</code> permet de comprendre la nature et la fonction de l'image.</li>
<li>S'il est présent, le contenu de l'attribut <code>title</code> est identique au contenu de l'attribut <code>alt</code>.</li>
<li>S'il est présent, le contenu de la propriété <code>aria-label</code> est identique au contenu de l'attribut <code>alt</code>.</li>
<li>S'il est présent, le contenu du passage de texte lié via la propriété <code>aria-labelledby</code> est identique au contenu de l'attribut <code>alt</code>.</li>
</ul>

<h4>Nouveau test 1.4.3</h4>
<p>Test 1.4.3 : Pour chaque bouton de type image (balise <code>input</code> avec l'attribut <code>type="image"</code>) utilisée comme CAPTCHA ou comme image-test, ayant une alternative textuelle, cette alternative est-elle pertinente ?</p>
<ul>
<li>S'il est présent, le contenu de l'attribut <code>alt</code> est pertinent.</li>
<li>S'il est présent, le contenu de l'attribut <code>title</code> est pertinent.</li>
<li>S'il est présent, le contenu de l'attribut WAI-ARIA <code>aria-label</code> est pertinent.</li>
<li>S'il est présent, le passage de texte associé via l'attribut WAI-ARIA <code>aria-labelledby</code> est pertinent.</li>
</ul>


<h3>Suppression du test 1.4.4</h3>
<p>
Remplacement par le test 1.1.6.
</p>

<h4>Ancien test 1.4.4</h4>
<p>Test 1.3.10 : Chaque image objet (balise <code>object</code> avec l'attribut <code>type="image"</code>) porteuse d'information vérifie-t-elle une de ces conditions (hors cas particuliers)</p>
<ul>
<li>L'image objet est immédiatement suivie d'un lien adjacent permettant d'afficher une page ou un passage de texte contenant une alternative permettant de comprendre la nature et la fonction de l'image.</li>
<li>Un mécanisme permet à l'utilisateur de remplacer l'image objet par un texte alternatif permettant de comprendre la nature et la fonction de l'image.</li>
<li>Un mécanisme permet à l'utilisateur de remplacer l'image objet par une image possédant une alternative permettant de comprendre la nature et la fonction de l'image.</li>
</ul>


<h3>Modification du test 1.4.5</h3>
<p>
Mise en cohérence de la formulation suite à la création du test 1.1.6 et prise en compte de l’ensemble des techniques permettant d’associer une alternative textuelle.
</p>
<p>
Le test 1.4.5 est renuméroté en test 1.4.4.
</p>

<h4>Ancien test 1.4.5</h4>
<p>Test 1.4.5 : Chaque image objet (balise <code>object</code> avec l'attribut <code>type="image/..."</code>) utilisée comme CAPTCHA ou comme image-test, qui utilise une propriété <code>aria-label</code>, <code>aria-labelledby</code> ou un attribut <code>title</code>, vérifie-t-elle ces conditions (hors cas particuliers) ?</p>
<ul>
<li>S'il est présent, le contenu de l'attribut <code>title</code> est identique au contenu de l'attribut <code>aria-label</code>.</li>
<li>S'il est présent, le contenu de l'attribut <code>title</code> est identique au passage de texte lié par la propriété <code>aria-labelledby</code>.</li>
</ul>

<h4>Nouveau test 1.4.4</h4>
<p>Test 1.4.4 : Pour chaque image objet (balise <code>object</code> avec l'attribut <code>type="image/..."</code>) utilisée comme CAPTCHA ou comme image-test, ayant une alternative textuelle ou un contenu alternatif, cette alternative est-elle pertinente (hors cas particuliers) ?</p>
<ul>
<li>S'il est présent, le contenu de l'attribut <code>title</code> est pertinent.</li>
<li>S'il est présent, le contenu de l'attribut WAI-ARIA <code>aria-label</code> est pertinent.</li>
<li>S'il est présent, le passage de texte associé via l'attribut WAI-ARIA <code>aria-labelledby</code> est pertinent.</li>
<li>S'il est présent le contenu alternatif est pertinent.</li>
</ul>


<h3>Suppression du test 1.4.6</h3>
<p>
Remplacement par le test 1.1.7.
</p>

<h4>Ancien test 1.4.6</h4>
<p>Test 1.4.6 : Chaque image embarquée (balise <code>embed</code> avec l'attribut <code>type="image/..."</code>) utilisée comme CAPTCHA ou comme image-test vérifie-t-elle une de ces conditions ?</p>
<ul>
<li>L'image embarquée est immédiatement suivie d'un lien adjacent permettant d'afficher une page ou un passage de texte contenant une alternative permettant de comprendre la nature et la fonction de l'image.</li>
<li>Un mécanisme permet à l'utilisateur de remplacer l'image embarquée par un texte alternatif permettant de comprendre la nature et la fonction de l'image.</li>
<li>Un mécanisme permet à l'utilisateur de remplacer l'image embarquée par une image possédant une alternative permettant de comprendre la nature et la fonction de l'image.</li>
</ul>


<h3>Modification du test 1.4.7</h3>
<p>
Mise en cohérence de la formulation suite à la création du test 1.1.7 et prise en compte de l’ensemble des techniques permettant d’associer une alternative textuelle.
</p>
<p>
Le test 1.4.7 est renuméroté en test 1.4.5.
</p>

<h4>Ancien test 1.4.7</h4>
<p>Test 1.4.7 : Chaque image embarquée (balise <code>embed</code> avec l'attribut <code>type="image/..."</code>) utilisée comme CAPTCHA ou comme image-test, qui utilise une propriété <code>aria-label</code>, <code>aria-labelledby</code> ou un attribut <code>title</code>, vérifie-t-elle ces conditions (hors cas particuliers) ?</p>
<ul>
<li>S'il est présent, le contenu de l'attribut <code>title</code> est identique au contenu de l'attribut <code>aria-label</code>.</li>
<li>S'il est présent, le contenu de l'attribut <code>title</code> est identique au passage de texte lié par la propriété <code>aria-labelledby</code>.</li>
</ul>

<h4>Nouveau test 1.4.5</h4>
<p>Test 1.4.5 : Pour chaque image embarquée (balise <code>&lt;embed&gt;</code> avec l'attribut <code>type="image/..."</code>) utilisée comme CAPTCHA ou comme image-test, ayant une alternative textuelle ou un contenu alternatif, cette alternative est-elle pertinente (hors cas particuliers) ?</p>
<ul>
<li>S'il est présent, le contenu de l'attribut <code>title</code> est pertinent.</li>
<li>S'il est présent, le contenu de l'attribut WAI-ARIA <code>aria-label</code> est pertinent.</li>
<li>S'il est présent, le passage de texte associé via l'attribut WAI-ARIA <code>aria-labelledby</code> est pertinent.</li>
<li>S'il est présent le contenu alternatif est pertinent.</li>
</ul>


<h3>Suppression du test 1.4.8</h3>
<p>
Remplacement par le test 1.1.5.
</p>

<h4>Ancien test 1.4.8</h4>
<p>Test 1.4.8 : Chaque image vectorielle (balise <code>svg</code>) utilisée comme CAPTCHA ou comme image-test, en l'absence d'alternative, vérifie-t-elle ces conditions (hors cas particuliers)</p>
<ul>
<li>La balise <code>svg</code> possède un <code>role="img"</code>.</li>
<li>La balise <code>svg</code> possède une propriété <code>aria-label</code> dont le contenu permet de comprendre la nature et la fonction de l'image et identique à l'attribut <code>title</code> s'il est présent.</li>
<li>La balise <code>svg</code> possède une balise <code>&lt;title&gt;</code> dont le contenu permet de comprendre la nature et la fonction de l'image et identique à la propriété <code>aria-label</code>.</li>
<li>Un lien adjacent permet d'accéder à une alternative dont le contenu permet de comprendre la nature et la fonction de l'image et identique à la propriété <code>aria-label</code>.</li>
</ul>


<h3>Modification du test 1.4.9</h3>
<p>
Mise en cohérence de la formulation suite à la création du test 1.1.5 et prise en compte de l’ensemble des techniques permettant d’associer une alternative textuelle.
</p>
<p>
Le test 1.4.9 est renuméroté en test 1.4.6.
</p>

<h4>Ancien test 1.4.9</h4>
<p>Test 1.4.9 : Pour chaque image vectorielle (balise svg) utilisée comme CAPTCHA ou comme image-test, possédant une alternative, cette alternative est-elle correctement restituée par les technologies d'assistance ?</p>

<h4>Nouveau test 1.4.6</h4>
<p>Test 1.4.6 : Pour chaque image vectorielle (balise <code>&lt;svg&gt;</code>) utilisée comme CAPTCHA ou comme image-test, ayant une alternative textuelle, cette alternative est-elle pertinente (hors cas particuliers) ?</p>
<ul>
<li>S'il est présent, le contenu de l'attribut <code>title</code> est pertinent.</li>
<li>S'il est présent, le contenu de l'attribut WAI-ARIA <code>aria-label</code> est pertinent.</li>
<li>S'il est présent, le passage de texte associé via l'attribut WAI-ARIA <code>aria-labelledby</code> est pertinent.</li>
</ul>


<h3>Suppression du test 1.4.10</h3>
<p>
Remplacement par le test 1.1.8.
</p>

<h4>Ancien test 1.4.10</h4>
<p>Test 1.4.10 : Chaque image bitmap (balise <code>canvas</code>) utilisée comme CAPTCHA ou comme image-test vérifie-t-elle une de ces conditions (hors cas particuliers)</p>
<ul>
<li>Le contenu de l'alternative (contenu entre <code>&lt;canvas&gt;</code> et <code>&lt;/canvas&gt;</code>) permet de comprendre la nature et la fonction de l'image.</li>
<li>L'image bitmap est immédiatement suivie d'un lien adjacent permettant d'afficher une page ou un passage de texte contenant une alternative permettant de comprendre la nature et la fonction de l'image.</li>
<li>Un mécanisme permet à l'utilisateur de remplacer l'image bitmap par un texte alternatif permettant de comprendre la nature et la fonction de l'image.</li>
<li>Un mécanisme permet à l'utilisateur de remplacer l'image bitmap par une image possédant une alternative permettant de comprendre la nature et la fonction de l'image.</li>
</ul>


<h3>Modification du test 1.4.11</h3>
<p>
Mise en cohérence de la formulation suite à la création du test 1.1.8 et prise en compte de l’ensemble des techniques permettant d’associer une alternative textuelle.
</p>
<p>
Le test 1.4.11 est renuméroté en test 1.4.7.
</p>

<h4>Ancien test 1.4.11</h4>
<p>Test 1.4.11 : Chaque image bitmap (balise <code>canvas</code>) utilisée comme CAPTCHA ou comme image-test, qui utilise une propriété <code>aria-label</code>, <code>aria-labelledby</code> ou un attribut <code>title</code>, vérifie-t-elle ces conditions (hors cas particuliers) ?</p>
<ul>
<li>S'il est présent, le contenu de l'attribut <code>title</code> est identique au contenu de l'attribut <code>aria-label</code>.</li>
<li>S'il est présent, le contenu de l'attribut <code>title</code> est identique au passage de texte lié par la propriété <code>aria-labelledby</code>.</li>
</ul>

<h4>Nouveau test 1.4.7</h4>
<p>Test 1.4.7 : Pour chaque image bitmap (balise <code>&lt;canvas&gt;</code>) utilisée comme CAPTCHA ou comme image-test, ayant une alternative textuelle ou un contenu alternatif, cette alternative est-elle pertinente (hors cas particuliers) ?</p>
<ul>
<li>S'il est présent, le contenu de l'attribut <code>title</code> est pertinent.</li>
<li>S'il est présent, le contenu de l'attribut WAI-ARIA <code>aria-label</code> est pertinent.</li>
<li>S'il est présent, le passage de texte associé via l'attribut WAI-ARIA <code>aria-labelledby</code> est pertinent.</li>
<li>S'il est présent le contenu alternatif est pertinent.</li>
</ul>


<h3>Suppression du test 1.4.12</h3>
<p>
Le support de l'alternative de l'élément <code>&lt;canvas&gt;</code> est désormais assuré par les principaux lecteurs d'écran.
</p>

<h4>Ancien test 1.4.12</h4>
<p>Test 1.4.12 : Pour chaque image bitmap (balise <code>&lt;canvas&gt;</code>) utilisée comme CAPTCHA ou comme image-test, ayant une alternative (contenu entre <code>&lt;canvas&gt;</code> et <code>&lt;/canvas&gt;</code>), cette alternative est-elle correctement restituée par les technologies d'assistance ?</p>


<h3>Modification de la note technique du critère 1.6</h3>
<p>
Mise à jour suite à l’évolution du test 1.6.6.
</p>

<h4>Ancienne note technique</h4>
<div>
<p>Le manque de support de l'élément <code>&lt;title&gt;</code> par les technologies d'assistance crée une difficulté dans le cas de l'utilisation de l'élément <code>&lt;desc&gt;</code> pour implémenter l'alternative courte de l'image si l'image nécessite une description détaillée. Dans ce cas il est recommandé d'utiliser un texte adjacent ou un lien adjacent pour créer la description détaillée.</p>
<p>Si l'élément <code>&lt;desc&gt;</code> est utilisé pour implémenter la description détaillée, il est recommandé d'utiliser un attribut <code>aria-label</code> pour implémenter l'alternative courte de l'image.</p>
<p>L'utilisation de l'attribut <code>aria-describedby</code> n'est pas possible pour lier une image à sa description détaillée par manque de support des technologies d'assistance.</p>
<p>La description détaillée adjacente peut être implémentée via une balise <code>&lt;figcaption&gt;</code>, dans ce cas le critère 1.10 doit être vérifié (utilisation de <code>&lt;figure&gt;</code> et du rôle <code>group</code>, notamment).</p>
</div>

<h4>Nouvelle note technique</h4>
<div>
<p><ins>Dans le cas du SVG, le manque de support de l'élément <code>&lt;title&gt;</code> et <code>&lt;desc&gt;</code> par les technologies d'assistance crée une difficulté dans le cas de l'implémentation de l'alternative textuelle de l'image et de sa description détaillée. Dans ce cas, il est recommandé d'utiliser l'attribut WAI-ARIA <code>aria-label</code> pour implémenter à la fois l'alternative textuelle courte et la référence à description détaillée adjacente ou l'attribut WAI-ARIA <code>aria-labelledby</code> pour associer les passages de texte faisant office d'alternative courte et de description détaillée</ins>.</p>
<p>L'utilisation de l'attribut WAI-ARIA <code>aria-describedby</code> n'est pas possible pour lier une image à sa description détaillée par manque de support des technologies d'assistance.</p>
<p>La description détaillée adjacente peut être implémentée via une balise <code>&lt;figcaption&gt;</code>, dans ce cas le <ins>critère 1.9</ins> doit être vérifié (utilisation de <code>&lt;figure&gt;</code> et des <ins>attributs WAI-ARIA <code>role="figure"</code> et <code>aria-label</code></ins>, notamment).</p>
</div>


<h3>Modification du test 1.5.1</h3>
<p>
Prise en compte de l’attribut WAI-ARIA <code>role="img"</code>.
</p>

<h4>Ancien test 1.5.1</h4>
<p>Test 1.5.1 : Chaque image (balises <code>img</code>, <code>area</code>, <code>object</code>, <code>embed</code>, <code>svg</code>, <code>canvas</code>) utilisée comme CAPTCHA vérifie-t-elle une de ces conditions ?</p>
<ul>
<li>Il existe une autre forme de CAPTCHA non graphique, au moins.</li>
<li>Il existe une autre solution d'accès à la fonctionnalité sécurisée par le CAPTCHA.</li>
</ul>

<h4>Nouveau test 1.5.1</h4>
<p>Test 1.5.1 : Chaque image (balises <code>&lt;img&gt;</code>, <code>&lt;area&gt;</code>, <code>&lt;object&gt;</code>, <code>&lt;embed&gt;</code>, <code>&lt;svg&gt;</code>, <code>&lt;canvas&gt;</code> ou possédant un attribut WAI-ARIA <code>role="img"</code>) utilisée comme CAPTCHA vérifie-t-elle une de ces conditions ?</p>
<ul>
<li>Il existe une autre forme de CAPTCHA non graphique, au moins.</li>
<li>Il existe une autre solution d'accès à la fonctionnalité qui est sécurisée par le CAPTCHA.</li>
</ul>


<h3>Modification du test 1.6.2</h3>
<p>
Suppression de l’utilisation d’une description détaillée clairement identifiable au profit de la prise en compte des alternatives textuelles à une balise <code>&lt;object&gt;</code> faisant référence à la description détaillée.
</p>
<p>
Prise en compte de l’usage de bouton adjacent.
</p>

<h4>Ancien test 1.6.2</h4>
<p>Test 1.6.2 : Chaque image objet (balise <code>object</code> avec l'attribut <code>type="image/..."</code>) porteuse d'information, qui nécessite une description détaillée, vérifie-t-elle une de ces conditions ?</p>
<ul>
<li>Il existe un lien adjacent (via une url ou une ancre) permettant d'accéder au contenu de la description détaillée.</li>
<li>Il existe une description détaillée clairement identifiable adjacente à l'image objet.</li>
</ul>

<h4>Nouveau test 1.6.2</h4>
<p>Test 1.6.2 : Chaque image objet (balise <code>&lt;object&gt;</code> avec l'attribut <code>type="image/..."</code>) porteuse d'information, qui nécessite une description détaillée, vérifie-t-elle une de ces conditions ?</p>
<ul>
<li>Il existe une alternative textuelle contenant la référence à une description détaillée adjacente à l'image.</li>
<li>Il existe un lien ou un bouton adjacent permettant d'accéder à la description détaillée.</li>
</ul>


<h3>Modification du test 1.6.3</h3>
<p>
Suppression de l’utilisation d’une description détaillée clairement identifiable au profit de la prise en compte des alternatives textuelles à une balise <code>&lt;embed&gt;</code> faisant référence à une description détaillée.
</p>
<p>
Prise en compte de l’usage de bouton adjacent.
</p>

<h4>Ancien test 1.6.3</h4>
<p>Test 1.6.3 : Chaque image embarquée (balise <code>embed</code>) porteuse d'information, qui nécessite une description détaillée, vérifie-t-elle une de ces conditions ?</p>
<ul>
<li>Il existe un lien adjacent (via une url ou une ancre) permettant d'accéder au contenu de la description détaillée.</li>
<li>Il existe une description détaillée clairement identifiable adjacente à l'image embarquée.</li>
</ul>

<h4>Nouveau test 1.6.3</h4>
<p>Test 1.6.3 : Chaque image embarquée (balise <code>&lt;embed&gt;</code>) porteuse d'information, qui nécessite une description détaillée, vérifie-t-elle une de ces conditions ?</p>
<ul>
<li>Il existe une alternative textuelle contenant la référence à une description détaillée adjacente à l'image.</li>
<li>Il existe un lien ou un bouton adjacent permettant d'accéder à la description détaillée.</li>
</ul>


<h3>Modification du test 1.6.4</h3>
<p>
Suppression de l’utilisation d’une description détaillée clairement identifiable au profit de la prise en compte des alternatives textuelles à une balise <code>&lt;object&gt;</code> faisant référence à la description détaillée.
</p>
<p>
Prise en compte de l’usage de bouton adjacent.
</p>

<h4>Ancien test 1.6.4</h4>
<p>Test 1.6.4 : Chaque bouton de type image (balise <code>input</code> avec l'attribut <code>type="image"</code>) porteur d'information, qui nécessite une description détaillée, vérifie-t-il une de ces conditions ?</p>
<ul>
<li>Il existe un lien adjacent (via une url ou une ancre) permettant d'accéder au contenu de la description détaillée.</li>
<li>Il existe une description détaillée clairement identifiable adjacente à l'image objet.</li>
<li>Il existe une propriété <code>aria-describedby</code> référençant un passage de texte faisant office de description détaillée.</li>
</ul>

<h4>Nouveau test 1.6.4</h4>
<p>Test 1.6.4 : Chaque bouton de type image (balise <code>&lt;input&gt;</code> avec l'attribut <code>type="image"</code>) porteur d'information, qui nécessite une description détaillée, vérifie-t-elle une de ces conditions ?</p>
<ul>
<li>Il existe une alternative textuelle contenant la référence à une description détaillée adjacente à l'image.</li>
<li>Il existe un lien ou un bouton adjacent permettant d'accéder à la description détaillée.</li>
<li>Il existe un attribut WAI-ARIA <code>aria-describedby</code> associant un passage de texte faisant office de description détaillée.</li>
</ul>


<h3>Suppression du test 1.6.5</h3>
<p>
Suppression de la possibilité d’associer la description détaillée via l’attribut <code>aria-describedby</code> au test 1.6.4
</p>

<h4>Ancien test 1.6.5</h4>
<p>Test 1.6.5 : Chaque bouton de type image (balise <code>input</code> avec l'attribut <code>type="image"</code>) porteur d'information, qui implémente une référence à une description détaillée via une propriété <code>aria-describedby</code>, vérifie-t-il ces conditions ?</p>
<ul>
<li>Le passage de texte est identifié via un attribut <code>id</code>.</li>
<li>La valeur de l'attribut <code>id</code> est unique.</li>
<li>La valeur de la propriété ARIA <code>aria-describedby</code> est égale à la valeur de l'attribut <code>id</code>.</li>
</ul>


<h3>Modification du test 1.6.6</h3>
<p>
Prise en compte de l’ensemble des techniques permettant d’associer une alternative textuelle à une balise <code>&lt;svg&gt;</code> dans laquelle il est possible de faire référence à la description détaillée.
</p>
<p>
Prise en compte de l’usage de bouton adjacent.
</p>
<p>
Suppression de la possibilité d’avoir recours à la balise <code>&lt;title&gt;</code> et <code>&lt;desc&gt;</code> dont le support est insuffisant pour permettre de fournir ou faire référence à une description détaillée lorsqu’ils sont utilisés sans être associé à la balise <code>&lt;svg&gt;</code> via l’attribut WAI-ARIA <code>aria-labelledby</code> ou <code>aria-describedby</code>.
</p>
<p>
Le test 1.6.6 est renuméroté en test 1.6.5.
</p>

<h4>Ancien test 1.6.6</h4>
<p>Test 1.6.6 : Chaque image vectorielle (balise <code>svg</code>) porteuse d'information, qui nécessite une description détaillée, vérifie-t-elle une de ces conditions ?</p>
<ul>
<li>Il existe une propriété <code>aria-label</code> contenant une référence à une description détaillée adjacente à l'image vectorielle.</li>
<li>La balise <code>title</code> contient une référence à une description détaillée adjacente à l'image vectorielle.</li>
<li>Il existe une balise <code>desc</code> contenant la description détaillée.</li>
<li>Il existe un lien adjacent (via une url ou une ancre) permettant d'accéder au contenu de la description détaillée.</li>
</ul>

<h4>Nouveau test 1.6.5</h4>
<p>Test 1.6.5 : Chaque image vectorielle (balise <code>&lt;svg&gt;</code>) porteuse d'information, qui nécessite une description détaillée, vérifie-t-elle une de ces conditions ?</p>
<ul>
<li>Il existe un attribut WAI-ARIA <code>aria-label</code> contenant l'alternative textuelle et une référence à une description détaillée adjacente.</li>
<li>Il existe un attribut WAI-ARIA <code>aria-labelledby</code> associant un passage de texte faisant office d'alternative textuelle et un autre faisant office de description détaillée.</li>
<li>Il existe un attribut WAI-ARIA <code>aria-describedby</code> associant un passage de texte faisant office de description détaillée.</li>
<li>Il existe un lien ou un bouton adjacent permettant d'accéder à la description détaillée.</li>
</ul>


<h3>Modification du test 1.6.7</h3>
<p>
Mise à jour suite à modification du test 1.6.6.
</p>
<p>
Le test 1.6.7 est renuméroté en test 1.6.6.
</p>

<h4>Ancien test 1.6.7</h4>
<p>Test 1.6.6 : Chaque image vectorielle (balise <code>svg</code>) porteuse d'information, qui implémente une référence à une description détaillée adjacente via une propriété <code>aria-label</code> ou une balise <code>desc</code>, cette référence est-elle correctement restituée par les technologies d'assistance ?</p>

<h4>Nouveau test 1.6.6</h4>
<p>Test 1.6.6 : Pour chaque image vectorielle (balise <code>&lt;svg&gt;</code>) porteuse d'information, ayant une description détaillée, la référence éventuelle à la description détaillée dans l'attribut WAI-ARIA <code>aria-label</code> et la description détaillée associée par l'attribut WAI-ARIA <code>aria-labelledby</code> ou <code>aria-describedby</code> sont-elles correctement restituées par les technologies d'assistance ?</p>


<h3>Modification du test 1.6.8</h3>
<p>
Prise en compte de l’ensemble des techniques permettant d’associer une alternative textuelle à une balise <code>&lt;canvas&gt;</code>.
</p>
<p>
Prise en compte de la mise à disposition d’une description détaillée via un bouton.
</p>
<p>
Le test 1.6.8 est renuméroté en test 1.6.7.
</p>

<h4>Ancien test 1.6.8</h4>
<p>Test 1.6.8 : Chaque image bitmap (balise <code>canvas</code>) porteuse d'information, qui nécessite une description détaillée, vérifie-t-elle une de ces conditions ?</p>
<ul>
<li>Il existe un passage de texte entre <code>&lt;canvas&gt;</code> et <code>&lt;/canvas&gt;</code> contenant une référence à une description détaillée adjacente à l'image bitmap.</li>
<li>Il existe un contenu textuel entre <code>&lt;canvas&gt;</code> et <code>&lt;/canvas&gt;</code> faisant office de description détaillée.</li>
<li>Il existe un lien adjacent (via une url ou une ancre) permettant d'accéder au contenu de la description détaillée.</li>
</ul>

<h4>Nouveau test 1.6.7</h4>
<p>Test 1.6.7 : Chaque image bitmap (balise <code>&lt;canvas&gt;</code>) porteuse d'information, qui nécessite une description détaillée, vérifie-t-elle une de ces conditions ?</p>
<ul>
<li>Il existe un attribut WAI-ARIA <code>aria-label</code> contenant l'alternative textuelle et une référence à une description détaillée adjacente.</li>
<li>Il existe un attribut WAI-ARIA <code>aria-labelledby</code> associant un passage de texte faisant office d'alternative textuelle et un autre faisant office de description détaillée.</li>
<li>Il existe un contenu textuel entre <code>&lt;canvas&gt;</code> et <code>&lt;/canvas&gt;</code> faisant référence à une description détaillée adjacente à l'image bitmap.</li>
<li>Il existe un contenu textuel entre <code>&lt;canvas&gt;</code> et <code>&lt;/canvas&gt;</code> faisant office de description détaillée.</li>
<li>Il existe un lien ou bouton adjacent permettant d'accéder à la description détaillée.</li>
</ul>


<h3>Renumérotation du test 1.6.9</h3>
<p>
Pour tenir compte des suppressions précédentes, le test 1.6.9 est renuméroté en test 1.6.8.
</p>


<h3>Modification du test 1.6.10</h3>
<p>
Prise en compte de l’attribut WAI-ARIA <code>role="img"</code>.
</p>
<p>
Le test 1.6.10 est renuméroté en test 1.6.9.
</p>

<h4>Ancien test 1.6.10</h4>
<p>Test 1.6.10 : Pour chaque image (balise img, area, object, embed, svg, canvas) porteuse d'information, qui implémente une description détaillée et qui utilise une propriété aria-describedby, la propriété aria-describedby référence-t-elle la description détaillée ?</p>

<h4>Nouveau test 1.6.9</h4>
<p>Test 1.6.9 : Pour chaque image (balise <code>&lt;img&gt;</code>, <code>&lt;input&gt;</code> avec l'attribut <code>type="image"</code>, <code>&lt;area&gt;</code>, <code>&lt;object&gt;</code>, <code>&lt;embed&gt;</code>, <code>&lt;svg&gt;</code>, <code>&lt;canvas&gt;</code>, ou possédant un attribut WAI-ARIA <code>role="img"</code>) porteuse d'information, qui est accompagnée d'une description détaillée et qui utilise un attribut WAI-ARIA <code>aria-describedby</code>, l'attribut WAI-ARIA <code>aria-describedby</code> associe-t-il la description détaillée ?</p>


<h3>Création du test 1.6.10</h3>
<p>
Prise en compte des balises pourvues de l’attribut WAI-ARIA <code>role="img"</code>.
</p>

<h4>Nouveau test 1.6.10</h4>
<p>Test 1.6.10 : Chaque balise possédant un attribut WAI-ARIA <code>role="img"</code> porteuse d'information, qui nécessite une description détaillée, vérifie-t-elle une de ces conditions ?</p>
<ul>
<li>Il existe un attribut WAI-ARIA <code>aria-label</code> contenant l'alternative textuelle et une référence à une description détaillée adjacente.</li>
<li>Il existe un attribut WAI-ARIA <code>aria-labelledby</code> associant un passage de texte faisant office d'alternative textuelle et un autre faisant office de description détaillée.</li>
<li>Il existe un lien ou bouton adjacent permettant d'accéder à la description détaillée.</li>
</ul>


<h3>Modification du test 1.7.1</h3>
<p>
Prise en compte du signalement par le biais de l’ensemble des techniques permettant d’associer une alternative textuelle et par le biais d’un bouton adjacent.
</p>
<p>
Vérification de la pertinence de la description détaillée fournie par l’attribut WAI-ARIA <code>aria-describedby</code> puisqu’il est supporté par certaines aides techniques.
</p>

<h4>Ancien test 1.7.1</h4>
<p>Test 1.7.1 : Chaque image (balise <code>img</code>) porteuse d'information, ayant une description détaillée, vérifie-t-elle ces conditions ?</p>
<ul>
<li>La description détaillée via l'adresse référencée dans l'attribut <code>longdesc</code> est pertinente.</li>
<li>La description détaillée dans la page et signalée par l'alternative textuelle est pertinente.</li>
<li>La description détaillée via un lien adjacent est pertinente.</li>
</ul>

<h4>Nouveau test 1.7.1</h4>
<p>Test 1.7.1 : Chaque image (balise <code>&lt;img&gt;</code>) porteuse d'information, ayant une description détaillée, vérifie-t-elle ces conditions ?</p>
<ul>
<li>La description détaillée via l'adresse référencée dans l'attribut <code>longdesc</code> est pertinente.</li>
<li>La description détaillée dans la page et signalée dans l'attribut <code>alt</code> est pertinente.</li>
<li>La description détaillée via un lien ou bouton adjacent est pertinente.</li>
<li>Le passage de texte associé via l'attribut WAI-ARIA <code>aria-describedby</code> est pertinent.</li>
</ul>


<h3>Modification du test 1.7.2</h3>
<p>
Prise en compte du signalement par le biais de l’ensemble des techniques permettant d’associer une alternative textuelle et par le biais d’un bouton adjacent.
</p>
<p>
Vérification de la pertinence de la description détaillée fournie par l’attribut WAI-ARIA <code>aria-describedby</code> puisqu’il est supporté par certaines aides techniques.
</p>

<h4>Ancien test 1.7.2</h4>
<p>Test 1.7.2 : Chaque bouton de type image (balise <code>input</code> avec l'attribut <code>type="image"</code>) porteur d'information, ayant une description détaillée, vérifie-t-il ces conditions ?</p>
<ul>
<li>La description détaillée dans la page et signalée dans l'attribut <code>alt</code> est pertinente.</li>
<li>La description détaillée via un lien adjacent est pertinente.</li>
<li>Le passage de texte référencé via la propriété <code>aria-describedby</code> est pertinent.</li>
</ul>

<h4>Nouveau test 1.7.2</h4>
<p>Test 1.7.2 : Chaque bouton de type image (balise <code>&lt;input&gt;</code> avec l'attribut <code>type="image"</code>) porteur d'information, ayant une description détaillée, vérifie-t-elle ces conditions ?</p>
<ul>
<li>La description détaillée dans la page et signalée par l'alternative textuelle est pertinente.</li>
<li>La description détaillée via un lien ou bouton adjacent est pertinente.</li>
<li>Le passage de texte associé via l'attribut WAI-ARIA <code>aria-describedby</code> est pertinent.</li>
</ul>


<h3>Modification du test 1.7.3</h3>
<p>
Prise en compte du signalement par le biais de l’ensemble des techniques permettant d’associer une alternative textuelle et par le biais d’un bouton adjacent.
</p>
<p>
Vérification de la pertinence de la description détaillée fournie par l’attribut WAI-ARIA <code>aria-describedby</code> puisqu’il est supporté par certaines aides techniques.
</p>

<h4>Ancien test 1.7.3</h4>
<p>Test 1.7.3 : Chaque image objet (balise <code>object</code> avec l'attribut <code>type="image/..."</code>) porteuse d'information, ayant une description détaillée, vérifie-t-elle ces conditions ?</p>
<ul>
<li>La description détaillée adjacente à l'image objet est pertinente.</li>
<li>La description détaillée via un lien adjacent est pertinente.</li>
</ul>

<h4>Nouveau test 1.7.3</h4>
<p>Test 1.7.3 : Chaque image objet (balise <code>&lt;object&gt;</code> avec l'attribut <code>type="image/..."</code>) porteuse d'information, ayant une description détaillée, vérifie-t-elle ces conditions ?</p>
<ul>
<li>La description détaillée dans la page et signalée par l'alternative textuelle est pertinente.</li>
<li>La description détaillée adjacente à l'image objet est pertinente.</li>
<li>La description détaillée via un lien ou bouton adjacent est pertinente.</li>
<li>Le passage de texte associé via l'attribut WAI-ARIA <code>aria-describedby</code> est pertinent.</li>
</ul>


<h3>Modification du test 1.7.4</h3>
<p>
Prise en compte du signalement par le biais de l’ensemble des techniques permettant d’associer une alternative textuelle et par le biais d’un bouton adjacent.
</p>
<p>
Vérification de la pertinence de la description détaillée fournie par l’attribut WAI-ARIA <code>aria-describedby</code> puisqu’il est supporté par certaines aides techniques.
</p>

<h4>Ancien test 1.7.4</h4>
<p>Test 1.7.4 : Chaque image embarquée (balise <code>embed</code> avec l'attribut <code>type="image/..."</code>) porteuse d'information, ayant une description détaillée, vérifie-t-elle ces conditions ?</p>
<ul>
<li>La description détaillée adjacente à l'image embarquée est pertinente.</li>
<li>La description détaillée via un lien adjacent est pertinente.</li>
</ul>

<h4>Nouveau test 1.7.4</h4>
<p>Test 1.7.4 : Chaque image embarquée (balise <code>&lt;embed&gt;</code> avec l'attribut <code>type="image/..."</code>) porteuse d'information, ayant une description détaillée, vérifie-t-elle ces conditions ?</p>
<ul>
<li>La description détaillée dans la page et signalée par l'alternative textuelle est pertinente.</li>
<li>La description détaillée adjacente à l'image embarquée est pertinente.</li>
<li>La description détaillée via un lien ou bouton adjacent est pertinente.</li>
<li>Le passage de texte associé via l'attribut WAI-ARIA <code>aria-describedby</code> est pertinent.</li>
</ul>


<h3>Modification du test 1.7.5</h3>
<p>
Prise en compte du signalement par le biais de l’ensemble des alternative textuelles possibles, par le biais de la balise <code>&lt;title&gt;</code>, par le biais d’un bouton adjacent.
</p>
<p>
Vérification de la pertinence de la description détaillée fournie par l’attribut WAI-ARIA <code>aria-describedby</code> puisqu’il est supporté par certaines aides techniques.
</p>

<h4>Ancien test 1.7.5</h4>
<p>Test 1.7.5 : Chaque image vectorielle (balise <code>svg</code>) porteuse d'information, ayant une description détaillée, vérifie-t-elle ces conditions ?</p>
<ul>
<li>La description détaillée adjacente à l'image vectorielle et signalée dans la propriété <code>aria-label</code> ou la balise <code>desc</code> est pertinente.</li>
<li>La description détaillée contenue dans la balise <code>desc</code> est pertinente.</li>
<li>La description détaillée via un lien adjacent est pertinente.</li>
</ul>

<h4>Nouveau test 1.7.5</h4>
<p>Test 1.7.5 : Chaque image embarquée (balise <code>&lt;svg&gt;</code>) porteuse d'information, ayant une description détaillée, vérifie-t-elle ces conditions ?</p>
<ul>
<li>La description détaillée dans la page et signalée par l'alternative textuelle est pertinente.</li>
<li>La description détaillée dans la page et signalée par le texte contenu dans la balise <code>&lt;desc&gt;</code> ou <code>&lt;title&gt;</code> est pertinente.</li>
<li>La description détaillée contenue dans la balise <code>&lt;desc&gt;</code> est pertinente.</li>
<li>La description détaillée via un lien ou bouton adjacent est pertinente.</li>
<li>Le passage de texte associé via l'attribut WAI-ARIA <code>aria-describedby</code> est pertinent.</li>
</ul>


<h3>Suppression du test 1.7.6</h3>
<p>
Suppression suite à la mise à jour des tests 1.6.6 et 1.6.7.
</p>

<h4>Ancien test 1.7.6</h4>
<p>Test 1.7.6 : Pour chaque image vectorielle (balise <code>svg</code>) porteuse d'information, ayant une description détaillée implémentée via la balise <code>desc</code>, cette description détaillée est-elle correctement restituée par les technologies d'assistance ?<p>


<h3>Modification du test 1.7.7</h3>
<p>
Prise en compte du signalement par le biais de l’alternative textuelle, par le biais d’un contenu alternatif entre <code>&lt;canvas&gt;</code> et <code>&lt;/canvas&gt;</code>, par le biais d’un bouton adjacent.
</p>
<p>
Vérification de la pertinence de la description détaillée fournie par l’attribut WAI-ARIA <code>aria-describedby</code> puisqu’il est supporté par certaines aides techniques.
</p>
<p>
Le test 1.7.7 est renuméroté en test 1.7.6.
</p>

<h4>Ancien test 1.7.7</h4>
<p>Test 1.7.7 : Chaque image bitmap (balise <code>canvas</code>) porteuse d'information, ayant une description détaillée, vérifie-t-elle ces conditions ?</p>
<ul>
<li>La description détaillée adjacente à l'image bitmap est pertinente.</li>
<li>La description détaillée contenue entre <code>&lt;canvas&gt;</code> et <code>&lt;/canvas&gt;</code> est pertinente.</li>
<li>La description détaillée via un lien adjacent est pertinente.</li>
</ul>

<h4>Nouveau test 1.7.6</h4>
<p>Test 1.7.6 : Chaque image bitmap (balise <code>&lt;canvas&gt;</code>) porteuse d'information, ayant une description détaillée, vérifie-t-elle ces conditions ?</p>
<ul>
<li>La description détaillée dans la page et signalée par l'alternative textuelle est pertinente.</li>
<li>La description détaillée dans la page et signalé par le texte contenu entre <code>&lt;canvas&gt;</code> et <code>&lt;/canvas&gt;</code> est pertinente.</li>
<li>La description détaillée adjacente à l'image bitmap est pertinente.</li>
<li>La description détaillée via un lien ou bouton adjacent est pertinente.</li>
<li>Le passage de texte associé via l'attribut WAI-ARIA <code>aria-describedby</code> est pertinent.</li>
</ul>


<h3>Suppression du test 1.7.8</h3>
<p>
Mise à jour suite à l’évolution du support des technologies d’assistance.
</p>

<h4>Ancien test 1.7.8</h4>
<p>Test 1.7.8 : Pour chaque image bitmap (balise <code>canvas</code>) porteuse d'information, ayant une description détaillée entre <code>&lt;canvas&gt;</code> et <code>&lt;/canvas&gt;</code>, cette description détaillée est-elle correctement restituée par les technologies d'assistance ?</p>


<h3>Modification des cas particuliers 1.8</h3>
<p>Prise en compte explicite du cas où l’exactitude graphique est “essentielle” tel que prévu par le critère 1.4.5 des WCAG 2.1.</p>

<h4>Anciens cas particuliers 1.8</h4>
<div>
<p>Pour ce critère, il existe une gestion de cas particulier lorsque le texte fait partie d'un logo ou d'un élément associé à l'identité graphique d'un organisme ou d'une société (un slogan, par exemple) ou lorsque le texte en image est utilisé comme CAPTCHA ou comme image-test. Dans ces situations, le critère est non applicable pour ces éléments.</p>
</div>

<h4>Nouveaux cas particuliers 1.8</h4>
<div>
<p>Pour ce critère, il existe une gestion de cas particulier lorsque le texte fait partie <ins>du logo, d’une dénomination commerciale, d’un CAPTCHA, d’une image-test ou d'une image dont l’exactitude graphique serait considérée comme essentielle à la bonne transmission de l'information véhiculée par l'image</ins>. Dans ces situations, le critère est non applicable pour ces éléments.</p>
</div>

<h3>Modification du test 1.8.1</h3>
<p>
Mise à jour syntaxique et prise en compte de l’attribut WAI-ARIA <code>role="img"</code>.
</p>
<p>
Vérification de la pertinence de la description détaillée fournie par l’attribut WAI-ARIA <code>aria-describedby</code> puisqu’il est supporté par certaines aides techniques.
</p>

<h4>Ancien test 1.8.1</h4>
<p>Test 1.8.1 : Chaque image texte (balise <code>img</code>) porteuse d'information, en l'absence d'un mécanisme de remplacement, doit si possible être remplacé par du texte stylé. Cette règle est-elle respectée (hors cas particuliers) ?</p>

<h4>Nouveau test 1.8.1</h4>
<p>Test 1.8.1 : Chaque image texte (balise <code>&lt;img&gt;</code> ou possédant un attribut WAI-ARIA <code>role="img"</code>) porteuse d'information, en l'absence d'un mécanisme de remplacement, doit si possible être remplacée par du texte stylé. Cette règle est-elle respectée (hors cas particuliers) ? </p>


<h3>Suppression du critère 1.9 et des tests associés</h3>
<p>
Suppression des critères triple A du RGAA 4.
</p>

<h4>Ancien critère 1.9</h4>
<p>Critère 1.9 [AAA] Chaque image texte porteuse d'information, doit si possible être remplacée par du texte stylé. Cette règle est-elle respectée (hors cas particuliers) ?</p>


<h3>Suppression des cas particuliers 1.9</h3>
<p>Suppression du critère 1.9.</p>

<h4>Anciens cas particuliers 1.8</h4>
<div>
<p>Pour ce critère, il existe une gestion de cas particulier lorsque le texte fait partie d'un logo ou d'un élément associé à l'identité graphique d'un organisme ou d'une société (un slogan, par exemple) ou lorsque le texte en image est utilisé comme CAPTCHA ou comme image-test. Dans ces situations, le critère est non applicable pour ces éléments.</p>
</div>


<h3>Renumérotation du critère 1.10</h3>
<p>
Pour tenir compte de la suppression du critère 1.9, le critère 1.10 est renuméroté en critère 1.9.
</p>


<h3>Modification de la note technique du critère 1.10</h3>
<p>
Mise à jour suite à l’évolution du support des éléments <code>&lt;figure&gt;</code> et <code>&lt;ficaption&gt;</code> par les technologies d’assistance.
</p>
<p>
Cette note est désormais associée au critère 1.9 compte tenu de la renumérotation du critère 1.10.
</p>

<h4>Ancienne note technique</h4>
<div>
<p>L'implémentation d'un <code>role="group"</code> sur l'élément parent <code>figure</code> est destiné à pallier le manque de support actuel des éléments <code>figure</code> par les technologies d'assistance. Bien que recommandée, l'utilisation d'un élément <code>figcaption</code> dans un élément <code>figure</code> est optionnelle. En revanche l'utilisation d'un élément <code>figcaption</code> pour associer une légende à une image impose l'utilisation d'un élément parent <code>figure</code>. La référence à la légende adjacente peut être une expression du type « image 1 » ou équivalent lorsque cette expression est reprise dans la légende.</p>
<p>Bien que recommandé par HTML5, la note WCAG stipule que le <code>title</code> ne peut pas être utilisé pour « labelliser » l'image.</p>
<p>Les attributs <code>aria-labelledby</code> et <code>aria-describedby</code> ne peuvent pas être utilisés actuellement par manque de support par les technologies d'assistance.</p>
<p>Note : les images légendées doivent par ailleurs respecter le critère 1.3 relatif aux images porteuses d'information.</p>
</div>

<h4>Nouvelle note technique</h4>
<div>
<p>L'implémentation d'un <ins>attribut WAI-ARIA <code>role="group"</code> ou <code>role="figure"</code></ins> sur l'élément parent <code>&lt;figure&gt;</code> est destiné à pallier le manque de support actuel des éléments <code>&lt;figure&gt;</code> par les technologies d'assistance. <ins>L'utilisation d'un élément <code>&lt;figcaption&gt;</code> pour associer une légende à une image impose au minimum l'utilisation d'un attribut WAI-ARIA <code>aria-label</code> sur l'élément parent <code>&lt;figure&gt;</code> dont le contenu sera identique au contenu de l'élément <code>&lt;figcaption&gt;</code>. Pour s’assurer d’un support optimal, il peut également être fait une association explicite entre le contenu de l’alternative textuelle de l’image et le contenu de l’élément <code>&lt;figcaption&gt;</code>, par exemple :</ins></p>
<p><code>&lt;img src="image.png" alt="Photo : soleil couchant" /&gt;&lt;figcaption&gt;Photo : crédit xxx&lt;/figcaption&gt;</code></p>
<p>Les attributs <code>aria-labelledby</code> et <code>aria-describedby</code> ne peuvent pas être utilisés actuellement par manque de support par les technologies d'assistance.</p>
<p>Note : les images légendées doivent par ailleurs respecter <ins>les critères 1.1 et 1.3</ins> relatifs aux images porteuses d'information.</p>
</div>


<h3>Modification du test 1.10.1</h3>
<p>
Mise à jour suite à l’évolution du support des technologies d’assistance.
</p>
<p>
Le test 1.10.1 est renuméroté en test 1.9.1.
</p>

<h4>Ancien test 1.10.1</h4>
<p>Test 1.10.1 : Chaque image légendée (balise <code>img</code> ou <code>input</code> avec l'attribut <code>type="image"</code> associée à une légende adjacente) vérifie-t-elle, si nécessaire, ces conditions ?</p>
<ul>
<li>L'image (balise <code>img</code>) et sa légende sont contenues dans une balise <code>figure</code>.</li>
<li>La balise <code>figure</code> possède un attribut <code>role="group"</code>.</li>
<li>Le contenu de l'attribut <code>alt</code> de l'image contient une référence à la légende adjacente.</li>
</ul>

<h4>Nouveau test 1.9.1</h4>
<p>Test 1.9.1 : Chaque image pourvue d'une légende (balise <code>&lt;img&gt;</code>, <code>&lt;input&gt;</code> avec l'attribut <code>type="image"</code> ou possédant un attribut WAI-ARIA <code>role="img"</code> associée à une légende adjacente), ayant une alternative textuelle, vérifie-t-elle, si nécessaire, ces conditions ?</p>
<ul>
<li>L'image (balise <code>&lt;img&gt;</code>, <code>&lt;input&gt;</code> avec l'attribut <code>type="image"</code> ou possédant un attribut WAI-ARIA <code>role="img"</code>) et sa légende adjacente sont contenues dans une balise <code>&lt;figure&gt;</code>.</li>
<li>La balise <code>&lt;figure&gt;</code> possède un attribut WAI-ARIA <code>role="figure"</code> ou <code>role="group"</code>.</li>
<li>La balise <code>&lt;figure&gt;</code> possède un attribut WAI-ARIA <code>aria-label</code> dont le contenu est identique au contenu de la légende.</li>
<li>La légende est contenue dans une balise <code>&lt;figcaption&gt;</code>.</li>
</ul>


<h3>Modification du test 1.10.2</h3>
<p>
Mise à jour suite à l’évolution du support des technologies d’assistance.
</p>
<p>
Le test 1.10.2 est renuméroté en test 1.9.2.
</p>

<h4>Ancien test 1.10.2</h4>
<p>Test 1.10.2 : Chaque image objet légendée (balise <code>object</code> avec l'attribut <code>type="image/..."</code> associée à une légende adjacente) vérifie-t-elle, si nécessaire, ces conditions ?</p>
<ul>
<li>L'image objet (balise <code>object</code>) et sa légende sont contenues dans une balise <code>figure</code>.</li>
<li>La balise <code>figure</code> possède un attribut <code>role="group"</code>.</li>
</ul>

<h4>Nouveau test 1.9.2</h4>
<p>Test 1.9.2 : Chaque image objet pourvue d'une légende (balise <code>&lt;object&gt;</code> avec l'attribut <code>type="image/..."</code> associée à une légende adjacente), ayant une alternative textuelle, vérifie-t-elle, si nécessaire, ces conditions ?</p>
<ul>
<li>L'image objet (balise <code>&lt;object&gt;</code>) et sa légende adjacente sont contenues dans une balise <code>&lt;figure&gt;</code>.</li>
<li>La balise <code>&lt;figure&gt;</code> possède un attribut WAI-ARIA <code>role="figure"</code> ou <code>role="group"</code>.</li>
<li>La balise <code>&lt;figure&gt;</code> possède un attribut WAI-ARIA <code>aria-label</code> dont le contenu est identique au contenu de la légende.</li>
<li>La légende est contenue dans une balise <code>&lt;figcaption&gt;</code>.</li>
</ul>


<h3>Modification du test 1.10.3</h3>
<p>
Mise à jour suite à l’évolution du support des technologies d’assistance.
</p>
<p>
Le test 1.10.3 est renuméroté en test 1.9.3.
</p>

<h4>Ancien test 1.10.3</h4>
<p>Test 1.10.3 : Chaque image embarquée légendée (balise <code>embed</code> associée à une légende adjacente) vérifie-t-elle, si nécessaire, ces conditions ?</p>
<ul>
<li>L'image embarquée (balise <code>embed</code>) et sa légende sont contenues dans une balise <code>figure</code>.</li>
<li>La balise <code>figure</code> possède un attribut <code>role="group"</code>.</li>
<li>L'alternative contient une référence à la légende adjacente.</li>
</ul>

<h4>Nouveau test 1.9.3</h4>
<p>Test 1.9.3 : Chaque image embarquée pourvue d'une légende (balise <code>&lt;embed&gt;</code> associée à une légende adjacente), ayant une alternative textuelle, vérifie-t-elle, si nécessaire, ces conditions ?</p>
<ul>
<li>L'image embarquée (balise <code>&lt;embed&gt;</code>) et sa légende adjacente sont contenues dans une balise <code>&lt;figure&gt;</code>.</li>
<li>La balise <code>&lt;figure&gt;</code> possède un attribut WAI-ARIA <code>role="figure"</code> ou <code>role="group"</code>.</li>
<li>La balise <code>&lt;figure&gt;</code> possède un attribut WAI-ARIA <code>aria-label</code> dont le contenu est identique au contenu de la légende.</li>
<li>La légende est contenue dans une balise <code>&lt;figcaption&gt;</code>.</li>
</ul>


<h3>Modification du test 1.10.4</h3>
<p>
Mise à jour suite à l’évolution du support des technologies d’assistance.
</p>
<p>
Le test 1.10.4 est renuméroté en test 1.9.4.
</p>

<h4>Ancien test 1.10.4</h4>
<p>Test 1.10.4 : Chaque image vectorielle légendée (balise <code>svg</code> associée à une légende adjacente) vérifie-t-elle, si nécessaire, ces conditions ?</p>
<ul>
<li>L'image vectorielle (balise <code>svg</code>) et sa légende sont contenues dans une balise <code>figure</code>.</li>
<li>La balise <code>figure</code> possède un attribut <code>role="group"</code>.</li>
<li>Le contenu de la propriété <code>aria-label</code> ou de la balise <code>desc</code> de l'image vectorielle contient une référence à la légende adjacente.</li>
</ul>

<h4>Nouveau test 1.9.4</h4>
<p>Test 1.9.4 : Chaque image vectorielle pourvue d'une légende (balise <code>&lt;svg&gt;</code> associée à une légende adjacente), ayant une alternative textuelle, vérifie-t-elle, si nécessaire, ces conditions ?</p>
<ul>
<li>L'image vectorielle (balise <code>&lt;svg&gt;</code>) et sa légende adjacente sont contenues dans une balise <code>&lt;figure&gt;</code>.</li>
<li>La balise <code>&lt;figure&gt;</code> possède un attribut WAI-ARIA <code>role="figure"</code> ou <code>role="group"</code>.</li>
<li>La balise <code>&lt;figure&gt;</code> possède un attribut WAI-ARIA <code>aria-label</code> dont le contenu est identique au contenu de la légende.</li>
<li>La légende est contenue dans une balise <code>&lt;figcaption&gt;</code>.</li>
</ul>


<h3>Modification du test 1.10.5</h3>
<p>
Mise à jour suite à l’évolution du support des technologies d’assistance.
</p>
<p>
Le test 1.10.5 est renuméroté en test 1.9.5.
</p>

<h4>Ancien test 1.10.5</h4>
<p>Test 1.10.5 : Chaque image bitmap légendée (balise <code>canvas</code> associée à une légende adjacente) vérifie-t-elle, si nécessaire, ces conditions ?</p>
<ul>
<li>L'image bitmap (balise <code>canvas</code>) et sa légende sont contenues dans une balise <code>figure</code>.</li>
<li>La balise <code>figure</code> possède un attribut <code>role="group"</code>.</li>
<li>Le contenu entre <code>&lt;canvas&gt;</code> et <code>&lt;/canvas&gt;</code> de l'image bitmap contient une référence à la légende adjacente.</li>
</ul>

<h4>Nouveau test 1.9.5</h4>
<p>Test 1.9.5 : Chaque image bitmap pourvue d'une légende (balise <code>&lt;canvas&gt;</code> associée à une légende adjacente), ayant une alternative textuelle, vérifie-t-elle, si nécessaire, ces conditions ?</p>
<ul>
<li>L'image bitmap (balise <code>&lt;canvas&gt;</code>) et sa légende adjacente sont contenues dans une balise <code>&lt;figure&gt;</code>.</li>
<li>La balise <code>&lt;figure&gt;</code> possède un attribut WAI-ARIA <code>role="figure"</code> ou <code>role="group"</code>.</li>
<li>La balise <code>&lt;figure&gt;</code> possède un attribut WAI-ARIA <code>aria-label</code> dont le contenu est identique au contenu de la légende.</li>
<li>La légende est contenue dans une balise <code>&lt;figcaption&gt;</code>.</li>
</ul>


<h3>Modification du critère 2.1</h3>
<p>
Mise à jour suite au remplacement de l'entrée de glossaire "cadre en ligne" par "cadre et cadre en ligne" car le RGAA s'applique également aux balises et aux attributs utilisés en HTML4 et en XHTML.
</p>

<h4>Ancien critère 2.1</h4>
<p>Critère 2.1 [A] Chaque cadre en ligne a-t-il un titre de cadre ?</p>

<h4>Nouveau critère 2.1</h4>
<p>Critère 2.1 Chaque cadre a-t-il un titre de cadre ?</p>


<h3>Modification du test 2.1.1</h3>
<p>
Mise à jour suite au remplacement de l'entrée de glossaire "cadre en ligne" par "cadre et cadre en ligne" car le RGAA s'applique également aux balises et aux attributs utilisés en HTML4 et en XHTML.
</p>

<h4>Ancien test 2.1.1</h4>
<p>Test 2.1.1 : Chaque cadre en ligne (balise <code>&lt;iframe&gt;</code>) a-t-il un attribut <code>title</code> ?</p>

<h4>Nouveau test 2.1.1</h4>
<p>Test 2.1.1 : Chaque cadre (balise <code>&lt;iframe&gt;</code> ou <code>&lt;frame&gt;</code>) a-t-il un attribut <code>title</code> ? </p>


<h3>Modification du critère 2.2</h3>
<p>
Mise à jour suite au remplacement de l'entrée de glossaire "cadre en ligne" par "cadre et cadre en ligne" car le RGAA s'applique également aux balises et aux attributs utilisés en HTML4 et en XHTML.
</p>

<h4>Ancien critère 2.2</h4>
<p>Critère 2.2 [A] Pour chaque cadre en ligne ayant un titre de cadre, ce titre de cadre est-il pertinent ?</p>

<h4>Nouveau critère 2.2</h4>
<p>Critère 2.2 Chaque cadre a-t-il un titre de cadre ?</p>


<h3>Modification du test 2.2.1</h3>
<p>
Mise à jour suite au remplacement de l'entrée de glossaire "cadre en ligne" par "cadre et cadre en ligne" car le RGAA s'applique également aux balises et aux attributs utilisés en HTML4 et en XHTML.
</p>

<h4>Ancien test 2.2.1</h4>
<p>Test 2.2.1 : Pour chaque cadre en ligne (balise <code>&lt;iframe&gt;</code>) ayant un attribut <code>title</code>, le contenu de cet attribut est-il pertinent ?</p>

<h4>Nouveau test 2.2.1</h4>
<p>Test 2.2.1 : Pour chaque cadre (balise <code>&lt;iframe&gt;</code> ou <code>&lt;frame&gt;</code>) ayant un attribut <code>title</code>, le contenu de cet attribut est-il pertinent ?</p>


<h3>Suppression du critère 3.2 et des tests associés</h3>
<p>
Mise à jour de l’entrée de glossaire Information (donnée par la couleur).
</p>

<h4>Ancien critère 3.2</h4>
<p>Critère 3.2 [A] Dans chaque page web, l'information ne doit pas être donnée uniquement par la couleur. Cette règle est-elle implémentée de façon pertinente ?</p>


<h3>Renumérotation du critère 3.3</h3>
<p>
Pour tenir compte de la suppression du critère 3.2, le critère 3.3 est renuméroté en critère 3.2.
</p>


<h3>Modification du test 3.3.1</h3>
<p>
Passage à l’usage des pixels pour définir la taille de caractères tel que décrit dans le document <a href="https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html">Understanding Success Criterion 1.4.3: Contrast (Minimum) des WCAG 2.1</a>.
</p>
<p>
Renumérotation du test 3.3.1 en test 3.2.1.
</p>

<h4>Ancien test 3.3.1</h4>
<p>Test 3.3.1 : Dans chaque page web, jusqu'à 150% de la taille de police par défaut (ou 1.5em), le texte et le texte en image sans effet de graisse vérifient-ils une de ces conditions (hors cas particuliers) ?</p>
<ul>
<li>Le rapport de contraste entre le texte et son arrière-plan est de 4.5:1, au moins.</li>
<li>Un mécanisme permet à l'utilisateur d'afficher le texte avec un rapport de contraste de 4.5:1, au moins.</li>
</ul>

<h4>Nouveau test 3.2.1</h4>
<p>Test 3.2.1 : Dans chaque page web, le texte et le texte en image sans effet de graisse d'une taille restituée inférieure à 24px vérifient-ils une de ces conditions (hors cas particuliers) ?</p>
<ul>
<li>Le rapport de contraste entre le texte et son arrière-plan est de 4.5:1, au moins.</li>
<li>Un mécanisme permet à l'utilisateur d'afficher le texte avec un rapport de contraste de 4.5:1, au moins.</li>
</ul>


<h3>Modification du test 3.3.2</h3>
<p>
Passage à l’usage des pixels pour définir la taille de caractères tel que décrit dans le document <a href="https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html">Understanding Success Criterion 1.4.3: Contrast (Minimum) des WCAG 2.1</a>.
</p>
<p>
Renumérotation du test 3.3.2 en test 3.2.2.
</p>

<h4>Ancien test 3.3.2</h4>
<p>Test 3.3.2 : Dans chaque page web, jusqu'à 120% de la taille de police par défaut (ou 1.2em), le texte et le texte en image en gras vérifient-ils une de ces conditions (hors cas particuliers) ?</p>
<ul>
<li>Le rapport de contraste entre le texte et son arrière-plan est de 4.5:1, au moins.</li>
<li>Un mécanisme permet à l'utilisateur d'afficher le texte avec un rapport de contraste de 4.5:1, au moins.</li>
</ul>

<h4>Nouveau test 3.2.2</h4>
<p>Test 3.2.2 : Dans chaque page web, le texte et le texte en image en gras d'une taille restituée inférieure à 18,5px vérifient-ils une de ces conditions (hors cas particuliers) ?</p>
<ul>
<li>Le rapport de contraste entre le texte et son arrière-plan est de 4.5:1, au moins.</li>
<li>Un mécanisme permet à l'utilisateur d'afficher le texte avec un rapport de contraste de 4.5:1, au moins.</li>
</ul>


<h3>Modification des cas particuliers 3.3 - 3.4</h3>
<p>
Suppression des notes 2 et 3 car rien n’est précisé dans les WCAG concernant les états des liens, et les textes visibles au survol ou à la prise de focus sont explicitement couverts par le critère 1.4.3 d’après le document Understanding Success Criterion 1.4.3: Contrast (Minimum) des WCAG 2.1.
</p>
<p>
Les cas particuliers ne s'appliquent plus qu'au critère 3.3 compte tenu de la suppression du critère 3.4.
</p>

<h4>Anciens cas particuliers 3.3 - 3.4</h4>
<div>
<p>Dans ces situations, les critères sont non applicables pour ces éléments.</p>
<ul>
<li>Le texte fait partie d'un logo ou d'un élément associé à l'identité graphique d'un organisme ou d'une société ;</li>
<li>Le texte fait partie d'une image de décoration ;</li>
<li>Le texte inséré dans une image porteuse d'information n'apporte aucune information essentielle ;</li>
<li>Le texte fait partie d'un élément interactif (par exemple un bouton avec l'attribut <code>disabled</code>) sur lequel aucune action n'est possible et qui n'apporte pas une information essentielle ;</li>
<li>Le texte est inséré via l'attribut <code>placeholder</code> et n'apporte aucune information essentielle ;</li>
<li>Le texte est inséré dans une image utilisée comme CAPTCHA ou comme image-test.</li>
</ul>
<p>Note 1 : Les cas particuliers concernant des textes associés à l'identité graphique d'un organisme ou d'une société devraient être limités à des éléments particuliers comme un slogan par exemple. Dans le cas où c'est l'intégralité d'une charte graphique, particulièrement lorsque la charte graphique est imposée, qui est en cause, comme un choix de couleur de police par exemple, la solution consiste à avoir recours à une version alternative, à fort contraste.</p>
<p>Note 2 : Les changements de couleur consécutifs à la prise de focus ne sont pas concernés par l'application du critère, sauf si le contenu change également lors de la prise de focus.</p>
<p>Note 3 : les indications des états de liens (visités ou actifs) ne sont pas concernées par l'application du critère.</p>
</div>

<h4>Nouveaux cas particuliers 3.3</h4>
<div>
<p>Les cas suivants sont non applicables pour ce critère :</p>
<ul>
<li>Composant d'interface inactif (exemple un bouton avec un attribut <code>disabled</code>) sur lequel aucune action n'est possible.</li>
<li>Composant d'interface pour lequel l'apparence est gérée par les styles natifs du navigateur sans aucune modification par l'auteur (exemple le style au focus natif dans Chrome ou Firefox).</li>
<li>Composant d'interface pour lequel la couleur n'est pas nécessaire pour identifier le composant ou son état (exemple un groupe de liens faisant office de navigation dont la position dans la page, la taille et la couleur du texte permettent de comprendre qu'il s'agit de liens même si la couleur du soulignement des liens avec le fond blanc n'a pas un ratio de 3:1 et que le texte lui a un ratio de 4.5:1).</li>
<li>Élément graphique ou parties d'élément graphique non porteur d'information ou ayant une alternative (description longue, informations identiques visibles dans la page).</li>
<li>Élément graphique ou parties d'élément graphique faisant partie d'un logo ou du nom de marque d'un organisme ou d'une société.</li>
<li>Élément graphique ou parties d'élément graphique dont la présentation est essentielle à l'information véhiculée (exemple drapeaux, logotypes, photos de personnes ou de scènes, captures d'écran, diagrammes médicaux, carte de chaleurs).</li>
<li>Élément graphique ou parties d'élément graphique dynamiques dont le contraste au survol / focus est suffisant.</li>
</ul>
</div>


<h3>Modification du test 3.3.3</h3>
<p>
Passage à l’usage des pixels pour définir la taille de caractères tel que décrit dans le document <a href="https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html">Understanding Success Criterion 1.4.3: Contrast (Minimum) des WCAG 2.1</a>.
</p>
<p>
Renumérotation du test 3.3.3 en test 3.2.3.
</p>

<h4>Ancien test 3.3.3</h4>
<p>Test 3.3.3 : Dans chaque page web, à partir de 150% de la taille de police par défaut (ou 1.5em), le texte et le texte en image sans effet de graisse vérifient-ils une de ces conditions (hors cas particuliers) ?</p>
<ul>
<li>Le rapport de contraste entre le texte et son arrière-plan est de 3:1, au moins.</li>
<li>Un mécanisme permet à l'utilisateur d'afficher le texte avec un rapport de contraste de 3:1, au moins.</li>
</ul>

<h4>Nouveau test 3.2.3</h4>
<p>Test 3.2.3 : Dans chaque page web, le texte et le texte en image sans effet de graisse d’un taille restituée supérieure ou égale à 24px vérifient-ils une de ces conditions (hors cas particuliers) ?</p>
<ul>
<li>Le rapport de contraste entre le texte et son arrière-plan est de 3:1, au moins.</li>
<li>Un mécanisme permet à l'utilisateur d'afficher le texte avec un rapport de contraste de 3:1, au moins.</li>
</ul>


<h3>Modification du test 3.3.4</h3>
<p>
Passage à l’usage des pixels pour définir la taille de caractères tel que décrit dans le document <a href="https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html">Understanding Success Criterion 1.4.3: Contrast (Minimum) des WCAG 2.1</a>.
</p>
<p>
Renumérotation du test 3.3.4 en test 3.2.4.
</p>

<h4>Ancien test 3.3.4</h4>
<p>Test 3.3.4 : Dans chaque page web, à partir de 120% de la taille de police par défaut (ou 1.2em), le texte et le texte en image en gras vérifient-ils une de ces conditions (hors cas particuliers) ?</p>
<ul>
<li>Le rapport de contraste entre le texte et son arrière-plan est de 3:1, au moins.</li>
<li>Un mécanisme permet à l'utilisateur d'afficher le texte avec un rapport de contraste de 3:1, au moins.</li>
</ul>

<h4>Nouveau test 3.2.4</h4>
<p>Test 3.2.4 : Dans chaque page web, le texte et le texte en image en gras d'un taille restituée supérieure ou égale à 18,5px vérifient-ils une de ces conditions (hors cas particuliers) ?</p>
<ul>
<li>Le rapport de contraste entre le texte et son arrière-plan est de 3:1, au moins.</li>
<li>Un mécanisme permet à l'utilisateur d'afficher le texte avec un rapport de contraste de 3:1, au moins.</li>
</ul>


<h3>Suppression du test 3.3.5</h3>
<p>
Si le mécanisme fait appel à du texte, il est soumis aux autres tests du nouveau critère 3.2.
</p>
<p>
Si le mécanisme fait appel à un élément graphique uniquement, il est soumis au nouveau critère 3.3.
</p>

<h4>Ancien test 3.3.5</h4>
<p>Test 3.3.5 : Chaque mécanisme qui permet d'afficher le texte avec un rapport de contraste conforme a-t-il un rapport de contraste supérieur ou égal à 4,5:1 ?</p>


<h3>Création du critère 3.3 et des tests associés</h3>
<p>
Prise en compte du nouveau critère WCAG 2.1 : 1.4.11 Non-text Contrast (AA).
</p>

<h4>Nouveau critère 3.3</h4>
<p>Critère 3.3 Dans chaque page web, les couleurs utilisées dans les composants d'interface ou les éléments graphiques porteurs d'informations sont-elles suffisamment contrastées (hors cas particuliers) ?</p>

<h4>Nouveau test 3.3.1</h4>
<p>Test 3.3.1 : Dans chaque page web, le rapport de contraste entre les couleurs d'un composant d'interface dans ses différents états et la couleur d'arrière-plan contiguë vérifie-t-il une de ces conditions (hors cas particuliers) ?</p>
<ul>
<li>Le rapport de contraste est de 3:1, au moins.</li>
<li>Un mécanisme permet un rapport de contraste de 3:1, au moins.</li>
</ul>

<h4>Nouveau test 3.3.2</h4>
<p>Test 3.3.2 : Dans chaque page web, le rapport de contraste des différentes couleurs composant un élément graphique, lorsqu'elles sont nécessaires à sa compréhension, et la couleur d'arrière-plan contiguë, vérifie-t-il une de ces conditions (hors cas particuliers) ?</p>
<ul>
<li>Le rapport de contraste est de 3:1, au moins.</li>
<li>Un mécanisme permet un rapport de contraste de 3:1, au moins.</li>
</ul>

<h4>Nouveau test 3.3.3</h4>
<p>Test 3.3.3 : Dans chaque page web, le rapport de contraste des différentes couleurs contiguës entre elles d'un élément graphique, lorsqu'elles sont nécessaires à sa compréhension, vérifie-t-il une de ces conditions (hors cas particuliers) ?</p>
<ul>
<li>Le rapport de contraste est de 3:1, au moins.</li>
<li>Un mécanisme permet un rapport de contraste de 3:1, au moins.</li>
</ul>

<h4>Nouveau test 3.3.1</h4>
<p>Test 3.3.4 : Dans le mécanisme qui permet d'afficher un rapport de contraste conforme, les couleurs du composant ou des éléments graphiques porteurs d’informations qui le composent, sont-elles suffisamment contrastées ?</p>


<h3>Suppression du critère 4.5 et des tests associés</h3>
<p>
Contenu exempté par la directive européenne : les contenus audio et/ou vidéo, y compris avec des composants interactifs, diffusés en direct; à noter que lorsque ces contenus sont mis à disposition en ligne ou republiés après leur diffusion en direct, ils sont considérés comme des contenus préenregistrés.
</p>


<h3>Modification des cas particuliers 4.1 - 4.2 - 4.3 - 4.5 - 4.7 - 4.9 - 4.11 - 4.13</h3>
<p>
Ajout de deux précisions légales sur les médias concernés en fonction de leur date de publication et de leur propriétaire.
</p>
<p>
Les cas particuliers ne s'appliquent plus qu'aux critères 4.1, 4.2, 4.3, 4.5 compte tenu de la suppression des critères suivants.
</p>

<h4>Anciens cas particuliers 4.1 - 4.2 - 4.3 - 4.5 - 4.7 - 4.9 - 4.11 - 4.13</h4>
<div>
<p>Il existe une gestion de cas particulier lorsque :</p>
<ul>
<li>Le média temporel est utilisé à des fins décoratives (c'est-à-dire qu'il n'apporte aucune information) ;</li>
<li>Le média temporel est lui-même une alternative à un contenu de la page (une vidéo en langue des signes ou la vocalisation d'un texte, par exemple) ;</li>
<li>Le média temporel est utilisé pour accéder à une version agrandie ;</li>
<li>Le média temporel est utilisé comme un CAPTCHA ;</li>
<li>Le média temporel fait partie d'un test qui deviendrait inutile si la transcription textuelle, les sous-titres synchronisés ou l'audiodescription étaient communiqués.</li>
</ul>
<p>Dans ces situations, le critère est non applicable.</p>
</div>

<h4>Nouveaux cas particuliers 4.1</h4>
<div>
<p>Il existe une gestion de cas particulier lorsque :</p>
<ul>
<li>Le média temporel est utilisé à des fins décoratives (c'est-à-dire qu'il n'apporte aucune information) ;</li>
<li>Le média temporel est lui-même une alternative à un contenu de la page (une vidéo en langue des signes ou la vocalisation d'un texte, par exemple) ;</li>
<li>Le média temporel est utilisé pour accéder à une version agrandie ;</li>
<li>Le média temporel est utilisé comme un CAPTCHA ;</li>
<li>Le média temporel fait partie d'un test qui deviendrait inutile si la transcription textuelle, les sous-titres synchronisés ou l'audiodescription étaient communiqués.</li>
<li><ins>Pour les services de l’État, les collectivités territoriales et leurs établissements : si le média temporel a été publié entre le 23 septembre 2019 et le 23 septembre 2020 sur un site internet, intranet ou extranet créé depuis le 23 septembre 2018, il est exempté de l’obligation d’accessibilité ;</ins></li>
<li><ins>Pour les personnes de droit privé mentionnées aux 2° à 4° du I de l’article 47 de la loi du 11 février 2005 : si le média temporel a été publié avant le 23 septembre 2020, il est exempté de l’obligation d’accessibilité.</ins></li>
</ul>
<p>Dans ces situations, le critère est non applicable.</p>
<p><ins>Ce cas particulier s'applique également aux critères 4.2, 4.3, 4.5</ins></p>
</div>


<h4>Ancien critère 4.5</h4>
<p>Critère 4.5 [AA] Chaque média temporel en direct a-t-il, si nécessaire, des sous-titres synchronisés ou une transcription textuelle (hors cas particuliers) ?</p>


<h3>Suppression du critère 4.6 et des tests associés</h3>
<p>
Contenu exempté par la directive européenne : les contenus audio et/ou vidéo, y compris avec des composants interactifs, diffusés en direct; à noter que lorsque ces contenus sont mis à disposition en ligne ou republiés après leur diffusion en direct, ils sont considérés comme des contenus préenregistrés.
</p>

<h4>Ancien critère 4.6</h4>
<p>Critère 4.6 [AA] Pour chaque média temporel en direct ayant des sous-titres synchronisés ou une transcription textuelle, ceux-ci sont-ils pertinents ?</p>


<h3>Suppression des critères 4.9, 4.10, 4.11, 4.12, 4.13, 4.14, 4.19 et des tests respectivement associés</h3>
<p>
Suppression des critères triple A du RGAA 4.
</p>


<h3>Suppression des cas particuliers 4.19</h3>
<p>
Suppression du critère 4.19.
</p>

<h4>Anciens cas particuliers 4.19</h4>
<div>
<p>Il existe une gestion de cas particulier lorsque le média temporel est utilisé comme CAPTCHA ou fait partie d'un test qui deviendrait inutile si l'arrière-plan sonore pouvait être désactivé, ou si la ou les pistes de dialogue étaient 20 décibels plus élevées que l'arrière-plan sonore.</p>
<p>Dans ces situations, le critère est non applicable.</p>
</div>


<h3>Renumérotation des critères 4.7, 4.8, 4.15, 4.16, 4.17, 4.18, 4.20, 4.21, 4.22 et des tests associés</h3>
<p>
Pour tenir compte de la suppression des critères 4.5, 4.6, 4.9, 4.10, 4.11, 4.12, 4.13, 4.14 et 4.19, les critères 4.7, 4.8, 4.15, 4.16, 4.17, 4.18, 4.20, 4.21, 4.22 sont renumérotés respectivement en critères 4.5, 4.6, 4.7, 4.8, 4.9, 4.10, 4.11, 4.12 et 4.13. Les tests associés sont renumérotés de la même façon.
</p>


<h3>Modification du test 5.1.1</h3>
<p>
Mise à jour suite à la prise en compte du rôle <code>table</code> (WAI-ARIA) et à l'élargissement de la manière de proposer un résumé au moyen de l'attribut <code>summary</code> ou de l'attribut WAI-ARIA <code>aria-describedby</code> (voir entrée de glossaire "Résumé").
</p>

<h4>Ancien test 5.1.1</h4>
<p>Test 5.1.1 : Pour chaque tableau de données complexe (balise <code>table</code>) un résumé est-il disponible dans la balise <code>caption</code> ?</p>

<h4>Nouveau test 5.1.1</h4>
<p>Test 5.1.1 : Pour chaque tableau de données complexe un résumé est-il disponible ?</p>


<h3>Modification du test 5.5.2</h3>
<p>
Mise à jour suite à la prise en compte du rôle <code>table</code> (WAI-ARIA).
</p>

<h4>Ancien test 5.5.2</h4>
<p>Test 5.2.1 : Pour chaque tableau de donnée complexes (balise <code>table</code>) ayant un résumé, celui-ci est-il pertinent ?</p>

<h4>Nouveau test 5.5.2</h4>
<p>Test 5.1.2 : Pour chaque tableau de donnée complexes ayant un résumé, celui-ci est-il pertinent ?</p>


<h3>Modification du critère 5.4</h3>
<p>
Mise à jour suite à la prise en compte du rôle <code>table</code> (WAI_ARIA) et à la prise en compte de la condition de la technique <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H39">WCAG H39</a> qui vérifie la structuration du titre lorsqu’il est présent mais ne rend pas obligatoire la présence d’un titre.
</p>

<h4>Ancien critère 5.4</h4>
<p>Critère 5.4 [A] Chaque tableau de données a-t-il un titre ?</p>

<h4>Nouveau critère 5.4</h4>
<p>Critère 5.4 Pour chaque tableau de données ayant un titre, le titre est-il correctement associé au tableau de données ?</p>


<h3>Modification du test 5.4.1</h3>
<p>
Mise à jour suite à la prise en compte du rôle <code>table</code> (WAI-ARIA) et à la prise en compte de la condition de la technique <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H39">WCAG H39</a> qui vérifie la structuration du titre lorsqu’il est présent mais ne rend pas obligatoire la présence d’un titre.
</p>

<h4>Ancien test 5.4.1</h4>
<p>Test 5.4.1 : Chaque tableau de données (balise <code>table</code>) a-t-il une balise <code>caption</code> ?</p>

<h4>Nouveau test 5.4.1</h4>
<p>Test 5.4.1 : Pour chaque tableau de données ayant un titre, le titre est-il correctement associé au tableau de données ?</p>


<h3>Modification du test 5.5.1</h3>
<p>
Mise à jour suite à la prise en compte du rôle <code>table</code> (WAI-ARIA) et à l'introduction de l'entrée de glossaire "Tableau de données ayant un titre".
</p>

<h4>Ancien test 5.5.1</h4>
<p>Test 5.5.1 : Pour chaque tableau de données (balise <code>table</code>) ayant un titre de tableau dans la balise <code>caption</code>, le titre est-il pertinent ?</p>

<h4>Nouveau test 5.5.1</h4>
<p>Test 5.5.1 Pour chaque tableau de données ayant un titre, ce titre permet-il d'identifier le contenu du tableau de données de manière claire et concise ?</p>


<h3>Modification du test 5.6.1</h3>
<p>
Mise à jour suite à la prise en compte des rôles <code>table</code> et <code>columnheader</code> (WAI-ARIA).
</p>

<h4>Ancien test 5.6.1</h4>
<p>Test 5.6.1 : Pour chaque tableau de données (balise <code>table</code>), chaque en-tête de colonnes a-t-il une balise <code>th</code> ?</p>

<h4>Nouveau test 5.6.1</h4>
<p>Test 5.6.1 : Pour chaque tableau de données, chaque en-tête de colonnes s'appliquant à la totalité de la colonne vérifie-t-il une de ces conditions ?</p>
<ul>
<li>L'en-tête de colonnes est structuré au moyen d'une balise <code>&lt;th&gt;</code>.</li>
<li>L'en-tête de colonnes est structuré au moyen d'une balise pourvue d'un attribut WAI-ARIA <code>role="columnheader"</code>.</li>
</ul>


<h3>Modification du test 5.6.2</h3>
<p>
Mise à jour suite à la prise en compte des rôles <code>table</code> et <code>rowheader</code> (WAI-ARIA).
</p>

<h4>Ancien test 5.6.2</h4>
<p>Test 5.6.2 : Pour chaque tableau de données (balise <code>table</code>), chaque en-tête de lignes a-t-il une balise <code>th</code> ?</p>

<h4>Nouveau test 5.6.2</h4>
<p>Test 5.6.2 : Pour chaque tableau de données, chaque en-tête de lignes s'appliquant à la totalité de la ligne vérifie-t-il une de ces conditions ?</p>
<ul>
<li>L'en-tête de lignes est structuré au moyen d'une balise <code>&lt;th&gt;</code>.</li>
<li>L'en-tête de lignes est structuré au moyen d'une balise pourvue d'un attribut WAI-ARIA <code>role="rowheader"</code>.</li>
</ul>


<h3>Création du test 5.6.3</h3>
<p>
Restriction de l’usage de WAI-ARIA sur les tableaux de données complexes.
</p>

<h4>Nouveau test 5.6.3</h4>
<p>Pour chaque tableau de données, chaque en-tête ne s'appliquant pas à la totalité de la ligne ou de la colonne est-il structuré au moyen d'une balise <code>&lt;th&gt;</code> ?</p>


<h3>Modification du test 5.7.1</h3>
<p>
Mise à jour suite à la prise en compte des rôles <code>columnheader</code> et <code>rowheader</code> (WAI-ARIA) et restriction de l’applicabilité du test aux balises <code>&lt;th&gt;</code> uniquement et prise en compte de la note 1 de la technique <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H63">WCAG H63</a> autorisant les tableaux de données avec des en-tête <code>&lt;th&gt;</code> sans attribut <code>scope</code> lorsqu’il s’agit de tableaux ayant des en-têtes uniquement sur une seule ligne ou une seule colonne (cas particulier).
</p>

<h4>Ancien test 5.7.1</h4>
<p>Test 5.7.1 : Chaque en-tête (balise <code>th</code>) s'appliquant à la totalité de la ligne ou de la colonne possède-t-il un attribut <code>id</code> unique ou un attribut <code>scope</code> ?</p>

<h4>Nouveau test 5.7.1</h4>
<p>Test 5.7.1 : Pour chaque contenu de balise <code>&lt;th&gt;</code> s'appliquant à la totalité de la ligne ou de la colonne, la balise <code>&lt;th&gt;</code> respecte-t-elle une de ces conditions (hors cas particuliers) ?</p>
<ul>
<li>La balise <code>&lt;th&gt;</code> possède un attribut id unique.</li>
<li>La balise <code>&lt;th&gt;</code> possède un attribut scope.</li>
<li>La balise <code>&lt;th&gt;</code> possède un attribut WAI-ARIA <code>role="rowheader"</code> ou <code>"columnheader"</code>.</li>
</ul>


<h3>Création des cas particuliers 5.7</h3>
<p>
Ajout des cas particuliers pour le test 5.7.1.
</p>

<h4>Nouveaux cas particuliers 5.7</h4>
<div>
<p>Dans le cas de tableaux de données ayant des en-têtes sur une seule ligne ou une seule colonne, les en-têtes peuvent être structurés à l'aide de balise <code>&lt;th&gt;</code> sans attribut <code>scope</code>.</p>
</div>

<h3>Modification du test 5.7.2</h3>
<p>
Restriction de l’applicabilité du test aux balises <code>&lt;th&gt;</code> uniquement.
</p>

<h4>Ancien test 5.7.2</h4>
<p>Test 5.7.2 : Chaque en-tête (balise <code>th</code>) s'appliquant à la totalité de la ligne ou de la colonne et possédant un attribut <code>scope</code> vérifie-t-il une de ces conditions ?</p>
<ul>
<li>L'en-tête possède un attribut <code>scope</code> avec la valeur <code>"row"</code> pour les en-tête de lignes.</li>
<li>L'en-tête possède un attribut <code>scope</code> avec la valeur <code>"col"</code> pour les en-tête de colonnes.</li>
</ul>

<h4>Nouveau test 5.7.2</h4>
<p>Test 5.7.2 : Pour chaque contenu de balise <code>&lt;th&gt;</code> s'appliquant à la totalité de la ligne ou de la colonne et possédant un attribut scope, la balise <code>&lt;th&gt;</code> vérifie-t-elle une de ces conditions ?</p>
<ul>
<li>La balise <code>&lt;th&gt;</code> possède un attribut <code>scope</code> avec la valeur <code>"row"</code> pour les en-tête de lignes.</li>
<li>La balise <code>&lt;th&gt;</code> possède un attribut <code>scope</code> avec la valeur <code>"col"</code> pour les en-tête de colonnes.</li>
</ul>


<h3>Modification du test 5.7.3</h3>
<p>
Mise à jour suite à la prise en compte des rôles <code>columnheader</code> et <code>rowheader</code> (WAI-ARIA) et restriction de l’applicabilité du test aux balises <code>&lt;th&gt;</code> uniquement.
</p>

<h4>Ancien test 5.7.3</h4>
<p>Test 5.7.3 : Chaque en-tête (balise <code>th</code>) ne s'appliquant pas à la totalité de la ligne ou de la colonne vérifie-t-il ces conditions ?</p>
<ul>
<li>L'en-tête ne possède pas d'attribut <code>scope</code>.</li>
<li>L'en-tête possède un attribut <code>id</code> unique.</li>
</ul>

<h4>Nouveau test 5.7.3</h4>
<p>Test 5.7.3 : Pour chaque contenu de balise <code>&lt;th&gt;</code> ne s'appliquant pas à la totalité de la ligne ou de la colonne, la balise <code>&lt;th&gt;</code> vérifie-t-elle ces conditions ?</p>
<ul>
<li>La balise <code>&lt;th&gt;</code> ne possède pas d'attribut <code>scope</code>.</li>
<li>La balise <code>&lt;th&gt;</code> ne possède pas d'attribut WAI-ARIA <code>role="rowheader"</code> ou <code>"columnheader"</code>.</li>
<li>La balise <code>&lt;th&gt;</code> possède un attribut <code>id</code> unique.</li>
</ul>


<h3>Modification du test 5.7.4</h3>
<p>
Restriction de l'applicabilité du test aux balises <code>&lt;th&gt;</code> uniquement.
</p>

<h4>Ancien test 5.7.4</h4>
<p>Test 5.7.4 : Chaque cellule (balise <code>td</code> ou <code>th</code>) associée à un ou plusieurs en-têtes possédant un attribut <code>id</code> vérifie-t-elle ces conditions ?</p>
<ul>
<li>La cellule possède un attribut <code>headers</code>.</li>
<li>L'attribut <code>headers</code> possède la liste des valeurs des en-têtes associés à la cellule.</li>
</ul>

<h4>Nouveau test 5.7.4</h4>
<p>Test 5.7.4 : Pour chaque contenu de balise <code>&lt;td&gt;</code> ou <code>&lt;th&gt;</code> associée à un ou plusieurs en-têtes possédant un attribut <code>id</code>, la balise vérifie-t-elle ces conditions ?</p>
<ul>
<li>La cellule possède un attribut <code>headers</code>.</li>
<li>L'attribut <code>headers</code> possède la liste des valeurs d'attribut <code>id</code> des en-têtes associés.</li>
</ul>


<h3>Création du test 5.7.5</h3>
<p>
Création pour tenir compte des balises pourvues des rôles <code>columnheader</code> et <code>rowheader</code> (WAI-ARIA).
</p>

<h4>Nouveau test 5.7.5</h4>
<p>Test 5.7.5 : Pour chaque balise pourvue d’un attribut WAI-ARIA <code>role="rowheader"</code> ou <code>"columnheader"</code> dont le contenu s'applique à la totalité de la ligne ou de la colonne, la balise vérifie-t-elle une de ces conditions ?</p>
<ul>
<li>La balise possède un attribut WAI-ARIA <code>role="rowheader"</code> pour les en-têtes de lignes</li>
<li>La balise possède un attribut WAI-ARIA <code>role="columnheader"</code> pour les en-têtes de colonnes.</li>
</ul>


<h3>Modification du critère 6.1</h3>
<p>
Ajout du lien vers l’entrée de glossaire "<a href="/publications/rgaa-accessibilite/methode-rgaa/glossaire/#lien">Lien</a>".
</p>

<h4>Ancien critère 6.1</h4>
<p>Critère 6.1 [A] Chaque lien est-il explicite (hors cas particuliers) ?</p>

<h4>Nouveau critère 6.1</h4>
<p>Critère 6.1 Chaque <a href="/publications/rgaa-accessibilite/methode-rgaa/glossaire/#lien">lien</a> est-il explicite (hors cas particuliers) ?</p>


<h3>Modification des cas particuliers 6.1 et 6.3</h3>
<p>
Ajout d'une section concernant les exceptions introduites par le critère WCAG 2.5.3 Label in Name.
</p>
<p>
Les cas particuliers ne s'appliquent plus qu'au critère 6.1 compte tenu de la suppression du critère 6.3.
</p>

<h4>Anciens cas particuliers 6.1 et 6.3</h4>
<div>
<p>Il existe une gestion de cas particulier lorsque le lien est ambigu pour tout le monde. Dans cette situation, où il n'est pas possible de rendre le lien explicite dans son contexte, le critère est non applicable.</p>
</div>

<h4>Nouveaux cas particuliers 6.1</h4>
<div>
<p>Il existe une gestion de cas particulier pour les tests 6.1.1, 6.1.2, 6.1.3 et 6.1.4 lorsque le lien est ambigu pour tout le monde. Dans cette situation, où il n'est pas possible de rendre le lien explicite dans son contexte, le critère est non applicable.</p>
<p>Il existe une gestion de cas particulier pour le test 6.1.5 lorsque :</p>
<ul>
<li>La ponctuation et les lettres majuscules sont présentes dans le texte de l’intitulé visible : elles peuvent être ignorées dans le nom accessible sans porter à conséquence.</li>
<li>Le texte de l’intitulé visible sert de symbole : le texte ne doit pas être interprété littéralement au niveau du nom accessible. Le nom doit exprimer la fonction véhiculée par le symbole (par exemple, "B" au niveau d'un éditeur de texte aura pour nom accessible "Mettre en gras", le signe ">" en fonction du contexte signifiera "Suivant" ou "Lancer la vidéo"). Le cas des symboles mathématiques fait cependant exception (voir la note ci-dessous).</li>
</ul>
<p>Note : si l'étiquette visible représente une expression mathématique, les symboles mathématiques peuvent être repris littéralement pour servir d'étiquette au nom accessible (ex. : "A>B"). Il est laissé à l'utilisateur le soin d'opérer la correspondance entre l'expression et ce qu'il doit épeler compte tenu de la connaissance qu'il a du fonctionnement de son logiciel de saisie vocale ("A plus grand que B" ou "A supérieur à B").</p>
</div>

<h3>Modification du test 6.1.1</h3>
<p>
Précision concernant le contexte du lien qui doit être additionné à l’intitulé du lien.
</p>

<h4>Ancien test 6.1.1</h4>
<p>Test 6.1.1 : Chaque lien texte vérifie-t-il une de ces conditions (hors cas particuliers) ?</p>
<ul>
<li>L'intitulé de lien seul permet d'en comprendre la fonction et la destination.</li>
<li>Le contexte du lien permet d'en comprendre la fonction et la destination.</li>
</ul>

<h4>Nouveau test 6.1.1</h4>
<p>Test 6.1.1 : Chaque lien texte vérifie-t-il une de ces conditions (hors cas particuliers) ?</p>
<ul>
<li>L'intitulé de lien seul permet d'en comprendre la fonction et la destination.</li>
<li><ins>L'intitulé de lien additionné au contexte du lien</ins> permet d'en comprendre la fonction et la destination.</li>
</ul>


<h3>Modification du test 6.1.2</h3>
<p>
Précision concernant le contexte du lien qui doit être additionné à l’intitulé du lien.
</p>

<h4>Ancien test 6.1.2</h4>
<p>Test 6.1.2 : Chaque lien image vérifie-t-il une de ces conditions (hors cas particuliers) ?</p>
<ul>
<li>L'intitulé de lien seul permet d'en comprendre la fonction et la destination.</li>
<li>Le contexte du lien permet d'en comprendre la fonction et la destination.</li>
</ul>

<h4>Nouveau test 6.1.2</h4>
<p>Test 6.1.2 : Chaque lien image vérifie-t-il une de ces conditions (hors cas particuliers) ?</p>
<ul>
<li>L'intitulé de lien seul permet d'en comprendre la fonction et la destination.</li>
<li><ins>L'intitulé de lien additionné au contexte du lien</ins> permet d'en comprendre la fonction et la destination.</li>
</ul>


<h3>Modification du test 6.1.3</h3>
<p>
Précision concernant le contexte du lien qui doit être additionné à l’intitulé du lien.
</p>

<h4>Ancien test 6.1.3</h4>
<p>Test 6.1.3 : Chaque lien composite vérifie-t-il une de ces conditions (hors cas particuliers) ?</p>
<ul>
<li>L'intitulé de lien seul permet d'en comprendre la fonction et la destination.</li>
<li>Le contexte du lien permet d'en comprendre la fonction et la destination.</li>
</ul>

<h4>Nouveau test 6.1.3</h4>
<p>Test 6.1.3 : Chaque lien composite vérifie-t-il une de ces conditions (hors cas particuliers) ?</p>
<ul>
<li>L'intitulé de lien seul permet d'en comprendre la fonction et la destination.</li>
<li><ins>L'intitulé de lien additionné au contexte du lien</ins> permet d'en comprendre la fonction et la destination.</li>
</ul>


<h3>Création du test 6.1.4</h3>
<p>
Prise en compte du lien SVG, voir l’entrée de glossaire "<a href="/publications/rgaa-accessibilite/methode-rgaa/glossaire/#lien">Lien</a>".
</p>

<h4>Nouveau test 6.1.4</h4>
<p>Test 6.1.4 : Chaque lien SVG vérifie-t-il une de ces conditions (hors cas particuliers) ?</p>
<ul>
<li>L'intitulé de lien seul permet d'en comprendre la fonction et la destination.</li>
<li>L'intitulé de lien additionné au contexte du lien permet d'en comprendre la fonction et la destination.</li>
</ul>


<h3>Création du test 6.1.5</h3>
<p>
Prise en compte du critère WCAG 2.1 "<a href="https://www.w3.org/TR/WCAG21/#label-in-name">Label in name</a>".
</p>

<h4>Nouveau test 6.1.5</h4>
<p>Test 6.1.5 : Pour chaque lien ayant un intitulé visible, le nom accessible du lien contient-il au moins l'intitulé visible (hors cas particuliers) ?</p>


<h3>Suppression du critère 6.2 et des tests associés</h3>
<p>
Le critère 6.2 est couvert par la nouvelle définition d’intitulé de lien dont la pertinence est vérifiée par le critère 6.1.
</p>

<h4>Ancien critère 6.2</h4>
<p>Critère 6.2 [A] Pour chaque lien ayant un titre de lien, celui-ci est-il pertinent ?</p>


<h3>Suppression du critère 6.3 et des tests associés</h3>
<p>
Suppression des critères triple A du RGAA 4.
</p>

<h4>Ancien critère 6.3</h4>
<p>Critère 6.3 [AAA] Chaque intitulé de lien seul est-il explicite hors contexte (hors cas particuliers) ?</p>


<h3>Suppression du critère 6.4 et des tests associés</h3>
<p>
Le critère 6.4 est couvert par la nouvelle définition d’intitulé de lien dont la pertinence est vérifiée par le critère 6.1.
</p>

<h4>Ancien critère 6.4</h4>
<p>Critère 6.4 [A] Pour chaque page web, chaque lien identique a-t-il les mêmes fonction et destination ?</p>


<h3>Modification du critère 6.5</h3>
<p>
Ajout du lien vers l’entrée de glossaire "<a href="/publications/rgaa-accessibilite/methode-rgaa/glossaire/#lien">Lien</a>".
</p>
<p>
Pour tenir compte de la suppression des critères 6.2, 6.3 et 6.4, le critère 6.5 est renuméroté en 6.2.
</p>

<h4>Ancien critère 6.5</h4>
<p>Critère 6.5 [A] Dans chaque page web, chaque lien, à l'exception des ancres, a-t-il un intitulé ?</p>

<h4>Nouveau critère 6.2</h4>
<p>Critère 6.2 Dans chaque page web, chaque <a href="/publications/rgaa-accessibilite/methode-rgaa/glossaire/#lien">lien</a>, à l'exception des ancres, a-t-il un intitulé ?</p>


<h3>Modification du test 6.5.1</h3>
<p>
Prise en compte de l’entrée de glossaire "<a href="/publications/rgaa-accessibilite/methode-rgaa/glossaire/#lien">Lien</a>".
</p>
<p>
Renumérotation du test 6.5.1 en test 6.2.1.
</p>

<h4>Ancien test 6.5.1</h4>
<p>Test 6.5.1 : Dans chaque page web, chaque lien (balise <code>a</code> avec un attribut <code>href</code>), à l'exception des ancres, a-t-il un intitulé entre <code>&lt;a&gt;</code> et <code>&lt;/a&gt;</code> ?</p>

<h4>Nouveau test 6.2.1</h4>
<p>Test 6.2.1 : Dans chaque page web, chaque lien, à l'exception des ancres, a-t-il un intitulé entre <code>&lt;a&gt;</code> et <code>&lt;/a&gt;</code> ?</p>


<h3>Suppression du test 7.1.2</h3>
<p>
Élément n’ayant aucun impact sur l’accessibilité. Il s’agit d’un problème d’interopérabilité qui relève du RGI et non du RGAA.
</p>

<h4>Ancien test 7.1.2</h4>
<p>Test 7.1.2 : Chaque fonctionnalité d'insertion de contenu contrôlée par un script utilise-t-elle des propriétés et méthodes conformes à la spécification DOM (Document Object Model) ?</p>


<h3>Suppression du test 7.1.3</h3>
<p>
Le respect des motifs de conception relève de la bonne pratique de conception et non de la conformité WCAG. Par ailleurs, la vérification de la présence d’un nom, rôle, valeur, paramétrage et changements d'états sur les composants d’interface ainsi que la bonne restitution est par ailleurs déjà vérifiée via les tests 7.1.1 et 7.1.5.
</p>

<h4>Ancien test 7.1.3</h4>
<p>Test 7.1.3 : Chaque script qui génère, met à jour ou contrôle un composant d'interface qui comporte des rôles des états ou des propriétés correspondant à un motif de conception défini par l'API ARIA vérifie-t-il une de ces conditions ?</p>
<ul>
<li>Le composant d'interface est conforme au motif de conception défini par l'API ARIA.</li>
<li>Un composant d'interface présent sur la page, permettant d'accéder aux mêmes fonctionnalités, est conforme au motif de conception défini par l'API ARIA.</li>
<li>Le composant d'interface adapte un motif de conception défini par l'API ARIA.</li>
<li>Une alternative accessible permet d'accéder aux mêmes fonctionnalités.</li>
</ul>


<h3>Création des cas particuliers 7.1</h3>
<p>
Ajout de cas particuliers concernant les exceptions introduites par le critère WCAG 2.5.3 Label in Name.
</p>

<h4>Nouveaux cas particuliers 7.1</h4>
<div>
<p>Il existe une gestion de cas particulier pour le test 7.1.3 lorsque :</p>
<ul>
<li>La ponctuation et les lettres majuscules sont présentes dans le texte de l’intitulé visible : elles peuvent être ignorées dans le nom accessible sans porter à conséquence.</li>
<li>Le texte de l’intitulé visible sert de symbole : le texte ne doit pas être interprété littéralement au niveau du nom accessible. Le nom doit exprimer la fonction véhiculée par le symbole (par exemple, "B" au niveau d'un éditeur de texte aura pour nom accessible "Mettre en gras", le signe ">" en fonction du contexte signifiera "Suivant" ou "Lancer la vidéo"). Le cas des symboles mathématiques fait cependant exception (voir la note ci-dessous).</li>
</ul>
<p>Note : si l'étiquette visible représente une expression mathématique, les symboles mathématiques peuvent être repris littéralement pour servir d'étiquette au nom accessible (ex. : "A>B"). Il est laissé à l'utilisateur le soin d'opérer la correspondance entre l'expression et ce qu'il doit épeler compte tenu de la connaissance qu'il a du fonctionnement de son logiciel de saisie vocale ("A plus grand que B" ou "A supérieur à B").</p>
</div>


<h3>Suppression du test 7.1.4</h3>
<p>
Test relevant de la bonne pratique de conception et non de la conformité WCAG. Par ailleurs, la vérification de la présence d’un nom, rôle, valeur, paramétrage, changements d'états sur les composants d’interface, la bonne restitution et l’usage d’un nom et rôle approprié est par ailleurs déjà vérifiée via les test 7.1.1, 7.1.5 et 7.1.7.
</p>

<h4>Ancien test 7.1.4</h4>
<p>Test 7.1.4 : Chaque modification du rôle natif d'un élément HTML respecte-t-elle les règles et préconisations indiquées dans la spécification HTML5 et les notes techniques associées ?</p>


<h3>Renumérotation du test 7.1.5</h3>
<p>
Pour tenir compte de la suppression des tests 7.1.2 à 7.1.4, le test 7.1.5 est renuméroté en test 7.1.2.
</p>


<h3>Suppression du test 7.1.6</h3>
<p>
Ce test est déjà couvert par le test 7.1.1 et 7.1.5.
</p>

<h4>Ancien test 7.1.6</h4>
<p>Test 7.1.6 : Chaque composant d'interface qui utilise un rôle ARIA application respecte-t-il une de ces conditions ?</p>
<ul>
<li>Le composant d'interface est correctement restitué par les technologies d'assistance.</li>
<li>Une alternative accessible permet d'accéder aux mêmes fonctionnalités.</li>
</ul>


<h3>Renumérotation du test 7.1.7</h3>
<p>
Pour tenir compte de la suppression des tests 7.1.2 à 7.1.4 et du test 7.1.6 le test 7.1.7 est renuméroté en test 7.1.3.
</p>


<h3>Modification du critère 7.3</h3>
<p>
Prise en compte de l’ensemble des dispositifs de pointage.
</p>

<h4>Ancien critère 7.3</h4>
<p>Critère 7.3 [A] Chaque script est-il contrôlable par le clavier et la souris (hors cas particuliers) ?</p>

<h4>Nouveau critère 7.3</h4>
<p>Critère 7.3 Chaque script est-il contrôlable par le clavier et par tout dispositif de pointage (hors cas particuliers) ?</p>


<h3>Modification du test 7.3.1</h3>
<p>
Prise en compte de l’ensemble des dispositifs de pointage.
</p>

<h4>Ancien test 7.3.1</h4>
<p>Test 7.3.1 : Chaque élément possédant un gestionnaire d'événement contrôlé par un script vérifie-t-il une de ces conditions (hors cas particuliers) ?</p>
<ul>
<li>L'élément est accessible par le clavier et la souris.</li>
<li>Un élément accessible par le clavier et la souris permettant de réaliser la même action est présent dans la page.</li>
</ul>

<h4>Nouveau test 7.3.1</h4>
<p>Test 7.3.1 : Chaque élément possédant un gestionnaire d'événement contrôlé par un script vérifie-t-il une de ces conditions (hors cas particuliers) ?</p>
<ul>
<li>L'élément est accessible par le clavier et <ins>tout dispositif de pointage</ins>.</li>
<li>Un élément accessible par le clavier et <ins>tout dispositif de pointage</ins> permettant de réaliser la même action est présent dans la page.</li>
</ul>


<h3>Suppression du test 7.3.3</h3>
<p>
Le respect des motifs de conception relève de la bonne pratique de conception et non de la conformité WCAG. Par ailleurs, la vérification de l’utilisation au clavier reste couverte par les critères 7.1, 12.13 et 12.14.
</p>

<h4>Ancien test 7.3.3</h4>
<p>Test 7.3.3 : Chaque composant d'interface implémenté via un rôle défini par l'API ARIA et correspondant à un motif de conception respecte-t-il une de ces conditions ?</p>
<ul>
<li>Les interactions au clavier sont conformes au comportement défini par le motif de conception pour les touches Echap, Barre d'espace, Tabulation et Flèches de direction au moins.</li>
<li>Un composant d'interface présent sur la page, permettant de réaliser la même action, possède des interactions au clavier conformes au comportement défini par le motif de conception, pour les touches Échap, Barre d'espace, Tabulation et Flèches de direction au moins.</li>
<li>Une alternative permettant d'accéder aux mêmes fonctionnalités est contrôlable par le clavier et la souris.</li>
</ul>


<h3>Suppression des notes techniques du critère 7.3</h3>
<p>
Suppression du test 7.3.3.
</p>

<h4>Ancienne note technique</h4>
<p>ARIA définit pour un certain nombre de rôles, dédiés au développement de composants d'interface, un ensemble d'interactions au clavier basées sur les touches Échap, Barre d'espace, Tabulation et touches de direction auxquelles peuvent se rajouter d'autres interactions basées sur les touches de pagination, de début ou de fin par exemple. Afin d'accompagner la prise en charge progressive de ces interactions au clavier, le référentiel limite l'exigence aux touches d'interactions principales (Échap, barre d'espace, tabulation, flèches de direction) telles qu'elles sont définies par les motifs de conception.</p>


<h3>Suppression du critère 7.5 et du test associé</h3>
<p>
Suppression des critères triple A du RGAA 4.
</p>

<h4>Ancien critère 7.5</h4>
<p>Critère 7.5 [AAA] Chaque script qui provoque une alerte non sollicitée est-il contrôlable par l'utilisateur (hors cas particuliers) ?</p>


<h3>Suppression des cas particuliers 7.5</h3>
<p>Suppression du critère 7.5.</p>

<h4>Anciens cas particuliers 7.5</h4>
<div>
<p>Il existe une gestion de cas particulier lorsque l'alerte non sollicitée concerne un cas d'urgence, un événement ou une situation soudaine et imprévue qui exige une action immédiate afin de préserver la santé, la sécurité ou la propriété. Dans ces situations, le critère est non applicable.</p>
</div>


<h3>Création du critère 7.5 et des tests associés</h3>
<p>
Prise en compte du nouveau critère WCAG 2.1 : 4.1.3 Status Messages (A).
</p>

<h4>Nouveau critère 7.5</h4>
<p>Critère 7.5 Dans chaque page web, les messages de statut sont-ils correctement restitués par les technologies d'assistance ?</p>

<h4>Nouveau test 7.5.1</h4>
<p>Test 7.5.1 : Chaque message de statut qui informe de la réussite, du résultat d'une action ou bien de l'état d'une application utilise-t-il l'attribut WAI-ARIA <code>role="status"</code> ?</p>

<h4>Nouveau test 7.5.2</h4>
<p>Test 7.5.2 : Chaque message de statut qui présente une suggestion, ou avertit de l'existence d'une erreur utilise-t-il l'attribut WAI-ARIA <code>role="alert"</code> ?</p>

<h4>Nouveau test 7.5.3</h4>
<p>Test 7.5.3 : Chaque message de statut qui indique la progression d'un processus utilise-t-il l'un des attributs WAI-ARIA <code>role="log"</code>, <code>role="progressbar"</code> ou <code>role="status"</code> ?</p>

<h4>Nouvelle note technique</h4>
<div>
<p>Les rôles WAI-ARIA log, status et alert ont implicitement une valeur d'attribut WAI-ARIA aria-live et aria-atomic. On pourra donc considérer (conformément à la spécification WAI-ARIA 1.1) que :</p>
<ul>
<li>Un attribut WAI-ARIA <code>aria-live="polite"</code> associé à un message de statut peut valoir pour un rôle WAI-ARIA <code>log</code>.</li>
<li>Un attribut WAI-ARIA <code>aria-live="polite"</code> et un attribut <code>aria-atomic="true"</code> associés à un message de statut peuvent valoir pour un rôle WAI-ARIA <code>status</code>.</li>
<li>Un attribut <code>aria-live="assertive"</code> et un attribut <code>aria-atomic="true"</code> associés à un message de statut peuvent valoir pour un rôle WAI-ARIA <code>alert</code>.</li>
</ul>
<p>C'est sous réserve que la nature du message de statut satisfasse bien à la correspondance implicitement établie. Dans le cas d'un message de statut indiquant la progression d'un processus et matérialisé graphiquement par une barre de progression, un rôle WAI-ARIA progressbar explicite est nécessaire.</p>
</div>


<h3>Modification des cas particuliers 8.2</h3>
<p>
Mise à jour suite à la suppression du test 8.2.2 et adaptation pour prise en compte des versions antérieures à HTML5.
</p>

<h4>Anciens cas particuliers 8.2</h4>
<div>
<p>Il y a une gestion de cas particulier sur la conformité du code HTML.</p>
<p>Pour accompagner la prise en charge progressive de HTML5 par les navigateurs, les APIs d'accessibilité et les technologies d'assistance, certains critères peuvent exiger la présence d'attributs ou de balises déclarés « obsolètes » en HTML5. Dans ce cas le test 8.2.2 est non applicable.</p>
</div>

<h4>Nouveaux cas particuliers 8.2</h4>
<div>
<p>Il y a une gestion de cas particulier sur la conformité du code HTML.</p>
<p>Pour accompagner la prise en charge progressive de HTML par les navigateurs, les APIs d'accessibilité et les technologies d'assistance, certains critères peuvent exiger la présence d'attributs ou de balises déclarés « obsolètes » en HTML. <ins>Par ailleurs, dans la mesure où des balises ou des attributs déclarés « obsolètes » sont utilisés, ils restent soumis aux autres critères du RGAA (exemple la balise <code>&lt;marquee&gt;</code> serait non conforme par rapport au critère 13.8) et leur support d'accessibilité doit être vérifié au regard de l’environnement de test (ou « base de référence ») retenu</ins>.</p>
</div>


<h3>Modification du test 8.2.1</h3>
<p>
Mise à jour faite afin de rendre plus explicite les cas de non-conformité liés à l’usage d’attributs <code>id</code> non uniques et de doublage d’attribut des techniques WCAG <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H93">H93</a> et <a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H94">H94</a>.
</p>

<h4>Ancien test 8.2.1</h4>
<p>Test 8.2.1 : Pour chaque déclaration de type de document, le code source de la page vérifie-t-il ces conditions (hors cas particuliers) ?</p>
<ul>
<li>Les balises respectent les règles d'écriture.</li>
<li>L'imbrication des balises est conforme.</li>
<li>L'ouverture et la fermeture des balises sont conformes.</li>
<li>Les attributs respectent les règles d'écriture.</li>
<li>Les valeurs des attributs respectent les règles d'écriture.</li>
</ul>

<h4>Nouveau test 8.2.1</h4>
<p>Test 8.2.1 : Pour chaque déclaration de type de document, le code source <ins>généré</ins> de la page vérifie-t-il ces conditions (hors cas particuliers) ?</p>
<ul>
<li><ins>Les balises, attributs et valeurs d’attributs respectent les règles d'écriture,</ins></li>
<li>L'imbrication des balises est conforme,</li>
<li>L'ouverture et la fermeture des balises sont conformes,</li>
<li><ins>Les valeurs d’attribut <code>id</code> sont uniques dans la page,</ins></li>
<li><ins>Les attributs ne sont pas doublés sur un même élément</ins>.</li>
</ul>


<h3>Suppression du test 8.2.2</h3>
<p>
En l’absence de techniques ou d’éléments dans les WCAG indiquant l’interdiction d’utiliser des éléments obsolètes, le test est supprimé. L’usage d’éléments ou attributs obsolètes sera encadré par le cas particulier du critère 8.2 demandant de vérifier si ces éléments en question sont toujours compatibles avec l’accessibilité sur la base de référence retenue.
</p>

<h4>Ancien test 8.2.2</h4>
<p>Test 8.2.2 : Pour chaque déclaration de type de document, le code source de la page ne doit pas utiliser d'éléments obsolètes. Cette règle est-elle respectée (hors cas particuliers) ?</p>


<h3>Modification des cas particuliers 8.7</h3>
<p>
Réorganisation du texte : note sur le dictionnaire officiel renvoyée en bas de section.
</p>

<h4>Anciens cas particuliers 8.7</h4>
<div>
<p>Il y a une gestion de cas particulier sur le changement de langue pour les cas suivants :</p>
<ul>
<li>Nom propre, le critère est non applicable ;</li>
<li>Nom commun de langue étrangère présent dans le dictionnaire officiel de la langue par défaut de la page web, le critère est non applicable (Note : le dictionnaire officiel est celui recommandé par l'académie en charge de la langue en question). Pour la France, par exemple, le lien vers le dictionnaire officiel se trouve sur le site de l'Académie française à l'adresse suivante : http://www.academie-francaise.fr/le-dictionnaire/la-9e-edition. Pour toute demande auprès du service du dictionnaire de l'Académie française, utiliser le formulaire de contact du service du dictionnaire ;</li>
<li>Le terme de langue étrangère soumis, via un champ de formulaire et réaffiché dans la page (par exemple comme indication du terme recherché dans le cas d'un moteur de recherche), le critère est non applicable ;</li>
<li>Passage de texte dont la langue ne peut pas être déterminée : le critère est non applicable ;</li>
<li>Terme ou passage de texte issus d'une langue morte ou imaginaire pour laquelle il n'existe pas d'interprétation vocale : le critère est non applicable.</li>
</ul>
<p>Note : pour les noms communs de langue étrangère, absents dans le dictionnaire officiel de la langue par défaut de la page web, et qui sont passés dans le langage commun (exemple : newsletter) : le critère est applicable, uniquement lorsque l'absence d'indication de langue peut provoquer une incompréhension pour la restitution.</p>
</div>

<h4>Nouveaux cas particuliers 8.7</h4>
<div>
<p>Il y a une gestion de cas particuliers sur le changement de langue pour les cas suivants :</p>
<ul>
<li>Nom propre, le critère est non applicable ;</li>
<li>Nom commun de langue étrangère présent dans le dictionnaire officiel de la langue <ins>(voir note 1 ci-dessous)</ins> par défaut de la page web, le critère est non applicable ;</li>
<li>Le terme de langue étrangère soumis, via un champ de formulaire et rappelé dans la page (par exemple comme indication du terme recherché dans le cas d'un moteur de recherche), le critère est non applicable ;</li>
<li>Passage de texte dont la langue ne peut pas être déterminée : le critère est non applicable ;</li>
<li>Terme ou passage de texte issus d'une langue morte ou imaginaire pour laquelle il n'existe pas d'interprétation vocale : le critère est non applicable.</li> 
</ul>
<p><ins>Note 1 : le dictionnaire officiel est celui recommandé par l'académie en charge de la langue en question. Pour la France, par exemple, le lien vers le dictionnaire officiel se trouve sur le site de l'Académie française à l'adresse suivante : http://www.academie-francaise.fr/le-dictionnaire/la-9e-edition. Pour toute demande auprès du service du dictionnaire de l'Académie française, utiliser le formulaire de contact du service du dictionnaire.</ins></p>
<p>Note 2 : pour les noms communs de langue étrangère, absents dans le dictionnaire officiel de la langue par défaut de la page web, et qui sont passés dans le langage commun (exemple : newsletter) : le critère est applicable, uniquement lorsque l'absence d'indication de langue peut provoquer une incompréhension pour la restitution.</p>
</div>


<h3>Modification du test 8.7.1</h3>
<p>
Modification pour mise en cohérence avec la syntaxe du test existant 8.3.1.
</p>

<h4>Ancien test 8.7.1</h4>
<p>Test 8.7.1 : Dans chaque page web, chaque texte écrit dans une langue différente de la langue par défaut vérifie-t-il une de ces conditions (hors cas particuliers) ?</p>
<ul>
<li>L'indication de langue est donnée sur l'élément contenant le texte.</li>
<li>L'indication de langue est donnée sur un des éléments parents.</li>
</ul>

<h4>Nouveau test 8.7.1</h4>
<p>Test 8.7.1 : Dans chaque page web, chaque texte écrit dans une langue différente de la langue par défaut vérifie-t-il une de ces conditions (hors cas particuliers) ?</p>
<ul>
<li>L'indication de langue est donnée sur l'élément contenant le texte <ins>(attribut <code>lang</code> et/ou <code>xml:lang</code>)</ins>.</li>
<li>L'indication de langue est donnée sur un des éléments parents <ins>(attribut <code>lang</code> et/ou <code>xml:lang</code>)</ins>.</li>
</ul>


<h3>Modification du critère 8.8</h3>
<p>
Modification pour une mise en cohérence avec la syntaxe du critère existant 8.4 qui vérifie la pertinence du code de langue et non du changement de langue lui-même.
</p>

<h4>Ancien critère 8.8</h4>
<p>Critère 8.8 [AA] Dans chaque page web, chaque changement de langue est-il pertinent ?</p>

<h4>Nouveau critère 8.8</h4>
<p>Critère 8.8 Dans chaque page web, le code de langue de chaque changement de langue est-il valide et pertinent ?</p>


<h3>Modification du test 8.8.1</h3>
<p>
Modification pour une mise en cohérence avec la syntaxe du test existant 8.4.1.
</p>
<p>
Fusion des tests 8.8.1 et 8.8.2.
</p>

<h4>Ancien test 8.8.1</h4>
<p>Test 8.8.1 : Dans chaque page web, chaque changement de langue (attribut <code>lang</code> et/ou <code>xml:lang</code>) est-il valide ?</p>

<h4>Nouveau test 8.8.1</h4>
<p>Test 8.8.1 : Pour chaque page web, <ins>le code de langue de chaque changement de langue vérifie-t-il ces conditions</ins> ?</p>
<ul>
<li><ins>Le code de langue est valide.</ins></li>
<li><ins>Le code de langue est pertinent.</ins></li>
</ul>


<h3>Suppression du test 8.8.2</h3>
<p>
Fusion du test 8.8.2 avec 8.8.1.
</p>

<h4>Ancien test 8.2.2</h4>
<p>Dans chaque page web, chaque changement de langue (attribut <code>lang</code> et/ou <code>xml:lang</code>) est-il pertinent ?</p>


<h3>Suppression du test 9.1.1</h3>
<p>
Condition non présente dans les WCAG et non nécessaire si une autre technique que l’utilisation des balises <code>&lt;hx&gt;</code> est mise en place pour satisfaire le contournement des blocs de contenu (critère WCAG 2.4.1 Bypass Block).
</p>

<h4>Ancien test 9.1.1</h4>
<p>Test 9.1.1 : Dans chaque page web, y a-t-il un titre de niveau 1 (balise <code>h1</code> ou balise possédant un rôle ARIA "<code>heading</code>" associé à une propriété <code>aria-level="1"</code>) ?</p>


<h3>Modification du test 9.1.2</h3>
<p>
Modification sémantique.
</p>
<p>
Renumérotation du test 9.1.2 et en test 9.1.1.
</p>

<h4>Ancien test 9.1.2</h4>
<p>Test 9.1.2 : Dans chaque page web, la hiérarchie entre les titres (balise <code>h</code> ou balise possédant un rôle ARIA "<code>heading</code>" associé à une propriété <code>aria-level</code>) est-elle pertinente ?</p>

<h4>Nouveau test 9.1.1</h4>
<p>Test 9.1.1 : Dans chaque page web, la hiérarchie entre les titres <ins>(balise <code>&lt;hx&gt;</code> ou balise possédant un attribut WAI-ARIA <code>role="heading"</code> associé à un attribut WAI-ARIA <code>aria-level</code>)</ins> est-elle pertinente ?</p>


<h3>Suppression du test 9.1.3</h3>
<p>
Condition non présente dans les WCAG et non nécessaire si une autre technique que l’utilisation des balises <code>&lt;hx&gt;</code> est mise en place pour satisfaire le contournement des blocs de contenu (critère WCAG 2.4.1 Bypass Block).
</p>

<h4>Ancien test 9.1.3</h4>
<p>Test 9.1.3 : Dans chaque page web, chaque titre (balise <code>h</code> ou balise possédant un rôle ARIA "<code>heading</code>" associé à une propriété <code>aria-level</code>) nécessaire à la structure de l'information est-il présent ?</p>


<h3>Modification du test 9.1.4</h3>
<p>
Modification sémantique.
</p>
<p>
Renumérotation du test 9.1.4 et en test 9.1.2.
</p>

<h4>Ancien test 9.1.4</h4>
<p>Test 9.1.4 : Dans chaque page web, chaque titre (balise <code>h</code> ou balise possédant un rôle ARIA "<code>heading</code>" associé à une propriété <code>aria-level</code>) est-elle pertinente ?</p>

<h4>Nouveau test 9.1.1</h4>
<p>Test 9.1.2 : Dans chaque page web, <ins>le contenu de</ins> chaque titre <ins>(balise <code>&lt;hx&gt;</code> ou balise possédant un attribut WAI-ARIA <code>role="heading"</code> associé à un attribut WAI-ARIA <code>aria-level</code>)</ins> est-il pertinent ?</p>


<h3>Création du test 9.1.3</h3>
<p>
Prise en compte du critère 1.3.1 des WCAG 2.1 demandant la structuration sémantique des titres présents dans la page.
</p>
<h4>Nouveau test 9.1.3</h4>
<p>Test 9.1.3 : Dans chaque page web, chaque passage de texte constituant un titre est-il structuré à l'aide d'une balise <code>&lt;hx&gt;</code> ou d'une balise possédant un attribut WAI-ARIA <code>role="heading"</code> associé à un attribut WAI-ARIA <code>aria-level</code> ?</p>


<h3>Modification du critère 9.2</h3>
<p>
Ajout d’un cas particulier pour tenir compte des sites utilisant HTML4 ou XHTML.
</p>

<h4>Ancien critère 9.2</h4>
<p>Critère 9.2 [A] Dans chaque page web, la structure du document est-elle cohérente ?</p>

<h4>Nouveau critère 9.2</h4>
<p>Critère 9.2 Dans chaque page web, la structure du document est-elle cohérente (hors cas particuliers) ?</p>


<h3>Création des cas particuliers 9.2</h3>
<p>
Ajout d’un cas particulier pour tenir compte des sites utilisant HTML4 ou XHTML.
</p>

<h4>Nouveaux cas particuliers 9.2</h4>
<div>
<p>Lorsque le doctype déclaré dans la page n'est pas le doctype HTML5, ce critère est non applicable.</p>
</div>


<h3>Modification de la note technique critère 9.2</h3>
<p>
Suppression du test 9.2.2 suite à l'abandon de l'algorithme de titrage tenant compte des éléments sectionnant en HTML5.
</p>
<p>
Prise en compte de l’usage multiple de l’élément <code>&lt;main&gt;</code>.
</p>

<h4>Ancienne note technique</h4>
<div>
<p>L'arborescence du document (<code>outline</code>) est générée par l'utilisation des balises sectionnantes <code>&lt;nav&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;aside&gt;</code> et les sections implicites générées par l'utilisation d'une balise <code>&lt;hx&gt;</code> (lorsque la balise <code>&lt;hx&gt;</code> n'est pas le premier enfant d'une section).</p>
<p>Une balise sectionnante permet de structurer ou de regrouper un contenu, les parties d'un contenu, ou un ensemble de contenus qui peuvent être considérés de manière indépendante du reste du document.</p>
<p>Une zone de navigation dans le site ou dans une rubrique, un sommaire ou la zone de navigation d'une collection de pages (<code>&lt;nav&gt;</code>), un contenu « complémentaire » au contenu principal (<code>&lt;aside&gt;</code>), le contenu principal ou le regroupement de plusieurs contenus comme des articles (<code>&lt;article&gt;</code> ou <code>&lt;section&gt;</code>) un ou des contenus secondaires comme un commentaire, un widget Twitter, un fil RSS (<code>&lt;article&gt;</code> ou <code>&lt;section&gt;</code>) sont autant d'exemples de contenus sectionnés.</p>
<p>Lorsqu'il s'agit de contenus, par opposition à des zones de navigation (<code>&lt;nav&gt;</code>) ou des zones de contenus complémentaires (<code>&lt;aside&gt;</code>), une section devrait posséder si c'est approprié une zone d'en-tête (<code>&lt;header&gt;</code>) et un pied de section (<code>&lt;footer&gt;</code>).</p>
<p>Le premier titre <code>&lt;hx&gt;</code> dans une section donne le « nom » de la section tel qu'il sera reporté dans l'arborescence du document. Les titres suivants (<code>&lt;hx&gt;</code>) créent des sections implicites qui seront présentées comme l'arborescence du contenu de la section.</p>
<p>Une section pouvant être considérée de manière indépendante du reste de la page, l'arborescence générée par les sections implicites (<code>&lt;hx&gt;</code>) est calculée à partir d'un niveau 1 affecté au premier titre de la section.</p>
<p>Lorsqu'elle est utilisée, l'arborescence du document peut donc être différente de l'arborescence du contenu représentée par l'ensemble des titres <code>&lt;hx&gt;</code> de la page, même si les deux structures restent similaires.</p>
<p>Cette arborescence doit donc être représentative de la structure du document et être cohérente avec la structuration du contenu générée par l'utilisation des balises <code>&lt;hx&gt;</code>. La structuration du contenu générée par les balises <code>&lt;hx&gt;</code> pouvant être, théoriquement, déduite de l'arborescence du document, la spécification HTML5 recommande d'utiliser uniquement des titres <code>&lt;h1&gt;</code>. Cet usage est proscrit et le critère 9.1 impose d'utiliser une hiérarchie de titres (<code>&lt;hx&gt;</code>) cohérente.</p>
<p>Si l'arborescence du document (à la condition qu'elle soit cohérente) peut permettre de proposer à l'utilisateur des fonctionnalités d'exploration et de navigation, sur certaines technologies d'assistance, elle influe sur la hiérarchie de titres générée par l'utilisation des balises <code>&lt;hx&gt;</code> en modifiant le niveau des titres restitués.</p>
<p>Pour accompagner la prise en charge progressive de l'arborescence du document et compte tenu du fait que le référentiel exige de disposer, en tout état de cause, d'une structure de contenu (balises <code>&lt;hx&gt;</code>) robuste et cohérente, il est acceptable de considérer le test 9.2.2 comme non applicable lorsqu'il n'est pas possible de s'assurer que l'arborescence du document est parfaitement cohérente.</p>
<p>Dans ce cas, la non-conformité au test devrait être relevée sous la forme d'une simple alerte.</p>
</div>

<h4>Nouvelle note technique</h4>
<div>
<p>La balise <code>&lt;main&gt;</code> peut être utilisée plusieurs fois dans le même document HTML. Néanmoins, il ne peut y avoir en permanence qu’une seule balise visible et lisible par les technologies d’assistances, les autres devant disposer d’un attribut <code>hidden</code> ou d’un style permettant de les masquer aux technologies d’assistances. A noter cependant que l’utilisation d’un style seul restera insuffisant pour assurer l’unicité d’une balise <code>&lt;main&gt;</code> visible en cas de désactivation des feuilles de styles.</p>
</div>


<h3>Modification du test 9.2.1</h3>
<p>
Ajout d’un cas particulier pour tenir compte des sites utilisant HTML4 ou XHTML.
</p>
<p>
Prise en compte de la possibilité d'utiliser des éléments <code>&lt;main&gt;</code> multiples dans un document.
</p>

<h4>Ancien test 9.2.1</h4>
<p>Test 9.2.1 : Dans chaque page web, la structure du document vérifie-t-elle ces conditions ?</p>
<ul>
<li>La zone d'en-tête de la page est structurée via une balise <code>header</code>.</li>
<li>Les zones de navigation principales et secondaires sont structurées via une balise <code>nav</code>.</li>
<li>La balise <code>nav</code> est réservée à la structuration des zones de navigation principales et secondaires.</li>
<li>La zone de contenu principal est structurée via une balise <code>main</code>.</li>
<li>La structure du document utilise une balise <code>main</code> unique.</li>
<li>La zone de pied de page est structurée via une balise <code>footer</code>.</li>
</ul>

<h4>Nouveau test 9.2.1</h4>
<p>Test 9.2.1 : Dans chaque page web, la structure du document vérifie-t-elle ces conditions (hors cas particuliers) ?</p>
<ul>
<li>La zone d'en-tête de la page est structurée via une balise <code>header</code>.</li>
<li>Les zones de navigation principales et secondaires sont structurées via une balise <code>nav</code>.</li>
<li>La balise <code>nav</code> est réservée à la structuration des zones de navigation principales et secondaires.</li>
<li>La zone de contenu principal est structurée via une balise <code>main</code>.</li>
<li>La structure du document utilise une balise <code>main</code> <ins>visible</ins> unique.</li>
<li>La zone de pied de page est structurée via une balise <code>footer</code>.</li>
</ul>


<h3>Suppression du test 9.2.2</h3>
<p>
Suppression du test qui ne vaut pas pour les sites utilisant HTML4 ou XHTML.
</p>
<p>
Abandon de l'algorithme de titrage tenant compte des éléments sectionnant en HTML5.
</p>

<h4>Ancien test 9.2.2</h4>
<p>Test 9.2.2 : Dans chaque page web, l'arborescence du document est-elle cohérente ?</p>


<h3>Modification des références du critère 9.3</h3>
<p>
Suppression de la technique WCAG <a href="http://www.w3.org/TR/WCAG-TECHS/H97.html">H97</a> non pertinente au regard du critère.
</p>


<h3>Modification de la note technique critère 9.3</h3>
<p>
Suppression du paragraphe relatif à l'attribut WAI-ARIA <code>role="definition"</code> qui propose un argumentaire inexact. La spécification HTML5 associe par défaut un attribut WAI-ARIA <code>role="list"</code> à la balise <code>&lt;dl&gt;</code> et il serait possible d’utiliser alors les attributs WAI-ARIA <code>role="listitem"</code>, <code>"term"</code> et <code>"definition"</code> pour constituer un équivalent WAI-ARIA à la balise <code>&lt;dl&gt;</code>.
</p>

<h4>Ancienne note technique</h4>
<div>
<p>Les rôles WAI-ARIA <code>list</code> et <code>listitem</code> peuvent nécessiter l'utilisation des propriétés <code>aria-setsize</code> et <code>aria-posinset</code> dans le cas où l'ensemble de la liste n'est pas disponible via le DOM généré au moment de la consultation.</p>
<p>Bien que possédant un rôle <code>definition</code>, utilisé en combinaison avec la propriété <code>aria-labelledby</code>, WAI-ARIA ne propose pas de rôle équivalent à une liste de définition HTML. Le rôle <code>definition</code> ne peut donc pas être utilisé comme équivalent à une liste de définition HTML <code>dl</code>.</p>
<p>Les rôles <code>tree</code>, <code>tablist</code>, <code>menu</code>, <code>combobox</code> et <code>listbox</code> ne sont pas équivalents à une liste HTML <code>ul</code> ou <code>ol</code>.</p>
<p>Références : <a href="http://www.w3.org/WAI/PF/aria/roles#list">The roles model – list</a></p>
</div>

<h4>Nouvelle note technique</h4>
<div>
<p>Les attributs WAI-ARIA <code>role="list"</code> et <code>"listitem"</code> peuvent nécessiter l'utilisation des attributs <code>aria-setsize</code> et <code>aria-posinset</code> dans le cas où l'ensemble de la liste n'est pas disponible via le DOM généré au moment de la consultation.</p>
<p>Les attributs WAI-ARIA <code>role="tree"</code>, <code>"tablist"</code>, <code>"menu"</code>, <code>"combobox"</code> et <code>"listbox"</code> ne sont pas équivalents à une liste HTML <code>&lt;ul&gt;</code> ou <code>&lt;ol&gt;</code>.</p>
<p><ins>Voir</ins> : <a href="http://www.w3.org/WAI/PF/aria/roles#list">The roles model – list</a></p>
</div>


<h3>Modification du test 9.3.1</h3>
<p>
Modification du test pour signaler qu’il ne vaut que pour des listes qui visuellement ressemblent à des listes (avec marqueurs de liste).
</p>

<h4>Ancien test 9.3.1</h4>
<p>Test 9.3.1 : Dans chaque page web, les informations regroupées sous forme de liste non ordonnée vérifient-elles une de ces conditions ?</p>
<ul>
<li>La liste utilise les balises HTML <code>ul</code> et <code>li</code>.</li>
<li>La liste utilise les rôles ARIA <code>list</code> et <code>listitem</code>.</li>
</ul>

<h4>Nouveau test 9.3.1</h4>
<p>Test 9.3.1 : Dans chaque page web, les informations regroupées <ins>visuellement</ins> sous forme de liste non ordonnée vérifient-elles une de ces conditions ?</p>
<ul>
<li>La liste utilise les balises HTML <code>&lt;ul&gt;</code> et <code>&lt;li&gt;</code>.</li>
<li>La liste utilise les attributs WAI-ARIA <code>role="list"</code> et <code>"listitem"</code>.</li>
</ul>


<h3>Modification du test 9.3.2</h3>
<p>
Modification du test pour signaler qu’il ne vaut que pour des listes qui visuellement ressemblent à des listes (avec marqueurs de liste).
</p>

<h4>Ancien test 9.3.2</h4>
<p>Test 9.3.2 : Dans chaque page web, les informations regroupées sous forme de liste ordonnée vérifient-elles une de ces conditions ?</p>
<ul>
<li>La liste utilise les balises HTML <code>ol</code> et <code>li</code>.</li>
<li>La liste utilise les rôles ARIA <code>list</code> et <code>listitem</code>.</li>
</ul>

<h4>Nouveau test 9.3.2</h4>
<p>Test 9.3.2 : Dans chaque page web, les informations regroupées <ins>visuellement</ins> sous forme de liste ordonnée vérifient-elles une de ces conditions ?</p>
<ul>
<li>La liste utilise les balises HTML <code>&lt;ol&gt;</code> et <code>&lt;li&gt;</code>.</li>
<li>La liste utilise les attributs WAI-ARIA <code>role="list"</code> et <code>"listitem"</code>.</li>
</ul>


<h3>Suppression du critère 9.4 et des tests associés</h3>
<p>
Suppression des critères triple A du RGAA 4.
</p>

<h4>Ancien critère 9.4</h4>
<p>Critère 9.4 [AAA] Dans chaque page web, la première occurrence de chaque abréviation permet-elle d'en connaître la signification ?</p>


<h3>Suppression du critère 9.5 et des tests associés</h3>
<p>
Suppression des critères triple A du RGAA 4.
</p>

<h4>Ancien critère 9.5</h4>
<p>Critère 9.5 [AAA] Dans chaque page web, la signification de chaque abréviation est-elle pertinente ?</p>


<h3>Renumérotation du critère 9.6 en critère 9.4</h3>
<p>
Pour tenir compte de la suppression des critères 9.4 et 9.5, le critère 9.6 est renuméroté en critère 9.4.
</p>


<h3>Modification des cas particuliers 10.4</h3>
<p>
Mise à jour suite à la suppression des tests 10.4.1 et 10.4.2 et prise en compte des cas particuliers prévus dans le critère 1.4.4 des WCAG.
</p>

<h4>Anciens cas particuliers 10.4</h4>
<div>
<p>Il existe une gestion de cas particuliers pour les polices-icônes. Les polices-icônes permettent de créer des icônes à partir d'un fichier de police. Dans ces cas, il est autorisé d'utiliser des tailles en unités fixes pour la propriété CSS <code>font-size</code>.</p>
</div>

<h4>Nouveaux cas particuliers 10.4</h4>
<div>
<p>Dans le cas des textes en image et des sous-titres de vidéo le critère est non applicable.</p>
</div>


<h3>Suppression du test 10.4.2</h3>
<p>
Suppression suite à la reformulation du test 10.4.3.
</p>

<h4>Ancien test 10.4.2</h4>
<p>Test 10.4.2 : Dans les feuilles de styles du site web, pour les types de média <code>screen</code>, <code>tv</code>, <code>handheld</code>, <code>projection</code>, les tailles de caractères utilisent-elles uniquement des unités relatives (hors cas particuliers) ?</p>


<h3>Modification du test 10.4.3</h3>
<p>
Reformulation du test pour mettre en avant différentes conditions de satisfaction du test.
</p>
<p>
Renumérotation du test 10.4.3 en test 10.4.2.
</p>

<h4>Ancien test 10.4.3</h4>
<p>Test 10.4.3 : Dans chaque page web, l'augmentation de la taille des caractères jusqu'à 200%, au moins, ne doit pas provoquer de perte d'information. Cette règle est-elle respectée ?</p>

<h4>Nouveau test 9.3.2</h4>
<p>Test 10.4.2 : Dans chaque page web, l'augmentation de la taille des caractères jusqu'à 200%, au moins, ne doit pas provoquer de perte d'information. Cette règle est-t-elle respectée selon une de ces conditions (hors cas particuliers) ?</p>
<ul>
<li>Lors de l'utilisation de la fonction d'agrandissement du texte du navigateur.</li>
<li>Lors de l'utilisation des fonctions de zoom graphique du navigateur.</li>
<li>Lors de l'utilisation d'un composant d'interface propre au site permettant d'agrandir le texte ou de zoomer.</li>
</ul>


<h3>Création du test 10.4.3</h3>
<p>
Ajout d'un test pour s'assurer de la portée de la technique mise en oeuvre dans la gestion de l'agrandissement à 200%.
</p>

<h4>Nouveau test 9.3.2</h4>
<p>Test 10.4.3 : Dans chaque page web, l'augmentation de la taille des caractères jusqu'à 200%, au moins, doit être possible pour l’ensemble du texte dans la page. Cette règle est-t-elle respectée selon une de ces conditions (hors cas particuliers) ?</p>
<ul>
<li>Lors de l'utilisation de la fonction d'agrandissement du texte du navigateur.</li>
<li>Lors de l'utilisation des fonctions de zoom graphique du navigateur.</li>
<li>Lors de l'utilisation d'un composant d'interface propre au site permettant d'agrandir le texte ou de zoomer.</li>
</ul>


<h3>Modification du test 10.6.1</h3>
<p>
Prise en compte de l’ensemble des conditions présentes dans la technique <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G183">G183</a> des WCAG 2.1 précédemment prise en compte dans le test 10.7.3.
</p>

<h4>Ancien test 10.6.1</h4>
<p>Test 10.6.1 : Dans chaque page web, chaque lien texte signalé uniquement par la couleur, et dont la nature n'est pas évidente, a-t-il un rapport de contraste supérieur ou égal à 3:1 par rapport au texte environnant ?</p>

<h4>Nouveau test 10.6.1</h4>
<p>Test 10.6.1 : Dans chaque page web, chaque lien texte signalé uniquement par la couleur, et dont la nature n'est pas évidente, vérifie-t-il ces conditions ?</p>
<ul>
<li>La couleur du lien à un rapport de contraste supérieur ou égal à 3:1 par rapport au texte environnant.</li>
<li>Le lien dispose d'une indication visuelle au survol autre qu'un changement de couleur.</li>
<li>Le lien dispose d'une indication visuelle au focus autre qu'un changement de couleur.</li>
</ul>


<h3>Suppression de la note technique critère 10.7</h3>
<p>
Prise en compte de l’ensemble des techniques prévues par WCAG.
</p>

<h4>Ancienne note technique</h4>
<div>
<p>WCAG propose plusieurs techniques visant à améliorer la visibilité du focus :</p>
<ul>
<li>C15: Using CSS to change the presentation of a user interface component when it receives focus ;</li>
<li>G195: Using an author-supplied, highly visible focus indicator ;</li>
<li>SCR31: Using script to change the background color or border of the element with focus.</li>
</ul>
<p>Bien que ces techniques apportent un bénéfice important à l'utilisateur elles ne sont pas rendues obligatoires par le RGAA du fait de leur impact très fort sur le design et d'éventuelles interactions avec des dispositifs tiers (plugin ou indication native du navigateurs). En tout état de cause elles devraient être proposées via un mécanisme de personnalisation.</p>
<p>Note importante : même si ces techniques sont utilisées elles ne permettent pas de s'abstenir de garantir que l'indication visuelle du focus (propriété <code>outline</code>) n'est ni dégradée ni supprimée. En effet, l'<code>outline</code> controlé et pris en charge par le navigateur apparaît comme la seule solution suffisamment robuste car elle ne dépend pas de l'auteur.</p>
</div>


<h3>Modification du test 10.7.1</h3>
<p>
Prise en compte de l’ensemble des techniques WCAG permettant la mise à disposition d’un style au focus.
</p>

<h4>Ancien test 10.7.1</h4>
<p>Test 10.7.1 : Pour chaque élément recevant le focus, l'indication visuelle du navigateur ne doit pas être supprimée (propriété CSS <code>outline</code>, <code>outline-color</code>, <code>outline-width</code>, <code>outline-style</code>). Cette règle est-elle respectée ?</p>

<h4>Nouveau test 10.7.1</h4>
<p>Test 10.7.1 : Pour chaque élément recevant le focus, <ins>la prise de focus vérifie-t-elle une de ces conditions</ins> ?</p>
<ul>
<li><ins>Le style du focus natif du navigateur n'est pas supprimé ou dégradé.</ins></li>
<li><ins>Un style du focus défini par l'auteur est visible.</ins></li>
</ul>


<h3>Suppression du test 10.7.2</h3>
<p>
Suppression suite à la mise à jour du test 10.7.1 et à l'absence d'élément dans les WCAG permettant de juger du caractère dégradé hors tests des contrastes.
</p>

<h4>Ancien test 10.7.2</h4>
<p>Test 10.7.2 : Pour chaque élément recevant le focus, l'indication visuelle du navigateur ne doit pas être dégradée (propriété CSS outline-color). Cette règle est-elle respectée ?</p>


<h3>Suppression du test 10.7.3</h3>
<p>
Suppression suite à la mise à jour du test 10.6.1 qui intègre désormais la présence d’une indication visuelle autre que la couleur au survol et au focus.
</p>

<h4>Ancien test 10.7.3</h4>
<p>Test 10.7.3 : Chaque lien dans un texte signalé par la couleur uniquement vérifie-t-il ces conditions ?</p>
<ul>
<li>Une indication visuelle autre que la couleur permet de signaler la prise de focus au clavier.</li>
<li>Une indication visuelle autre que la couleur permet de signaler le survol du lien à la souris.</li>
</ul>


<h3>Suppression des critères 10.8 à 10.12 et des tests associés</h3>
<p>
Suppression des critères triple A du RGAA 4.
</p>


<h3>Suppression des cas particuliers 10.11</h3>
<p>Suppression du critère 10.11.</p>

<h4>Anciens cas particuliers 10.11</h4>
<div>
<p>Il existe une gestion de cas particulier pour les langues chinoises, japonaises et coréennes. Dans ces situations, le nombre de caractères de référence est de 40.</p>
</div>

<h4>Ancien critère 10.8</h4>
<p>Critère 10.8 [AAA] Dans chaque page web, le choix de la couleur de fond et de police du texte est-il contrôlable par l'utilisateur ?</p>

<h4>Ancien critère 10.9</h4>
<p>Critère 10.9 [AAA] Pour chaque page web, le texte ne doit pas être justifié. Cette règle est-elle respectée ?</p>

<h4>Ancien critère 10.10</h4>
<p>Critère 10.10 [AAA] Pour chaque page web, en affichage plein écran et avec une taille de police à 200%, chaque bloc de texte reste-t-il lisible sans l'utilisation de la barre de défilement horizontal ?</p>

<h4>Ancien critère 10.11</h4>
<p>Critère 10.11 [AAA] Pour chaque page web, les blocs de texte ont-ils une largeur inférieure ou égale à 80 caractères (hors cas particuliers) ?</p>

<h4>Ancien critère 10.12</h4>
<p>Critère 10.12 [AAA] Pour chaque page web, l'espace entre les lignes et les paragraphes est-il suffisant ?</p>


<h3>Modification du critère 10.13</h3>
<p>
Simplification de l’intitulé pour faciliter sa compréhension.
</p>
<p>
Renumérotation du critère 10.13 en critère 10.8.
</p>

<h4>Ancien critère 10.13</h4>
<p>Critère 10.13 [A] Pour chaque page web, les textes cachés sont-ils correctement affichés pour être restitués par les technologies d'assistance ?</p>

<h4>Nouveau critère 10.8</h4>
<p>Critère 10.8 Pour chaque page web, les contenus cachés ont-ils vocation à être ignorés par les technologies d'assistance ?</p>


<h3>Modification du test 10.13.1</h3>
<p>
Modification suite à la mise à jour de l’intitulé du critère 10.13.
</p>
<p>
Renumérotation du test 10.13.1 en test 10.8.1.
</p>

<h4>Ancien test 10.13.1</h4>
<p>Test 10.13.1 : Dans chaque page web, chaque texte caché vérifie-t-il une de ces conditions ?</p>
<ul>
<li>Le texte n'a pas vocation à être restitué par les technologies d'assistance.</li>
<li>Le texte est rendu visible sur action de l'utilisateur sur l'élément lui-même ou un élément précédant le texte caché.</li>
<li>Le texte caché fait partie d'un motif de conception défini par l'API ARIA, prenant en charge l'état affiché ou masqué du contenu.</li>
</ul>

<h4>Nouveau test 10.8.1</h4>
<p>Test 10.8.1 : Dans chaque page web, chaque <ins>contenu</ins> caché vérifie-t-il une de ces conditions ?</p>
<ul>
<li>Le contenu caché a vocation à être ignoré par les technologies d'assistance.</li>
<li>Le contenu caché n’a pas vocation à être ignoré par les technologies d’assistances et est rendu restituable par les technologies d'assistance suite à une action de l'utilisateur réalisable au clavier ou par tout dispositif de pointage sur un élément précédent le contenu caché ou suite à un repositionnement du focus dessus.</li>
</ul>


<h3>Modification des références du critère 10.14</h3>
<p>
Suppression de la technique WCAG <a href="http://www.w3.org/TR/WCAG-TECHS/G111.html">G111</a> non pertinente au regard du critère, car elle concerne une information donnée uniquement par la couleur.
</p>


<h3>Renumérotation du critère 10.14 en critère 10.9</h3>
<p>
Pour tenir compte de la suppression des critères 10.8 à 10.12, le critère 10.14 est renuméroté en critère 10.9.
</p>


<h3>Modification des références du critère 10.15</h3>
<p>
Suppression de la technique WCAG <a href="http://www.w3.org/TR/WCAG-TECHS/G111.html">G111</a> non pertinente au regard du critère, car elle concerne une information donnée uniquement par la couleur.
</p>


<h3>Renumérotation du critère 10.15 en critère 10.10</h3>
<p>
Pour tenir compte de la suppression des critères 10.8 à 10.12, le critère 10.15 est renuméroté en critère 10.10.
</p>


<h3>Création du critère 10.11 et des tests associés</h3>
<p>
Prise en compte du nouveau critère WCAG 2.1 : 1.4.10 Reflow (AA).
</p>

<h4>Nouveau critère 10.11</h4>
<p>Critère 10.11 Pour chaque page web, les contenus peuvent-ils être présentés sans avoir recours à la fois à un défilement vertical pour une fenêtre ayant une hauteur de 256px ou une largeur de 320px (hors cas particuliers) ?</p>

<h4>Nouveau test 10.11.1</h4>
<p>Test 10.11.1 : Pour chaque page web, lorsque le contenu dont le sens de lecture est horizontal est affiché dans une fenêtre réduite à une largeur de 320px, l'ensemble des informations et des fonctionnalités sont-elles disponibles sans aucun défilement horizontal (hors cas particuliers) ?</p>

<h4>Nouveau test 10.11.2</h4>
<p>Test 10.11.2 : Pour chaque page web, lorsque le contenu dont le sens de lecture est vertical est affiché dans une fenêtre réduite à une hauteur de 256px, l'ensemble des informations et des fonctionnalités sont-elles disponibles sans aucun défilement vertical (hors cas particuliers) ?</p>

<h4>Cas particuliers</h4>
<div>
<p>Font exception à ce critère les contenus dont l'agencement requiert deux dimensions pour être compris ou utilisés comme :</p>
<ul>
<li>Les images, les graphiques ou les vidéos.</li>
<li>Les jeux (jeux de plateforme, par exemple).</li>
<li>Les présentations (type diaporama, par exemple).</li>
<li>Les tableaux de données (complexes).</li>
<li>Les interfaces où il est nécessaire d'avoir un ascenseur horizontal lors de la manipulation de l'interface.</li>
</ul>
<p>Note : la majorité des navigateurs sur les systèmes d'exploitation mobile (Android, iOS) ne gère pas correctement la redistribution en cas de zoom. Dans ce contexte le critère sera considéré comme non applicable sur ces environnements.</p>
</div>

<h4>Références</h4>
<p>EN 301 549 V2.1.2 / WCAG 2.1</p>
<ul>
<li>9.1.4.10 / 1.4.10 Reflow (AA)</li>
</ul>


<h3>Création du critère 10.12 et des tests associés</h3>
<p>
Prise en compte du nouveau critère WCAG 2.1 : 1.4.12 Text Spacing (AA).
</p>

<h4>Nouveau critère 10.12</h4>
<p>Critère 10.12 Dans chaque page web, les propriétés d'espacement du texte peuvent-elles être redéfinies par l'utilisateur sans perte de contenu ou de fonctionnalité (hors cas particuliers) ?</p>

<h4>Nouveau test 10.12.1</h4>
<p>Test 10.12.1 : Dans chaque page web, le texte reste-t-il lisible lorsque l'affichage est modifié selon ces conditions (hors cas particuliers) ?</p>
<ul>
<li>L'espacement entre les lignes (<code>line-height</code>) est augmenté jusqu'à 1,5 fois la taille de la police ;</li>
<li>L'espacement suivant les paragraphes (balise <code>&lt;p&gt;</code>) est augmenté jusqu'à 2 fois la taille de la police ;</li>
<li>L'espacement des lettres (<code>letter-spacing</code>) est augmenté jusqu'à 0,12 fois la taille de la police ;</li>
<li>L'espacement des mots (<code>word-spacing</code>) est augmenté jusqu'à 0,16 fois la taille de la police ;</li>
</ul>

<h4>Cas particuliers</h4>
<div>
<p>Font exception à ce critère les contenus pour lesquels l'utilisateur n'a pas de possibilité de personnalisation :</p>
<ul>
<li>Les sous-titres directement intégrés à une vidéo.</li>
<li>Les images texte.</li>
<li>Le texte au sein d'une balise <code>&lt;canvas&gt;</code>.</li>
</ul>
</div>

<h4>Références</h4>
<p>EN 301 549 V2.1.2 / WCAG 2.1</p>
<ul>
<li>9.1.4.12 / 1.4.12 Text Spacing (AA)</li>
</ul>
<p>Technique(s) suffisante(s) et/ou échec(s) WCAG 2.1 : C35, C36, C8, C21.</p>


<h3>Création du critère 10.13 et des tests associés</h3>
<p>
Prise en compte du nouveau critère WCAG 2.1 : 1.4.13 Content on Hover or Focus (AA).
</p>

<h4>Nouveau critère 10.13</h4>
<p>Critère 10.13 Dans chaque page web, les contenus additionnels apparaissant à la prise de focus ou au survol d'un composant d'interface sont-ils contrôlables par l'utilisateur (hors cas particuliers) ?</p>

<h4>Nouveau test 10.13.1</h4>
<p>Test 10.13.1 : Chaque contenu additionnel devenant visible à la prise de focus ou au survol d'un composant d'interface peut-il être masqué par une action utilisateur sans déplacer le focus ou le pointeur de la souris (hors cas particuliers) ?</p>

<h4>Nouveau test 10.13.2</h4>
<p>Test 10.13.2 : Chaque contenu additionnel qui apparaît au survol d'un composant d'interface peut-il être survolé par le pointeur de la souris sans disparaître (hors cas particuliers) ?</p>

<h4>Nouveau test 10.13.3</h4>
<p>Test 10.13.3 : Chaque contenu additionnel qui apparaît à la prise de focus ou au survol d'un composant d'interface vérifie-t-il une de ces conditions (hors cas particuliers) ?</p>
<ul>
<li>Le contenu additionnel reste visible jusqu'à ce que l'utilisateur retire le pointeur souris ou le focus du contenu additionnel et du composant d'interface ayant déclenché son apparition.</li>
<li>Le contenu additionnel reste visible jusqu'à ce l'utilisateur déclenche une action masquant ce contenu sans déplacer le focus ou le pointeur souris du composant d'interface ayant déclenché son apparition.</li>
<li>Le contenu additionnel reste visible jusqu'à ce qu'il ne soit plus valide.</li>
</ul>

<h4>Cas particuliers</h4>
<div>
<p>Lorsque le contenu additionnel est contrôlé par l'agent utilisateur (par exemple, attribut title ou validation native de formulaire) ou correspond à une fenêtre modale conforme au motif de conception WAI-ARIA dialog, le critère 10.13 est non applicable.</p>
<p>Lorsque le contenu additionnel ne masque ou ne remplace aucun contenu porteur d'information le test 10.13.1 est non applicable.</p>
</div>

<h4>Références</h4>
<p>EN 301 549 V2.1.2 / WCAG 2.1</p>
<ul>
<li>9.1.4.13 / 1.4.13 Content on Hover or Focus (AA)</li>
</ul>
<p>Technique(s) suffisante(s) et/ou échec(s) WCAG 2.1 : F95.</p>


<h3>Création du critère 10.14 et des tests associés</h3>
<p>
Prise en compte des contenus additionnels gérés au moyen de styles CSS.
</p>

<h4>Nouveau critère 10.14</h4>
<p>Critère 10.14 Dans chaque page web, les contenus additionnels apparaissant via les styles CSS uniquement peuvent-ils être rendus visibles au clavier et par tout dispositif de pointage ?</p>

<h4>Nouveau test 10.14.1</h4>
<p>Test 10.14.1 : Dans chaque page web, les contenus additionnels apparaissant au survol d'un composant d'interface via les styles CSS respectent-ils si nécessaire une de ces conditions ?</p>
<ul>
<li>Les contenus additionnels apparaissent également à l'activation du composant via le clavier et tout dispositif de pointage.</li>
<li>Les contenus additionnels apparaissent également à la prise de focus du composant.</li>
<li>Les contenus additionnels apparaissent également par le biais de l'activation ou de la prise de focus d'un autre composant.</li>
</ul>

<h4>Nouveau test 10.14.2</h4>
<p>Test 10.14.2 : Dans chaque page web, les contenus additionnels apparaissant au focus d'un composant d'interface via les styles CSS respectent-ils si nécessaire une de ces conditions ?</p>
<ul>
<li>Les contenus additionnels apparaissent également à l'activation du composant via le clavier et tout dispositif de pointage.</li>
<li>Les contenus additionnels apparaissent également au survol du composant.</li>
<li>Les contenus additionnels apparaissent également par le biais de l'activation ou du survol d'un autre composant.</li>
</ul>

<h4>Références</h4>
<p>EN 301 549 V2.1.2 / WCAG 2.1</p>
<ul>
<li>9.2.1.1 / 2.1.1 Keyboard (A)</li>
</ul>
<p>Technique(s) suffisante(s) et/ou échec(s) WCAG 2.1 : G202.</p>


<h3>Modification du test 11.1.1</h3>
<p>
Référence directe à la balise <label>.
</p>
<p>
Modification de l'ordre des conditions pour reprendre l'ordre de calcul du nom accessible tel que prévu dans la spécification accname 1.1.
</p>
<p>
Nouvelle condition de test pour prendre en compte la technique <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G167">G167</a> des WCAG.
</p>

<h4>Ancien test 11.1.1</h4>
<p>Test 11.1.1 :Chaque champ de formulaire vérifie-t-il une de ces conditions ?</p>
<ul>
<li>Le champ de formulaire possède un attribut <code>title</code>.</li>
<li>Une étiquette (balise <code>&lt;label&gt;</code>) est associée au champ de formulaire.</li>
<li>Le champ de formulaire possède une propriété <code>aria-label</code>.</li>
<li>Le champ de formulaire possède une propriété <code>aria-labelledby</code> référençant un passage de texte identifié.</li>
</ul>

<h4>Nouveau test 11.1.1</h4>
<p>Test 11.1.1 : Chaque champ de formulaire vérifie-t-il une de ces conditions ?</p>
<ul>
<li>Le champ de formulaire possède un attribut WAI-ARIA <code>aria-labelledby</code> référençant un passage de texte identifié.</li>
<li>Le champ de formulaire possède un attribut WAI ARIA <code>aria-label</code>.</li>
<li>Une balise <code>&lt;label&gt;</code> ayant un attribut <code>for</code> est associée au champ de formulaire.</li>
<li>Le champ de formulaire possède un attribut <code>title</code>.</li>
<li>Un bouton adjacent au champ de formulaire lui fournit une étiquette visible et un attribut WAI-ARIA <code>aria-label</code>, <code>aria-labelledby</code> ou <code>title</code> lui fournit un nom accessible.</li>
</ul>


<h3>Modification du test 11.1.2</h3>
<p>
Référence directe à la balise <label>.
</p>
<p>
Ajout d'une condition en cas de présence d'un attribut <code>aria-label</code> ou d'un attribut <code>aria-labelledby</code>.
</p>

<h4>Ancien test 11.1.2</h4>
<p>Test 11.1.2 : Chaque champ de formulaire, associé à une étiquette (balise <code>&lt;label&gt;</code>), vérifie-t-il ces conditions ?</p>
<ul>
<li>Le champ de formulaire possède un attribut <code>id</code>.</li>
<li>La valeur de l'attribut <code>id</code> est unique.</li>
<li>La balise <code>&lt;label&gt;</code> possède un attribut <code>for</code>.</li>
<li>La valeur de l'attribut <code>for</code> est égale à la valeur de l'attribut <code>id</code> du champ de formulaire associé.</li>
</ul>

<h4>Nouveau test 11.1.2</h4>
<p>Test 11.1.2 : Chaque champ de formulaire associé à une balise <code>&lt;label&gt;</code> ayant un attribut <code>for</code>, vérifie-t-il ces conditions ?</p>
<ul>
<li>Le champ de formulaire possède un attribut <code>id</code>.</li>
<li>La valeur de l'attribut <code>for</code> est égale à la valeur de l'attribut <code>id</code> du champ de formulaire associé.</li>
</ul>


<h3>Suppression du test 11.1.3</h3>
<p>
Suppression du test suite à la modification de l'entrée de glossaire "Passage de texte" qui précise désormais la présence de l'attribut <code>id</code>, son unicité et l'utilisation de sa valeur dans l'attribut <code>aria-labelledby</code> du champ correspondant. 
</p>

<h4>Ancien test 11.1.3</h4>
<p>Test 11.1.3 : Chaque champ de formulaire associé à une étiquette via la propriété ARIA <code>aria-labelledby</code>, vérifie-t-il ces conditions ?</p>
<ul>
<li>L'étiquette possède un attribut <code>id</code>.</li>
<li>La valeur de l'attribut <code>id</code> est unique.</li>
<li>Les valeurs de la propriété ARIA <code>aria-labelledby</code> sont égales à la valeur des attributs <code>id</code> des passages de textes utilisés pour créer l'étiquette.</li>
</ul>


<h3>Modification du test 11.1.4</h3>
<p>
Modification du test en raison de la prise en compte de l'usage de balise <code>&lt;label&gt;</code> masqué et suppression de l'expression redondante ARIA aria-xxx.
</p>
<p>
Renumérotation du test 11.1.4 en test 11.1.3.
</p>

<h4>Ancien test 11.1.4</h4>
<p>Test 11.1.4 : Chaque champ de formulaire qui utilise une propriété ARIA <code>aria-label</code> ou <code>aria-labelledby</code> est-il, si nécessaire, accompagné d'un passage de texte visible et accolé au champ permettant de comprendre la nature de la saisie attendue ?</p>

<h4>Nouveau test 11.1.3</h4>
<p>Test 11.1.3 : Chaque champ de formulaire ayant une étiquette dont le contenu n'est pas visible ou à proximité (masqué, <code>aria-label</code>) ou qui n’est pas accolé au champ (<code>aria-labelledby</code>), vérifie-t-il une de ses conditions ?</p>
<ul>
<li>Le champ de formulaire possède un attribut <code>title</code> dont le contenu permet de comprendre la nature de la saisie attendue.</li>
<li>Le champ de formulaire est accompagné d'un passage de texte accolé au champ qui devient visible à la prise de focus permettant de comprendre la nature de la saisie attendue.</li>
<li>Le champ de formulaire est accompagné d'un passage de texte visible accolé au champ permettant de comprendre la nature de la saisie attendue.</li>
</ul>


<h3>Suppression du test 11.1.5</h3>
<p>
Suppression de ce test car aucune technique WCAG correspondante à ce test et ce point est déjà couvert par la pertinence de l'étiquette (critère 11.2) pour les cas où le <code>placeholder</code> serait non pertinent et restituté comme nom accessible.
</p>

<h4>Ancien test 11.1.5</h4>
<p>Test 11.1.5 : Chaque champ de formulaire qui utilise un attribut <code>title</code> comme étiquette, vérifie-t-il une de ces conditions ?</p>
<ul>
<li>L'attribut <code>placeholder</code> est absent.</li>
<li>L'attribut <code>placeholder</code> est identique à l'attribut title.</li>
</ul>


<h3>Création des cas particuliers 11.2</h3>
<p>
Ajout de cas particuliers concernant les exceptions introduites par le critère WCAG 2.5.3 Label in Name.
</p>

<h4>Nouveaux cas particuliers 11.2</h4>
<div>
<p>Il existe une gestion de cas particulier pour le test 11.2.5 lorsque :</p>
<ul>
<li>La ponctuation et les lettres majuscules sont présentes dans le texte de l’intitulé visible : elles peuvent être ignorées dans le nom accessible sans porter à conséquence.</li>
<li>Le texte de l’intitulé visible sert de symbole : le texte ne doit pas être interprété littéralement au niveau du nom accessible. Le nom doit exprimer la fonction véhiculée par le symbole (par exemple, "B" au niveau d'un éditeur de texte aura pour nom accessible "Mettre en gras", le signe ">" en fonction du contexte signifiera "Suivant" ou "Lancer la vidéo"). Le cas des symboles mathématiques fait cependant exception (voir la note ci-dessous).</li>
</ul>
<p>Note : si l'étiquette visible représente une expression mathématique, les symboles mathématiques peuvent être repris littéralement pour servir d'étiquette au nom accessible (ex. : "A>B"). Il est laissé à l'utilisateur le soin d'opérer la correspondance entre l'expression et ce qu'il doit épeler compte tenu de la connaissance qu'il a du fonctionnement de son logiciel de saisie vocale ("A plus grand que B" ou "A supérieur à B").</p>
</div>


<h3>Modification du test 11.2.1</h3>
<p>
Référence directe à la balise <code>&lt;label&gt;</code> car les autres techniques pour associer une étiquette sont traitées par les tests suivants.
</p>

<h4>Ancien test 11.2.1</h4>
<p>Test 11.2.1 : Chaque étiquette (balise <code>&lt;label&gt;</code>) permet-elle de connaître la fonction exacte du champ de formulaire auquel elle est associée ?</p>

<h4>Nouveau test 11.2.1</h4>
<p>Test 11.2.1 : Chaque balise <code>&lt;label&gt;</code> permet-elle de connaître la fonction exacte du champ de formulaire auquel elle est associée ?</p>


<h3>Modification du test 11.2.4</h3>
<p>
Remplacement de "étiquette" par la nouvelle entrée de glossaire "<a href="/publications/rgaa-accessibilite/methode-rgaa/glossaire/#passage-de-texte">Passage de texte</a>".
</p>

<h4>Ancien test 11.2.4</h4>
<p>Test 11.2.4 : Chaque étiquette implémentée via la propriété ARIA <code>aria-labelledby</code> permet-elle de connaître la fonction exacte du champ de formulaire auquel elle est associée ?</p>

<h4>Nouveau test 11.2.4</h4>
<p>Test 11.2.4 : Chaque passage de texte associé via l'attribut WAI-ARIA <code>aria-labelledby</code> permet-il de connaître la fonction exacte du champ de formulaire auquel il est associé ?</p>


<h3>Création du test 11.2.5</h3>
<p>
Prise en compte du critère WCAG 2.1 “Label in name”.
</p>

<h4>Nouveau test 11.2.5</h4>
<p>Test 11.2.5 : Chaque champ de formulaire ayant un intitulé visible vérifie-t-il ces conditions (hors cas particuliers) ?</p>
<ul>
<li>S'il est présent, le contenu de l'attribut WAI-ARIA <code>aria-label</code> du champ de formulaire contient au moins l'intitulé visible.</li>
<li>S'il est présent, le passage de texte lié au champ de formulaire via un attribut WAI-ARIA <code>aria-labelledby</code> contient au moins l'intitulé visible.</li>
<li>S'il est présent, le contenu de l'attribut <code>title</code> du champ de formulaire contient au moins l'intitulé visible.</li>
<li>S'il est présent le contenu de la balise <code>&lt;label&gt;</code> associé au champ de formulaire contient au moins l'intitulé visible.</li>
</ul>


<h3>Création du test 11.2.6</h3>
<p>
Prise en compte de la possibilité d'utiliser un bouton adjacent au champ de formulaire comme étiquette visible.
</p>

<h4>Nouveau test 11.2.6</h4>
<p>Test 11.2.6 : Chaque bouton adjacent au champ de formulaire qui fournit une étiquette visible permet-il de connaître la fonction exacte du champ de formulaire auquel il est associé ?</p>


<h3>Modification du critère 11.4</h3>
<p>
Ajout d'un cas particulier pour les tests 11.4.2 et 11.4.3.
</p>

<h4>Ancien critère 11.4</h4>
<p>Critère 11.4 [A] Dans chaque formulaire, chaque étiquette de champ et son champ associé sont-ils accolés ?</p>

<h4>Nouveau critère 11.4</h4>
<p>Critère 11.4 Dans chaque formulaire, chaque étiquette de champ et son champ associé sont-ils accolés (hors cas particuliers) ?</p>


<h3>Création des cas particuliers 11.4</h3>
<p>
Ajout des cas particuliers pour les tests 11.4.2 et 11.4.3.
</p>

<h4>Nouveaux cas particuliers 11.4</h4>
<div>
<p>Les tests 11.4.2 et 11.4.3 seront considérés comme non applicable :</p>
<ul>
<li>Dans le cas où l'étiquette mélange une portion de texte qui se lit de droite à gauche avec une portion de texte qui se lit de gauche à droite.</li>
<li>Dans le cas où un formulaire contient des labels de plusieurs langues qui se liraient de droite à gauche et inversement. Par exemple un formulaire de commande en arabe qui propose une liste de cases à cocher de produit en langue française ou mixant des produits en langue arabe et en langue française.</li>
<li>Dans le cas où les champs de type radio ou checkbox et les balises ayant un attribut WAI-ARIA role="checkbox", role="radio" ou role="switch" ne sont pas visuellement présentés sous forme de bouton radio ou de case à cocher</li>
<li>Dans le cas où les champs seraient utilisés dans un contexte où il pourrait être légitime, du point de vue de l'expérience utilisateur, de placer les étiquettes de manière différente à celle requise dans les tests 11.4.2 et 11.4.3.</li>
</ul>
</div>

<h3>Création du test 11.4.2</h3>
<p>
Test ajouté suite à la prise en compte des contraintes présentes dans la technique <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G162">G162</a> des WCAG.
</p>

<h4>Nouveau test 11.4.2</h4>
<p>Test 11.4.2 : Chaque étiquette accolée à un champ (à l'exception des case à cocher, bouton radio ou balise ayant un attribut WAI-ARIA <code>role="checkbox"</code>, <code>role="radio"</code> ou <code>role="switch"</code>), vérifie-t-elle ces conditions (hors cas particuliers) ?</p>
<ul>
<li>L'étiquette est visuellement accolée immédiatement au-dessus ou à gauche du champ de formulaire lorsque le sens de lecture de la langue de l'étiquette est de gauche à droite.</li>
<li>L'étiquette est visuellement accolée immédiatement au-dessus ou à droite du champ de formulaire lorsque le sens de lecture de la langue de l'étiquette est de droite à gauche.</li>
</ul>


<h3>Création du test 11.4.3</h3>
<p>
Test ajouté suite à la prise en compte des contraintes présentes dans la technique <a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G162">G162</a> des WCAG.
</p>

<h4>Nouveau test 11.4.3</h4>
<p>Test 11.4.3 : Chaque étiquette accolée à un champ de type checkbox ou radio ou à une balise ayant un attribut WAI-ARIA <code>role="checkbox"</code>, <code>role="radio"</code> ou <code>role="switch"</code>, vérifie-t-elle ces conditions (hors cas particuliers) ?</p>
<ul>
<li>L'étiquette est visuellement accolée immédiatement au-dessus ou à droite du champ de formulaire lorsque le sens de lecture de la langue de l'étiquette est de gauche à droite.</li>
<li>L'étiquette est visuellement accolée immédiatement au-dessus ou à gauche du champ de formulaire lorsque le sens de lecture de la langue de l'étiquette est de droite à gauche.</li>
</ul>


<h3>Modification du critère 11.5</h3>
<p>
Modification de l’intitulé du critère suite à la modification de l'entrée de glossaire "Champs de même nature".
</p>

<h4>Ancien critère 11.5</h4>
<p>Critère 11.5 [A] Dans chaque formulaire, les informations de même nature sont-elles regroupées, si nécessaire ?</p>

<h4>Nouveau critère 11.5</h4>
<p>Critère 11.5 Dans chaque formulaire, les champs de même nature sont-ils regroupés, si nécessaire ?</p>


<h3>Modification des références du critère 11.5</h3>
<p>
Ajout de la technique WCAG <a href="https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA17">ARIA17</a> à propos du rôle de regroupement.
</p>


<h3>Modification du test 11.5.1</h3>
<p>
Prise en compte de la modification de l’entrée de glossaire "Bloc d'informations de même nature" et de la technique WCAG <a href="https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA17">ARIA17</a>.
</p>

<h4>Ancien test 11.5.1</h4>
<p>Test 11.5.1 : Dans chaque formulaire, les informations de même nature sont-elles regroupées, si nécessaire ?</p>

<h4>Nouveau test 11.5.1</h4>
<p>Test 11.5.1 : Dans chaque formulaire, les champs de même nature vérifient-ils l’une de ces conditions, si nécessaire ?</p>
<ul>
<li>Les champs de même nature sont regroupés dans une balise <code>&lt;fieldset&gt;</code>.</li>
<li>Les champs de même nature sont regroupés dans une balise possédant un attribut WAI-ARIA <code>role="group"</code>.</li>
<li>Les champs de même nature de type radio (<code>&lt;input type="radio"&gt;</code> ou balises possédant un attribut WAI-ARIA <code>role="radio"</code>) sont regroupés dans une balise possédant un attribut WAI-ARIA <code>role="radiogroup"</code> ou <code>"group"</code>.</li>
</ul>


<h3>Modification des références du critère 11.6</h3>
<p>
Ajout de la technique WCAG <a href="https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA17">ARIA17</a> à propos du rôle de regroupement.
</p>


<h3>Modification du test 11.6.1</h3>
<p>
Modification de l’intitulé du critère suite au remplacement de l'entrée de glossaire "Groupement de champ de formulaire" par "champs de même nature" et à la création de l'entrée "Légende".
</p>

<h4>Ancien test 11.6.1</h4>
<p>Test 11.6.1 : Chaque regroupement de champs de formulaire possède-t-il une légende ?</p>

<h4>Nouveau test 11.6.1</h4>
<p>Test 11.6.1 : Chaque regroupement de champs de même nature possède-t-il une légende ?</p>


<h3>Modification du critère 11.7</h3>
<p>
Modification de l’intitulé du critère suite au remplacement de l'entrée de glossaire "Groupement de champ de formulaire" par "Champs de même nature".
</p>

<h4>Ancien critère 11.7</h4>
<p>Critère 11.7 [A] Dans chaque formulaire, chaque légende associée à un groupement de champs de formulaire est-elle pertinente ?</p>

<h4>Nouveau critère 11.7</h4>
<p>Critère 11.7 Dans chaque formulaire, chaque légende associée à un regroupement de champs de même nature est-elle pertinente ?</p>


<h3>Modification du test 11.7.1</h3>
<p>
Modification de l’intitulé du critère suite au remplacement de l'entrée de glossaire "Groupement de champ de formulaire" par "Champs de même nature".
</p>

<h4>Ancien test 11.7.1</h4>
<p>Test 11.7.1 : Dans chaque formulaire, chaque légende associée à un groupement de champs de formulaire est-elle pertinente ?</p>

<h4>Nouveau test 11.7.1</h4>
<p>Test 11.7.1 : Chaque légende associée à un regroupement de champs de même nature est-elle pertinente ?</p>


<h3>Modification du critère 11.8</h3>
<p>
Modification de l’intitulé du critère suite au remplacement de l'entrée de glossaire "Liste de choix" par "Items de même nature d’une liste de choix".
</p>

<h4>Ancien critère 11.8</h4>
<p>Critère 11.8 [A] Dans chaque formulaire, chaque liste de choix est-elle structurée de manière pertinente ?</p>

<h4>Nouveau critère 11.8</h4>
<p>Critère 11.8 Dans chaque formulaire, les items de même nature d'une liste de choix sont-ils regroupées de manière pertinente ?</p>


<h3>Création de la note technique critère 11.8</h3>
<p>
Précision concernant l'impossibilité de créer des groupes d’options au moyen de WAI-ARIA.
</p>

<h4>Nouvelle note technique</h4>
<div>
<p>Il est possible d’utiliser une balise ayant un attribut WAI-ARIA <code>role="listbox"</code> en remplacement d’une balise <code>&lt;select&gt;</code>. En revanche, il est impossible de créer des groupes d’options au moyen de WAI-ARIA. De ce fait, une liste nécessitant un regroupement d’options et structurée à l’aide d’une balise ayant un attribut WAI-ARIA <code>role="listbox"</code> sera considérée comme non conforme au critère 11.8.</p>
</div>


<h3>Modification du test 11.8.1</h3>
<p>
Modification de l’intitulé du critère suite au remplacement de l'entrée de glossaire "Liste de choix" par "Items de même nature d’une liste de choix".
</p>

<h4>Ancien test 11.8.1</h4>
<p>Test 11.8.1 : Dans chaque formulaire, pour chaque liste de choix (balise <code>&lt;select&gt;</code>), les items sont-ils regroupés avec une balise <code>&lt;optgroup&gt;</code>, si nécessaire ?</p>

<h4>Nouveau test 11.8.1</h4>
<p>Test 11.8.1 : Pour chaque balise <code>&lt;select&gt;</code>, les items de même nature d'une liste de choix sont-ils regroupés avec une balise <code>&lt;optgroup&gt;</code>, si nécessaire ?</p>


<h3>Modification du test 11.8.2</h3>
<p>
Modification de l’intitulé du critère suite au remplacement de l'entrée de glossaire "Liste de choix" par "Items de même nature d’une liste de choix".
</p>

<h4>Ancien test 11.8.2</h4>
<p>Test 11.8.2 : Dans chaque liste de choix (balise <code>&lt;select&gt;</code>), chaque regroupement d'items de liste (balise <code>&lt;optgroup&gt;</code>) possède-t-il un attribut <code>label</code> ?</p>

<h4>Nouveau test 11.8.2</h4>
<p>Test 11.8.2 : Dans chaque balise <code>&lt;select&gt;</code>, chaque balise <code>&lt;optgroup&gt;</code> possède-t-elle un attribut <code>label</code> ?</p>


<h3>Modification du test 11.8.3</h3>
<p>
Modification de l’intitulé du critère suite au remplacement de l'entrée de glossaire "Liste de choix" par "Items de même nature d’une liste de choix".
</p>

<h4>Ancien test 11.8.3</h4>
<p>Test 11.8.3 : Pour chaque regroupement d'items de liste (balise <code>&lt;optgroup&gt;</code>) ayant un attribut <code>label</code>, le contenu de l'attribut <code>label</code> est-il pertinent ?</p>

<h4>Nouveau test 11.8.3</h4>
<p>Test 11.8.3 : Pour chaque balise <code>&lt;optgroup&gt;</code> ayant un attribut <code>label</code>, le contenu de l'attribut <code>label</code> est-il pertinent ?</p>


<h3>Création des cas particuliers 11.9</h3>
<p>
Ajout de cas particuliers concernant les exceptions introduites par le critère WCAG 2.5.3 Label in Name.
</p>

<h4>Nouveaux cas particuliers 11.4</h4>
<div>
<p>Pour le test 11.9.2, voir cas particuliers critère 11.2.</p>
</div>


<h3>Modification des références du critère 11.9</h3>
<p>
Ajout du critère WCAG 2.1 "<a href="https://www.w3.org/TR/WCAG21/#label-in-name">Label in name</a>".
</p>

<h4>Références</h4>
<p>EN 301 549 V2.1.2 / WCAG 2.1</p>
<ul>
<li>9.2.5.3 / 2.5.3 Label in Name (A)</li>
<li>9.4.1.2 / 4.1.2 Name, Role, Value (A)</li>
</ul>


<h3>Modification du test 11.9.1</h3>
<p>
Ajouts d'une condition suite à la modification de l’entrée de glossaire "Bouton (formulaire)".
</p>
<p>
Modification de l'ordre des conditions pour reprendre l'ordre de calcul du nom accessible.
</p>

<h4>Ancien test 11.9.1</h4>
<p>Test 11.9.1 : Dans chaque formulaire, l'intitulé de chaque bouton vérifie-t-il ces conditions ?</p>
<ul>
<li>Le contenu de l'attribut <code>value</code> des boutons de formulaire de type <code>submit</code>, <code>reset</code> ou <code>button</code> est pertinent.</li>
<li>Le contenu de la balise <code>&lt;button&gt;</code> est pertinent.</li>
<li>Le contenu de l'attribut <code>title</code> est pertinent.</li>
<li>Le contenu de la propriété ARIA <code>aria-label</code> est pertinent.</li>
<li>Un passage de texte est lié au bouton via un attribut <code>aria-labelledby</code>.</li>
</ul>

<h4>Nouveau test 11.9.1</h4>
<p>Test 11.9.1 : L'intitulé de chaque bouton est-il pertinent ?</p>
<ul>
<li>S'il est présent, le contenu de l'attribut WAI-ARIA <code>aria-label</code> est pertinent.</li>
<li>S'il est présent, le passage de texte lié au bouton via un attribut WAI-ARIA <code>aria-labelledby</code> est pertinent.</li>
<li>S'il est présent, le contenu de l'attribut <code>value</code> d'une balise <code>&lt;input&gt;</code> de type <code>submit</code>, <code>reset</code> ou <code>button</code> est pertinent.</li>
<li>S'il est présent, le contenu de la balise <code>&lt;button&gt;</code> est pertinent.</li>
<li>S'il est présent, le contenu de l'attribut <code>alt</code> d'une balise <code>&lt;input&gt;</code> de type <code>image</code> est pertinent.</li>
<li>S'il est présent, le contenu de l'attribut <code>title</code> est pertinent.</li>
</ul>


<h3>Suppression du test 11.9.2</h3>
<p>
Suppression du test suite à la modification de l'entrée de glossaire "Passage de texte" qui précise désormais la présence de l'attribut <code>id</code>, son unicité et l'utilisation de sa valeur dans l'attribut <code>aria-labelledby</code> du champ correspondant. 
</p>

<h4>Ancien test 11.9.2</h4>
<p>Test 11.9.2 : Dans chaque formulaire, l'intitulé de chaque bouton implémenté via une propriété ARIA aria-labelledby vérifie-t-il ces conditions ?</p>
<ul>
<li>Le passage de texte servant d'intitulé possède un attribut <code>id</code>.</li>
<li>La valeur de l'attribut <code>id</code> est unique.</li>
<li>Les valeurs de la propriété ARIA <code>aria-labelledby</code> sont égales à la valeur des attributs <code>id</code> des passages de textes utilisés pour créer l'intitulé.</li>
<li>Le passage de texte est pertinent.</li>
</ul>


<h3>Création du test 11.9.2</h3>
<p>
Prise en compte du critère WCAG 2.1 "<a href="https://www.w3.org/TR/WCAG21/#label-in-name">Label in name</a>".
</p>

<h4>Nouveau test 11.9.2</h4>
<p>Test 11.9.2 : Chaque bouton affichant un intitulé visible vérifie-t-il ces conditions (hors cas particuliers) ?</p>
<ul>
<li>S'il est présent, le contenu de l'attribut WAI-ARIA <code>aria-label</code> contient au moins l'intitulé visible.</li>
<li>S'il est présent, le passage de texte lié au bouton via un attribut WAI-ARIA <code>aria-labelledby</code> contient au moins l'intitulé visible.</li>
<li>S'il est présent, le contenu de l'attribut <code>value</code> d'une balise <code>&lt;input&gt;</code> de type <code>submit</code>, <code>reset</code> ou <code>button</code> contient au moins l'intitulé visible.</li>
<li>S'il est présent, le contenu de la balise <code>&lt;button&gt;</code> contient au moins l'intitulé visible.</li>
<li>S'il est présent, le contenu de l'attribut <code>alt</code> d'une balise <code>&lt;input&gt;</code> de type <code>image</code> contient au moins l'intitulé visible.</li>
<li>S'il est présent, le contenu de l'attribut <code>title</code> contient au moins l'intitulé visible.</li>
</ul>


<h3>Modification du critère 11.10</h3>
<p>
Prise en compte du cas particulier pour le test 11.10.1.
</p>

<h4>Ancien critère 11.5</h4>
<p>Critère 11.10 [A] Dans chaque formulaire, le contrôle de saisie est-il utilisé de manière pertinente ?</p>

<h4>Nouveau critère 11.5</h4>
<p>Critère 11.10 Dans chaque formulaire, le contrôle de saisie est-il utilisé de manière pertinente (hors cas particuliers) ?</p>


<h3>Création des cas particuliers 11.10</h3>
<p>
Précision de l'application du test 11.10.1.
</p>

<h4>Nouveaux cas particuliers 11.10</h4>
<div>
<p>Le test 11.10.1 sera considéré comme non applicable lorsque le formulaire comporte un seul champ de formulaire ou qu'il indique les champs optionnels de manière :</p>
<ul>
<li>Visible ;</li>
<li>Dans la balise <code>&lt;label&gt;</code> ou dans la légende associée au champ.</li>
</ul>
<p>Dans le cas où l'ensemble des champs d'un formulaire sont obligatoires, le test 11.10.1 reste applicable.</p>
</div>


<h3>Modification du test 11.10.1</h3>
<p>
Prise en compte de la mise à disposition d'information sur le caractère obligatoire des champs préalablement à la saisie.
</p>

<h4>Ancien test 11.10.1</h4>
<p>Test 11.10.1 : Pour chaque formulaire, les indications de champs obligatoires vérifient-elles une de ces conditions ?</p>
<ul>
<li>L'indication de champ obligatoire est donnée par un passage de texte situé avant le champ de formulaire.</li>
<li>L'indication de champ obligatoire est donnée via un attribut <code>required</code>.</li>
<li>L'indication de champ obligatoire est donnée via la propriété ARIA <code>aria-required</code>.</li>
<li>L'indication de champ obligatoire est donnée dans l'étiquette du champ de formulaire.</li>
<li>L'indication de champ obligatoire est donnée par un passage de texte lié par la propriété ARIA <code>aria-describedby</code>.</li>
</ul>

<h4>Nouveau test 11.10.1</h4>
<p>Test 11.10.1 : Les indications du caractère obligatoire de la saisie des champs vérifient-elles une de ces conditions (hors cas particuliers) ?</p>
<ul>
<li>Une indication de champ obligatoire est visible et permet d'identifier nommément le champ concerné préalablement à la validation du formulaire.</li>
<li>Le champ obligatoire dispose de l'attribut aria-required="true" ou required préalablement à la validation du formulaire.</li>
</ul>


<h3>Modification du test 11.10.2</h3>
<p>
Prise en compte de la mise à disposition d'information sur le caractère obligatoire des champs préalablement à la saisie.
</p>

<h4>Ancien test 11.10.2</h4>
<p>Test 11.10.2 : Chaque indication de champ obligatoire qui utilise les propriétés ARIA <code>aria-label</code>, <code>aria-required</code> ou l'attribut <code>required</code> doit être accompagnée d'une indication visuelle explicite dans l'étiquette ou dans un passage de texte lié au champ par la propriété ARIA <code>aria-describedby</code> ou <code>aria-labelledby</code>, cette règle est-elle respectée ?</p>

<h4>Nouveau test 11.10.2</h4>
<p>Test 11.10.2 : Les champs obligatoires ayant l'attribut <code>aria-required="true"</code> ou <code>required</code> vérifient-ils une de ces conditions ?</p>
<ul>
<li>Une indication de champ obligatoire est visible et située dans l'étiquette associé au champ préalablement à la validation du formulaire.</li>
<li>Une indication de champ obligatoire est visible et située dans le passage de texte associé au champ préalablement à la validation du formulaire.</li>
</ul>


<h3>Suppression du test 11.10.3</h3>
<p>
Suppression du test suite à la modification de l'entrée de glossaire "Passage de texte" qui précise désormais la présence de l'attribut <code>id</code>, son unicité et l'utilisation de sa valeur dans l'attribut <code>aria-labelledby</code> du champ correspondant. 
</p>

<h4>Ancien test 11.10.3</h4>
<p>Test 11.10.3 : Chaque indication de champ obligatoire qui utilise un passage de texte lié par la propriété ARIA <code>aria-describedby</code> ou <code>aria-labelledby</code> vérifie-t-elle ces conditions ?</p>
<ul>
<li>Le passage de texte est identifié via un attribut <code>id</code>.</li>
<li>La valeur de l'attribut <code>id</code> est unique.</li>
<li>Les valeurs de la propriété ARIA <code>aria-describedby</code> ou <code>aria-labelledby</code> sont égales à la valeur des attributs <code>id</code>.</li>
</ul>


<h3>Modification du test 11.10.4</h3>
<p>
Prise en compte de la mise à disposition d'information sur le caractère obligatoire des champs préalablement à la saisie.
</p>
<p>
Renumérotation du test 11.10.4 en test 11.10.3.
</p>

<h4>Ancien test 11.10.4</h4>
<p>Test 11.10.4 : Pour chaque formulaire, les erreurs de saisie vérifient-elles une de ces conditions ?</p>
<ul>
<li>L'erreur de saisie est indiquée dans l'étiquette du champ de formulaire.</li>
<li>L'erreur de saisie est indiquée par un passage de texte avant le champ de formulaire.</li>
<li>Le champ de formulaire possède un type qui produit de manière automatique un message d'erreur de saisie.</li>
<li>L'erreur de saisie est indiquée par un passage de texte lié par la propriété ARIA <code>aria-describedby</code>.</li>
<li>L'erreur de saisie est indiquée via la propriété ARIA <code>aria-invalid</code>.</li>
</ul>

<h4>Nouveau test 11.10.3</h4>
<p>Test 11.10.3 : Les messages d'erreur indiquant l'absence de saisie d'un champ obligatoire vérifient-ils une de ces conditions ?</p>
<ul>
<li>le message d'erreur indiquant l'absence de saisie d'un champ obligatoire est visible et permet d'identifier nommément le champ concerné.</li>
<li>Le champ obligatoire dispose de l'attribut <code>aria-invalid="true"</code>.</li>
</ul>


<h3>Modification du test 11.10.5</h3>
<p>
Prise en compte de la mise à disposition d'information sur le caractère obligatoire des champs préalablement à la saisie.
</p>
<p>
Renumérotation du test 11.10.5 en test 11.10.4.
</p>

<h4>Ancien test 11.10.5</h4>
<p>Test 11.10.5 : Chaque indication d'erreur de saisie réalisée grâce à la propriété ARIA <code>aria-label</code> ou <code>aria-invalid</code> doit être accompagnée d'une indication visuelle explicite dans l'étiquette : balise <code>label</code>, texte visible à proximité ou passage de texte lié au champ par la propriété ARIA <code>aria-describedby</code> ou <code>aria-labelledby</code>. Cette règle est-elle respectée ?</p>  

<h4>Nouveau test 11.10.4</h4>
<p>Test 11.10.4 : Les champs obligatoires ayant l'attribut <code>aria-invalid="true"</code> vérifient-ils une de ces conditions ?</p>
<ul>
<li>Une indication de champ obligatoire est visible et située dans l'étiquette associée au champ.</li>
<li>Une indication de champ obligatoire est visible et située dans le passage de texte associé au champ.</li>
</ul>


<h3>Suppression du test 11.10.6</h3>
<p>
Suppression du test suite à la modification de l'entrée de glossaire "Passage de texte" qui précise désormais la présence de l'attribut <code>id</code>, son unicité et l'utilisation de sa valeur dans l'attribut <code>aria-labelledby</code> du champ correspondant. 
</p>

<h4>Ancien test 11.10.6</h4>
<p>Test 11.10.6 : Chaque erreur de saisie qui utilise un passage de texte lié par la propriété ARIA aria-describedby ou aria-labelledby vérifie-t-elle ces conditions ?</p>  
<ul>
<li>Le passage de texte est identifié via un attribut <code>id</code>.</li>
<li>La valeur de l'attribut <code>id</code> est unique.</li>
<li>Les valeurs de la propriété ARIA <code>aria-describedby</code> ou <code>aria-labelledby</code> sont égales aux valeurs des attributs <code>id</code> des passages de texte utilisés pour créer l'étiquette.</li>
</ul>


<h3>Modification du test 11.10.7</h3>
<p>
Prise en compte de la mise à disposition d'information sur le caractère obligatoire des champs préalablement à la saisie.
</p>
<p>
Renumérotation du test 11.10.7 en test 11.10.5.
</p>

<h4>Ancien test 11.10.7</h4>
<p>Test 11.10.7 : Pour chaque formulaire, chaque champ obligatoire vérifie-t-il une de ces conditions ?</p>  
<ul>
<li>Le type de données et/ou de format est indiqué, si nécessaire, dans l'étiquette du champ.</li>
<li>Le type de données et/ou de format est indiqué, si nécessaire, par un passage de texte avant le champ de formulaire.</li>
<li>Le type de données et/ou de format est indiqué, si nécessaire, par un passage de texte lié par la propriété ARIA <code>aria-describedby</code>.</li>
</ul>

<h4>Nouveau test 11.10.5</h4>
<p>Test 11.10.5 : Les instructions et indications du type de données et/ou de format obligatoires vérifient-elles une de ces conditions ?</p>
<ul>
<li>Une instruction ou une indication du type de données et/ou de format obligatoire est visible et permet d'identifier nommément le champ concerné préalablement à la validation du formulaire.</li>
<li>Une instruction ou une indication du type de données et/ou de format obligatoire est visible dans l'étiquette ou le passage de texte associé au champ préalablement à la validation du formulaire.</li>
</ul>


<h3>Création du test 11.10.6</h3>
<p>
Prise en compte de la mise à disposition d'information sur le caractère obligatoire des champs préalablement à la saisie.
</p>

<h4>Nouveau test 11.10.6</h4>
<p>Test 11.10.6 : Les messages d'erreurs fournissant une instruction ou une indication du type de données et/ou de format obligatoire des champs vérifient-ils une de ces conditions ?</p>
<ul>
<li>Le message d'erreur fournissant une instruction ou une indication du type de données et/ou de format obligatoires est visible et identifie le champ concerné.</li>
<li>Le champ dispose de l'attribut <code>aria-invalid="true"</code>.</li>
</ul>


<h3>Modification du test 11.10.8</h3>
<p>
Prise en compte de la mise à disposition d'information sur le caractère obligatoire des champs préalablement à la saisie.
</p>
<p>
Renumérotation du test 11.10.8 en test 11.10.7.
</p>

<h4>Ancien test 11.10.8</h4>
<p>Test 11.10.8 : Chaque indication du type de données et/ou de format réalisée grâce à la propriété ARIA <code>aria-label</code> doit être accompagnée d'une indication visuelle explicite dans l'étiquette ou dans un passage de texte lié au champ par la propriété ARIA <code>aria-describedby</code> ou <code>aria-labelledby</code>, cette règle est-elle respectée ?</p>  

<h4>Nouveau test 11.10.7</h4>
<p>Test 11.10.7 : Les champs ayant l'attribut <code>aria-invalid="true"</code> dont la saisie requiert un type de données et/ou de format obligatoires vérifient-ils une de ces conditions ?</p>
<ul>
<li>Une instruction ou une indication du type de données et/ou de format obligatoire est visible et située dans la balise <code>&lt;label&gt;</code> associée au champ.</li>
<li>Une instruction ou une indication du type de données et/ou de format obligatoire est visible et située dans le passage de texte associé au champ.</li>
</ul>


<h3>Suppression du test 11.10.9</h3>
<p>
Suppression du test suite à la modification de l'entrée de glossaire "Passage de texte" qui précise désormais la présence de l'attribut <code>id</code>, son unicité et l'utilisation de sa valeur dans l'attribut <code>aria-labelledby</code> du champ correspondant. 
</p>

<h4>Ancien test 11.10.9</h4>
<p>Test 11.10.9 : Chaque indication de type de données et/ou de format qui utilise un passage de texte lié par la propriété ARIA aria-describedby ou aria-labelledby vérifie-t-elle ces conditions ?</p>  
<ul>
<li>Le passage de texte est identifié via un attribut <code>id</code>.</li>
<li>La valeur de l'attribut <code>id</code> est unique.</li>
<li>Les valeurs de la propriété ARIA <code>aria-describedby</code> ou <code>aria-labelledby</code> sont égales aux valeurs des attributs <code>id</code>.</li>
</ul>


<h3>Suppression du test 11.10.10</h3>
<p>
Suppression en l'absence d'une technique WCAG justifiant la nécessité d'une identité des contenus du placeholder et du title.
</p>

<h4>Ancien test 11.10.10</h4>
<p>Test 11.10.10 : Chaque champ de formulaire qui utilise un attribut title comme aide à la saisie, vérifie-t-il une de ces conditions ?</p>  
<ul>
<li>L'attribut placeholder est absent.</li>
<li>L'attribut placeholder est identique à l'attribut title.</li>
</ul>


<h3>Modification note technique critère 11.11</h3>
<p>
Suppression de l'avertissement concernant le non support de l'API Contraint Validation qui n'est plus d'actualité et mise à jour de la référence.
</p>

<h4>Ancienne note technique</h4>
<div>
<p>Certains types de formulaire HTML5 proposent des messages d'aide à la saisie automatique, par exemple les types <code>url</code> et <code>email</code> affichent un message du type « veuillez saisir une adresse e-mail valide » dans le cas où l'adresse e-mail saisie ne correspond pas au format attendu. Ces messages sont personnalisables via l'API Constraint Validation qui peut permettre de personnaliser les messages d'erreur et valider le critère. Attention cependant, le support de cette API n'est pas encore stabilisé. Le type <code>pattern</code> qui permet d'effectuer automatiquement des contrôles de format (via des expressions régulières) affiche également un message d'aide, mais ce dernier est personnalisable via l'attribut <code>title</code>, ce dispositif valide le critère.</p>
<p>Référence : WHATWG - 4.10.21.3 The constraint validation API.</p>
</div>

<h4>Nouvelle note technique</h4>
<div>
<p>Certains types de formulaire HTML5 proposent des messages d'aide à la saisie automatique, par exemple les types <code>url</code> et <code>email</code> affichent un message du type « veuillez saisir une adresse e-mail valide » dans le cas où l'adresse e-mail saisie ne correspond pas au format attendu. Ces messages sont personnalisables via l'API Constraint Validation qui peut permettre de personnaliser les messages d'erreur et valider le critère. Le type <code>pattern</code> qui permet d'effectuer automatiquement des contrôles de format (via des expressions régulières) affiche également un message d'aide, mais ce dernier est personnalisable via l'attribut <code>title</code>, ce dispositif valide le critère.</p>
<p>Référence : <ins>HTML 5.2 - 4.10.20.3 The constraint validation API</ins>.</p>
</div>


<h3>Modification du critère 11.12</h3>
<p>
Prise en compte plus complète des cas d'usage définis par le critère 3.3.4 des WCAG.
</p>

<h4>Ancien critère 11.5</h4>
<p>Critère 11.12 [AA] Pour chaque formulaire, les données à caractère financier, juridique ou personnel peuvent-elles être modifiées, mises à jour ou récupérées par l'utilisateur ?</p>

<h4>Nouveau critère 11.5</h4>
<p>Critère 11.12 Pour chaque formulaire qui modifie ou supprime des données, ou qui transmet des réponses à un test ou à un examen, ou dont la validation a des conséquences financières ou juridiques, la saisie des données vérifie-t-elle une de ces conditions ?</p>


<h3>Modification du test 11.12.1</h3>
<p>
Modification du test suite à la mise à jour du critère 11.12 et à la création de l’entrée de glossaire "Modifier ou annuler les données et les actions effectuées".
</p>
<p>
Remplacement de "personnel" par "les réponses de l’utilisateur à un test ou un examen" conformément à WCAG pour le cas confirmation.
</p>

<h4>Ancien test 11.12.1</h4>
<p>Test 11.12.1 : Pour chaque formulaire, la saisie des données à caractère financier, juridique ou personnelle vérifie-t-elle une de ces conditions ?</p>  
<ul>
<li>L'utilisateur peut modifier ou annuler les données et les actions effectuées sur ces données après leur saisie.</li>
<li>L'utilisateur peut vérifier et corriger les données avant la validation du formulaire.</li>
<li>Un mécanisme de confirmation explicite, via un champ de formulaire ou une étape supplémentaire, est présent.</li>
</ul>

<h4>Nouveau test 11.12.1</h4>
<p>Test 11.12.1 : Pour chaque formulaire qui modifie ou supprime des données, ou qui transmet des réponses à un test ou un examen, ou dont la validation a des conséquences financières ou juridiques, la saisie des données vérifie-t-elle une de ces conditions ?</p>
<ul>
<li>L'utilisateur peut modifier ou annuler les données et les actions effectuées sur ces données <ins>après la validation du formulaire</ins>.</li>
<li>L'utilisateur peut vérifier et corriger les données avant <ins>la validation d'un formulaire en plusieurs étapes</ins>.</li>
<li>Un mécanisme de confirmation explicite, <ins>via une case à cocher (balise <code>&lt;input&gt;</code> de type <code>checkbox</code> ou balise ayant un attribut WAI-ARIA <code>role="checkbox"</code>) ou une étape supplémentaire</ins>, est présent.</li>
</ul>


<h3>Modification du test 11.12.2</h3>
<p>
Modification du test suite à la mise à jour du critère 11.12 et à la création de l’entrée de glossaire "Modifier ou annuler les données et les actions effectuées".
</p>
<p>
Prise en compte du cas de la modification de données existantes tel que prévu dans les WCAG.
</p>

<h4>Ancien test 11.12.2</h4>
<p>Test 11.12.2 : Pour chaque formulaire , la suppression des données à caractère financier, juridique ou personnelle vérifie-t-elle une de ces conditions ?</p>  
<ul>
<li>Un mécanisme permet de récupérer les données supprimées par l'utilisateur.</li>
<li>Un mécanisme de confirmation explicite de la suppression, via un champ de formulaire ou une étape supplémentaire, est présent.</li>
</ul>

<h4>Nouveau test 11.12.2</h4>
<p>Test 11.12.2 : Chaque formulaire dont la validation modifie ou supprime des données à caractère financier, juridique ou personnel vérifie-t-il une de ces conditions ?</p>
<ul>
<li>Un mécanisme permet de récupérer les données supprimées <ins>ou modifiées</ins> par l'utilisateur.</li>
<li>Un mécanisme <ins>de demande</ins> de confirmation explicite de la suppression <ins>ou de la modification</ins>, via un champ de formulaire ou une étape supplémentaire, est <ins>proposé</ins>.</li>
</ul>


<h3>Création du critère 11.13 et du test associé</h3>
<p>
Prise en compte du nouveau critère WCAG 2.1 : 1.3.5 Identify Input Purpose (AA).
</p>

<h4>Nouveau critère 11.13</h4>
<p>Critère 11.13 La finalité d'un champ de saisie peut-elle être déduite pour faciliter le remplissage automatique des champs avec les données de l'utilisateur ?</p>

<h4>Nouveau test 11.13.1</h4>
<p>Test 11.13.1 : Chaque champ de formulaire dont l'objet se rapporte à une information concernant l'utilisateur vérifie-t-il ces conditions ?</p>
<ul>
<li>Le champ de formulaire possède un attribut <code>autocomplete</code>.</li>
<li>L'attribut <code>autocomplete</code> est pourvu d'une valeur présente dans la liste des valeurs possibles pour l'attribut <code>autocomplete</code> associés à un champ de formulaire.</li>
<li>La valeur indiquée pour l'attribut <code>autocomplete</code> est pertinente au regard du type d'information attendu.</li>
</ul>

<h4>Nouvelle note technique</h4>
<div>
<p>La liste des valeurs possibles pour l'attribut autocomplete repose sur l<a href="https://www.w3.org/TR/WCAG21/#input-purposes">a liste des valeurs présentes dans la spécifications WCAG2.1</a> qui reprend elle-même la liste des <a href="https://www.w3.org/TR/html52/sec-forms.html#autofill-processing-model">valeurs de type « field name » de la spécification HTML5.2</a>. Le critère WCAG demande à ce que l'une de ces valeurs soit présente pour qualifier un champ de saisie concernant l'utilisateur.</p>
<p>Ce que le critère WCAG laisse implicite, ce sont les différentes règles de construction possibles pour obtenir une valeur (simple ou composée) pour l'attribut autocomplete. C'est cependant l'affaire du développeur de fournir à l'attribut autocomplete une valeur ou un ensemble de valeurs valides au regard des exigences de l'algorithme fourni par la spécification HTML5.2. Ainsi, un attribut <code>autocomplete</code> ne peut contenir qu'une seule valeur de type <code>field name</code>, comme "<code>name</code>" ou "<code>street-address</code>". On peut avoir également un ensemble composé de différentes valeurs comme, par exemple, <code>autocomplete="shipping name"</code> ou <code>autocomplete="section-software shipping street-address"</code> : "<code>section-software</code>" renvoie à une valeur de type <code>scope</code> et "<code>shipping</code>" à une valeur de type <code>hint set</code>, mais toujours une seule valeur de type <code>field name</code>.</p>
</div>

<h4>Références</h4>
<p>EN 301 549 V2.1.2 / WCAG 2.1</p>
<ul>
<li>9.1.3.5/ 1.3.5 Identify Input Purpose (AA)</li>
</ul>
<p>Technique(s) suffisante(s) et/ou échec(s) WCAG 2.1 : H98.</p>

<!--
<h3>Modification des cas particuliers 12.1</h3>
<p>Prise en compte explicite du cas où l’exactitude graphique est “essentielle” tel que prévu par le critère 1.4.5 des WCAG 2.1.</p>

<h4>Anciens cas particuliers 12.1</h4>
<p>Il existe une gestion de cas particulier lorsque le site web est constitué d'une seule page ou d'un nombre très limité de pages (cf. note) pour lesquels la fonction de recherche du navigateur dans le contenu est considérée comme équivalente à un moteur de recherche. Dans ce cas-là, le critère est non applicable.</p>
<p>Note : l'appréciation d'un nombre très limité de pages devrait réserver ce cas particulier à un site de 2 ou 3 pages, par exemple, avec un volume de contenu peu important.</p>

<h4>Nouveaux cas particuliers 12.1</h4>
<p>Il existe une gestion de cas particulier lorsque le site web est constitué d'une seule page ou d'un nombre très limité de pages (cf. note) pour lesquels la fonction de recherche du navigateur dans le contenu est considérée comme équivalente à un moteur de recherche. Dans ce cas-là, le critère est non applicable.</p>
<p>Note : l'appréciation d'un nombre très limité de pages devrait réserver ce cas particulier à un site de 2 ou 3 pages, par exemple, avec un volume de contenu peu important.</p>
-->

<h3>Modification du test 12.2.1</h3>
<p>
Les tests 12.2.1 et 12.2.2 sont redondants car ils disent la même chose pour deux types d’élément, menu et barres de navigation, dont le premier n’est qu’un cas spécifique du second. Ces deux types d’élément peuvent donc être rassemblés en un seul et même test. D’où la modification du test 12.2.1 et la suppression du test 12.2.2, et la fusion des deux entrées de glossaire "Barre de navigation" et "Menu de navigation".
</p>

<h4>Ancien test 12.2.1</h4>
<p>Test 12.2.1 : Dans chaque ensemble de pages, chaque page ayant un menu de navigation vérifie-t-elle ces conditions (hors cas particuliers) ?</p>  
<ul>
<li>Le menu de navigation est toujours à la même place dans la présentation.</li>
<li>Le menu de navigation se présente toujours dans le même ordre relatif dans le code source.</li>
</ul>

<h4>Nouveau test 12.2.1</h4>
<p>Test 12.2.1 : Dans chaque ensemble de pages, chaque page disposant d'un menu ou de barres de navigation vérifie-t-elle ces conditions (hors cas particuliers) ? </p>
<ul>
<li>Le menu <ins>ou les barres de navigation sont</ins> toujours à la même place dans la présentation.</li>
<li>Le menu <ins>ou les barres de navigation se présentent</ins> toujours dans le même ordre relatif dans le code source.</li>
</ul>


<h3>Suppression du test 12.2.2</h3>
<p>
Les tests 12.2.1 et 12.2.2 sont redondants car ils disent la même chose pour deux types d’élément, menu et barres de navigation, dont le premier n’est qu’un cas spécifique du second. Ces deux types d’élément peuvent donc être rassemblés en un seul et même test. D’où la modification du test 12.2.1 et la suppression du test 12.2.2, et la fusion des deux entrées de glossaire "Barre de navigation" et "Menu de navigation".
</p>

<h4>Ancien test 12.2.2</h4>
<p>Test 12.2.2 : Chaque barre de navigation répétée dans un ensemble de pages vérifie-t-elle ces conditions (hors cas particuliers) ? </p>  
<ul>
<li>La barre de navigation est toujours à la même place dans la présentation.</li>
<li>La barre de navigation se présente toujours dans le même ordre relatif dans le code source.</li>
</ul>


<h3>Suppression du critère 12.3 et des tests associés</h3>
<p>
Le critère 12.3 est redondant avec le critère 12.2. En effet, soit la notion de "présentation cohérente" correspond à une caractérisation spécifique au niveau de WCAG, ce qui n’est pas le cas; soit cette notion correspond au principe de barres et menus de navigation toujours à la même place, ce qui est déjà couvert par le critère 12.2.
</p>

<h4>Ancien critère 12.3</h4>
<p>Critère 12.3 [AA] Dans chaque ensemble de pages, le menu et les barres de navigation ont-ils une présentation cohérente (hors cas particuliers) ?</p>


<h3>Renumérotation des critères 12.4, 12.5, 12.6 et des tests associés</h3>
<p>
Pour tenir compte de la suppression du critère 12.3 les critères 12.4, 12.5 et 12.6 sont renumérotés respectivement en critères 12.3, 12.4 et 12.5. Les tests associés sont renumérotés de la même façon.
</p>


<h3>Suppression du critère 12.7 et des tests associés</h3>
<p>
Le critère 12.7 repose sur la considération d’une entité spécifique "collection de pages" alors que WCAG emploie indifféremment les expressions "ensemble de pages" ou "collection de pages". Une collection de pages n’est rien d’autre qu’un ensemble de pages, sans conditions de vérification supplémentaires.
</p>

<h4>Ancien critère 12.7</h4>
<p>Critère 12.7 [AA] Dans chaque page d'une collection de pages, des liens facilitant la navigation sont-ils présents ?</p>


<h3>Suppression des critères 12.8, 12.9 et des tests associés</h3>
<p>
Suppression des critères triple A du RGAA 4.
</p>

<h4>Ancien critère 12.8</h4>
<p>Critère 12.8 [AAA] Dans chaque page web, un fil d'Ariane est-il présent (hors cas particuliers) ?</p>

<h4>Ancien critère 12.9</h4>
<p>Critère 12.9 [AAA] Dans chaque page web, le fil d'Ariane est-il pertinent ?</p>


<h3>Suppression des cas particuliers 12.8</h3>
<p>Suppression du critère 12.8.</p>

<h4>Anciens cas particuliers 12.8</h4>
<div>
<p>Il existe une gestion de cas particulier lorsque la page est la page d'accueil ou lorsque le site web est constitué d'une seule page. Dans ce cas, le critère est non applicable.</p>
</div>

<h3>Modification du critère 12.10</h3>
<p>
Prise en compte de l’ensemble des techniques WCAG liés au critère 2.4.1.
</p>
<p>
Renumérotation du test 12.10 en test 12.6.
</p>

<h4>Ancien critère 12.10</h4>
<p>Critère 12.10 [A] Dans chaque page web, les groupes de liens importants (menu, barre de navigation…) et la zone de contenu sont-ils identifiés ?</p>

<h4>Nouveau critère 12.6</h4>
<p>Critère 12.6 Les zones de regroupement de contenus présentes dans plusieurs pages web (zones d'en-tête, de navigation principale, de contenu principal, de pied de page et de moteur de recherche) peuvent-elles être atteintes ou évitées ?</p>


<h3>Suppression de la note technique critère 12.10</h3>
<p>
Mise à jour et reprise de son contenu dans la nouvelle entrée de glossaire "Landmarks".
</p>

<h4>Ancienne note technique</h4>
<div>
<p>WAI-ARIA propose des rôles permettant d'indiquer les zones principales (régions) du document. Ces rôles sont très profitables aux utilisateurs de lecteurs d'écran notamment, mais également aux utilisateurs de la navigation au clavier qui peuvent ainsi bénéficier de fonctionnalités de navigation rapide dans la structure du document. Si la plupart des lecteurs d'écran mettent à disposition ces fonctionnalités, les navigateurs n'ont pas encore proposé de fonctionnalité de navigation dédiée pour les utilisateurs qui ne peuvent pas utiliser la souris. La mise en place des liens d'évitement reste donc une exigence.</p>
</div>


<h3>Modification du test 12.10.1</h3>
<p>
Prise en compte de l’ensemble des techniques WCAG liés au critère 2.4.1.
</p>
<p>
Renumérotation du test 12.10.1 en test 12.6.1.
</p>

<h4>Ancien test 12.10.1</h4>
<p>Test 12.10.1 : Dans chaque page web, la structure du document vérifie-t-elle ces conditions ?</p>  
<ul>
<li>La zone d'en-tête de la page possède un rôle ARIA <code>banner</code>.</li>
<li>Le menu de navigation principal possède un rôle ARIA <code>navigation</code>.</li>
<li>La zone de contenu principal possède un rôle ARIA <code>main</code>.</li>
<li>La zone de pied de page possède un rôle ARIA <code>contentinfo</code>.</li>
<li>Le moteur de recherche sur le site possède un rôle ARIA <code>search</code>.</li>
<li>Les rôles ARIA <code>banner</code>, <code>main</code>, <code>contentinfo</code> et <code>search</code> sont uniques dans la page.</li>
<li>Le rôle ARIA <code>navigation</code> est réservé aux zones de navigations principales et secondaires.</li>
</ul>

<h4>Nouveau test 12.10.1</h4>
<p>Test 12.6.1 : Dans chaque page web <ins>où elles sont présentes, la zone d'en-tête, de navigation principale, de contenu principal, de pied de page et de moteur de recherche respectent-elles au moins une de ces conditions :</ins></p>
<ul>
<li>la zone possède un rôle WAI-ARIA de type landmark</code> correspondant à sa nature.</li>
<li>la zone possède un titre de hiérarchie dont le contenu permet de comprendre la nature du contenu de la zone.</li>
<li>la zone peut être masquée par le biais d'un bouton précédant directement la zone dans l'ordre du code source.</li>
<li>la zone peut être évitée par le biais d'un lien d'évitement précédant directement la zone dans l'ordre du code source.</li>
<li>la zone peut être atteinte par le biais d'un lien d'accès rapide visible à la prise de focus lors d’une tabulation.</li>
</ul>


<h3>Modification du critère 12.11</h3>
<p>
Restriction du critère à la simple présence d’un lien d’accès rapide vers la zone de contenu principal, les techniques G1 et G123 étant considérées comme suffisantes pour satisfaire le critère 2.4.1.
</p>
<p>
Renumérotation du test 12.11 en test 12.7.
</p>

<h4>Ancien critère 12.11</h4>
<p>Critère 12.11 [A] Dans chaque page web, des liens d'évitement ou d'accès rapide aux groupes de liens importants et à la zone de contenu sont-ils présents (hors cas particuliers) ?</p>

<h4>Nouveau critère 12.7</h4>
<p>Critère 12.7 Dans chaque page web, <ins>un lien d'évitement ou d'accès rapide à la zone de contenu principal est-il présent</ins> (hors cas particuliers) ?</p>

<!--
<h3>Modification des cas particuliers 12.11</h3>
<p>Mise à jour suite à la modification du critère 12.11 et prise en compte du contexte mobile.</p>
<p>Les cas particuliers 12.11 sont associés au critère 12.7 suite à renumérotation.</p>

<h4>Anciens cas particuliers 12.1</h4>
<p>Il existe une gestion de cas particulier lorsque le site web est constitué d'une seule page.</p>
<p>Dans ce cas de figure, l'obligation de la présence d'un lien d'accès rapide est liée au contexte de la page : présence ou absence de navigation ou de contenus additionnels par exemple. Le critère peut être considéré comme non applicable lorsqu'il est avéré qu'un lien d'accès rapide est inutile.</p>

<h4>Nouveaux cas particuliers 12.7</h4>
<p>Il existe une gestion de cas particulier lorsque le site web est constitué d'une seule page.</p>
<p>Dans ce cas de figure, l'obligation de la présence d'un lien d'accès rapide est liée au contexte de la page : présence ou absence de navigation ou de contenus additionnels par exemple. Le critère peut être considéré comme non applicable lorsqu'il est avéré qu'un lien d'accès rapide est inutile.</p>
-->

<h3>Suppression du test 12.11.1</h3>
<p>
Suppression du test car la technique G1 est considérée comme suffisante pour satisfaire le critère 2.4.1 et ne porte que sur la possibilité d'accéder au contenu principal et non à l'ensemble des zones.
</p>

<h4>Ancien test 12.11.1</h4>
<p>Test 12.11.1 : Dans chaque page web, un lien permet-il d'éviter chaque groupe de liens importants identifié ou d'y accéder (hors cas particuliers) ?</p>  


<h3>Modification du test 12.11.2</h3>
<p>
Modification syntaxique liée à l’évolution du critère 12.11.
</p>
<p>
Renumérotation du test 12.11.2 en test 12.7.1.
</p>

<h4>Ancien test 12.11.2</h4>
<p>Test 12.11.2 : Dans chaque page web, un lien permet-il d'éviter la zone de contenu identifiée ou d'y accéder (hors cas particuliers) ?</p>  

<h4>Nouveau test 12.7.1</h4>
<p>Test 12.7.1 : Dans chaque page web, un lien permet-il d'éviter la zone de contenu <ins>principal</ins> ou d'y accéder (hors cas particuliers) ?</p>


<h3>Suppression du test 12.11.3</h3>
<p>
Suppression suite à la mise à jour de l'entrée de glossaire de "Liens d'évitement ou d'accès rapide".
</p>

<h4>Ancien test 12.11.3</h4>
<p>Test 12.11.3 : Dans chaque page web, chaque lien d'évitement ou d'accès rapide est-il fonctionnel (hors cas particuliers) ?</p>  


<h3>Modification du test 12.11.4</h3>
<p>
Modification syntaxique liée à l’évolution du critère 12.11.
</p>
<p>
Renumérotation du test 12.11.4 en test 12.7.2.
</p>


<h4>Ancien test 12.11.4</h4>
<p>Test 12.11.4 : Dans chaque ensemble de pages, les liens d'évitement ou d'accès rapide vérifient-ils ces conditions (hors cas particuliers) ?</p>  
<ul>
<li>Chaque lien est situé à la même place dans la présentation.</li>
<li>Chaque lien se présente toujours dans le même ordre relatif dans le code source.</li>
<li>Chaque lien est visible à la prise de focus de tabulation au moins.</li>
</ul>

<h4>Nouveau test 12.7.2</h4>
<p>Test 12.7.2 : Dans chaque ensemble de pages, <ins>le lien d'évitement ou d'accès rapide à la zone de contenu principal vérifient-il</ins> ces conditions (hors cas particuliers) ?</p>
<ul>
<li><ins>Le</ins> lien est situé à la même place dans la présentation.</li>
<li><ins>Le</ins> lien se présente toujours dans le même ordre relatif dans le code source.</li>
<li><ins>Le</ins> lien est visible à la prise de focus <ins>lors d'une</ins> tabulation.</li>
</ul>


<h3>Suppression des critères 12.12 et des tests associés</h3>
<p>
Suppression des critères triple A du RGAA 4.
</p>

<h4>Ancien critère 12.12</h4>
<p>Critère 12.12 [AAA] Dans chaque page web, la page en cours de consultation est-elle indiquée dans le menu de navigation ?</p>


<h3>Renumérotation des critères 12.13, 12.14 et des tests associés</h3>
<p>
Pour tenir compte de la suppression des critères précédents, les critères 12.13 et 12.14 sont renumérotés respectivement en critères 12.8 et 12.9. Les tests associés sont renumérotés de la même façon.
</p>


<h3>Création du critère 12.10 et du test associé</h3>
<p>
Prise en compte du nouveau critère WCAG 2.1 : 2.1.4 Character Key Shortcuts (A).
</p>

<h4>Nouveau critère 12.10</h4>
<p>Critère 12.10 Dans chaque page web, les raccourcis clavier n'utilisant qu'une seule touche (lettre minuscule ou majuscule, ponctuation, chiffre ou symbole) sont-ils contrôlables par l’utilisateur ?</p>

<h4>Nouveau test 12.10.1</h4>
<p>Test 12.10.1 : Dans chaque page web, chaque raccourci clavier n'utilisant qu'une seule touche (lettres minuscule ou majuscule, ponctuation, chiffre ou symbole) vérifie-t-il l'une de ces conditions ?</p>
<ul>
<li>Un mécanisme est disponible pour désactiver le raccourci clavier.</li>
<li>Un mécanisme est disponible pour configurer la touche de raccourci clavier au moyen des touches de modification (Ctrl, Alt, Maj, etc).</li>
<li>Dans le cas d'un composant d'interface utilisateur, le raccourci clavier qui lui est associé ne peut être activé que si le focus clavier est sur ce composant.</li>
</ul>

<h4>Références</h4>
<p>EN 301 549 V2.1.2 / WCAG 2.1</p>
<ul>
<li>9.2.1.4 / 2.1.4 Character Key Shortcuts (A)</li>
</ul>


<h3>Création du critère 12.11 et du test associé</h3>
<p>
Prise en compte d'un cas d'usage non couvert : les contenus additionnels interactifs.
</p>

<h4>Nouveau critère 12.11</h4>
<p>Critère 12.11 Dans chaque page web, les contenus additionnels apparaissant au survol, à la prise de focus ou à l'activation d'un composant d'interface sont-ils, si nécessaire, atteignables au clavier ?</p>

<h4>Nouveau test 12.11.1</h4>
<p>Test 12.11.1 : Dans chaque page web, les contenus additionnels apparaissant au survol, à la prise de focus ou à l'activation d'un composant d'interface sont-ils, si nécessaire, atteignables au clavier ?</p>

<h4>Nouvelle note technique</h4>
<div>
<p>Ce critère adresse les situations où un contenu additionnel contient des composants d'interface avec lesquels il doit être possible d'interagir au clavier. Par exemple, une infobulle personnalisée qui propose un lien dans son contenu.</p>
</div>

<h4>Références</h4>
<p>EN 301 549 V2.1.2 / WCAG 2.1</p>
<ul>
<li>9.2.1.1 / 2.1.1 Keyboard (A)</li>
</ul>


<h3>Suppression du critère 13.2 et des tests associés</h3>
<p>
Les techniques référencées correspondent à un critère WCAG 3.2.5 triple A ou bien sont seulement considérées comme "<span lang="en">advisory</span>".
</p>

<h4>Ancien critère 13.2</h4>
<p>Critère 13.2 [A] Dans chaque page web, pour chaque ouverture de nouvelle fenêtre, l'utilisateur est-il averti ?</p>


<h3>Renumérotation du critère 13.3 et des tests associés</h3>
<p>
Pour tenir compte de la suppression du critère 13.2, le critère 13.3 est renuméroté en critères 13.2. Les tests associés sont renumérotés de la même façon.
</p>


<h3>Suppression des critères 13.4, 13.5 et des tests associés</h3>
<p>
Suppression des critères triple A du RGAA 4.
</p>

<h4>Ancien critère 13.4</h4>
<p>Critère 13.4 [AAA] Dans chaque page web, une tâche ne doit pas requérir de limite de temps pour être réalisée, sauf si elle se déroule en temps réel ou si cette limite de temps est essentielle. Cette règle est-elle respectée ?</p>

<h4>Ancien critère 13.5</h4>
<p>Critère 13.5 [AAA] Dans chaque page web, lors d'une interruption de session authentifiée, les données saisies par l'utilisateur sont-elles récupérées après ré-authentification ?</p>


<h3>Suppression du critère 13.6 et des tests associés</h3>
<p>
Absence d’élément dans les WCAG permettant de considérer que l’absence d’indication de format, poids ou langue des fichiers en téléchargement est un motif de non conformité.
</p>

<h4>Ancien critère 13.6</h4>
<p>Critère 13.6 [A] Dans chaque page web, pour chaque fichier en téléchargement, des informations relatives à sa consultation sont-elles présentes (hors cas particuliers) ?</p>


<h3>Suppression des cas particuliers 13.6</h3>
<p>Suppression du critère 13.6.</p>

<h4>Anciens cas particuliers 13.6</h4>
<div>
<p>Il existe une gestion de cas particulier lorsque le document est produit de manière dynamique (par exemple une facture). Dans cette situation, l'indication de poids est facultative, les autres indications (type de fichier et langue) restent exigibles.</p>
</div>


<h3>Renumérotation des critères 13.7, 13.8 et des tests associés</h3>
<p>
Pour tenir compte de la suppression des critères précédents, les critères 13.7 et 13.8 sont renumérotés respectivement en critères 13.3 et 13.4. Les tests associés sont renumérotés de la même façon.
</p>


<h3>Création des cas particuliers 13.3</h3>
<p>
Ajout de deux précisions légales sur les médias concernés en fonction de leur date de publication et de leur propriétaire.
</p>

<h4>Nouveaux cas particuliers 13.3</h4>
<div>
<p>Il existe une gestion de cas particuliers :</p>
<ul>
<li>Pour les personnes de droit privé mentionnées aux 2° à 4° du I de l’article 47 de la loi du 11 février 2005 : si les fichiers bureautiques (ex : PDF, documents Microsoft ou libreOffice etc.) ont été publiés avant le 23 septembre 2018 (sauf si ce sont des documents nécessaires pour accomplir une démarche administrative relevant des tâches effectuées par l'organisme concerné), ils sont exemptés de l’obligation d’accessibilité ;</li>
</ul>
<p>Dans cette situation, le critère est non applicable.</p>
</div>


<h3>Suppression des critères 13.9, 13.10 et des tests associés</h3>
<p>
Suppression des critères triple A du RGAA 4.
</p>

<h4>Ancien critère 13.9</h4>
<p>Critère 13.9 [AAA] Dans chaque page web, les expressions inhabituelles, les expressions idiomatiques ou le jargon sont-ils explicités ?</p>

<h4>Ancien critère 13.10</h4>
<p>Critère 13.10 [AAA] Dans chaque page web, pour chaque expression inhabituelle ou limitée, idiomatique ou de jargon ayant une définition, cette définition est-elle pertinente ?</p>


<h3>Renumérotation des critères 13.11, 13.12 et des tests associés</h3>
<p>
Pour tenir compte de la suppression des critères précédents, les critères 13.11 et 13.12 sont renumérotés respectivement en critères 13.5 et 13.6. Les tests associés sont renumérotés de la même façon.
</p>


<h3>Suppression des critères 13.13, 13.14 et des tests associés</h3>
<p>
Suppression des critères triple A du RGAA 4.
</p>

<h4>Ancien critère 13.13</h4>
<p>Critère 13.13 [AAA] Dans chaque page web, pour chaque mot dont le sens ne peut être compris sans en connaître la prononciation, celle-ci est-elle indiquée ?</p>

<h4>Ancien critère 13.14</h4>
<p>Critère 13.14 [AAA] Dans chaque page web, chaque texte qui nécessite un niveau de lecture plus avancé que le premier cycle de l'enseignement secondaire a-t-il une version alternative ?</p>


<h3>Renumérotation des critères 13.15 et des tests associés</h3>
<p>
Pour tenir compte de la suppression des critères précédents, le critère 13.15 est renuméroté en critères 13.7. Les tests associés sont renumérotés de la même façon.
</p>


<h3>Suppression des critères 13.16 et des tests associés</h3>
<p>
Suppression des critères triple A du RGAA 4.
</p>

<h4>Ancien critère 13.16</h4>
<p>Critère 13.16 [AAA] Dans chaque page web, les changements brusques de luminosité ou les effets de flash ont-ils une fréquence inférieure ou égale à 3 par seconde ?</p>


<h3>Renumérotation des critères 13.17 et des tests associés</h3>
<p>
Pour tenir compte de la suppression des critères précédents, le critère 13.17 est renuméroté en critères 13.8. Les tests associés sont renumérotés de la même façon.
</p>

<h3>Création du critère 13.9 et du test associé</h3>
<p>
Prise en compte du nouveau critère WCAG 2.1 : 1.3.4 Orientation (AA).
</p>

<h4>Nouveau critère 13.9</h4>
<p>Critère 13.9 Dans chaque page web, le contenu proposé est-il consultable quelle que soit l'orientation de l'écran (portait ou paysage) (hors cas particuliers) ?</p>

<h4>Nouveau test 13.9.1</h4>
<p>Test 13.9.1 : Dans chaque page web, chaque contenu vérifie-t-il ces conditions (hors cas particuliers) ?</p>
<ul>
<li>La consultation est possible quel que soit le mode d'orientation de l'écran.</li>
<li>Le contenu proposé reste le même quel que soit le mode d'orientation de l'écran utilisé même si sa présentation et le moyen d'y accéder peut différer.</li>
</ul>

<h4>Nouveaux cas particuliers</h4>
<div>
<p>Il existe des interfaces pour lesquelles l'orientation du périphérique est essentielle à leur utilisation.</p>
<p>Dans ces situations, le critère est non applicable. Il peut s'agir d'interfaces de jeu, de piano, de dépôt de chèques bancaires, etc.</p>
<p>Si l'interface est le seul moyen d'accéder au service proposé, une alternative devrait être mise en place pour pallier cette carence.</p>
<p>Références documentaires :</p>
<ul>
<li>API JS : https://www.w3.org/TR/screen-orientation/</li>
<li>API Viewport : https://www.w3.org/TR/css-device-adapt-1/#orientation-desc</li>
</ul>
</div>

<h4>Références</h4>
<p>EN 301 549 V2.1.2 / WCAG 2.1</p>
<ul>
<li>9.1.3.4 / 1.3.4 Orientation (AA)</li>
</ul>


<h3>Création du critère 13.10 et des tests associés</h3>
<p>
Prise en compte du nouveau critère WCAG 2.1 : 2.5.1 Pointer Gestures (A).
</p>

<h4>Nouveau critère 13.10</h4>
<p>Critère 13.10 Dans chaque page web, les fonctionnalités utilisables ou disponibles au moyen d'un geste complexe peuvent-elles être également disponibles au moyen d'un geste simple (hors cas particuliers) ?</p>

<h4>Nouveau test 13.10.1</h4>
<p>Test 13.10.1 : Dans chaque page web, chaque fonctionnalité utilisable ou disponible suite à un contact multipoint est-elle également utilisable ou disponible suite à un contact en un point unique de l'écran (hors cas particuliers).</p>

<h4>Nouveau test 13.10.2</h4>
<p>Test 13.10.2 : Dans chaque page web, chaque fonctionnalité utilisable ou disponible suite à un geste basé sur le suivi d'une trajectoire sur l'écran est-elle également utilisable ou disponible suite à un contact en un point unique de l'écran (hors cas particuliers).</p>

<h4>Nouveaux cas particuliers</h4>
<div>
<p>Il existe une gestion de cas particuliers dans deux types de situation :</p>
<ul>
<li>Le critère ne s'applique qu'à des fonctionnalités mises en place par l'auteur du site. Il ne concerne donc pas les gestes requis par l'agent utilisateur ou le système d'exploitation.</li>
<li>Le critère ne s'applique pas aux fonctionnalités dont la réalisation d'un geste complexe est essentielle (exécuter le tracé d'une signature, par exemple).</li>
</ul>
</div>

<h4>Références</h4>
<p>EN 301 549 V2.1.2 / WCAG 2.1</p>
<ul>
<li>9.2.5.1 / 2.5.1 Pointer Gestures (A)</li>
</ul>


<h3>Création du critère 13.11 et du test associé</h3>
<p>
Prise en compte du nouveau critère WCAG 2.1 : 2.5.2 Pointer Cancellation (A).
</p>

<h4>Nouveau critère 13.11</h4>
<p>Critère 13.11 Dans chaque page web, les actions déclenchées au moyen d'un dispositif de pointage sur un point unique de l'écran peuvent-elles faire l'objet d'une annulation (hors cas particuliers) ?</p>

<h4>Nouveau test 13.11.1</h4>
<p>Test 13.11.1 : Dans chaque page web, les actions déclenchées au moyen d'un dispositif de pointage sur un point unique de l'écran vérifient-elles l'une de ces conditions (hors cas particuliers) ?</p>
<ul>
<li>L'action est déclenchée au moment où le dispositif de pointage est relâché ou relevé ;</li>
<li>L'action est déclenchée au moment où le dispositif de pointage est pressé ou posé puis annulée lorsque le dispositif de pointage est relâché ou relevé ;</li>
<li>Un mécanisme est disponible pour abandonner (avant achèvement de l'action) ou annuler (après achèvement) l'exécution de l'action ;</li>
</ul>

<h4>Nouveaux cas particuliers</h4>
<div>
<p>Il existe une gestion de cas particulier lorsque la fonctionnalité nécessite que le comportement attendu soit réalisé lors d'un événement descendant, par exemple, un émulateur de clavier dont les touches doivent s'activer à la pression comme sur un clavier physique. Dans ces situations, le critère est non applicable.</p>
</div>

<h4>Références</h4>
<p>EN 301 549 V2.1.2 / WCAG 2.1</p>
<ul>
<li>9.2.5.2 / 2.5.2 Pointer Cancellation (A)</li>
</ul>


<h3>Création du critère 13.12 et des tests associés</h3>
<p>
Prise en compte du nouveau critère WCAG 2.1 : 2.5.4 Motion Actuation (A).
</p>

<h4>Nouveau critère 13.12</h4>
<p>Critère 13.10 Dans chaque page web, les fonctionnalités utilisables ou disponibles au moyen d'un geste complexe peuvent-elles être également disponibles au moyen d'un geste simple (hors cas particuliers) ?</p>

<h4>Nouveau test 13.12.1</h4>
<p>Test 13.12.1 : Dans chaque page web, les fonctionnalités disponibles en bougeant l'appareil peuvent-elles être accomplies avec des composants d'interface utilisateur (hors cas particuliers) ?</p>

<h4>Nouveau test 13.12.2</h4>
<p>Test 13.12.2 : Dans chaque page web, les fonctionnalités disponibles en faisant un geste en direction de l'appareil peuvent-elles être accomplies avec des composants d'interface utilisateur (hors cas particuliers) ?</p>

<h4>Nouveau test 13.12.3</h4>
<p>Test 13.12.3 : L'utilisateur a-t-il la possibilité de désactiver la détection du mouvement pour éviter un déclenchement accidentel de la fonctionnalité (hors cas particuliers) ?</p>

<h4>Nouveaux cas particuliers</h4>
<div>
<p>Il existe une gestion de cas particulier lorsque :</p>
<ul>
<li>Le mouvement est essentiel à l'accomplissement de la fonctionnalité (ex. podomètre).</li>
<li>La détection du mouvement est utilisée pour contrôler une fonctionnalité au travers d'une interface compatible avec l'accessibilité.</li>
</ul>
</div>

<h4>Références</h4>
<p>EN 301 549 V2.1.2 / WCAG 2.1</p>
<ul>
<li>9.2.5.4 / 2.5.4 Motion Actuation (A)</li>
</ul>


<h2>Glossaire</h2>

<h3>Modification “Accessible et activable par le clavier et la souris”</h3>



<p>Prise en compte de l’ensemble des dispositifs de pointage, prise en compte du nouveau critère 12.15, référence aux motifs de conception</p>

<h4>Ancienne entrée</h4>

<div>
    <p>Accessible et activable par le clavier et la souris</p>

    <ul>
        <li>Un composant d’interface (lien, bouton, élément cliquable dans Flash…) est accessible au clavier et à la souris lorsque l’utilisateur peut prendre, indifféremment, le focus par le pointeur de la souris ou la touche tabulation.</li>
        <li>Un composant d’interface (lien, bouton, élément cliquable dans Flash…) est activable au clavier et à la souris lorsque l’utilisateur peut enclencher, indifféremment, l’action prévue par le composant d’interface par le clic de la souris ou la touche
            entrée du clavier.</li>
        <li>Attention : pour certains composants d’interface comme les sliders (bouton coulissant ou rotatif…), il n’est pas possible de contrôler le composant par la seule touche d’entrée. Dans cette situation, d’autres touches (comme les touches de direction)
            peuvent être utilisées.</li>
    </ul>

    <p>Dans le référentiel, l’expression « contrôlable par le clavier et la souris » se rapporte également à la présente définition.</p>

    <p>Note importante : le recours à certaines technologies peut rendre la gestion du focus trop complexe ou trop instable pour ne reposer que sur la tabulation, les touches de direction et la touche entrée.</p>

    <p>Dans ce cas, la mise à disposition de raccourcis clavier peut être la seule solution pour rendre le composant utilisable.</p>

    <p>Le critère peut être considéré comme conforme à la condition que les raccourcis clavier utilisés soient correctement documentés et qu’ils soient fonctionnels quelle que soit la position du focus dans l’interface.</p>

    <p>Vous pouvez consulter, à ce sujet, la technique SL15: Providing Keyboard Shortcuts that Work Across the Entire Silverlight Application pour l’environnement Silverlight par exemple.</p>

</div>

<h4>Nouvelle entrée</h4>

<div>
    <p>Accessible et activable par le clavier et tout dispositif de pointage</p>

    <ul>
        <li>
            <p>Un composant d’interface (lien, bouton, …) est accessible au clavier et par tout dispositif de pointage lorsque l’utilisateur peut prendre, indifféremment, le focus par un pointeur ou la touche tabulation.</p>
        </li>

        <li>
            <p>Un composant d’interface (lien, bouton, …) est activable au clavier et par tout dispositif de pointage lorsque l’utilisateur peut enclencher, indifféremment, l’action prévue par le composant d’interface par une pression du pointeur ou la touche
                entrée du clavier.</p>
        </li>

        <li>
            <p>Attention : pour certains composants d’interface comme les sliders (bouton coulissant ou rotatif…), il n’est pas possible de contrôler le composant par la seule touche d’entrée. Dans ces situations, d’autres touches (comme les touches de direction)
                peuvent être utilisées. En particulier pour les éléments ayant un rôle WAI-ARIA correspondant à un motif de conception il est recommandé de considérer le document WAI-ARIA 1.1 Authoring Practices lors de leur implémentation.</p>
        </li>
    </ul>

    <p>Dans le référentiel, l’expression « contrôlable par le clavier et tout dispositif de pointage » se rapporte également à la présente définition.</p>

    <p>Note importante : le recours à certaines technologies peut rendre la gestion du focus trop complexe ou trop instable pour ne reposer que sur la tabulation, les touches de direction et la touche entrée. Dans ce cas, la mise à disposition de raccourcis
        clavier peut être la seule solution pour rendre le composant utilisable.</p>

    <p>Le critère ne peut être considéré comme conforme qu’à la condition que les raccourcis clavier utilisés soient correctement documentés, qu’ils soient fonctionnels et qu’ils respectent le critère 12.10.</p>

</div>

<h3>Modification Accolés (étiquette et champ accolés)</h3>

<p>Raison de la suppression</p>

<p>Prise en compte des contraintes de positionnnement de la technique G162 dans la critère 11.4</p>

<h4>Ancienne entrée</h4>

<div>
    <p>Il faut que l’étiquette et son champ soient visuellement proches de manière à ce que la relation entre les deux ne puisse pas prêter à confusion.</p>

    <p>Note : WCAG préconise que les étiquettes des champs de saisie de texte ou de valeurs prédéterminées, comme les listes par exemple, soient placées avant le champ, donc à gauche ou en haut des champs concernés. À l’inverse, les étiquettes des champs
        de type radio ou case à cocher devraient être placées après le champ, donc à droite ou en bas. Cette recommandation n’a pas été jugée raisonnable et n’est donc pas reprise dans le RGAA 3. Un positionnement différent, mais respectant une liaison
        visuelle sans confusion ne peut pas constituer une non-conformité au sens du RGAA 3.</p>

</div>

<h4>Nouvelle entrée</h4>

<p>Il faut que l’étiquette et son champ soient visuellement proches de manière à ce que la relation entre les deux ne puisse pas prêter à confusion.</p>

<h3>Modification “Alternative textuelle”</h3>



<p>Prise en compte de l’ensemble des techniques permettant d’associer une alternative textuelle aux différentes formes d’images</p>

<h4>Ancienne entrée</h4>

<div>
    <p>Texte associé à une image via une technique appropriée et décrivant l’information véhiculée par l’image (par rapport au contexte du contenu web dans lequel elle se trouve). RGAA considère quatre types d’alternatives liées à la nature de l’image :</p>

    <ul>
        <li>pour une image porteuse d’information, l’alternative apporte l’information nécessaire à la compréhension du contenu auquel l’image est associée ;</li>
        <li>pour une image de décoration, l’alternative doit être vide (alt=“”) ;</li>
        <li>pour une image-lien, l’alternative doit permettre de comprendre la fonction et la destination du lien ;</li>
        <li>pour une image CAPTCHA ou une image-test, l’alternative ne peut pas apporter l’information véhiculée par l’image sans rendre la fonction associée inopérante. Dans ce cas de figure, l’alternative doit se contenter de permettre d’identifier la nature
            et la fonction de l’image.</li>
    </ul>

    <p>Note 1 : pour une image CAPTCHA l’alternative peut être, par exemple : « Code de sécurité anti-spam » ou « code pour vérifier que vous êtes un humain » ou toute autre alternative permettant à l’utilisateur de comprendre la nature et la fonction de
        l’image.
    </p>

    <p>Note 2 : pour un groupe d’images, par exemple un système de vote constitué de plusieurs images d’étoiles, il est fortement conseillé d’utiliser la première image du groupe pour donner une alternative plus cohérente au groupe d’image. Dans ce cas,
        les autres images du groupe sont considérées comme des images de décoration. Vous pouvez consulter, à ce sujet, la note suivante : A group of images that form a single larger picture with no links.</p>

</div>

<h4>Nouvelle entrée</h4>

<div>
    <p>Alternative textuelle (image)</p>

    <p>« Nom accessible » restitué par les technologies d’assistance pour les éléments graphiques de type :</p>

    <ul>
        <li>Image (balise <code>&lt;img&gt;</code> ou balise possédant un attribut WAI-ARIA role=“img”);</li>
        <li>Zone d’image réactive (balise <code>&lt;area&gt;</code>);</li>
        <li>Bouton de type image (balise <code>&lt;input&gt;</code> avec l’attribut type=“image”);</li>
        <li>Image objet (balise <code>&lt;object type="image/…"&gt;</code>);</li>
        <li>Image vectorielle (balise <code>&lt;svg&gt;</code>);</li>
        <li>Image bitmap (balise <code>&lt;canvas&gt;</code>);</li>
        <li>Image embarquée (balise <code>&lt;embed&gt;</code>).</li>
    </ul>

    <p>Dans le cas d’un élément graphique, le « nom accessible » est obtenu selon l’ordre suivant :</p>

    <p>Passage de texte associé via l’attribut WAI-ARIA aria-labelledby pour les balises :</p>

    <ul>
        <li><code>&lt;img&gt;</code>;</li>
        <li><code>&lt;input type="image"&gt;</code>;</li>
        <li><code>&lt;svg&gt;</code>;</li>
        <li><code>&lt;object type="image/…"&gt;</code>;</li>
        <li><code>&lt;embed type="image/…"&gt;</code>;</li>
        <li><code>&lt;canvas&gt;</code>;</li>
    </ul>

    <p>balises possédant un attribut WAI-ARIA role=“img”.</p>

    <p>Sinon, contenu de l’attribut WAI-ARIA aria-label pour les balises :</p>

    <ul>
        <li><code>&lt;img&gt;</code>;</li>
        <li><code>&lt;area&gt;</code>;</li>
        <li><code>&lt;input type="image"&gt;</code>;</li>
        <li><code>&lt;svg&gt;</code>;</li>
        <li><code>&lt;object type="image/…"&gt;</code>;</li>
        <li><code>&lt;embed type="image/…"&gt;</code>;</li>
        <li><code>&lt;canvas&gt;</code>;</li>
    </ul>

    <p>balises possédant un attribut WAI-ARIA role=“img”.</p>

    <p>Sinon, contenu de l’attribut alt pour les balises :</p>

    <ul>
        <li><code>&lt;img&gt;</code>;</li>
        <li><code>&lt;area&gt;</code>;</li>
        <li><code>&lt;input type="image"&gt;</code>.</li>
    </ul>

    <p>Sinon, contenu de l’attribut title pour les balises :</p>

    <ul>
        <li><code>&lt;img&gt;</code>;</li>
        <li><code>&lt;input type="image"&gt;</code>;</li>
        <li><code>&lt;object type="image/…"&gt;</code>;</li>
        <li><code>&lt;embed type="image/…"&gt;</code>.</li>
    </ul>

    <p>Cet ordre doit être utilisé pour déterminer ce qui constitue l’alternative textuelle.</p>

    <p>Néanmoins, en cas de support partiel de l’algorithme de calcul du « nom accessible », c’est la valeur réellement restituée par les technologies d’assistance utilisées dans l’environnement de test (ou « base de référence ») qu’il faudra considérer
        comme alternative textuelle.</p>

    <p>Par exemple :</p>

    <ul>
        <li>
            <p>En cas de présence conjointe d’un attribut WAI-ARIA aria-label et d’un attribut WAI-ARIA aria-labelledby sur une balise <code>&lt;img&gt;</code>, c’est le passage de texte référencé par l’attribut WAI-ARIA aria-labelledby qui doit être considérée
                comme alternative textuelle si le contenu du passage de texte est réellement restitué par les technologies d’assistance utilisées dans l’environnement de test.</p>
        </li>

        <li>
            <p>En cas de présence conjointe d’un attribut WAI-ARIA aria-label et d’un attribut alt sur une balise <code>&lt;img&gt;</code>, c’est le contenu de l’attribut WAI-ARIA aria-label qui doit être considéré comme alternative textuelle si le contenu
                de l’attribut WAI-ARIA aria-label est réellement restitué par les technologies d’assistance utilisées dans l’environnement de test.</p>
        </li>
    </ul>

    <p>Référence : Accessible name and description calculation.</p>

    <p>RGAA considère trois types d’alternatives textuelles liées à la nature de l’image :</p>

    <ul>
        <li>
            <p>Pour une image porteuse d’information, l’alternative textuelle apporte l’information nécessaire à la compréhension du contenu qu’elle véhicule;</p>
        </li>

        <li>
            <p>Pour une image de décoration, aucune alternative textuelle ne doit être restituée ;</p>
        </li>

        <li>
            <p>Pour une image CAPTCHA ou une image-test, l’alternative textuelle décrit seulement la nature et la fonction de l’image. En effet, l’alternative textuelle ne peut apporter l’information véhiculée par l’image sans rendre la fonction associée
                inopérante.
            </p>
        </li>
    </ul>

    <p>Note 1 : pour une image CAPTCHA l’alternative peut être, par exemple : « Code de sécurité anti-spam » ou « code pour vérifier que vous êtes un humain » ou toute autre alternative permettant à l’utilisateur de comprendre la nature et la fonction de
        l’image.
    </p>

    <p>Note 2 : pour un groupe d’images, par exemple un système de vote constitué de plusieurs images d’étoile, il est fortement conseillé d’utiliser soit la première image du groupe pour donner une alternative cohérente au groupe d’image (voir la technique
        WCAG2.1 G196), soit une balise conteneur pourvue d’un rôle WAI-ARIA img et d’une alternative textuelle. Dans le premier cas, les autres images du groupe sont considérées comme des images de décoration. Dans le second cas, toutes les images du
        groupe sont considérées comme des images de décoration.</p>

    <p>Note 3 : pour les image-lien, l’alternative doit permettre de comprendre la fonction et la destination du lien ; ce cas est traité dans la thématique liens.</p>

    <p>Note 4 : pour les images vectorielles (balise <code>&lt;svg&gt;</code>) l’alternative textuelle pourrait se trouver aussi présente dans une balise <code>&lt;text&gt;</code> que cette balise soit ou non visible, même si ce n’est pas le rôle dévolu
        à cet élément en SVG.</p>

    <p>Note 5 : l’utilisation de l’attribut alt étant la seule technique totalement supportée par les aides techniques il est recommandé de privilégier cette solution lors de la mise en œuvre d’une alternative à une balise <code>&lt;img&gt;</code>, <code>&lt;area&gt;</code>        et <code>&lt;input type="image"&gt;</code>.</p>

</div>

<h3>Suppression « Arborescence du document »</h3>

<p>Raison de la suppression</p>

<p>Suppression du test 9.2.2.</p>

<h4>Ancienne entrée</h4>

<div>
    <p>Arborescence du document</p>

    <p>Le test 9.2.2 demande de vérifier que la structure des éléments sectionnant (nav, section, article par exemple) est cohérente, c’est-à-dire représentative de l’architecture du document. Cette structure est complémentaire à la structure des titres
        h(x) qui en sont un élément.</p>

    <p>L’utilisation inapropriée de ces éléments sectionnants peut générer une arborescence de document incohérente, par exemple par l’utilisation abusive d’éléments section ou article.</p>

    <p>Note 1 : Pour accompagner la prise en charge progressive de l’arborescence du document et compte tenu du fait que le référentiel exige de disposer, en tout état de cause, d’une structure de contenu (balises h(x)) robuste et cohérente, il est acceptable
        de considérer le test 9.2.2 comme non applicable lorsqu’il n’est pas possible de s’assurer que l’arborescence du document est parfaitement cohérente. Vous pouvez consulter, à ce sujet la note technique : Note technique au sujet de l’arborescence
        du document.</p>

    <p>Note 2 : vous pouvez consulter, à ce sujet, l’exemple donné par la spécification HTML5 : 4.3.10.2 Sample outlines.</p>

</div>

<h3>Suppression « Attribut target »</h3>

<p>Raison de la suppression</p>

<p>Suppression du critère 13.6 et des tests associés.</p>

<h4>Ancienne entrée</h4>

<div>
    <p>Attribut target</p>

    <p>L’attribut target ouvre une nouvelle fenêtre ou un nouvel onglet du navigateur selon sa valeur. Les valeurs suivantes de target n’ouvrent pas de nouvelles fenêtres :</p>

    <ul>
        <li>_self ;</li>
        <li>_top ;</li>
        <li>_parent.</li>
    </ul>

    <p>Pour toutes les autres valeurs de target, l’élément sur lequel il est positionné ouvrira une nouvelle fenêtre ou un nouvel onglet. C’est le cas de la valeur _blank par exemple, mais également de toute autre valeur (numérique ou alphabétique) non définie
        par la spécification. Il est à noter d’ailleurs que ces valeurs ne provoquent pas d’erreur lors de la validation du code source en HTML5.</p>

</div>

<h3>Modification « Barre de navigation »</h3>

<p>Raison de la modification de l’entrée</p>

<p>Fusion des deux entrées de glossaire « Barre de navigation » et « Menu de navigation » dont les contenus se recoupent en partie, la notion de menu de navigation étant englobée dans la notion plus générique de barre de navigation. Cette mise en cohérence
    permet d’éviter les tests redondants des critères 12.2 et 12.3.</p>

<h4>Ancienne entrée</h4>

<div>
    <p>Barre de navigation</p>

    <p>Liste de liens permettant une navigation spécifique dans le site, dans une rubrique ou dans une collection de pages. Les principales barres de navigation sont :</p>

    <ul>
        <li>Le menu de navigation principal ;</li>
        <li>Un fil d’Ariane ;</li>
        <li>Une liste de navigation d’une liste de résultats ;</li>
        <li>Un menu de sous-rubrique.</li>
    </ul>

</div>

<h4>Nouvelle entrée</h4>

<div>
    <p>Menu et barre de navigation</p>

    <p>Liste de liens permettant une navigation spécifique dans le site, dans une rubrique ou dans une collection de pages.</p>

    <p>Les principales barres de navigation (critère 12.2) sont :</p>

    <ul>
        <li>Un menu de navigation;</li>
        <li>Un fil d’Ariane;</li>
        <li>Une liste de navigation d’une liste de résultats;</li>
        <li>Des liens d’évitement.</li>
    </ul>

    <p>Il existe différents types de menu de navigation (critère 12.1 et critère 12.2) :</p>

    <ul>
        <li>Menu de navigation principal;</li>
        <li>Menu de sous-rubrique;</li>
        <li>Menu contextuel;</li>
        <li>Table des matières concernant un ensemble de pages.</li>
    </ul>

    <p>Note : Les liens de pied de page renvoyant vers les mentions légales, plan du site et autres informations concernant le site ne sont pas considérés comme un menu de navigation principal.</p>

</div>

<h3>Suppression « Bloc d’informations de même nature »</h3>

<p>Raison de la suppression</p>

<p>L’entrée de glossaire bloc d’information de même nature est divisée en deux entrées distinctes.</p>

<h4>Ancienne entrée</h4>

<div>
    <p>Dans un formulaire, ensemble des champs pouvant être regroupés par la nature des informations attendues. Le regroupement vise à identifier les champs devant être traités comme un ensemble.</p>

    <p>Quelques exemples :</p>

    <ul>
        <li>Trois champs successifs pour saisir une date (jour/mois/année).</li>
        <li>Champs successifs pour un numéro de téléphone.</li>
        <li>Un bloc destiné à saisir l’identité et l’adresse de l’utilisateur, lorsque le formulaire contient plusieurs blocs de contact.</li>
        <li>Un ensemble de boutons radio ou de cases à cocher qui se rapportent à une question.</li>
    </ul>

    <p>Ces champs doivent être regroupés lorsque les intitulés de label ne sont pas suffisants pour informer l’utilisateur que les champs font partie d’un regroupement. HTML propose un dispositif natif par l’intermédiaire des éléments fieldset et legend.</p>

    <p>Il est également possible de créer des regroupements avec le rôle ARIA group et un passage de texte, faisant office de légende, liée par la propriété aria-labelledby ou implémentée par l’intermédiaire d’une propriété aria-label.</p>

    <p>Note 1 : Les regroupements de champs peuvent utiliser d’autres méthodes qui associent l’information du regroupement directement dans l’étiquette du champ. Par exemple, par l’intermédiaire d’un attribut title, d’une propriété aria-label ou d’une liaison
        aria-labelledby faisant office d’étiquette ou encore par la propriété aria-describedby associant un texte complémentaire. Dans ce cas, le regroupement de champs devient inutile puisque les labels sont suffisamment pertinents.</p>

    <p>Note 2 : Lorsque le formulaire est constitué d’un seul bloc d’informations de même nature (l’identité et l’adresse de l’utilisateur, par exemple) ou d’un champ unique (un moteur de recherche, par exemple), le regroupement des champs n’est pas obligatoire.</p>

</div>

<h3>Modification « bouton (formulaire) »</h3>



<p>Prise en compte du role WAI-ARIA button, modification pour introduire l’utilisation des attributs aria-labelledby et aria-label comme solution de nommage d’un bouton et ajout d’un note pour couvrir le critère 2.5.3 WCAG 2.1 label in name</p>

<h4>Ancienne entrée</h4>

<div>
    <p>Élément d’un formulaire qui permet d’effectuer une action prédéfinie. Par exemple, le bouton de soumission d’un formulaire permet l’envoi au serveur des informations collectées pour leur traitement. L’intitulé d’un bouton doit décrire l’action qui
        résulte de son activation (par exemple : « Lancer votre recherche », « Envoyer votre message »).</p>

    <p>En HTML, il y a trois types de boutons de formulaire :</p>

    <ul>
        <li>Balise input de type submit, reset ou button ;</li>
        <li>Balise input de type image ;</li>
        <li>Balise button.</li>
    </ul>

    <p>L’intitulé du bouton peut être de quatre types :</p>

    <ul>
        <li>Le contenu de l’attribut value des boutons de type submit, reset ou button ;</li>
        <li>Le contenu de l’attribut alt d’un bouton de type image ;</li>
        <li>Le contenu de l’attribut title lorsqu’il est présent ;</li>
        <li>Le contenu de la balise <code>&lt;button&gt;</code>.</li>
    </ul>

</div>

<h4>Nouvelle entrée</h4>

<div>
    <p>Bouton (formulaire)</p>

    <p>Élément d’un formulaire qui permet d’effectuer une action prédéfinie. Par exemple, le bouton de soumission d’un formulaire permet l’envoi au serveur des informations collectées pour leur traitement. L’intitulé d’un bouton doit décrire l’action qui
        résulte de son activation (par exemple : « Lancer votre recherche », « Envoyer votre message »).</p>

    <p>En HTML, il y a trois types de boutons de formulaire :</p>

    <ul>
        <li>Balise <code>&lt;input&gt;</code> de type submit, reset ou button;</li>
        <li>Balise <code>&lt;input&gt;</code> de type image;</li>
        <li>Balise <code>&lt;button&gt;</code>.</li>
    </ul>

    <p>Il est également possible de restituer un bouton à l’aide du rôle WAI-ARIA button.</p>

    <p>L’intitulé du bouton peut être de six types :</p>

    <ul>
        <li>Le contenu du passage de texte associé au bouton via l’attribut WAI-ARIA aria-labelledby lorsqu’il est présent;</li>
        <li>Le contenu de l’attribut aria-label lorsqu’il est présent;</li>
        <li>Le contenu de l’attribut alt d’un bouton de type image;</li>
        <li>Le contenu de l’attribut value des boutons de type submit, reset ou button;</li>
        <li>Le contenu de la balise <code>&lt;button&gt;</code>;</li>
        <li>Le contenu de l’attribut title lorsqu’il est présent.</li>
    </ul>

    <p>Note importante : lorsque plusieurs de ces techniques sont présentes sur un même bouton, le calcul du « nom accessible », c’est-à-dire ce qui sera restitué, obéit à un ordre strict :</p>

    <ul>
        <li>aria-labelledby;</li>
        <li>Sinon aria-label;</li>
        <li>Sinon alt pour le cas des input image;</li>
        <li>Sinon value pour le cas des input submit, reset ou button;</li>
        <li>Sinon contenu de la balise <code>&lt;button&gt;</code>;</li>
        <li>Sinon title.</li>
    </ul>

    <p>Cet ordre doit être utilisé pour l’évaluation de la pertinence du « nom accessible » du bouton. Par exemple, même dans le cas de la présence d’un title et d’un passage de texte référencé par aria-labelledby sur le même bouton, c’est le passage de
        texte référencé par aria-labelledby qui doit être évalué.</p>

    <p>Référence : Accessible name and description calculation.</p>

    <p>Par ailleurs, un « nom accessible » sera considéré comme non-pertinent s’il ne reprend pas le texte visible du bouton. Par exemple :
        <code>&lt;button aria-label="confirmer la saisie"&gt;</code>valider la saisie<code>&lt;/button&gt;</code> sera considéré comme non conforme au critère 11.2.</p>

</div>

<h3>Modification « cadre en ligne »</h3>



<p>Devient « cadre et cadre en ligne »</p>

<p>Bien que html5 qui ne contienne plus la balise <code>&lt;frame&gt;</code> les concepteurs peuvent encore utiliser une version de HTML supportant cette balise (qui par ailleurs continue de fonctionner meme en html5). Il existe également d’anciennes applications
    utilisant cette balise pour laquelle l’absence de prise en compte de cette balise dans le RGAA signifierait qu’ils n’ont rien à faire pour les rendre conforme.</p>

<h4>Ancienne entrée</h4>

<div>
    Élément HTML (balise iframe) permettant d’afficher un contenu dans la page web dans laquelle il est implémenté.
</div>

<h4>Nouvelle entrée</h4>

<div>
    <p>Cadre : élément HTML (balise <code>&lt;frame&gt;</code>) permettant d’afficher un contenu dans la page web dans laquelle il est implémenté.</p>

    <p>Cadre en ligne : élément HTML (balise <code>&lt;iframe&gt;</code>) permettant d’afficher un contenu dans la page web dans laquelle il est implémenté.</p>

</div>

<h3>Création « Champs de même nature »</h3>

<p>Raison de la création</p>

<p>L’entrée de glossaire bloc d’information de même nature est divisée en deux entrées distinctes dont « champs de même nature »</p>

<h4>Nouvelle entrée</h4>

<div>
    <p>Champs de même nature</p>

    <p>Dans un formulaire, ensemble des champs pouvant être regroupés par la nature des informations attendues. Le regroupement vise à identifier les champs devant être traités comme un ensemble.</p>

    <p>Quelques exemples :</p>

    <ul>
        <li>Trois champs successifs pour saisir une date (jour/mois/année);</li>
        <li>Champs successifs pour un numéro de téléphone.</li>
        <li>Un bloc destiné à saisir l’identité et l’adresse de l’utilisateur, lorsque le formulaire contient plusieurs blocs de contact;</li>
        <li>Un ensemble de boutons radio ou de cases à cocher qui se rapportent à une question.</li>
    </ul>

    <p>Ces champs doivent être regroupés lorsque les intitulés de label ne sont pas suffisants pour informer l’utilisateur que les champs font partie d’un regroupement.</p>

</div>

<h3>Modification « Champ de saisie de formulaire »</h3>



<p>Mise à jour suite à l’évolution de la spécification HTML, prise en compte de champs de formulaires simulés via les rôles WAI-ARIA et renommage pour couvrir les champs d’affichage html5 qui ne sont pas des champs “de saisie”</p>

<h4>Ancienne entrée</h4>

<div>
    <p>Objet d’un formulaire permettant à l’utilisateur :</p>

    <p>De saisir des données textuelles ou préformatées :</p>

    <ul>
        <li>input type=“text” ;</li>
        <li>input type=“password” ;</li>
        <li>input type=“search” ;</li>
        <li>input type=“tel” ;</li>
        <li>input type=“email” ;</li>
        <li>input type=“number” ;</li>
        <li>input type=“tel”</li>
        <li>input type=“url” ;</li>
        <li>textarea ;</li>
    </ul>

    <p>De sélectionner des valeurs prédéfinies :</p>

    <ul>
        <li>input type=“checkbox” ;</li>
        <li>input type=“radio” ;</li>
        <li>input type=“date” ;</li>
        <li>input type=“range” ;</li>
        <li>input type=“color” ;</li>
        <li>input type=“time” ;</li>
        <li>select ;</li>
        <li>datalist ;</li>
        <li>optgroup ;</li>
        <li>option ;</li>
        <li>keygen ;</li>
    </ul>

    <p>De télécharger des fichiers :</p>

    <ul>
        <li>input type=“file” ;</li>
    </ul>

    <p>Ou d’afficher des résultats :</p>

    <ul>
        <li>output ;</li>
        <li>progress ;</li>
        <li>meter.</li>
    </ul>

    <p>Les objets de formulaires suivants ne sont pas considérés comme des champs de formulaires :</p>

    <ul>
        <li>input type=“submit” ;</li>
        <li>input type=“reset” ;</li>
        <li>input type=“hidden” ;</li>
        <li>input type=“image” ;</li>
        <li>input type=“button” ;</li>
        <li>button.</li>
    </ul>

</div>

<h4>Nouvelle entrée</h4>

<div>
    <p>Champ de saisie de formulaire</p>

    <p>Objet d’un formulaire permettant à l’utilisateur :</p>

    <p>De saisir des données textuelles ou préformatées :</p>

    <ul>
        <li>input type=“text”;</li>
        <li>input type=“password”;</li>
        <li>input type=“search”;</li>
        <li>input type=“email”;</li>
        <li>input type=“number”;</li>
        <li>input type=“tel”;</li>
        <li>input type=“url”;</li>
        <li>textarea.</li>
    </ul>

    <p>De sélectionner des valeurs prédéfinies :</p>

    <ul>
        <li>input type=“checkbox”;</li>
        <li>input type=“radio”;</li>
        <li>input type=“date”;</li>
        <li>input type=“range”;</li>
        <li>input type=“color”;</li>
        <li>input type=“time”;</li>
        <li>input type=“month”;</li>
        <li>input type=“week”;</li>
        <li>input type=“datetime-local”;</li>
        <li>select;</li>
        <li>datalist;</li>
        <li>optgroup;</li>
        <li>option.</li>
    </ul>

    <p>De télécharger des fichiers :</p>

    <ul>
        <li>input type=“file”.</li>
    </ul>

    <p>Ou d’afficher des résultats :</p>

    <ul>
        <li>output;</li>
        <li>progress;</li>
        <li>meter.</li>
    </ul>

    <p>Les balises possédant un rôle WAI-ARIA permettant de restituer un champ de formulaire sont également couvertes par cette définition :</p>

    <ul>
        <li>progressbar;</li>
        <li>slider;</li>
        <li>spinbutton;</li>
        <li>textbox;</li>
        <li>listbox;</li>
        <li>searchbox;</li>
        <li>combobox;</li>
        <li>option;</li>
        <li>checkbox;</li>
        <li>radio;</li>
        <li>switch.</li>
    </ul>

    <p>Les objets de formulaires et rôle WAI-ARIA suivants ne sont pas considérés comme des champs de formulaires :</p>

    <ul>
        <li>input type=“submit”;</li>
        <li>input type=“reset”;</li>
        <li>input type=“hidden”;</li>
        <li>input type=“image”;</li>
        <li>input type=“button”;</li>
        <li>button;</li>
        <li>attribut WAI-ARIA role=“button”.</li>
    </ul>

</div>

<h3>Suppression « Collection de pages »</h3>

<p>Raison de la suppression</p>

<p>Suppression de l’entrée de glossaire suite à la suppression du critère 12.7 qui lui est exclusivement associé.</p>

<h4>Ancienne entrée</h4>

<div>
    <p>Collection de pages</p>

    <p>Pages reliées les unes aux autres par des liens et ayant un thème ou une nature commune. Par exemple, les pages de résultats d’un moteur de recherche ou les pages d’un catalogue (pour une même recherche) sont des collections de pages.</p>

</div>

<h3>Modification « Composant d’interface »</h3>



<p>Ajout de la référence au document “WAI-ARIA 1.1 Authoring Practices”.</p>

<h4>Ancienne entrée</h4>

<div>
    Un composant d’interface est un élément avec lequel l’utilisateur peut interagir, par exemple un bouton, un lien, une zone de saisie. Certains composants peuvent être plus complexes comme un menu, une fenêtre de dialogue, un système d’onglets. Enfin un
    composant d’interface peut être basé sur des éléments natifs de HTML ou développés de toutes pièces avec JavaScript et l’API ARIA.
</div>

<h4>Nouvelle entrée</h4>

<div>
    Un composant d’interface est un élément avec lequel l’utilisateur peut interagir, par exemple un bouton, un lien, une zone de saisie. Certains composants peuvent être plus complexes comme un menu, une fenêtre de dialogue, un système d’onglets. Enfin un
    composant d’interface peut être basé sur des éléments natifs de HTML ou développés de toutes pièces en JavaScript et des attributs WAI-ARIA. En particulier pour les éléments ayant des attributs WAI-ARIA correspondant à un motif de conception il est
    recommandé de considérer le document WAI-ARIA 1.1 Authoring Practices lors de leur implémentation.
</div>

<h3>Modification « Contexte du lien »</h3>



<p>Reformulation de la note 1.</p>

<h4>Ancienne entrée</h4>

<div>
    <p>Le contexte du lien représente les informations supplémentaires (on parle d’informations de contexte) qui peuvent être mises en relation par un programme informatique avec l’intitulé du lien. Les informations de contexte qui permettent de rendre un
        lien explicite sont les suivantes :</p>

    <ul>
        <li>Le contenu de la phrase dans laquelle le lien texte est présent ;</li>
        <li>Le contenu du paragraphe (balise p) dans lequel le lien texte est présent ;</li>
        <li>Le contenu de l’item de liste (balise li) ou le contenu d’un item de liste parent (balise li) dans lequel le lien texte est présent ;</li>
        <li>Le contenu du titre (balise h) précédent le lien texte ;</li>
        <li>Le contenu de la ou les cellule(s) d’en-tête de tableau (balise(s) th) associée(s) à la cellule de donnée (balise td) dans laquelle le lien texte est présent ;</li>
        <li>Le contenu de la cellule de donnée (balise td) dans laquelle le lien texte est présent ;</li>
        <li>Le contenu du titre de lien (attribut title) ;</li>
        <li>Le contenu de la propriété aria-label ;</li>
        <li>Le contenu du passage de texte lié par la propriété aria-labelledby ;</li>
    </ul>

    <p>Note 1 : l’un des 9 contextes de lien doit permettre à lui seul d’expliciter le lien.</p>

    <p>Note 2 : RGAA 3 considère que des liens particuliers comme des liens de type mailto (qui génère un lien sous la forme d’une adresse email cliquable) sont suffisamment explicites et ne requièrent pas de signaler, via un title, que l’action consiste
        à envoyer un email. L’attention des auteurs est appelée sur le fait que cette règle générale peut être adaptée au contexte, par exemple si la page contient plusieurs adresses email cliquables affectées de comportements différents (envoyer un email
        via le client de messagerie pour l’une, accéder à un formulaire pour l’autre) il peut être nécessaire de donner des informations complémentaires sur l’action du lien afin de différencier leurs comportements.</p>

</div>

<h4>Nouvelle entrée</h4>

<div>
    <p>Le contexte du lien représente les informations supplémentaires (on parle d’informations de contexte) qui peuvent être mises en relation par un programme informatique avec l’intitulé du lien. Les informations de contexte qui permettent de compléter
        l’intitulé du lien sont les suivantes :</p>

    <ul>
        <li>Le contenu de la phrase dans laquelle le lien texte est présent;</li>
        <li>Le contenu du paragraphe (balise <code>&lt;p&gt;</code>) dans lequel le lien texte est présent;</li>
        <li>Le contenu de l’item de liste (balise <code>&lt;li&gt;</code>) ou le contenu d’un item de liste parent (balise <code>&lt;li&gt;</code>) dans lequel le lien texte est présent;</li>
        <li>Le contenu du titre (balise <code>&lt;hx&gt;</code>) précédent le lien texte;</li>
        <li>Le contenu de la ou les cellule(s) d’en-tête de tableau (balise(s) <code>&lt;th&gt;</code>) associée(s) à la cellule de donnée (balise <code>&lt;td&gt;</code>) dans laquelle le lien texte est présent;</li>
        <li>Le contenu de la cellule de donnée (balise <code>&lt;td&gt;</code>) dans laquelle le lien texte est présent;</li>
    </ul>

    <p>Note 1 : l’un des 6 contextes de lien combiné à l’intitulé du lien doit permettre de comprendre la fonction et la destination du lien.</p>

    <p>Note 2 : RGAA considère que des liens particuliers comme des liens de type mailto (qui génère un lien sous la forme d’une adresse email cliquable) sont suffisamment explicites et ne requièrent pas de signaler que l’action consiste à envoyer un email.
        L’attention des auteurs est appelée sur le fait que cette règle générale peut être adaptée au contexte, par exemple si la page contient plusieurs adresses email cliquables affectées de comportements différents (envoyer un email via le client de
        messagerie pour l’une, accéder à un formulaire pour l’autre) il peut être nécessaire de donner des informations complémentaires sur l’action du lien afin de différencier leurs comportements.</p>

</div>

<h3>Modification « Contrôle de saisie (formulaire) »</h3>



<p>En l’absence de technique WCAG correspondante suppression de la note rendant obligatoire la modification du titre d’une page en cas d’erreur de formulaire.</p>

<h4>Ancienne entrée</h4>

<div>
    <p>Contrôle de saisie</p>

    <p>Note importante : lorsqu’une page est renvoyée avec des erreurs de saisie le titre de la page doit comporter la mention « erreur sur le formulaire ».</p>

</div>

<h4>Nouvelle entrée</h4>

<div>
    <p>Contrôle de saisie (formulaire)</p>

    <p>Ensemble des processus qui permettent de prévenir l’utilisateur des champs obligatoires, des indications de type ou de format attendus et des erreurs de saisie dans un formulaire. Ces contrôles de saisie peuvent être implémentés par l’auteur des contenus
        ou s’appuyer sur des attributs (comme required ou pattern), des attributs WAI-ARIA (comme aria-required) ou des types de champ qui produisent de manière automatique des indications de saisie ou d’erreurs (comme les types url, email, date, time
        par exemple).</p>

</div>

<h3>Création « couleur d’arrière-plan contiguë et couleur contiguë »</h3>

<p>Raison de la création</p>

<p>Précisions visant à faciliter la compréhension du critère.</p>

<h4>Nouvelle entrée</h4>

<div>
    <p>Couleur d’arrière-plan contiguë et couleur contiguë</p>

    <p>Couleur d’arrière-plan contiguë : couleur d’arrière-plan directement en contact avec le bord extérieur du composant d’interface ou de l’élément graphique.</p>

    <p>Exemples :</p>

    <ul>
        <li>Pour un bouton blanc avec une bordure bleue sur un fond blanc, le fond blanc à l’extérieur de la bordure bleu correspond à la couleur d’arrière-plan contiguë;</li>
        <li>Pour un bouton rouge sur fond blanc, le fond blanc à l’extérieur du rouge correspond à la couleur d’arrière-plan contiguë;</li>
        <li>Pour un bouton blanc avec une bordure verte qui devient noire à la prise de focus et au survol, le fond blanc à l’extérieur de la bordure verte de l’état par défaut et de la bordure noire de l’état au survol et au focus correspond à la couleur
            d’arrière-plan contiguë.</li>
    </ul>

    <p>Couleur contiguë : couleur directement en contact avec une autre couleur. Exemple dans un panneau de « sens interdit » le rouge du panneau est la couleur contiguë au trait blanc au centre du panneau.</p>

    <p>Note 1: dans le cas de la présence d’un dégradé, c’est la couleur contiguë la moins contrastée du dégradé qui sera à considérer comme la couleur contiguë ou couleur d’arrière-plan contiguë.</p>

    <p>Note 2 : dans le cas de la présence de plusieurs couleurs, c’est l’ensemble des couleurs qui seront à considérer comme couleur contiguë ou couleur d’arrière-plan contiguë.</p>

</div>

<h3>Modification « Description détaillée (image) »</h3>

<p>Raison de la modification de l’entrée de glossaire Prise en compte de la définition de glossaire alternative textuelle et lien ou bouton adjacente ainsi que de la possibilité d’avoir recours à l’attribut WAI-ARIA aria-labelledby en cas de nos support
    de l’attribut WAI-ARIA aria-describedby</p>

<h4>Ancienne entrée</h4>

<div>
    <p>Contenu associé à une image en complément de son alternative textuelle afin de décrire en totalité l’information véhiculée par l’image. La description détaillée peut être insérée via :</p>

    <ul>
        <li>Un attribut longdesc qui contient l’adresse d’une page ou d’un emplacement dans la page contenant la description détaillée ;</li>
        <li>Une référence, dans l’attribut alt, à une description détaillée adjacente à l’image ;</li>
        <li>Un lien adjacent à l’image qui contient l’adresse d’une page ou d’un emplacement dans la page contenant la description détaillée ;</li>
        <li>Un ou plusieurs passages de texte identifiés par un id et liés par une propriété aria-describedby sur le modèle aria-describedby=“ID1 ID2 ID3…”.</li>
    </ul>

    <p>Note : Pour assurer une compatibilité maximum avec les agents utilisateurs, notamment Internet Explorer 11, il est recommandé d’implémenter un tabindex=“-1” sur les passages de textes qui ne sont pas des éléments interactifs (bouton, liens, éléments
        de formulaires, etc.).</p>

</div>

<h4>Nouvelle entrée</h4>

<div>
    <p>Contenu associé à une image en complément de son alternative textuelle afin de décrire en totalité l’information véhiculée par l’image. La description détaillée peut être associée à l’image via :</p>

    <ul>
        <li>Un attribut longdesc qui contient l’adresse d’une page ou d’un emplacement dans la page contenant la description détaillée;</li>
        <li>Une référence à une description détaillée adjacente à l’image dans l’alternative textuelle;</li>
        <li>Un lien ou un bouton adjacent qui permet d’accéder à la description détaillée dans la page ou dans une autre page;</li>
        <li>Un ou plusieurs passages de texte identifiés par un id et liés par un attribut WAI-ARIA aria-describedby sur le modèle aria-describedby=“ID1 ID2 ID3…”.</li>
    </ul>

    <p>Note 1 : Si le support de l’attribut aria-describedby fait défaut, il est possible d’utiliser un ou plusieurs passages de texte identifiés par un id et liés par un attribut WAI-ARIA aria-labelledby à la suite de l’alternative textuelle.</p>

    <p>Note 2 : Pour assurer une compatibilité maximum avec les agents utilisateurs, notamment Internet Explorer 11, il est recommandé d’implémenter un tabindex=“-1” sur les balises qui contiennent un passage de texte et qui ne sont pas des éléments interactifs
        (bouton, liens, éléments de formulaires, etc.).</p>

</div>

<h3>Création « élément graphique »</h3>

<p>Raison de la création</p>

<p>Précisions visant à faciliter la compréhension du critère.</p>

<h4>Nouvelle entrée</h4>

<div>
    <p>Élément faisant appel à une représentation visuelle telle que des images, des pictogrammes ou des graphiques.</p>

    <p>Cet élément peut être composé d’une ou plusieurs parties dont la visibilité est nécessaire à sa compréhension (par exemple chaque point sur chaque ligne d’un graphique de statistiques).</p>

</div>

<h3>Modification « En-tête de lignes ou de colonnes »</h3>



<p>Prise en compte de WAI-ARIA pour les tableaux de données simple</p>

<h4>Ancienne entrée</h4>

<div>
    Contenu d’une cellule dans un tableau de données (la première cellule d’une colonne ou d’une ligne, généralement) qui sert d’intitulé pour la totalité ou une partie des cellules de la colonne ou de la ligne. Une colonne ou une ligne peut contenir plusieurs
    en-têtes (en-tête intermédiaire). Les en-têtes doivent utiliser une balise th.
</div>

<h4>Nouvelle entrée</h4>

<div>
    <p>Contenu d’une cellule dans un tableau de données (la première cellule d’une colonne ou d’une ligne, généralement) qui sert d’intitulé pour la totalité ou une partie des cellules de la colonne ou de la ligne. Une colonne ou une ligne peut contenir
        plusieurs en-têtes (en-tête intermédiaire). Lorsque les en-têtes s’appliquent à l’ensemble d’une ligne ou d’une colonne ils peuvent être structurés avec une balise <code>&lt;th&gt;</code> ou une balise pourvue d’un attribut WAI-ARIA role=“rowheader”
        ou “columnheader”. Dans le cas contraire seul une balise <code>&lt;th&gt;</code> peut être utilisée.</p>

    <p>Note : seule la balise <code>&lt;th&gt;</code> étant totalement supportée par l’ensemble des technologies d’assistance, il est fortement recommandé de privilégier cette solution lors de la mise en oeuvre afin d’éviter de nombreuses vérifications dans
        les différentes combinaisons prévues dans l’environnement de test (ou « base de référence »).</p>

</div>

<h3>Modification « Ensemble de pages »</h3>



<p>Suppression de l’exemple “Processus de paiement électronique” suite à la mise à jour du cas particulier du critère 12.1</p>

<h4>Ancienne entrée</h4>

<div>
    <p>Pages web liées les unes aux autres par des liens et constituant un ensemble cohérent à l’intérieur d’un site web. Par exemple, les pages d’un processus de paiement électronique, les pages d’une rubrique spécifique, les pages d’un blog, les pages
        d’administration d’un compte client sont autant d’ensembles de page.</p>

    <p>Note : la page d’accueil d’un site web peut constituer, à elle seule, un « ensemble de pages » du fait de son unicité.</p>

</div>

<h4>Nouvelle entrée</h4>

<div>
    <p>Pages web liées les unes aux autres par des liens et constituant un ensemble cohérent à l’intérieur d’un site web. Par exemple, les pages d’une rubrique spécifique, les pages d’un blog, les pages d’administration d’un compte client sont autant d’ensembles
        de page.</p>

    <p>Note : la page d’accueil d’un site web peut constituer, à elle seule, un « ensemble de pages » du fait de son unicité.</p>

</div>

<h3>Modification « Étiquette de champ de formulaire »</h3>



<p>Précision visant à interdire l’usage de l’attribut aria-label pour indiquer le caractère obligatoire des champs car cela rendrait l’indication non visible pour les utilisateurs mal voyants ou en situation de handicap moteur</p>

<h4>Nouvelle entrée</h4>

<div>
    Note : l’attribut aria-label ne peut pas être utilisé pour indiquer le caractère obligatoire d’un champ.
</div>

<h3>Création « Formulaire »</h3>

<p>Raison de la création</p>

<p>Prise en compte de WAI-ARIA</p>

<h4>Nouvelle entrée</h4>

<div>
    Balise <code>&lt;form&gt;</code> ou possédant un attribut WAI-ARIA role=“form”.
</div>

<h3>Création « Gestes simples et gestes complexes »</h3>

<p>Raison de la création</p>

<p>Précisions visant à faciliter la compréhension des termes relatifs aux différents types de geste.</p>

<h4>Nouvelle entrée</h4>

<div>
    <p>Gestes complexes et gestes simples</p>

    <p>Un geste simple implique un contact en un point unique de l’écran. Il peut s’agir d’une pression ou d’un clic simple, d’une double-pression ou d’un double-clic, d’une pression prolongée.</p>

    <p>Un geste complexe peut être à la fois un geste impliquant plusieurs points de contact sur l’écran (exemple : un geste avec deux doigts sur l’écran pour zoomer ou dézoomer une carte) et un geste basé sur le suivi d’une trajectoire sur l’écran (exemple
        : fonction JavaScript permettant de détection le déplacement d’un doigt vers la gauche ou droite sur une surface tactile pour déclencher le passage à l’item précédent / suivant d’un carrousel).</p>

</div>

<h3>Modification « Image de décoration »</h3>



<p>Exclusion des balises possédant un attribut WAI-ARIA role=“img” du champ d’application lorsqu’elle ne possède aucun attribut WAI-ARIA aria-hidden=“true”.</p>

<h4>Ancienne entrée</h4>

<div>
    Image n’ayant aucune fonction et ne véhiculant aucune information particulière par rapport au contenu auquel elle est associée. Exemples :
    <p></p>

    <ul>
        <li>Une image servant à caler la mise en page ;</li>
        <li>Une image de coin arrondie pour habiller un bloc d’information ;</li>
        <li>Une image d’illustration n’apportant aucune information nécessaire à la compréhension du texte auquel elle est associée.</li>
    </ul>
</div>

<h4>Nouvelle entrée</h4>

<div>
    <p>Image n’ayant aucune fonction et ne véhiculant aucune information particulière par rapport au contenu auquel elle est associée. Exemples :</p>

    <ul>
        <li>Une image précédant chaque item d’une liste;</li>
        <li>Une image servant à caler la mise en page;</li>
        <li>Une image de coin arrondie pour habiller un bloc d’information;</li>
        <li>Une image d’illustration n’apportant aucune information nécessaire à la compréhension du texte auquel elle est associée.</li>
    </ul>

    <p>Note : les balises possédant un attribut WAI-ARIA role=“img” ne peuvent faire office d’image de décoration qu’à la condition qu’elles possèdent un attribut WAI-ARIA aria-hidden=“true”.</p>

</div>

<h3>Création « indication de champ obligatoire »</h3>

<p>Raison de la création</p>

<p>Mise à disposition d’information sur ce qu’est une indication de champ obligatoire</p>

<h4>Nouvelle entrée</h4>

<div>
    <p>Indication de format obligatoire</p>

    <p>Indication textuelle ou graphique (icône) permettant à l’utilisateur de savoir que la saisie d’un champ est obligatoire préalablement à la saisie.</p>

    <p>Note : Dans le cas où cette indication n’est pas réalisée de manière textuelle explicite (icône, *, !,…) l’explication de la signification de cette indication doit être visible et dans l’ordre du code source se situer avant la première utilisation
        de l’indication.</p>

</div>

<h3>Création « indication du type de données et/ou de format »</h3>

<p>Raison de la création</p>

<p>Mise à disposition d’information sur ce qui constitue une indication du type de données et/ou de format</p>

<h4>Nouvelle entrée</h4>

<div>
    <p>Indication du type de données et/ou de format</p>

    <p>Indication textuelle permettant à l’utilisateur de savoir quel est le type de donnée et/ou le format de saisie requis par un champ obligatoire, préalablement à son renseignement.</p>

    <p>Exemples :</p>

    <ul>
        <li>Courriel (format : vous@domaine.com);</li>
        <li>Code postal (format : 00000);</li>
        <li>Date (format : JJ/MM/AAAA).</li>
    </ul>

</div>

<h3>Modification « Information (donnée par la couleur) »</h3>



<p>Mise à jour des exemples et ajout de précisions indiquant les cas permettant de considérer qu’une information est transmise uniquement par la couleur ou non. Cette mise à jour a donc pour effet de rendre le critère 3.2 inutile</p>

<h4>Ancienne entrée</h4>

<div>
    <p>Information transmise visuellement par l’intermédiaire d’une couleur. L’indication que les champs en rouge sont obligatoires dans un formulaire, un changement de couleur de fond pour indiquer la page active dans un menu de navigation, le changement
        de couleur d’un nom d’article pour indiquer son indisponibilité dans une liste d’article sont autant d’exemples d’indication donnée par la couleur.</p>

    <p>L’indication donnée uniquement par la couleur doit être accompagnée d’une autre méthode à destination des utilisateurs qui ne voient pas ou perçoivent mal les couleurs ou leurs associations.</p>

    <p>L’autre moyen de récupérer une information par la couleur peut être très divers, lorsqu’il s’agit d’un moyen faisant intervenir du graphisme (utilisation de CSS ou d’élément graphique) l’indication visuelle pourrait devoir être accompagnée d’une indication
        textuelle. Par exemple, un effet de bordure, de gras, de changement typographique ou autre dispositif similaire sera jugé insuffisant car ces indications ne seront pas accessibles aux personnes aveugles, notamment.</p>

</div>

<h4>Nouvelle entrée</h4>

<div>
    <p>Information transmise visuellement par l’intermédiaire d’une couleur. L’indication que les champs en rouge sont obligatoires dans un formulaire, l’utilisation d’un fond bleu pour indiquer la page en cours de consultation dans un menu avec le fond
        vert, le changement de couleur d’un nom d’article pour indiquer son indisponibilité dans une liste d’articles sont autant d’exemples d’indication donnée par la couleur.</p>

    <p>Lorsqu’une information donnée par la couleur est accompagnée d’une autre méthode à destination des utilisateurs qui ne voient pas ou perçoivent mal les couleurs ou leurs associations, le critère sera considéré comme non applicable.</p>

    <p>Les moyens de transmettre une information autrement que par la couleur peuvent être :</p>

    <ul>
        <li>Une indication textuelle visible;</li>
        <li>Un moyen faisant intervenir du graphisme (pictogramme, image de fond, forme, style de bordure différent, etc) et par le biais d’un complément au niveau du code (aria-label, title, texte masqué, aria-current, etc.);</li>
        <li>Un autre style typographique (gras, italique, taille de texte, autre police, etc) et par le biais d’un complément au niveau du code (aria-label, title, texte masqué, aria-current, etc.).</li>
    </ul>

</div>

<h3>Modification « intitulé de lien »</h3>



<p>Prise en compte des liens en SVG, référence aux entrées de glossaire existantes, prise en compte du critère « label in name » 2.5.3 des WCAG 2.1, prise en compte de l’usage de l’attribut title et des intitulés de liens identiques.</p>

<h4>Ancienne entrée</h4>

<div>
    <p>Intitulé de lien</p>

    <p>Information textuelle comprise entre <code>&lt;a href="…"&gt;</code> et <code>&lt;/a&gt;</code> d’un lien, complété si nécessaire d’informations de contexte.</p>

    <p>Les 4 différents types de liens sont :</p>

    <ul>
        <li>Lien texte : il s’agit du texte compris entre <code>&lt;a href="…"&gt;</code> et <code>&lt;/a&gt;</code>, complété si nécessaire d’informations de contexte ;</li>
        <li>Lien image : il s’agit du contenu de l’alternative textuelle de l’image comprise entre <code>&lt;a href="…"&gt;</code> et <code>&lt;/a&gt;</code>, complété si nécessaire d’informations de contexte ;</li>
        <li>Lien composite : il s’agit de l’ensemble du texte et du contenu de l’alternative textuelle de la ou des images compris entre <code>&lt;a href="…"&gt;</code> et <code>&lt;/a&gt;</code>, complété si nécessaire d’informations de contexte ;</li>
        <li>Lien vectoriel : il s’agit du contenu de l’alternative textuelle de l’image vectorielle (balise svg) comprise entre <code>&lt;a href="…"&gt;</code> et <code>&lt;/a&gt;</code> complété si nécessaire d’informations de contexte. L’intitulé de lien
            pour un lien vectoriel est le contenu de l’alternative textuelle de l’image vectorielle.</li>
    </ul>

    <p>Note 1 : voir la définition de lien image pour plus de précisions.</p>

    <p>Note 2 : un lien image pour lequel l’attribut alt est absent est considéré comme non applicable pour le critère 6.5.</p>

</div>

<h4>Nouvelle entrée</h4>

<div>
    <p>Intitulé (ou nom accessible) de lien</p>

    <p>« Nom accessible » restitué par les technologies d’assistance.</p>

    <p>Dans le cas d’un lien HTML, le « nom accessible » est obtenu selon l’ordre suivant :</p>

    <ul>
        <li>Passage de texte associé par l’attribut WAI-ARIA aria-labelledby;</li>
        <li>Sinon, contenu de l’attribut WAI-ARIA aria-label;</li>
        <li>Sinon, contenu du lien;</li>
        <li>Sinon, contenu de l’attribut title.</li>
    </ul>

    <p>Cet ordre doit être utilisé pour déterminer ce qui constitue l’intitulé du lien. Par exemple :</p>

    <ul>
        <li>
            <p>En cas de présence conjointe d’un attribut WAI-ARIA aria-label et d’un attribut WAI-ARIA aria-labelledby, c’est le passage de texte référencé par l’attribut WAI-ARIA aria-labelledby qui doit être considéré comme l’intitulé;</p>
        </li>

        <li>
            <p>En cas de présence conjointe d’un attribut WAI-ARIA aria-label et d’un contenu dans le lien, c’est le contenu de l’attribut WAI-ARIA aria-label qui doit être considéré comme l’intitulé.</p>
        </li>
    </ul>

    <p>Référence : Accessible name and description calculation.</p>

    <p>Dans le cas où le « nom accessible » est obtenu à partir du contenu du lien, celui-ci sera variable en fonction des cas suivants :</p>

    <p>Lien texte :</p>

    <p>En HTML, le « nom accessible » correspond au texte constitué à partir :</p>

    <ul>
        <li>Du texte contenu dans le lien;</li>
        <li>Du texte contenu dans les éléments enfants du lien.</li>
    </ul>

    <p>Lien image :</p>

    <p>En HTML, le « nom accessible » correspond au texte constitué à partir de l’alternative textuelle d’une ou plusieurs images dans le lien du type :</p>

    <ul>
        <li>Image (balise <code>&lt;img&gt;</code> ou balise ayant l’attribut WAI-ARIA role=“img”);</li>
        <li>Image objet (balise <code>&lt;object&gt;</code>);</li>
        <li>Image bitmap (balise <code>&lt;canvas&gt;</code>);</li>
        <li>Image vectorielle (balise <code>&lt;svg&gt;</code>).</li>
    </ul>

    <p>Lien composite :</p>

    <p>En HTML, le « nom accessible » correspond au texte constitué à partir de l’ensemble :</p>

    <ul>
        <li>Du texte contenu dans le lien;</li>
        <li>Du texte contenu dans les éléments enfant du lien;</li>
        <li>Du contenu de l’alternative textuelle de la ou des images comprises dans le lien.</li>
    </ul>

    <p>Dans le cas d’un lien SVG (version 1.1), le « nom accessible » est obtenu comme suit :</p>

    <ul>
        <li>Passage de texte associé par l’attribut WAI-ARIA aria-labelledby;</li>
        <li>Sinon, contenu de l’attribut WAI-ARIA aria-label;</li>
        <li>Sinon, contenu de l’élément <code>&lt;title&gt;</code> enfant direct du lien;</li>
        <li>Sinon, contenu de l’attribut x-link:title;</li>
        <li>Sinon, contenu texte d’un ou plusieurs éléments <code>&lt;text&gt;</code>.</li>
    </ul>

    <p>Il faut cependant être vigilant car cet algorithme de calcul n’est pas encore pris en compte et effectif au sein des différents lecteurs d’écran. A ce jour, le support est disponible avec VoiceOver, mais incomplet ou lacunaire avec JAWS et NVDA. Si
        bien que le plus petit dénominateur commun sur lequel il est possible de se reposer pour fournir un intitulé au lien est l’élément <code>&lt;text&gt;</code>.</p>

    <p>Note 1 : un intitulé de lien sera considéré comme non-explicite dans le cas où le « nom accessible » ne reprend pas l’intitulé visible du lien.</p>

    <p>Note 2 : en raison de la configuration possible des aides techniques permettant de forcer la restitution du « nom accessible » issu du contenu de l’attribut title au détriment du « nom accessible » issu du contenu du lien. Un intitulé de lien sera
        considéré comme non-explicite dans le cas où le lien possède un attribut title dont la valeur ne reprendrait pas au moins le « nom accessible » issu du contenu du lien.</p>

    <p>Note 3 : dans le cas de la présence de plusieurs liens ayant une destination différente dont le « nom accessible » est identique. L’intitulé de lien seul sera considéré comme non-explicite si le contexte de lien ne permet pas de les différencier.</p>

    <p>Note 4 : lorsqu’un lien ne comporte aucun contenu (à l’exception des ancres), il sera non conforme au regard du critère 10.2 et du critère 6.4.</p>

    <p>Note 5 : bien que le calcul du nom accessible d’un lien tienne compte de contenus texte générés en CSS via les pseudo-éléments ::before et ::after, cette pratique ne doit pas être utilisée car elle constitue une non conformité au critère 1.3.1 des
        WCAG 2.1 (cf. F87).</p>

</div>

<h3>Création « Intitulé visible »</h3>

<p>Raison de la création</p>

<p>Ajout des tests permettant de couvrir le nouveau critère WCAG 2.1 “Label in name”.</p>

<h4>Nouvelle entrée</h4>

<div>
    <p>Texte affiché faisant office d’intitulé visible à l’écran au sein d’un bouton ou d’un lien.</p>

    <p>Texte affiché faisant office d’étiquette pour un champ formulaire.</p>

    <p>Ce texte peut être constitué de texte ou d’une image contenant du texte.</p>

</div>

<h3>Création « Contenu alternatif »</h3>

<p>Raison de la création</p>

<p>Prise en compte de la possibilité de fournir une alternative textuelle par le biais d’un contenu alternatif pour les images objet (balise <code>&lt;object&gt;</code> avec l’attribut type=“image/…”, les images embarqués (balise <code>&lt;embed&gt;</code>    avec l’attribut type=“image/…”) et les images bitmap (balise <code>&lt;canvas&gt;</code>)).</p>

<h4>Nouvelle entrée</h4>

<div>
    Contenu venant se substituer à un autre apportant la même information mais pouvant être présenté de façon différente. Ce contenu peut être de forme textuelle mais également être lui-même structuré à l’aide de balises. Un contenu alternatif devra respecter
    l’ensemble des critères du RGAA qui lui sont applicables pour être considéré comme une alternative accessible à l’élément qu’il remplace. Exemple : un tableau de données peut être le contenu alternatif d’une image bitmap (balise <code>&lt;canvas&gt;</code>)
    affichant un graphique statistique.
</div>

<h3>Création «Contenu caché »</h3>

<p>Raison de la création</p>

<p>Le critère 10.13 porte logiquement sur l’ensemble des contenus cachés et non uniquement sur le texte. L’entrée de glossaire est ainsi renommée “Contenu caché”. Suppression du cas width et height avec les valeurs 0 (width:0;height:0) qui est désormais
    restitué par les technologies d’assistances</p>

<h4>Nouvelle entrée</h4>

<div>
    <p>Contenu caché</p>

    <p>Les technologies d’assistance (notamment les lecteurs d’écran) ne restituent pas le contenu masqué via les propriétés :</p>

    <ul>
        <li>display avec la valeur none (display: none);</li>
        <li>visibility avec la valeur hidden (visibility: hidden);</li>
        <li>font-size avec la valeur 0 (font-size:0);</li>
        <li>Attribut HTML5 hidden;</li>
        <li>Attribut WAI-ARIA aria-hidden=“true”.</li>
    </ul>

    <p>Tous les contenus utilisant une ou plusieurs de ces propriétés et attributs sont applicables pour le critère 10.13.</p>

</div>

<h3>Création « Landmark »</h3>

<p>Raison de la création</p>

<p>Modification du critère 12.10.</p>

<h4>Nouvelle entrée</h4>

<div>
    <p>Landmarks</p>

    <p>WAI-ARIA propose des rôles permettant d’indiquer les zones principales (régions) du document. Ces rôles sont très profitables aux utilisateurs de lecteurs d’écran notamment, mais également aux utilisateurs de la navigation au clavier qui peuvent ainsi
        bénéficier de fonctionnalités de navigation rapide dans la structure du document.</p>

    <p>Les rôles doivent être définis dans le document en fonction de la nature de la zone :</p>

    <ul>
        <li>La zone d’en-tête doit avoir un attribut WAI-ARIA role=“banner”;</li>
        <li>Le menu de navigation principal doit avoir un attribut WAI-ARIA role=“navigation”;</li>
        <li>La zone de contenu principal doit avoir un attribut WAI-ARIA role=“main”;</li>
        <li>La zone de pied de page doit avoir un attribut WAI-ARIA role=“contentinfo”;</li>
        <li>La zone de moteur de recherche sur le site doit avoir un attribut WAI-ARIA role=“search”.</li>
    </ul>

    <p>Note 1 : Si la plupart des lecteurs d’écran mettent à disposition ces fonctionnalités, les navigateurs n’ont pas encore proposé de fonctionnalité de navigation dédiée pour les utilisateurs qui ne peuvent pas utiliser la souris. La mise en place des
        liens d’évitement reste donc à privilégier par rapport aux landmarks.</p>

    <p>Note 2 : Les rôles WAI-ARIA banner, main et contentinfo doivent être uniques dans la page. Le rôle WAI-ARIA navigation est réservé aux zones de navigations principales et secondaires. Lorsqu’il y a plusieurs rôles WAI-ARIA navigation, il peut être
        utile de les différencier en précisant un nom à chacune des zones via l’attribut WAI-ARIA aria-label ou aria-labelledby.</p>

</div>

<h3>Modification « Le nom, le rôle, la valeur, le paramétrage et les changements d’états »</h3>



<p>Référence au document WAI-ARIA 1.1 Authoring Practices et remplacement de API ARIA par WAI-ARIA</p>

<h4>Ancienne entrée</h4>

<div>
    <p>Un composant doit avoir un rôle et un nom appropriés, ses valeurs, états et paramètres éventuels doivent également être accessibles et correctement transmis aux APIs d’accessibilité notamment.</p>

    <p>Un composant peut s’appuyer sur un élément interactif HTML ou sur un élément non interactif surchargé par l’API ARIA via un rôle ad hoc. Important : les boutons (balises button ou input type=“button”) lorsqu’ils sont contrôlés via JavaScript sont
        à évaluer avec le critère 7.1.</p>

    <p>Le nom peut être l’intitulé du composant comme l’intitulé d’un bouton par exemple.</p>

    <p>La valeur est, par exemple, l’élément sélectionné d’une liste déroulante ou la valeur actuelle d’un curseur (slider).</p>

    <p>Le rôle correspond au type d’élément défini par la spécification HTML ou l’API WAI-ARIA (comme la balise button ou le rôle ARIA role=“button”).</p>

    <p>Le paramétrage correspond aux informations particulières d’un composant, généralement mis à disposition par l’API WAI-ARIA. Par exemple aria-controls est un paramètre qui transmet aux APIs l’information que le composant contrôle tel ou tel contenu
        (référencé par son identifiant - attribut id).</p>

    <p>Les changements d’états sont également mis à disposition par l’API WAI-ARIA. Par exemple aria-expanded est un état permettant de signaler aux APIs que le composant est « ouvert » ou « fermé ». Note : un état peut également être transmis via le nom,
        lorsque l’intitulé est changé dynamiquement pour correspondre à l’état de la zone contrôlée notamment.</p>

    <p>Ces paramètres ne sont pas obligatoires mais peuvent être requis s’ils sont indispensables pour rendre le composant accessible. C’est à l’auditeur de considérer les cas où ces paramètres sont indispensables en fonction du contexte lié à l’utilisation
        du composant.</p>

    <p>L’auditeur doit également vérifier que, lorsqu’il sont présents, ces paramètres sont correctement utilisés.</p>

    <p>Note : les rôles, propriétés et états ARIA s’implémentent via des attributs, par exemple role=“banner”, aria-hidden=“true”.</p>

</div>

<h4>Nouvelle entrée</h4>

<div>
    <p>Un composant doit avoir un rôle et un nom appropriés. Ses valeurs, états et paramètres éventuels doivent également être accessibles et correctement transmis aux APIs d’accessibilité notamment.</p>

    <p>Un composant peut s’appuyer sur un élément interactif HTML ou sur un élément non interactif surchargé par WAI-ARIA via un rôle ad hoc. Important : les boutons (balises <code>&lt;button&gt;</code> ou <code>&lt;input type="button"&gt;</code>) lorsqu’ils
        sont contrôlés via JavaScript sont à évaluer avec le critère 7.1.</p>

    <p>Le nom peut être l’intitulé du composant (l’intitulé d’un bouton, par exemple).</p>

    <p>La valeur est, par exemple, l’élément sélectionné d’une liste déroulante ou la valeur actuelle d’un curseur (slider).</p>

    <p>Le rôle correspond au type d’élément défini par la spécification HTML ou WAI-ARIA (comme la balise <code>&lt;button&gt;</code> ou l’attribut WAI-ARIA role=“button”).</p>

    <p>Le paramétrage correspond aux informations particulières d’un composant, généralement mis à disposition par WAI-ARIA. Par exemple aria-controls est un paramètre qui transmet aux APIs l’information que le composant contrôle tel ou tel contenu (référencé
        par son identifiant - attribut id).</p>

    <p>Les changements d’états sont également mis à disposition par WAI-ARIA. Par exemple aria-expanded est un état permettant de signaler aux APIs que le composant est « ouvert » ou « fermé ». À noter qu’un état peut également être transmis via le nom,
        lorsque l’intitulé est changé dynamiquement pour correspondre à l’état de la zone contrôlée notamment.</p>

    <p>Ces paramètres ne sont pas obligatoires mais peuvent être requis s’ils sont indispensables pour rendre le composant accessible. C’est à l’auditeur de considérer les cas où ces paramètres sont indispensables en fonction du contexte lié à l’utilisation
        du composant.</p>

    <p>L’auditeur doit également vérifier que, lorsqu’ils sont présents, ces paramètres sont correctement utilisés.</p>

    <p>Pour ce faire (s’il juge cela pertinent compte tenu du contexte d’implémentation des composants et des choix ergonomiques mis en œuvre) il peut s’appuyer sur les recommandations d’utilisation de WAI-ARIA pour les composants ayant des attributs WAI-ARIA
        correspondant à un motif de conception tel que décrit dans le document WAI-ARIA 1.1 Authoring Practices.</p>

    <p>Note : les rôles, propriétés et états WAI-ARIA s’implémentent via des attributs, par exemple role=“banner”, aria-hidden=“true”.</p>

</div>

<h3>Création « Légende »</h3>

<p>Raison de la création</p>

<p>L’entrée de glossaire bloc d’information de même nature est divisée en deux entrées distinctes dont Légende</p>

<h4>Nouvelle entrée</h4>

<div>
    <p>Légende</p>

    <p>HTML propose un dispositif permettant de titrer les groupes de champs de même nature par l’intermédiaire des éléments <code>&lt;fieldset&gt;</code> et <code>&lt;legend&gt;</code>.</p>

    <p>Il est également possible de créer des regroupements avec le rôle WAI-ARIA group et un passage de texte, faisant office de légende, liée par l’attribut WAI-ARIA aria-labelledby ou implémentée par l’intermédiaire d’un attribut WAI-ARIA aria-label.</p>

    <p>Note 1 : Les regroupements de champs peuvent utiliser d’autres méthodes qui associent l’information du regroupement directement dans l’étiquette du champ. Par exemple, par l’intermédiaire d’un attribut title, d’un attribut WAI-ARIA aria-label, d’une
        liaison aria-labelledby faisant office d’étiquette ou encore par l’attribut WAI-ARIA aria-describedby associant un texte complémentaire. Dans ce cas, le regroupement de champs devient inutile puisque les labels sont suffisamment pertinents.</p>

    <p>Note 2 : Lorsque le formulaire est constitué d’un seul bloc d’informations de même nature (l’identité et l’adresse de l’utilisateur, par exemple) ou d’un champ unique (un moteur de recherche, par exemple), le regroupement des champs n’est pas obligatoire.</p>

</div>

<h3>Modification « Lien »</h3>



<p>Simplification de l’entrée de glossaire, prise en compte des liens WAI-ARIA et SVG.</p>

<h4>Ancienne entrée</h4>

<div>
    Élément HTML (balise a) activable par l’utilisateur (par la souris, le clavier…) et déclenchant une action (affichage d’une page web, téléchargement d’un fichier…) ou un événement généré par un script. Un lien possède au minimum :
    <p></p>

    <ul>
        <li>Une référence de ressource (attribut href) ;</li>
        <li>Un intitulé de lien compris entre <code>&lt;a href="…"&gt;</code> et <code>&lt;/a&gt;</code>.</li>
    </ul>
</div>

<h4>Nouvelle entrée</h4>

<div>
    <p>En HTML :</p>

    <ul>
        <li>
            <p>Balise <code>&lt;a&gt;</code> possédant un attribut href;</p>
        </li>

        <li>
            <p>Balise possédant un attribut WAI-ARIA role=“link” et dont l’action de navigation est prise en charge par un script.</p>
        </li>
    </ul>

    <p>En SVG :</p>

    <ul>
        <li>Balise <code>&lt;a&gt;</code> possédant un attribut xlink:href en SVG 1.1.</li>
    </ul>

</div>

<h3>Modification « Lien adjacent ou bouton adjacent »</h3>



<p>Prise en compte de l’utilisation de boutons permettant d’accéder à un contenu alternatif dans la page.</p>

<h4>Ancienne entrée</h4>

<div>
    <p>Lien adjacent</p>

    <p>Lien présenté de manière adjacente dans la représentation graphique (CSS activé) et dans le code HTML. Dans le code HTML, le lien doit se situer juste avant ou juste après l’objet avec lequel il est adjacent.</p>

</div>

<h4>Nouvelle entrée</h4>

<div>
    <p>Lien ou bouton adjacent</p>

    <p>Lien ou bouton présenté de manière adjacente à un élément dans la page. Le lien ou bouton doit être adjacent visuellement dans la représentation graphique (CSS activé) et dans le code HTML. Dans le code HTML, le lien ou bouton doit se situer juste
        avant ou juste après l’élément auquel il est adjacent.</p>

</div>

<h3>Modification « Lien composite »</h3>



<p>Reformulation suite à la modification de l’entrée de glossaire Lien.</p>

<h4>Ancienne entrée</h4>

<div>
    <p>Lien dont le contenu entre <code>&lt;a href="…"&gt;</code> et <code>&lt;/a&gt;</code> est constitué de 2 éléments de type différent, au moins ; par exemple, du texte et une ou plusieurs images. L’intitulé de lien pour un lien composite est l’ensemble
        du texte et du contenu de l’alternative textuelle de la ou des images compris entre <code>&lt;a href="…"&gt;</code> et <code>&lt;/a&gt;</code>.</p>

    <p>Note importante: il est rappelé que l’utilisation de deux liens adjacents (lien image et lien texte) et identiques constitue une gêne importante pour l’utilisateur. Même si cela ne constitue pas une non-conformité, cet usage devrait être évité. Une
        manière de traiter ce type de liens est d’inclure l’image dans le lien texte de façon à constituer un lien composite, ce qui évitera la redondance.</p>

    <p>Vous pouvez consulter à ce sujet la technique H2 : Combining adjacent image and text links for the same resource.</p>

</div>

<h4>Nouvelle entrée</h4>

<div>
    <p>En HTML, lien contenant à la fois du texte et un ou plusieurs enfants de type image :</p>

    <ul>
        <li>Image (balise <code>&lt;img&gt;</code> ou balise ayant l’attribut WAI-ARIA role=“img”);</li>
        <li>Zone cliquable (balise <code>&lt;area&gt;</code>) possédant un attribut href;</li>
        <li>Image objet (balise <code>&lt;object&gt;</code>);</li>
        <li>Image bitmap (balise <code>&lt;canvas&gt;</code>);</li>
        <li>Image vectorielle (balise <code>&lt;svg&gt;</code>).</li>
    </ul>

    <p>Note importante: il est rappelé que l’utilisation de deux liens adjacents (lien image et lien texte) et identiques constitue une gêne importante pour l’utilisateur. Même si cela ne constitue pas une non-conformité, cet usage devrait être évité. Une
        manière de traiter ce type de liens est d’inclure l’image dans le lien texte de façon à constituer un lien composite, ce qui évitera la redondance.</p>

    <p>Vous pouvez consulter à ce sujet la technique H2 : Combining adjacent image and text links for the same resource.</p>

</div>

<h3>Suppression « liens identiques »</h3>

<p>Raison de la suppression</p>

<p>Suppression du critère 6.4 désormais traité via la nouvelle définition d’intitulé du lien dont la pertinence est vérifié dans le critère 6.1.</p>

<h4>Ancienne entrée</h4>

<div>
    <p>Liens identiques</p>

    <p>Deux liens sont dits identiques quand le lien x (intitulé du lien seul, contenu de l’attribut title ou contexte du lien) est égal au lien y. Cette définition s’applique à tous les types de liens : lien texte, lien image (les liens ont alors la même
        image) et lien composite.</p>

    <p>Attention : des liens avec des intitulés identiques mais des titres de liens différents ou des contextes de liens différents ne sont pas identiques (exemple : <code>&lt;a href="lien_bar.html" title="cliquer ici pour télécharger la barre d'outils"&gt;</code>cliquer
        ici
        <code>&lt;/a&gt;</code> et <code>&lt;a href="lien_doc.html" title="cliquer ici pour télécharger le document"&gt;</code>cliquer ici<code>&lt;/a&gt;</code>).</p>

</div>

<h3>Modification « Lien image »</h3>



<p>Reformulation suite à la modification de l’entrée de glossaire Lien. Faire directement référence à l’entrée de glossaire « Alternative textuelle » pour éviter une redondance.</p>

<h4>Ancienne entrée</h4>

<div>
    <p>Lien dont le contenu entre <code>&lt;a href="…"&gt;</code> et <code>&lt;/a&gt;</code> est uniquement constitué d’une image. L’intitulé de lien pour un lien image est le contenu de l’alternative textuelle de l’image.</p>

    <p>Un lien image peut être constitué :</p>

    <ul>
        <li>D’une image (balise img), l’alternative est le contenu de l’attribut alt ;</li>
        <li>D’une zone cliquable (balise area) possédant un attribut href, l’alternative est le contenu de l’attribut alt ;</li>
        <li>D’une image objet (balise object), l’alternative est contenue entre <code>&lt;object&gt;</code> et <code>&lt;/object&gt;</code> ;</li>
        <li>D’une image bitmap (balise canvas), l’alternative est contenue entre <code>&lt;canvas&gt;</code> et <code>&lt;/canvas&gt;</code> ;</li>
        <li>D’une image vectorielle (balise svg), l’alternative est contenue dans l’attribut aria-label ou la balise <code>&lt;title&gt;</code>.</li>
    </ul>

    <p>Note au sujet de embed : Pour les doctype antérieurs à HTML5, l’alternative d’une image embarquée peut être contenue entre <code>&lt;embed&gt;</code> et <code>&lt;/embed&gt;</code>. En HTML5, la balise embed a été modifiée. C’est une balise autofermante
        qui ne peut donc pas embarquer de contenu alternatif. Les propriétés ARIA, comme aria-label qui permettrait d’embarquer une alternative, n’étant pas supportées de manière uniforme, les seules méthodes possibles pour fournir une alternative à ces
        images embarquées porteuses d’informations sont : un lien adjacent permettant d’afficher une page ou un passage de texte contenant une alternative pertinente, un mécanisme qui permet à l’utilisateur de remplacer l’image par un texte alternatif
        ou par une image possédant une alternative pertinente.</p>

</div>

<h4>Nouvelle entrée</h4>

<div>
    En HTML, lien contenant uniquement un ou plusieurs enfants de type image :
    <p></p>

    <ul>
        <li>Image (balise <code>&lt;img&gt;</code> ou balise ayant l’attribut WAI-ARIA role=“img”);</li>
        <li>Zone cliquable (balise <code>&lt;area&gt;</code>) possédant un attribut href;</li>
        <li>Image objet (balise <code>&lt;object&gt;</code>);</li>
        <li>Image bitmap (balise <code>&lt;canvas&gt;</code>);</li>
        <li>Image vectorielle (balise <code>&lt;svg&gt;</code>).</li>
    </ul>
</div>

<h3>Modification « Lien texte »</h3>



<p>Reformulation suite à la modification de l’entrée de glossaire Lien.</p>

<h4>Ancienne entrée</h4>

<div>
    Lien dont le contenu entre <code>&lt;a href="…"&gt;</code> et <code>&lt;/a&gt;</code> est uniquement constitué de texte (il s’agit de son intitulé de lien).
</div>

<h4>Nouvelle entrée</h4>

<div>
    En HTML, lien ne contenant aucun élément enfant de type :
    <p></p>

    <ul>
        <li>Image (balise <code>&lt;img&gt;</code> ou balise ayant l’attribut WAI-ARIA role=“img”);</li>
        <li>Image objet (balise <code>&lt;object&gt;</code>);</li>
        <li>Image bitmap (balise <code>&lt;canvas&gt;</code>);</li>
        <li>Image vectorielle (balise <code>&lt;svg&gt;</code>).</li>
    </ul>
</div>

<h3>Modification « Liens d’évitement ou d’accès rapide »</h3>



<p>Précisions sur la notion suite à la modification des tests.</p>

<h4>Ancienne entrée</h4>

<div>
    Liens dont la fonction est de permettre de naviguer à l’intérieur du contenu (lien d’évitement, lien d’accès au formulaire de recherche ou au menu…).
</div>

<h4>Nouvelle entrée</h4>

<div>
    <p>Liens dont la fonction est de permettre de naviguer à l’intérieur de la page (lien d’évitement, lien d’accès au formulaire de recherche ou au menu…). Ces liens peuvent soit permettre d’accéder à une zone de la page (lien d’accès rapide) ou de sauter
        une zone dans la page (lien d’évitement).</p>

    <p>Note 1 : Un lien d’évitement ou d’accès rapide dont l’activation ne permettrait pas de reprendre la lecture et la navigation clavier à partir de la cible du lien lors de l’utilisation des navigateurs et des aides techniques retenus dans l’environnement
        de test (ou « base de référence ») de l’audit serait considéré comme non conforme.</p>

    <p>Note 2 : les liens d’évitements ou d’accès rapide doivent être situés à la même place dans la présentation et dans le même ordre relatif dans le code source afin de satisfaire au critère 12.2.</p>

</div>

<h3>Modification « listes »</h3>



<p>Ajout d’une note pour signaler le changement d’appellation “liste de définition” par “liste de description” en HTML5 et l’ouverture sémantique qui l’accompagne.</p>

<h4>Ancienne entrée</h4>

<div>
    <p>Liste</p>

    <p>Suite d’éléments pouvant être regroupés sous la forme d’une liste structurée ordonnée, non ordonnée ou de définition. Par exemple la suite des liens d’un menu de navigation est une liste de liens non ordonnée, les différentes étapes d’une procédure
        est une liste d’éléments ordonnés, le couple terme/définition d’un glossaire est une liste de définition. En HTML, les listes utilisent les balises suivantes :</p>

    <ul>
        <li>Liste ordonnée : balises ol et li (chaque élément de la liste est affecté d’un marqueur indexé) ;</li>
        <li>Liste non ordonnée : balises ul et li (chaque élément de la liste est affecté d’un marqueur non-indexé ;</li>
        <li>Liste de définition : balises dl, dt (terme à définir) et dd (définition).</li>
    </ul>

</div>

<h4>Nouvelle entrée</h4>

<div>
    <p>Listes</p>

    <p>Suite d’éléments pouvant être regroupés sous la forme d’une liste structurée ordonnée, non ordonnée ou de définition. Par exemple la suite des liens d’un menu de navigation est une liste de liens non ordonnée, les différentes étapes d’une procédure
        est une liste d’éléments ordonnés, le couple terme/description d’un glossaire est une liste de description. En HTML, les listes utilisent les balises suivantes :</p>

    <ul>
        <li>Liste ordonnée : balises <code>&lt;ol&gt;</code> et <code>&lt;li&gt;</code> (chaque élément de la liste est affecté d’un marqueur indexé);</li>
        <li>Liste non ordonnée : balises <code>&lt;ul&gt;</code> et <code>&lt;li&gt;</code> (chaque élément de la liste est affecté d’un marqueur non-indexé;</li>
        <li>Liste de description : balises <code>&lt;dl&gt;</code>, <code>&lt;dt&gt;</code> (terme à décrire) et <code>&lt;dd&gt;</code> (description).</li>
    </ul>

    <p>Note 1 : En HTML5, la balise <code>&lt;dl&gt;</code> ne représente plus seulement une liste de définition, mais de manière générique toute liste de description qui peut comprendre comme groupe de termes-descriptions des noms et des définitions, des
        questions et réponses, des catégories et des sujets, etc.</p>

    <p>Note 2 : Il est également possible de structurer les listes à l’aides des attributs WAI-ARIA role=“list” et role=“listitem” pour les listes ordonnées et non ordonnées.</p>

    <p>Note 3 : la notion de « regroupées visuellement sous forme de liste » se caractérise par :</p>

    <ul>
        <li>La présence d’un marqueur visuel permettant de faire comprendre qu’il s’agit d’une liste non ordonnée par exemple -, •, *, etc.;</li>
        <li>La présence d’un marqueur visuel permettant de faire comprendre qu’il s’agit d’une liste ordonnée par exemple un chiffre, une lettre grecque, etc.;</li>
        <li>La présence d’une série d’éléments se suivant visuellement les uns les autres, avec une forme visuelle, une nature et un fonctionnement identique, mais sans avoir directement de marqueur visuel de liste (non ordonnée ou ordonnée), comme par exemple
            un menu de navigation.</li>
    </ul>

    <p>Attention cependant toutes les listes ne nécessitent pas obligatoirement une structure de liste, par exemple une série de termes séparés par une virgule.</p>

</div>

<h3>Modification « Liste de choix »</h3>



<p>Remplacement de l’entrée par « Items de même nature des listes de choix »</p>

<h4>Ancienne entrée</h4>

<div>
    Champ de formulaire affichant une série d’items à sélectionner sous forme d’une liste déroulante (balise select avec des balises option).
</div>

<h4>Nouvelle entrée</h4>

<div>
    Dans une liste déroulante (balise <code>&lt;select&gt;</code>), ensemble d’items (balises <code>&lt;option&gt;</code>) pouvant être regroupés par leur nature. Le regroupement vise à identifier les items devant être traités comme un ensemble. Exemple,
    une liste de départements où il serait possible de choisir une région.
</div>

<h3>Création « liste des valeurs possibles pour l’attribut autocomplete »</h3>

<p>Raison de la création</p>

<p>Prise en compte du nouveau critère de succès 1.3.5 des WCAG 2.1</p>

<h4>Nouvelle entrée</h4>

<div>
    <p>Liste des valeurs possibles pour l’attribut autocomplete</p>

    <p>La liste des valeurs disponibles est fournie par la spécification WCAG 2.1 :</p>

    <ul>
        <li>name - Nom complet;</li>
        <li>honorific-prefix - Abréviation, civilité ou titre;</li>
        <li>given-name - Prénom;</li>
        <li>additional-name - Prénoms additionnels;</li>
        <li>family-name - Nom de famille;</li>
        <li>honorific-suffix - Suffixe honorifique;</li>
        <li>nickname - Surnom, diminutif;</li>
        <li>organization-title - Fonction, intitulé de poste;</li>
        <li>username - Nom d’utilisateur;</li>
        <li>new-password - Nouveau mot de passe (par exemple, lors de la création d’un compte ou d’un changement de mot de passe)</li>
        <li>current-password - Mot de passe actuel pour le compte identifié par le champ username (par exemple, lors d’une connexion)</li>
        <li>organization - Nom de l’organisation correspondant à la personne, à l’adresse ou à l’information de contact dans les autres champs associés avec ce champ</li>
        <li>street-address - Adresse postale (multiligne, nouvelles lignes conservées)</li>
        <li>address-line1 - Adresse postale (une ligne par champ, ligne 1)</li>
        <li>address-line2 - Adresse postale (une ligne par champ, ligne 2)</li>
        <li>address-line3 - Adresse postale (une ligne par champ, ligne 3)</li>
        <li>address-level4 - Le niveau administratif le plus détaillé, pour les adresses pourvues de quatre niveaux administratifs</li>
        <li>address-level3 - Le troisième niveau administratif, pour les adresses pourvues d’au moins trois niveaux administratifs</li>
        <li>address-level2 - Le deuxième niveau administratif, pour les adresses pourvues d’au moins deux niveaux administratifs</li>
        <li>address-level1 - Le plus large niveau administratif d’une adresse, c’est-à-dire la province dans laquelle se trouve la localité</li>
        <li>country - Code pays</li>
        <li>country-name - Nom de pays</li>
        <li>postal-code - Code postal, code CEDEX (si le CEDEX est présent, ajouter “CEDEX”, et ce qui le suit doit être ajouté dans le champ address-level2)</li>
        <li>cc-name - Nom complet figurant sur le moyen de paiement</li>
        <li>cc-given-name - Prénom figurant sur le moyen de paiement</li>
        <li>cc-additional-name - Prénoms additionnels figurant sur le moyen de paiement cc-family-name - Nom de famille figurant sur le moyen de paiement</li>
        <li>cc-number - Code identifiant le moyen de paiement (e.g., un numéro de carte bancaire)</li>
        <li>cc-exp - Date d’expiration du moyen de paiement</li>
        <li>cc-exp-month - Le mois de la date d’expiration du moyen de paiement</li>
        <li>cc-exp-year - L’année de la date d’expiration du moyen de paiement</li>
        <li>cc-csc - Code de sécurité du moyen de paiement (also known as the card security code (CSC), card validation code (CVC), card verification value (CVV), signature panel code (SPC), credit card ID (CCID), etc)</li>
        <li>cc-type - Type de moyen de paiement (e.g. Visa)</li>
        <li>transaction-currency - La devise qui a la préférence de l’utilisateur lors d’une transaction</li>
        <li>transaction-amount - Le montant qui a la préférence de l’utilisateur lors d’une transaction (e.g., en réponse à une enchère ou à un prix soldé)</li>
        <li>language - Langage préféré</li>
        <li>bday - Date d’anniversaire</li>
        <li>bday-day - Le jour de la date d’anniversaire</li>
        <li>bday-month - Le mois de la date d’anniversaire</li>
        <li>bday-year - L’année de la date d’anniversaire</li>
        <li>sex - Identité sexuelle</li>
        <li>url - Page d’accueil ou une autre page Web correspondant à l’organisation, la personne, l’adresse ou à l’information de contact dans les autres champs associés avec ce champ</li>
        <li>photo - Photographie, icone ou une autre image correspondant à l’organisation, la personne, l’adresse ou à l’information de contact dans les autres champs associés avec ce champ</li>
        <li>tel - Numéro de téléphone complet, y compris le code pays</li>
        <li>tel-country-code - Code pays du numéro de téléphone</li>
        <li>tel-national - Numéro de téléphone sans la partie code pays, avec un préfixe interne au pays, s’il y a lieu.</li>
        <li>tel-area-code - Indicatif régional du numéro de téléphone, avec un préfixe interne au pays, s’il y a lieu.</li>
        <li>tel-local - Numéro de téléphone sans la partie code pays ni l’indicatif régional.</li>
        <li>tel-local-prefix - La première partie du composant du numéro de téléphone qui suit l’indicatif régional, lorsque ce composant est scindé en deux parties</li>
        <li>tel-local-suffix - La seconde partie du composant du numéro de téléphone qui suit l’indicatif régional, lorsque ce composant est scindé en deux parties</li>
        <li>tel-extension - Numéro de téléphone d’un poste interne</li>
        <li>email - Adresse électronique</li>
        <li>impp - URL correspondant d’un protocole de messagerie instantanée (par exemple, “aim:goim?screenname=example” ou “xmpp:fred@example.net”)</li>
    </ul>

</div>

<h3>Suppression « Mécanisme qui permet d’afficher le texte avec un rapport de contraste conforme »</h3>

<p>Raison de la suppression</p>

<p>Suppression du test 3.3.5</p>

<h4>Ancienne entrée</h4>

<div>
    <p>Mécanisme qui permet d’afficher le texte avec un rapport de contraste conforme</p>

    <p>Si le mécanisme est géré par un lien ou un bouton dont l’intitulé visible est constitué par un texte seul (contenu entre les balises <code>&lt;a&gt;</code> et <code>&lt;/a&gt;</code>, <code>&lt;button&gt;</code> et <code>&lt;/button&gt;</code> ou
        encore attribut value par exemple), alors le rapport de contraste de l’élément est à tester avec les tests 3.3.1, 3.3.2, 3.3.3, 3.3.4, 3.4.1, 3.4.2, 3.4.3 ou 3.4.5, selon le niveau exigé et le cas d’application.</p>

    <p>Pour toutes les autres implémentations, les tests 3.3.5 et 3.4.5 s’appliquent (selon, le niveau AA ou AAA, exigé).</p>

</div>

<h3>Suppression « Menu de navigation »</h3>

<p>Raison de la suppression</p>

<p>Fusion des deux entrées de glossaire « Barre de navigation » et « Menu de navigation » dont les contenus se recoupent en partie, la notion de menu de navigation étant englobée dans la notion plus générique de barre de navigation. Cette mise en cohérence
    permet d’éviter les tests redondants des critères 12.2 et 12.3.</p>

<h4>Ancienne entrée</h4>

<div>
    <p>Menu de navigation</p>

    <p>Zone contenant des liens qui permettent de naviguer dans les rubriques principales du site. Il s’agit généralement du menu principal et des menus contextuels.</p>

    <p>Note : Les liens de pied de page renvoyant vers les mentions légales, plan du site et autres informations concernant le site ne sont pas considérés comme un menu de navigation principal.</p>

    <p>Voir la définition technique de zone d’en-tête fournie par l’API ARIA navigation (role).</p>

</div>

<h3>Création « Message de statut »</h3>

<p>Raison de la création de l’entrée</p>

<p>Prise en compte du critère WCAG 4.1.3.</p>

<h4>Nouvelle entrée</h4>

<div>
    <p>Message de statut</p>

    <p>Un message de statut informe l’utilisateur d’un changement de contenu dans la page sans interrompre son activité principale (il n’y a pas de changement de contexte par exemple un repositionnement du focus sur le message).</p>

    <p>Un message de statut peut informer sur :</p>

    <ul>
        <li>Le succès ou le résultat d’une action;</li>
        <li>L’état occupé d’une application;</li>
        <li>L’état de progression d’un processus;</li>
        <li>L’existence d’erreur.</li>
    </ul>

</div>

<h3>Création « modifier ou annuler les données et les actions effectuées »</h3>

<p>Raison de la création</p>

<p>Ajouter visant à faciliter la compréhension du critère</p>

<h4>Nouvelle entrée</h4>

<div>
    <p>Modifier ou annuler les données et les actions effectués</p>

    <p>Procédés par lesquels un utilisateur peut modifier les données qu’il a saisies, faire annuler sa saisie ou faire annuler les actions découlant de sa saisie par exemple annuler une commande ou un virement bancaire.</p>

    <p>Note : La page contenant un formulaire qui modifie ou supprime des données, ou qui transmet des réponses à un test ou un examen, ou dont la validation a des conséquences financières ou juridiques, doit indiquer explicitement la durée pendant laquelle
        l’utilisateur peut demander l’annulation de sa saisie. Elle devra également contenir la procédure à effectuer pour annuler cette saisie. Cette procédure n’a pas à être obligatoirement réalisable en ligne même si cela reste recommandé.</p>

</div>

<h3>Modification «Motif de conception»</h3>



<p>Mise à jour suite à la suppression des test 7.1.3 et 7.3.3, mise à jour de la référence à la version du document WAI-ARIA Authoring Practices, reformulation du début de la note 2.</p>

<h4>Ancienne entrée</h4>

<div>
    <p>Un motif de conception (Design Pattern) est un modèle défini par l’API WAI-ARIA qui décrit la structure, les rôles et propriétés et le comportement que doit respecter un composant JavaScript (widget).</p>

    <p>Les motifs de conception sont décrits dans le document : WAI-ARIA 1.0 Authoring Practices.</p>

    <p>Un composant développé avec JavaScript doit respecter le motif de conception correspondant au rôle WAI-ARIA utilisé.</p>

    <p>Note 1 : compte tenu du manque de support de certaines propriétés et de certains rôles WAI-ARIA et de la grande variabilité des situations dans lesquelles un composant JavaScript peut être proposé, il est possible d’adapter des motifs de conception
        à des contextes ou des utilisations particulières. Dans ce cas, le motif de conception adapté doit :</p>

    <ul>
        <li>Respecter la structure générale, par exemple un ensemble de panneaux (rôle tabpanel) d’un système d’onglets est forcément lié à un ensemble d’onglets (rôle tablist) ;</li>
        <li>Utiliser en remplacement d’un rôle ou d’une propriété WAI-ARIA mal supporté, un rôle ou une propriété WAI-ARIA équivalent, offrant un comportement et une restitution similaire.</li>
    </ul>

    <p>Note 2 : Cela ne concerne pas le fait d’enrichir un motif de conception de rôles ou propriétés WAI-ARIA supplémentaires dont la compatibilité avec l’accessibilité est contrôlée par le test de restitution sur la base de référence. Par exemple l’ajout
        de la propriété aria-hidden sur les panneaux (rôle tabpanel) d’un système d’onglets ne définit pas un motif de conception adapté.</p>

</div>

<h4>Nouvelle entrée</h4>

<div>
    <p>Un motif de conception (Design Pattern) est un modèle défini dans le document : WAI-ARIA 1.1 Authoring Practices. qui décrit la structure, les rôles et propriétés et le comportement clavier que doit respecter un composant JavaScript (widget).</p>

    <p>Il est recommandé que les composants développés en JavaScript utilisant des attributs WAI-ARIA correspondant à un motif de conception respectent celui-ci. Attention cependant, les motifs de conception ne sont pas tous adaptés à un usage non applicatif,
        en particulier pour les sites proposant un affichage en contexte mobile.</p>

    <p>Note 1 : compte tenu du manque de support de certaines propriétés et de certains rôles WAI-ARIA et de la grande variabilité des situations dans lesquelles un composant JavaScript peut être proposé, il est possible d’adapter des motifs de conception
        à des contextes ou des utilisations particulières. Dans ce cas, le motif de conception adapté doit :</p>

    <ul>
        <li>
            <p>Respecter la structure générale : par exemple un ensemble de panneaux (rôle WAI-ARIA tabpanel) d’un système d’onglets est forcément lié à un ensemble d’onglets (rôle WAI-ARIA tablist);</p>
        </li>

        <li>
            <p>Utiliser en remplacement d’un rôle ou d’une propriété WAI-ARIA mal supporté, un rôle ou une propriété WAI-ARIA équivalent, offrant un comportement et une restitution similaire.</p>
        </li>
    </ul>

    <p>Note 2 : Le fait d’enrichir un motif de conception de rôles ou propriétés WAI-ARIA supplémentaires dont la compatibilité avec l’accessibilité est contrôlée par le test de restitution sur l’environnement de test (ou « base de référence ») ne constitue
        pas une adaptation d’un motif de conception. Par exemple l’ajout de l’attribut WAI-ARIA aria-hidden sur les panneaux (rôle WAI-ARIA tabpanel) d’un système d’onglets ne définit pas un motif de conception adapté.</p>

</div>

<h3>Création « Passage de texte associé au tableau de données »</h3>

<p>Raison de la création</p>

<p>Prise en compte des attributs WAI-ARIA dans la thématique tableaux</p>

<h4>Nouvelle entrée</h4>

<div>
    <p>Passage de texte associé au tableau de données</p>

    <p>Texte dans une balise <code>&lt;caption&gt;</code> ou dans une balise associée au tableau de données via l’attribut WAI-ARIA aria-labelledby.</p>

</div>

<h3>Modification « Passage de texte lié par aria-labelledby ou aria-describedby »</h3>



<p>Intégration dans la définition de la présence d’un id unique et de l’association au champ</p>

<h4>Ancienne entrée</h4>

<div>
    <p>Il s’agit d’un ou de plusieurs passages de texte identifiés par des id et liés par aria-labelledby ou aria-describedby sur le modèle suivant : aria-labelledby=“ID1 ID2 ID3…”.</p>

    <p>Note : pour assurer une compatibilité maximum avec les agents utilisateurs, notamment Internet Explorer 11, il est recommandé d’implémenter un tabindex=“-1”sur les passages de textes qui ne sont pas des éléments interactifs (bouton, liens, éléments
        de formulaires, etc.).</p>

</div>

<h4>Nouvelle entrée</h4>

<div>
    <p>Il s’agit d’un ou de plusieurs passages de texte identifiés par des id dont la valeur est unique dans la page et associés à un élément (champ de formulaire, bouton, etc. ) par les attributs WAI-ARIA aria-labelledby ou aria-describedby sur le modèle
        suivant : aria-labelledby=“ID1 ID2 ID3…” où la valeur de l’attribut utilisé est égale à la liste des valeurs d’attributs id des passages de texte à associer présents dans la page.</p>

    <p>Note 1 : pour assurer une compatibilité maximum avec les agents utilisateurs, notamment Internet Explorer 11, il est recommandé d’implémenter un tabindex=“-1” sur les passages de textes qui ne sont pas des éléments interactifs (bouton, liens, éléments
        de formulaires, etc.).</p>

    <p>Note 2 : la valeur des attributs WAI-ARIA aria-labelledby ou aria-describedby ne doivent pas créer de référence récursive (A référence B qui référence A) ou traversante (A qui référence B qui référence C).</p>

</div>

<h3>Modification « Prise de focus »</h3>



<p>Mise à jour de la note 2 suite à la mise à jour du critère 3.3.</p>

<h4>Ancienne entrée</h4>

<div>
    <p>La prise de focus est l’état renvoyé par un élément qui reçoit l’attention suite à une action de l’utilisateur. Il y a trois moyens en HTML de donner le focus à un élément :</p>

    <ul>
        <li>En activant l’élément par un dispositif de pointage (souris) ;</li>
        <li>En activant l’élément par la touche tabulation ;</li>
        <li>En activant l’élément par un raccourci clavier (accesskey).</li>
    </ul>

    <p>Certains éléments reçoivent naturellement le focus, par exemple : a, area, button, input, object, select, label, legend, optgroup, option et textarea. Le comportement de l’élément, lors de la prise de focus, dépend de sa nature ; un lien, par exemple,
        devra être activé après la prise de focus (sauf utilisation de script). En revanche, un élément de formulaire, comme textarea, devra autoriser la saisie suite à la prise de focus. Les éléments label et legend ne reçoivent la prise de focus que
        via le pointeur souris. Pour l’élément label, le comportement attendu est de transférer la prise de focus sur l’élément qui lui est associé.</p>

    <p>Note 1 : la spécification WAI-ARIA étend le rôle attribué à l’attribut tabindex en définissant que tout élément html peut acquérir la possibilité de recevoir le focus en lui attribuant la valeur tabindex=“0”. En revanche, aucun comportement n’est
        attribué via la seule présence de tabindex. De même, la valeur tabindex=“-1” retire l’élément qui en est affecté du plan de tabulation en inhibant sa capacité à signaler la « prise de focus ». L’utilisation de tabindex, conformément à la spécification
        WAI-ARIA, peut valider certains tests relatifs à la gestion du focus de tabulation, notamment.</p>

    <p>Note 2 : l’indication visuelle du focus ne doit pas être dégradée, c’est à dire amoindrie au moyen de valeurs qui en dégrade le style par rapport à son style par défaut.</p>

</div>

<h4>Nouvelle entrée</h4>

<div>
    <p>La prise de focus est l’état renvoyé par un élément qui reçoit l’attention suite à une action de l’utilisateur. Il y a trois moyens en HTML de donner le focus à un élément :</p>

    <ul>
        <li>En activant l’élément par un dispositif de pointage (exemple : souris);</li>
        <li>En atteignant l’élément par la touche tabulation ou majuscule + tabulation;</li>
        <li>En activant l’élément par un raccourci clavier (accesskey).</li>
    </ul>

    <p>Certains éléments reçoivent naturellement le focus, par exemple : <code>&lt;a href&gt;</code>, <code>&lt;area href&gt;</code>, <code>&lt;button&gt;</code>, <code>&lt;input&gt;</code>, <code>&lt;object&gt;</code>, <code>&lt;select&gt;</code>, <code>&lt;label&gt;</code>,
        <code>&lt;legend&gt;</code>, <code>&lt;optgroup&gt;</code>, <code>&lt;option&gt;</code> et <code>&lt;textarea&gt;</code>. Le comportement de l’élément, lors de la prise de focus, dépend de sa nature ; un lien, par exemple, devra être activé après
        la prise de focus (sauf utilisation de script). En revanche, un élément de formulaire, comme <code>&lt;textarea&gt;</code>, devra autoriser la saisie suite à la prise de focus. Les éléments et <code>&lt;legend&gt;</code> ne reçoivent la prise
        de focus que via le pointeur souris. Pour l’élément <code>&lt;label&gt;</code>, le comportement attendu est de transférer la prise de focus sur l’élément qui lui est associé.</p>

    <p>Note 1 : la spécification WAI-ARIA étend le rôle attribué à l’attribut tabindex en définissant que tout élément HTML peut acquérir la possibilité de recevoir le focus en lui attribuant la valeur tabindex=“0”. En revanche, aucun comportement n’est
        attribué via la seule présence de tabindex. De même, la valeur tabindex=“-1” lorsqu’elle est utilisée sur un élément recevant naturellement le focus retire l’élément qui en est affecté du plan de tabulation en inhibant sa capacité à signaler la
        « prise de focus ». L’utilisation de tabindex, conformément à la spécification WAI-ARIA, peut valider certains tests relatifs à la gestion du focus de tabulation, notamment.</p>

    <p>Note 2 : l’indication visuelle du focus du navigateur ne doit pas être pas supprimée ou dégradée sauf si un style du focus défini par l’auteur est visible et suffisamment contrasté au regard du critère 3.3.</p>

</div>

<h3>Création « Pressé ou posé »</h3>

<p>Raison de la création</p>

<p>Précisions visant à faciliter la compréhension technique des termes pressé ou posé</p>

<h4>Nouvelle entrée</h4>

<div>
    <p>Pressé ou posé</p>

    <p>Correspond aux gestionnaires d’événement JavaScript considérés comme des événements descendants (mousedown, touchstart par exemple).</p>

</div>

<h3>Création « Raccourci clavier »</h3>

<p>Raison de la création</p>

<p>Précision sur la nature d’un raccourci clavier et le cas des “Access keys”.</p>

<h4>Nouvelle entrée</h4>

<div>
    <p>Raccourci clavier</p>

    <p>Un moyen de déclencher une action associée à un composant de l’interface utilisateur en appuyant sur une ou plusieurs touches.</p>

    <p>Note : les “Access keys” (attribut HTML accesskey) sont bien des raccourcis clavier, mais ils ne sont pas concernés par le critère 12.15 dans la mesure où leur activation nécessite déjà l’usage de touches de modification (variables suivant les navigateurs).</p>

</div>

<h3>Création « Règles d’écriture »</h3>

<p>Raison de la création</p>

<p>Précisions visant à faciliter la compréhension des règles techniques concernée</p>

<h4>Nouvelle entrée</h4>

<div>
    <p>Règles d’écriture</p>

    <p>Le code source doit respecter les règles suivantes en accord avec la déclaration de type de document utilisée dans la page :</p>

    <ul>
        <li>Pas de balise ouvrante ou fermante sans <code>&lt; ou &gt;</code> (exemple d’erreur : li&gt;`toto);</li>
        <li>pas de balise fermante avec / manquant (exemple d’erreur : <code>&lt;li&gt;</code>toto<code>&lt;li&gt;</code>);</li>
        <li>pas de valeur d’attribut avec des “ ou ‘ manquant (exemple d’erreur : alt=“toto);</li>
        <li>pas de valeurs multiple d’attribut séparées par un espace sans “ ou ‘ (exemple d’erreur : alt=bonjour toto);</li>
        <li>pas d’espace manquant entre les attributs (exemple : alt=”toto”title=”toto”);</li>
        <li>pas de balise fermante manquante pour les éléments qui en exigent une (exemple d’erreur : <code>&lt;object&gt;</code> sans <code>&lt;/object&gt;</code>).</li>
    </ul>

</div>

<h3>Création « Relâché ou relevé »</h3>

<p>Raison de la création</p>

<p>Précisions visant à faciliter la compréhension technique des termes relâché ou relevé.</p>

<h4>Nouvelle entrée</h4>

<div>
    <p>Relâché ou relevé</p>

    <p>Correspond aux gestionnaires d’événement JavaScript considérés comme des événements ascendants (mouseup, touchend par exemple).</p>

</div>

<h3>Modification « Résumé »</h3>



<p>Modification de la note pour permettre le test du résumé sur les sites utilisant HTML4 ou XHTML. Prise en charge des tableaux WAI-ARIA</p>

<h4>Ancienne entrée</h4>

<div>
    <p>Résumé</p>

    <p>Un résumé est un passage de texte associé à un tableau de données complexe. Il permet de donner des informations sur la nature et la structure du tableau afin d’en faciliter l’utilisation par les utilisateurs de technologies d’assistance par exemple.</p>

    <p>Note : l’attribut summary est obsolète non conforme en HTML5 et ne doit plus être utilisé.</p>

    <p>Parmi les 5 techniques proposées par HTML5, la seule technique utilisable actuellement est celle qui consiste à insérer le résumé directement dans le titre (balise <code>&lt;caption&gt;</code>) en masquant le résumé via CSS si nécessaire.</p>

    <p>Consulter la note technique au sujet du résumé de tableau.</p>

</div>

<h4>Nouvelle entrée</h4>

<div>
    <p>Résumé (de tableau)</p>

    <p>Un résumé est un passage de texte associé à un tableau de données complexe. Il permet de donner des informations sur la nature et la structure du tableau afin d’en faciliter l’utilisation par les utilisateurs de technologies d’assistance par exemple.</p>

    <p>Note : en HTML5, la seule technique utilisable actuellement est celle qui consiste à insérer le résumé directement dans le titre (balise <code>&lt;caption&gt;</code>) en masquant le résumé via CSS si nécessaire.</p>

    <p>Dans les versions précédentes de HTML, le résumé peut être inséré via un attribut summary sur la balise <code>&lt;table&gt;</code>.</p>

    <p>Dans le cas d’une balise avec l’attribut WAI-ARIA role=“table”, le résumé doit être fourni au moyen d’un attribut aria-describedby et être correctement restitué par les technologies d’assistance.</p>

</div>

<h3>Modification « Systèmes de navigation »</h3>



<p>Remplacement de « Table de contenu » par « Table des matières ».</p>

<h4>Ancienne entrée</h4>

<div>
    <p>
        Tout procédé permettant une navigation dans le site ou dans une page, les systèmes de navigation retenus sont :
    </p>

    <ul>
        <li>Menu de navigation principal ;</li>
        <li>Table de contenu ;</li>
        <li>Plan du site ;</li>
        <li>Moteur de recherche</li>
    </ul>
</div>

<h4>Nouvelle entrée</h4>

<div>
    Tout procédé permettant une navigation dans le site ou dans une page, les systèmes de navigation retenus sont :
    <p></p>

    <ul>
        <li>Menu de navigation principal;</li>
        <li>Table des matières;</li>
        <li>Plan du site;</li>
        <li>Moteur de recherche.</li>
    </ul>
</div>

<h3>Modification « Tableau de données »</h3>



<p>Prise en charge des tableaux WAI-ARIA</p>

<h4>Ancienne entrée</h4>

<div>
    <p>Élément HTML (balise table) permettant de structurer des informations en lignes et en colonnes via des cellules de données (balise td) et des cellules d’en-têtes (balise th).</p>
</div>

<h4>Nouvelle entrée</h4>

<div>
    <p>Un tableau de données est une structure introduite par une balise <code>&lt;table&gt;</code> ou lorsqu’il est correctement restitué par les technologies d’assistance par une balise pourvue d’un attribut WAI-ARIA role=“table”. Cette balise permet de
        structurer des informations en lignes et en colonnes via des cellules de données et des cellules d’en-têtes.
    </p>
</div>

<h3>Création « Tableau de données ayant un titre »</h3>

<p>Raison de la création</p>

<p>Prise en compte des attributs WAI-ARIA dans la thématique tableaux</p>

<h4>Nouvelle entrée</h4>

<div>
    <p>Tableau de données ayant un attribut ou contenant une balise dont le contenu fait office de titre.</p>

    <p>Tableau de données précédé ou suivi d’un passage de texte associé au tableau faisant office de titre.</p>

    <p>Dans la mesure où il est bien correctement restitué et associé par les technologies d’assistance au tableau de données, le titre associé peut être :</p>

    <ul>
        <li>Dans une balise <code>&lt;caption&gt;</code>;</li>
        <li>Dans un attribut title;</li>
        <li>Dans un attribut WAI-ARIA aria-label;</li>
        <li>Dans une balise associée au tableau de données via un attribut WAI-ARIA aria-labelledby sur le tableau.</li>
    </ul>

    <p>Note : seule la balise <code>&lt;caption&gt;</code> étant complètement supportée par l’ensemble des technologies d’assistance, il est fortement recommandé de privilégier cette solution lors de la mise en œuvre afin d’éviter de nombreuses vérifications
        dans les différentes combinaisons prévues par l’environnement de test (ou « base de référence »).</p>

</div>

<h3>Modification « Tableau de données complexe »</h3>



<p>Prise en charge des tableaux WAI-ARIA</p>

<h4>Ancienne entrée</h4>

<div>
    <p>Lorsqu’un tableau de données contient des en-têtes qui ne sont pas répartis uniquement sur la première ligne et/ou la première colonne de la grille ou dont la portée n’est pas valable pour l’ensemble de la colonne ou de la ligne, on parle de tableau
        de données complexe. Il est alors nécessaire de fournir un « résumé » permettant d’en expliquer sa nature et sa structure afin d’en faciliter la consultation pour des utilisateurs de technologies d’assistance par exemple.</p>
</div>

<h4>Nouvelle entrée</h4>

<div>
    <p>Un tableau de données est une structure introduite par une balise <code>&lt;table&gt;</code> ou lorsqu’il est correctement restitué par les technologies d’assistance par une balise pourvue d’un attribut WAI-ARIA role=“table”.</p>

    <p>Lorsqu’un tableau de données contient des en-têtes qui ne sont pas répartis uniquement sur la première ligne et/ou la première colonne de la grille ou dont la portée n’est pas valable pour l’ensemble de la colonne ou de la ligne, on parle de tableau
        de données complexe. Il est alors nécessaire de fournir un « résumé » permettant d’en expliquer sa nature et sa structure afin d’en faciliter la consultation pour des utilisateurs de technologies d’assistance par exemple.</p>

</div>

<h3>Modification « Taille de caractère »</h3>



<p>Mise à jour suite à la suppression des tests 10.4.1 et 10.4.2 et à la mise à jour du test 10.4.3</p>

<h4>Ancienne entrée</h4>

<div>
    <p>Taille de caractères</p>

    <p>Valeur attribuée aux polices de caractères présentes sur une page web. Pour les contenus web, les tailles de caractères doivent être définies avec des unités relatives (%, em, rem, vw, vh, vmin ou vmax) ou des mots clés (xx-small, x-small, small,
        medium, large, x-large, xx-large, smaller, larger).</p>

    <p>Note : l’utilisation du pixel (px) est proscrite.</p>

</div>

<h4>Nouvelle entrée</h4>

<div>
    <p>Taille des caractères</p>

    <p>Valeur attribuée aux polices de caractères présentes sur une page web.</p>

</div>

<h3>Suppression « Texte caché »</h3>

<p>Raison de la suppression</p>

<p>Suppression de l’entrée texte caché pour «Contenu caché»</p>

<h4>Ancienne entrée</h4>

<div>
    <p>Les technologies d’assistance (notamment les lecteurs d’écran) ne restituent pas le texte masqué via les propriétés :</p>

    <ul>
        <li>display avec la valeur none (display:none)</li>
        <li>visibility avec la valeur hidden (visibility :hidden)</li>
        <li>width et height avec les valeurs 0 (width:0;height:0)</li>
        <li>font-size avec la valeur 0 (font-size:0)</li>
        <li>Attribut HTML5 hidden</li>
        <li>Propriété aria-hidden=“true”</li>
    </ul>

    <p>Tous les contenus texte utilisant une ou plusieurs de ces propriétés sont applicables pour le critère 10.13.</p>

</div>

<h3>Modification « Titre »</h3>



<p>Modification de l’entrée pour :</p>

<ul>
    <li>supprimer la mention obligatoire d’un titre h1 dans une page</li>
    <li>supprimer la note concernant les titres masqués suite à la suppression des tests 9.1.1 et 9.1.3.</li>
    <li>Prendre en compte WAI-ARIA role heading</li>
</ul>

<h4>Ancienne entrée</h4>

<div>
    <p>Élément HTML (balise h) à 6 niveaux de hiérarchie (de h1 pour le titre le plus important à h6 pour le moins important) permettant de structurer l’information d’un contenu web.</p>

    <p>La hiérarchie entre les titres doit être respectée dans une page web et les degrés de titre ne peuvent pas être sautés (un titre h3 ne peut pas venir directement après un titre h1, par exemple). Par contre, la hiérarchie ne doit pas obligatoirement
        débuter par un h1. Même si cet usage n’est pas encouragé, il est considéré comme conforme de débuter la hiérarchie des titres d’une page par un autre niveau que le niveau 1.</p>

    <p>Dans chaque page web, il doit y avoir un titre h1, au moins.</p>

    <p>Note : les titres cachés via CSS sont considérés comme présents et valident le critère 9.1.</p>

</div>

<h4>Nouvelle entrée</h4>

<div>
    <p>Élément HTML (balise h) à 6 niveaux de hiérarchie (de h1 pour le titre le plus important à h6 pour le moins important) ou élément HTML ayant les attributs WAI-ARIA role=“heading” et aria-level permettant de structurer l’information d’un contenu web.
    </p>

    <p>La hiérarchie entre les titres doit être respectée dans une page web et les degrés de titre ne peuvent pas être sautés (un titre h3 ne peut pas venir directement après un titre h1, par exemple). Par contre, la hiérarchie ne doit pas obligatoirement
        débuter par un h1. Même si cet usage n’est pas encouragé, il est considéré comme conforme de débuter la hiérarchie des titres d’une page par un autre niveau que le niveau 1.</p>

    <p>Note : les titres cachés via CSS sont considérés comme présents et valident le critère 9.1.</p>

</div>

<h3>Modification « titre de cadre »</h3>



<p>Remplacement de l’expression redondante ARIA aria-hidden par attribut et précision sur l’applicabilité du test.</p>

<h4>Ancienne entrée</h4>

<div>
    <p>Note 2 : Si cela ne gêne pas le fonctionnement de ce type de cadre, il est possible de les rendre indisponibles aux technologies d’assistance en utilisant une propriété ARIA aria-hidden=“true” par exemple.</p>
</div>

<h4>Nouvelle entrée</h4>

<div>
    <p>Note 2 : Si cela ne gêne pas le fonctionnement de ce type de cadre, il est possible de les rendre indisponibles aux technologies d’assistance en utilisant l’attribut WAI-ARIA aria-hidden=“true”. Dans ce cas le critère 2.2 sera non applicable.</p>
</div>

<h3>Suppression « Titre de lien »</h3>

<p>Raison de la suppression</p>

<p>Suppression du critère 6.2 désormais traité via la nouvelle définition d’intitulé du lien dont la pertinence est vérifié dans le critère 6.1.</p>

<h4>Ancienne entrée</h4>

<div>
    <p>Titre de lien</p>

    <p>Contenu de l’attribut title d’un lien. Ce contenu ne doit être présent que s’il est nécessaire pour identifier la destination du lien de manière explicite. Un titre de lien doit reprendre l’intitulé de lien en y ajoutant des informations. Un titre
        de lien sera considéré comme non-pertinent dans les cas suivants :</p>

    <ul>
        <li>Le titre de lien est vide ;</li>
        <li>Le titre de lien est identique à l’intitulé du lien (Cf. note 1) ;</li>
        <li>Le titre de lien ne reprend pas l’intitulé du lien.</li>
    </ul>

    <p>Note 1 : Par exception, un titre de lien identique à l’intitulé est accepté dans les seuls cas d’un lien image (lien ne contenant que des images), une icône par exemple, ou d’un lien dont le seul contenu visible est une image (lien composite dont
        le texte est visuellement caché).</p>

    <p>Note 2 : Il est rappelé que l’attribut title peut poser de vrais problèmes de restitution, par exemple au clavier, sur les surfaces tactiles, lorsqu’une technologie d’assistance est paramétrée pour ne pas les restituer et ne devrait être utilisé qu’en
        dernier recours.</p>

</div>

<h3>Création « Uniquement à des fins de présentation »</h3>

<p>Raison de la création</p>

<p>Complément d’information sur la note 1 et remplacement de <code>&lt;blokquote role="presentation"&gt;</code> par <code>&lt;blockquote role="presentation"&gt;</code></p>

<h4>Nouvelle entrée</h4>

<div>
    <p>Uniquement à des fins de présentation</p>

    <p>Uniquement à des fins de présentation : utilisation de balises HTML pour une finalité différente de celle prévue dans les spécifications (au regard du type de document déclaré). Exemples : utilisation des balises h à seule fin de créer un effet typographique; utilisation de la balise <code>&lt;blockquote&gt;</code> à seule fin de mettre un paragraphe en retrait, etc.</p>

    <p>Note 1 : l’utilisation d’éléments <code>&lt;div&gt;</code> ou <code>&lt;span&gt;</code> ou plusieurs <code>&lt;br&gt;</code> pour créer visuellement un paragraphe est considérée comme non conforme et invalide le critère.</p>

    <p>Exemple :</p>

    <p><code>&lt;div&gt;</code></p>

    <p>paragraphes d’un bloc de texte simulés</p>

    <p><code>&lt;br&gt;</code></p>

    <p><code>&lt;br&gt;</code></p>

    <p>à l’aide de plusieurs balises <code>&lt;br&gt;</code></p>

    <p><code>&lt;/div&gt;</code></p>

    <p>Note 2 : WAI-ARIA propose un rôle presentation permettant de supprimer la sémantique d’un élément, par exemple <code>&lt;h1 role="presentation"&gt;</code>Titre<code>&lt;/h1&gt;</code>. Dans ce cas, le texte sera correctement restitué mais son rôle
        de titre ne le sera plus. L’utilisation du rôle presentation peut être requise lorsque l’on utilise un motif de conception WAI-ARIA.</p>

    <p>Le rôle WAI-ARIA presentation peut être également utilisé pour supprimer la sémantique d’un élément lorsque ce dernier est utilisé uniquement à des fins de présentation, par exemple <code>&lt;blockquote role="presentation"&gt;</code> aura le même
        effet qu’une absence d’élément <code>&lt;blockquote&gt;</code>.</p>

    <p>Même si cette utilisation est fortement déconseillée (dans le cas de technologie d’assistance qui n’implémenteraient pas WAI-ARIA par exemple) elle peut être considérée comme conforme à WCAG. En revanche l’utilisation d’un rôle WAI-ARIA presentation
        sur un élément dont la nature (par exemple la sémantique) est essentielle à la compréhension du contenu est une violation des règles WCAG (particulièrement de l’échec F92) et invalide le critère.</p>

</div>
