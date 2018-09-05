import instantsearch from "instantsearch.js";
import { configure, menuSelect ,infiniteHits } from "instantsearch.js/es/widgets";

import Template_builder from "./lib/template-builder"

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
  configure({
    filters: 'collection:actualites'
  })
);

search.addWidget(
  menuSelect({
    container: '#categories',
    attributeName: 'categories',
    limit: 10,
    templates: {
      header: 'Categories'
    }
  })
);

search.addWidget(
  infiniteHits({
    container: '#infinite-hits',
    templates: {
      item: function(hit) {
        const template_builder = new Template_builder(hit);
        return template_builder.get_template_rechercher();
      },
      empty: "We didn't find any results for the search <em>\"{{query}}\"</em>",
    },
    showMoreLabel: "Voir plus de résultats",
    cssClasses: {
      showmoreButton: "button voir-plus-button"
    }
  })
);

search.start();





