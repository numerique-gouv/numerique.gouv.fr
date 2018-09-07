import algoliasearch from "algoliasearch"
import instantsearch from "instantsearch.js";
import { configure, menuSelect, refinementList, infiniteHits } from "instantsearch.js/es/widgets";

const Template_builder = require('./lib/template-builder');

const search = instantsearch({
  indexName: 'jekyll-dinsic',
  searchClient: algoliasearch('OCGRURLBFM','4acb079286ac50d2c359cdc0bf0af4d7'),
  routing: {
    stateMapping: {
      stateToRoute(uiState) {
        return {
          query: uiState.query,
          categories: uiState.menu,
          tags: uiState.refinementList && uiState.refinementList.tags.join('~'),
        };
      },
      routeToState(routeState) {
        return {
          query: routeState.query,
          menu: {
            categories: routeState.categories,
          },
          refinementList: {
            tags: routeState.tags && routeState.tags.split('~')
          },
        };
      }
    }
  },
  searchParameters: {
    hitsPerPage: 10
  }
});

search.addWidget(
  configure({
    filters: 'collection:communiques'
  })
);

search.addWidget(
  menuSelect({
    container: '#categories',
    attributeName: 'categories',
    limit: 10,
    templates: {
      seeAllOption: 'Toutes les catégories',
      item:function (data) {
        return `${data.label}`
      }
    }
  })
);

search.addWidget(
  refinementList({
    container: '#tags',
    attributeName: 'tags',
    operator: 'or',
    templates: {
      item: function(data) {
        const template_builder = new Template_builder(data);
          return template_builder.get_template_tags()
        },
    },
    cssClasses: {
      list: "flex-container wrap-container",
      item: "padding-bottom-1"
    },
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





