import algoliasearch from "algoliasearch";
import instantsearch from "instantsearch.js";
import { configure, menuSelect, refinementList, infiniteHits, searchBox } from "instantsearch.js/es/widgets";
import { connectRange } from "instantsearch.js/es/connectors";
import { fdatepicker } from "./lib/foundation-datepicker"
const moment = require("moment");
const tz = require("moment-timezone");
moment.locale('fr');

import { agenda_routing_conf } from "./conf/routing-conf";
import { Instantsearch_factory } from "./instant-search/instantsearch-factory";
import { Instantsearch_builder } from "./instant-search/instantsearch-builder";
import { configureConf, menuSelectConf, refinementListConf, infiniteHitsConfEvent, multiSelect, eventSearch } from "./conf/wiggetConf";

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

const monthPicker = connectRange(
  (options, isFirstRendering) => {
    if (!isFirstRendering) return;

    $(function() {
      const $element_container = $('#reportrange');
      const $element = $('#reportrange span');
      var start = moment();
      var end = moment().add(1, 'years');
      const { refine } = options;
      refine ([start.unix(), end.unix()]);

      function cb(start, end) {
        $element.html(start.format('DD MMMM YYYY') + ' au ' + end.format('DD MMMM YYYY'));
      }

      $element_container.daterangepicker({
        startDate: start,
        endDate: end,
        "opens": "left",
        "showDropdowns": true,
        "buttonClasses": "button",
        "applyButtonClasses": "button margin-left-1",
        "cancelClass": "blue-border-button",
        ranges: {
          "Aujourd'hui": [moment(), moment()],
          'Les 30 prochains jours': [moment(), moment().add(29, 'days')],
          'Tous': [moment(), moment().add(1, 'years')],
        },
        "locale": {
          "format": "DD MMMM YYYY",
          "separator": " au ",
          "applyLabel": "Appliquer",
          "cancelLabel": "Annuler",
          "fromLabel": "DU",
          "toLabel": "au",
          "customRangeLabel": "Personnalisé",
        },
      }, cb);

      cb(start, end);

      $element_container.on('apply.daterangepicker', function(ev, picker) {
        let dates = $element.html().split(' au ');
        let start = moment(dates[0], "DD MMMM YYYY");
        let end = moment(dates[1], "DD MMMM YYYY");
        refine ([start.unix(), end.unix()]);
      });
    });
  }
);

instantsearch_builder.addWidget(datePicker, {
  attributeName: 'dates'
});

instantsearch_builder.addWidget(configure,configureConf("événements"));

// instantsearch_builder.addWidget(menuSelect,menuSelectConf);

instantsearch_builder.addWidget(refinementList,refinementListConf);

instantsearch_builder.addWidget(refinementList,multiSelect);

instantsearch_builder.addWidget(infiniteHits, infiniteHitsConfEvent);

instantsearch_builder.addWidget(searchBox, eventSearch);

instantsearch_builder.start();
