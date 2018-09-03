import instantsearch from "instantsearch.js";
import {searchBox ,hits , pagination} from "instantsearch.js/es/widgets";
import moment from "moment";
import hogan from "hogan.js";
moment.locale('fr');

const search = instantsearch({
  appId: 'OCGRURLBFM',
  apiKey: '4acb079286ac50d2c359cdc0bf0af4d7', // search only API key, no ADMIN key
  indexName: 'jekyll-dinsic',
  rooting: false,
  urlSync: true,
  searchParameters: {
    hitsPerPage: 10
  }
});

search.addWidget(
  searchBox({
    container: '#search-input',
    poweredBy: true
  })
);

search.addWidget(
  hits({
    container: '#hits',
    templates: {
      item: function(hit) {
        return template(hit);
      },
      empty: "We didn't find any results for the search <em>\"{{query}}\"</em>"
    }
  })
);

search.addWidget(
  pagination({
    container: '#pagination'
  })
);

search.start();

function template(hit) {
  const date = moment.unix(hit.date).format('LL');
  const category_icon_link = select_icon_link(hit.categories);
  const image = select_image(hit["une-ou-diaporama"]);
  let content = false;
  hit._highlightResult.content ? content = hit._highlightResult.content.value : content = false;
  const template =  hogan.compile(`
          <div class="">
            <a class="black-link grid-x grid-margin-x" href="${hit.url}">
            <div class="cell object-fit__image-container large-4 medium-5 small-12 height-10rem">
              <img class="object-fit__featured-image" alt="${ image.alternative_textuelle }" src="${ image.image }">
            </div>
            <div class="content cell large-8 medium-7 small-12">
              <img alt="icon ${ hit.category }" class="icon" src="${ category_icon_link }">
              <span class="h6">${ hit.categories[0] }</span>
              <p class="h5 font-bold margin-bottom-0-5">${ hit._highlightResult.title.value }</p>
              <p class="post-meta h6 date">${ date }</p>
              {{#content}}
                <p>${ content }</p>
              {{/content}}
            </div>
           </a>
          </div>
          <hr>
        `)
  return template.render({content: content});
}

function select_icon_link(categories) {
  let icon_link = undefined;
  if (categories) {
    switch (categories[0]) {
      case 'Article':
        icon_link = "/assets/img/pictogrammes/article.svg"
        break;
      case 'Infographie':
        icon_link = "/assets/img/pictogrammes/infographie.svg"
        break;
      case 'Diaporama':
        icon_link = "/assets/img/pictogrammes/diaporama.svg"
        break;
      case 'Interview':
        icon_link = "/assets/img/pictogrammes/interview.svg"
        break;
      case 'Video':
        icon_link = "/assets/img/pictogrammes/video.svg"
        break;
      case 'Communiqué de presse':
        icon_link = "/assets/img/pictogrammes/communique_de_presse.svg"
        break;
      case 'Dossier de presse':
        icon_link = "/assets/img/pictogrammes/dossier_de_presse.svg"
        break;
      default:
        icon_link = "/assets/img/pictogrammes/article.svg"
    }
  }
  return icon_link;
}

function select_image(images) {
  let image = undefined;
  if (images === undefined || images[0].image === null) {
    image = {};
    image.alternative_textuelle = 'image par défaut';
    image.image = '/assets/img/default.png';
  } else {
    image = images[0];
  }
  return image
}

