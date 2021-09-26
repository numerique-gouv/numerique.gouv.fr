---
title: test mef
date: 2021-09-26 16:02:00 +02:00
style: |
  fr-p-1w.jIJLNe {
   background-color:#fff;
   color:#091e42
  }
  .fr-tile {
    position: relative;
    display: flex;
    flex-direction: column-reverse;
    /**
     * Forcer la hauteur à 100% pour que les tuiles aient la même hauteur dans le contexte de la grille
     *//**
     * Conteneur pour l'image, on force les dimensions à 80x80 tout en permettant de mettre une image
     * ne respectant pas cette taille :
     * Si l'image est plus grande, elle sera croppée afin de ne jamais dépasser 80x80.
     * Si l'image est plus petite, elle sera centrée, en hauteur, en largeur ou bien les deux.
     *//**
     * Partie de la tuile contenant le titre (obligatoire) et la description (optionnel)
     *//**
     * Titre de la tuile
     *//**
     * Description de la tuile
     *//**
   * Modificateur tuile horizontale
   **//**
   * Modificateur vertical à partir du breakpoint md -> horizontal en dessous du breakpoint md
   **//**
   * Modificateur horizontal à partir du breakpoint md -> vertical en dessous du breakpoint md
   **/
  }

  .fr-grid-row .fr-tile {
    height: 100%;
  }

  .fr-tile__link {
    display: inline-flex;
    --is-link: false;
    width: 100%;
  }

  .fr-tile__img {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 5rem;
    height: 5rem;
    margin: 2rem auto 0;
    overflow: hidden;
    /**
       * Dans le cas d'un svg inline sans largeur et hauteur spécifiées, on lui attribue une largeur de 100%.
       */
  }

  .fr-tile__img > svg {
    width: 100%;
  }

  .fr-tile__body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    padding: 1rem;
    text-align: center;
  }

  .fr-tile__title {
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 700;
    margin: 0;
  }

  .fr-tile__title + .fr-tile__desc {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  .fr-tile__desc {
    margin: 0.5rem 0 0;
    font-size: 1rem;
    line-height: 1.5rem;
  }

  .fr-tile--horizontal {
    flex-direction: row-reverse;
    align-items: center;
  }

  .fr-tile--horizontal .fr-tile__img {
    width: 3rem;
    height: 3rem;
    margin: 1.5rem 0 1.5rem 1.5rem;
  }

  .fr-tile--horizontal .fr-tile__body {
    align-items: flex-start;
    padding: 0;
    margin: 1.5rem;
    text-align: left;
  }

  .fr-tile--vertical-md {
    flex-direction: row-reverse;
    align-items: center;
  }

  .fr-tile--vertical-md .fr-tile__img {
    width: 3rem;
    height: 3rem;
    margin: 1.5rem 0 1.5rem 1.5rem;
  }

  .fr-tile--vertical-md .fr-tile__body {
    align-items: flex-start;
    padding: 0;
    margin: 1.5rem;
    text-align: left;
  }

  .fr-tile--horizontal-md {
    flex-direction: column-reverse;
  }

  .fr-tile--horizontal-md .fr-tile__img {
    width: 5rem;
    height: 5rem;
    margin: 2rem auto 0;
  }

  .fr-tile--horizontal-md .fr-tile__img + .fr-tile__body {
    min-height: initial;
  }

  .fr-tile--horizontal-md .fr-tile__body {
    align-items: center;
    padding: 1rem;
    margin: 0;
    text-align: center;
  }

  .fr-tile {
    box-shadow: inset 0 -0.25rem 0 0 var(--bf500);
    background-color: var(--beige);
  }

  .fr-tile.fr-enlarge-link {
    background-color: var(--beige);
  }

  :root:not([data-fr-theme="dark" i]) .fr-tile.fr-enlarge-link {
    --color-hover: rgba(224, 219, 208, 0.5);
    --color-active: rgba(199, 189, 170, 0.5);
  }

  :root:not([data-fr-theme="dark" i]) [class*="fr-scheme-light"] .fr-tile.fr-enlarge-link,
  :root:not([data-fr-theme="dark" i]) [class*="--scheme-light-"] .fr-tile.fr-enlarge-link {
    --color-hover: rgba(224, 219, 208, 0.5);
    --color-active: rgba(199, 189, 170, 0.5);
  }

  :root:not([data-fr-theme="dark" i]) [class*="fr-scheme-dark"] .fr-tile.fr-enlarge-link,
  :root:not([data-fr-theme="dark" i]) [class*="--scheme-dark-"] .fr-tile.fr-enlarge-link {
    --color-hover: rgba(79, 79, 79, 0.5);
    --color-active: rgba(115, 115, 115, 0.5);
  }

  :root[data-fr-theme="dark" i] .fr-tile.fr-enlarge-link {
    --color-hover: rgba(79, 79, 79, 0.5);
    --color-active: rgba(115, 115, 115, 0.5);
  }
---

<div class="fr-p-1w">

    <div class="fr-grid-row fr-grid-row--gutters">
        <div class="fr-col-6 fr-col-sm-4">
            <div class="fr-tile fr-enlarge-link">
                <div class="fr-tile__body">
                    <h4 class="fr-tile__title">
                        <a class="fr-tile__link" href="">Titre MD bold</a>
                    </h4>
                   
                </div>
                <div class="fr-tile__img">
                    <img src="https://www.gouvernement.fr/sites/default/files/static_assets/placeholder.1x1.png" class="fr-responsive-img" alt="">
                    <!-- L’alternative de l’image (attribut alt) doit rester vide car l’image est illustrative et ne doit pas être restituée aux technologies d’assistance -->
                </div>
            </div>
        </div>
        <div class="fr-col-6 fr-col-sm-4">
            <div class="fr-tile fr-enlarge-link">
                <div class="fr-tile__body">
                    <h4 class="fr-tile__title">
                        <a class="fr-tile__link" href="">Titre MD bold</a>
                    </h4>

                </div>
                <div class="fr-tile__img">
                    <img src="https://www.gouvernement.fr/sites/default/files/static_assets/placeholder.1x1.png" class="fr-responsive-img" alt="">
                    <!-- L’alternative de l’image (attribut alt) doit rester vide car l’image est illustrative et ne doit pas être restituée aux technologies d’assistance -->
                </div>
            </div>
        </div>
        <div class="fr-col-6 fr-col-sm-4">
            <div class="fr-tile fr-enlarge-link">
                <div class="fr-tile__body">
                    <h4 class="fr-tile__title">
                        <a class="fr-tile__link" href="">Titre MD bold</a>
                    </h4>

                </div>
                <div class="fr-tile__img">
                    <img src="https://www.gouvernement.fr/sites/default/files/static_assets/placeholder.1x1.png" class="fr-responsive-img" alt="">
                    <!-- L’alternative de l’image (attribut alt) doit rester vide car l’image est illustrative et ne doit pas être restituée aux technologies d’assistance -->
                </div>
            </div>
        </div>
    </div>

</div>