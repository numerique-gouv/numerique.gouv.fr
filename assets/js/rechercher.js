import algoliasearch from "algoliasearch"
import instantsearch from "instantsearch.js";
import {  searchBox ,infiniteHits } from "instantsearch.js/es/widgets";


import { rechercher_routing_conf } from "./conf/routing-conf"
import { Instantsearch_factory } from "./instant-search/instantsearch-factory";
import { Instantsearch_builder } from "./instant-search/instantsearch-builder";
import { searchBoxConf, infiniteHitsConf} from "./conf/wiggetConf"


const searchClient = algoliasearch('OCGRURLBFM','4acb079286ac50d2c359cdc0bf0af4d7');

const search = new Instantsearch_factory(instantsearch,searchClient,rechercher_routing_conf).init();
const instantsearch_builder = new Instantsearch_builder(search);

instantsearch_builder.addWidget(searchBox, searchBoxConf);

instantsearch_builder.addWidget(infiniteHits, infiniteHitsConf);

instantsearch_builder.start();


