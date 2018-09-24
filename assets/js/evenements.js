import algoliasearch from "algoliasearch";
import instantsearch from "instantsearch.js";
import { configure, menuSelect, refinementList, infiniteHits } from "instantsearch.js/es/widgets";
import { connectRange } from "instantsearch.js/es/connectors";

import { agenda_routing_conf } from "./conf/routing-conf";
import { Instantsearch_factory } from "./instant-search/instantsearch-factory";
import { Instantsearch_builder } from "./instant-search/instantsearch-builder";
import { configureConf, menuSelectConf, refinementListConf, infiniteHitsConfEvent } from "./conf/wiggetConf";


const searchClient = algoliasearch('OCGRURLBFM','4acb079286ac50d2c359cdc0bf0af4d7');

const search = new Instantsearch_factory(instantsearch,searchClient,agenda_routing_conf).init();
const instantsearch_builder = new Instantsearch_builder(search);

const datePicker = connectRange(
  (options, isFirstRendering) => {
    if (!isFirstRendering) return;
    console.log(options)
    const start_date = moment();
    const end_date = moment().add(1, 'months');
    const earliest_date = moment("2018-01-01");
    const latest_date = moment().add(2, 'years').endOf('year');
    const { refine } = options;
    refine ([start_date.unix(), end_date.unix()]);

    new Calendar({
      element: $('#calendar'),
      callback: function() {
        let start = moment(this.start_date),
          end = moment(this.end_date);
        refine([start.unix(), end.unix()]);
      },
      // Some good parameters based on our dataset:
      start_date: start_date,
      end_date: end_date,
      earliest_date: earliest_date,
      latest_date: latest_date,
      same_day_range: true,
      format: {
        input: 'D MMMM YYYY', // Format for the input fields
        jump_month: 'MMMM', // Format for the month switcher
        jump_year: 'YYYY' // Format for the year switcher
      },
      presets: false
    });
  }
);

const monthPicker = connectRange(
  (options, isFirstRendering) => {
    if (!isFirstRendering) return;
    const $element = $('input[name="daterange"]');
    const start_date = moment();
    const end_date = moment().add(1, 'months');
    const { refine } = options;
    refine ([start_date.unix(), end_date.unix()]);
    $(function(){
      $element.daterangepicker({
        "startDate": start_date,
        "endDate": end_date,
        "autoApply": true,
        "opens": "left",
        ranges: {
          "Aujourd'hui": [moment(), moment()],
          'Demain': [moment().add(1, 'days'), moment().add(1, 'days')],
          'Les 7 prochain jours': [moment().add(6, 'days'), moment()],
          'Les 30 prochains jours': [moment().add(29, 'days'), moment()],
          'Ce mois': [moment().startOf('month'), moment().endOf('month')],
          'Le mois prochain': [moment().add(1, 'month').startOf('month'), moment().add(1, 'month').endOf('month')]
        },
        "locale": {
          "format": "DD/MM/YYYY",
          "separator": " - ",
          "fromLabel": "Du",
          "toLabel": "Au",
          "customRangeLabel": "Personnalisé",
        },
      });

    });
    $element.on('apply.daterangepicker', function(ev, picker) {
      let dates = $element.val().split(' - ');
      let start = moment(dates[0], "DD-MM-YYYY");
      let end = moment(dates[1], "DD-MM-YYYY");
      refine ([start.unix(), end.unix()]);
    });
  }
);

instantsearch_builder.addWidget(monthPicker, {
  attributeName: 'date'
});

instantsearch_builder.addWidget(configure,configureConf("événements"));

instantsearch_builder.addWidget(menuSelect,menuSelectConf);

instantsearch_builder.addWidget(refinementList,refinementListConf);

instantsearch_builder.addWidget(infiniteHits, infiniteHitsConfEvent);

instantsearch_builder.start();

