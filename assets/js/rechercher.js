import algoliasearch from "algoliasearch"
import instantsearch from "instantsearch.js";
import { searchBox ,infiniteHits } from "instantsearch.js/es/widgets";

import { Template_builder } from './lib/template-builder';

export const search = instantsearch({
  searchClient: algoliasearch('OCGRURLBFM','4acb079286ac50d2c359cdc0bf0af4d7'),
  indexName: 'jekyll-dinsic',
  routing: true,
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





