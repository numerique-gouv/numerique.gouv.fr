import algoliasearch from "algoliasearch"
import instantsearch from "instantsearch.js";
import { configure, menuSelect, refinementList, infiniteHits } from "instantsearch.js/es/widgets";


import { collection_routing_conf } from "./conf/routing-conf"
import { Template_builder } from "./lib/template-builder";
import { Instantsearch_factory } from "./lib/instantsearch-factory";


const searchClient = algoliasearch('OCGRURLBFM','4acb079286ac50d2c359cdc0bf0af4d7');

const instantsearch_factory = new Instantsearch_factory(instantsearch,searchClient,collection_routing_conf);
instantsearch_factory.init();
instantsearch_factory.addWidget(configure,{
  filters: `collection:actualites`
});

instantsearch_factory.addWidget(menuSelect,{
  container: '#categories',
  attributeName: 'categories',
  limit: 10,
  templates: {
    seeAllOption: 'Toutes les catégories',
    item: function (data) {
      return `${data.label}`
    }
  }
});

instantsearch_factory.addWidget(refinementList,{
  container: '#tags',
  attributeName: 'tags',
  operator: 'or',
  templates: {
    item: function (data) {
      const template_builder = new Template_builder(data);
      return template_builder.get_template_tags()
    },
  },
  cssClasses: {
    list: "flex-container wrap-container",
    item: "padding-bottom-1"
  },
});

instantsearch_factory.addWidget(infiniteHits, {
  container: '#infinite-hits',
  templates: {
    item: function (hit) {
      const template_builder = new Template_builder(hit);
      return template_builder.get_template_rechercher();
    },
    empty: "Nous n'avons rien trouvé pour la recherche : <em>\"{{query}}\"</em>",
  },
  showMoreLabel: "Voir plus de résultats",
  cssClasses: {
    showmoreButton: "button voir-plus-button"
  }
});

instantsearch_factory.start();

