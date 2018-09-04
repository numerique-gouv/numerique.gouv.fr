import instantsearch from "instantsearch.js";
import {searchBox ,hits , pagination} from "instantsearch.js/es/widgets";
import moment from "moment";
import hogan from "hogan.js";

import Hit_helper from "./lib/hit-helper"
moment.locale('fr');

export const search = instantsearch({
  appId: 'OCGRURLBFM',
  apiKey: '4acb079286ac50d2c359cdc0bf0af4d7', // search only API key, no ADMIN key
  indexName: 'jekyll-dinsic',
  rooting: false,
  urlSync: {
    mapping: {
      q: 'query'
    }
  },
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
  console.log(hit)
  const hit_helper = new Hit_helper(hit)
  let date;
  hit.date ? date = moment.unix(hit.date).format('LL') : date = false;
  const category_icon_link = hit_helper.select_icon_link();
  const image = hit_helper.select_image("une-ou-diaporama");
  let category;
  hit.categories[0] ? category = hit.categories[0] : category = false;
  const template =  hogan.compile(`
          <div class="">
            <a class="black-link grid-x grid-margin-x" href="${hit.url}">
            <div class="cell object-fit__image-container large-4 medium-5 small-12 height-10rem">
              <img class="object-fit__featured-image" alt="${ image.alternative_textuelle }" src="${ image.image }">
            </div>
            <div class="content cell large-8 medium-7 small-12">
              {{#category}}
              <img alt="icon ${ hit.category }" class="icon" src="${ category_icon_link }">
              <span class="h6">${ category }</span>
              {{/category}}
              <p class="h5 font-bold margin-bottom-0-5">${ hit._highlightResult.title.value }</p>
              {{#date}}
              <p class="post-meta h6 date">${ date }</p>
              {{/date}}
              <p>${ hit_helper.get_most_valuable_content() }</p>
            </div>
           </a>
          </div>
          <hr>
        `)
  return template.render({date:date, category:category});
}




