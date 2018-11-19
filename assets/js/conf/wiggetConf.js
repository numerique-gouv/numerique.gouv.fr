import { Template_builder } from "../lib/template-builder";
import {capitalizeFirstLetter} from "../lib/capitalize"
import hogan from "hogan.js"


function configureConf(collection) {
  return{
    filters: `collection:${collection}`
  }
}

const menuSelectConf = {
  container: '#categories',
  attributeName: 'categories',
  limit: 10,
  templates: {
    seeAllOption: 'Toutes les catégories',
    item: function (data) {
      return `${data.label}`
    }
  }
};

const refinementListConf = {
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
};

const multiSelect = {
  container: '#categories',
  attributeName: 'categories',
  autoHideContainer: false,
  cssClasses: {
    count: 'hide',
  },
}

const infiniteHitsConf = {
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
};

const infiniteHitsConfEvent = {
  container: '#infinite-hits',
  templates: {
    item: function (hit) {
      const template_builder = new Template_builder(hit);
      return template_builder.get_template_event();
    },
    empty: "Nous n'avons rien trouvé pour la recherche : <em>\"{{query}}\"</em>",
  },
  showMoreLabel: "Voir plus de résultats",
  cssClasses: {
    showmoreButton: "button voir-plus-button",
    root: 'grid-y grid-margin-y padding-bottom-2',
    item: 'cell large-12 padding-1 event-item margin-0'
  }
};

const searchBoxConf =  {
  container: '#search-input',
  poweredBy: false,
  magnifier: false
};

const statsConf =  {
  container: '#stats',
  templates: {
    body: function (data) {
      const template_builder = new Template_builder(data);
      return template_builder.get_template_stats();
    }
  }
};

const eventSearch = {
  container: '#search-event',
  placeholder: 'Rechercher par mot clé',
  autofocus: false,
  reset: true,
  magnifier: false,
  loadingIndicator: false
}

export {configureConf, menuSelectConf, refinementListConf, infiniteHitsConf, searchBoxConf, infiniteHitsConfEvent, statsConf, multiSelect, eventSearch};
