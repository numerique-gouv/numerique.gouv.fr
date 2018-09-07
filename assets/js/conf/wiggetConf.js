import { Template_builder } from "../lib/template-builder";

function configureConf(collection) {
  return{
    filters: `collection:${collection}`
  }
};

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

export {configureConf, menuSelectConf, refinementListConf, infiniteHitsConf}
