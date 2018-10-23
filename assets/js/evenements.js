import algoliasearch from "algoliasearch";
import instantsearch from "instantsearch.js";
import { configure, refinementList, infiniteHits, searchBox } from "instantsearch.js/es/widgets";
import { connectRange } from "instantsearch.js/es/connectors";
import { fdatepicker } from "./lib/foundation-datepicker"
const moment = require("moment");
const tz = require("moment-timezone");
moment.locale('fr');

import { agenda_routing_conf } from "./conf/routing-conf";
import { Instantsearch_factory } from "./instant-search/instantsearch-factory";
import { Instantsearch_builder } from "./instant-search/instantsearch-builder";
import { configureConf, refinementListConf, infiniteHitsConfEvent, multiSelect, eventSearch } from "./conf/wiggetConf";

const searchClient = algoliasearch('OCGRURLBFM','4acb079286ac50d2c359cdc0bf0af4d7');
const indexName = process.env.ALGOLIA_INDEX;
const search = new Instantsearch_factory(indexName,instantsearch,searchClient,agenda_routing_conf).init();
const instantsearch_builder = new Instantsearch_builder(search);

const datePicker = connectRange(
  (options, isFirstRendering) => {
    if (!isFirstRendering) return;
    let start_date = moment();
    let end_date = moment().add(1, 'year');
    const { refine } = options;
    refine ([start_date.unix(), end_date.unix()]);

    const datepickerOptions = {
      format: 'dd MM yyyy',
      disableDblClickSelection: true,
      leftArrow:'<<',
      rightArrow:'>>',
      closeIcon:'X',
      language: 'fr',
    }

    $('#datepickerStart').fdatepicker(datepickerOptions);
    $('#datepickerEnd').fdatepicker(datepickerOptions);

    $('#datepickerStart, #datepickerEnd').change( function() {
      start_date = moment($('#datepickerStart').val())
      end_date = moment($('#datepickerEnd').val())
      refine ([start_date.unix(), end_date.unix()]);
    })
  }
);

instantsearch_builder.addWidget(datePicker, {
  attributeName: 'dates'
});

instantsearch_builder.addWidget(configure,configureConf("événements"));

instantsearch_builder.addWidget(refinementList,refinementListConf);

instantsearch_builder.addWidget(refinementList,multiSelect);

instantsearch_builder.addWidget(infiniteHits, infiniteHitsConfEvent);

instantsearch_builder.addWidget(searchBox, eventSearch);

instantsearch_builder.start();
