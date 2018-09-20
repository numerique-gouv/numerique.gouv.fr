import algoliasearch from "algoliasearch"
import instantsearch from "instantsearch.js";
import { configure, menuSelect, refinementList, infiniteHits } from "instantsearch.js/es/widgets";
import {connectRange} from "instantsearch.js/es/connectors";
import calendar from 'calendar';


import { collection_routing_conf } from "./conf/routing-conf"
import { Instantsearch_factory } from "./instant-search/instantsearch-factory";
import { Instantsearch_builder } from "./instant-search/instantsearch-builder";
import {configureConf, menuSelectConf, refinementListConf, infiniteHitsConfEvent} from "./conf/wiggetConf"


const searchClient = algoliasearch('OCGRURLBFM','4acb079286ac50d2c359cdc0bf0af4d7');

const search = new Instantsearch_factory(instantsearch,searchClient,collection_routing_conf).init();
const instantsearch_builder = new Instantsearch_builder(search);

const datePicker = instantsearch.connectors.connectRange(
  (options, isFirstRendering) => {
    if (!isFirstRendering) return;

    const { refine } = options;

    new Calendar({
      element: $('#calendar'),
      callback: function() {
        const start = new Date(this.start_date).getTime();
        const end = new Date(this.end_date).getTime();

        refine([start, end]);
      },
      // Some good parameters based on our dataset:
      start_date: new Date(),
      end_date: new Date('01/01/2020'),
      earliest_date: new Date('01/01/2008'),
      latest_date: new Date('01/01/2020'),
    });
  }
);

instantsearch.addWidget(
  datePicker({
    attributeName: 'date',
  })
);

instantsearch_builder.addWidget(configure,configureConf("événements"));

instantsearch_builder.addWidget(menuSelect,menuSelectConf);

instantsearch_builder.addWidget(refinementList,refinementListConf);

instantsearch_builder.addWidget(infiniteHits, infiniteHitsConfEvent);

instantsearch_builder.start();

