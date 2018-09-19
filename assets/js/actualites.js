import algoliasearch from "algoliasearch"
import instantsearch from "instantsearch.js";
import { configure, menuSelect, refinementList, infiniteHits } from "instantsearch.js/es/widgets";


import { collection_routing_conf } from "./conf/routing-conf"
import { Instantsearch_factory } from "./instant-search/instantsearch-factory";
import { Instantsearch_builder } from "./instant-search/instantsearch-builder";
import {configureConf, menuSelectConf, refinementListConf, infiniteHitsConf} from "./conf/wiggetConf"

const searchClient = algoliasearch('OCGRURLBFM','4acb079286ac50d2c359cdc0bf0af4d7');

const search = new Instantsearch_factory(instantsearch,searchClient,collection_routing_conf).init();
const instantsearch_builder = new Instantsearch_builder(search);

instantsearch_builder.addWidget(configure,configureConf("actualites"));

instantsearch_builder.addWidget(menuSelect,menuSelectConf);

instantsearch_builder.addWidget(refinementList,refinementListConf);

instantsearch_builder.addWidget(infiniteHits, infiniteHitsConf);

instantsearch_builder.start();
