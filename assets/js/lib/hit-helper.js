const moment = require("moment");
const tz = require("moment-timezone");
moment.locale('fr');

module.exports = class Hit_helper {
  constructor(hit) {
    this.hit = hit;
  }

  get_most_valuable_content() {
    let result;
    if (this.hit._snippetResult === undefined){
      return this.hit.content;
    }
    const chapeau_text = this.hit._snippetResult['chapeau-text'];
    const content = this.hit._snippetResult['content'];
    if ( chapeau_text === undefined || (chapeau_text.matchLevel === 'none' && content.matchLevel === 'full')) {
      result = content.value;
    } else {
      result = chapeau_text.value;
    }
    return result;
  }
  select_icon_link() {
    let icon_link = undefined;
    if (this.hit.categories) {
      switch (this.hit.categories[0]) {
        case 'Article':
          icon_link = "/assets/img/pictogrammes/article.svg";
          break;
        case 'Infographie':
          icon_link = "/assets/img/pictogrammes/infographie.svg";
          break;
        case 'Diaporama':
          icon_link = "/assets/img/pictogrammes/diaporama.svg";
          break;
        case 'Interview':
          icon_link = "/assets/img/pictogrammes/interview.svg";
          break;
        case 'Video':
          icon_link = "/assets/img/pictogrammes/video.svg";
          break;
        case 'Communiqué de presse':
          icon_link = "/assets/img/pictogrammes/communique_de_presse.svg";
          break;
        case 'Dossier de presse':
          icon_link = "/assets/img/pictogrammes/dossier_de_presse.svg";
          break;
        default:
          icon_link = "/assets/img/pictogrammes/article.svg"
      }
    }
    return icon_link;
  }

  get_first_category() {
    let first_category;
    this.hit.categories[0] ? first_category = this.hit.categories[0] : first_category = false;
    return first_category;

  }

  select_image(images_field) {
    const images = this.hit[images_field];
    let image = undefined;
    if (images === undefined || images[0].image === null) {
      image = {};
      image.alternative_textuelle = 'image par défaut';
      image.image = '/assets/img/default.png';
    } else {
      image = images[0];
    }
    return image
  }

  get_date_formated() {
    let formated_date;
    this.hit.date ? formated_date = moment.unix(this.hit.date).tz("Europe/Paris").format('LL') : formated_date = false;
    return formated_date;
  }

  get_event_date_formated() {
    let formated_date;
    this.hit.event_date ? formated_date = moment.unix(this.hit.event_date ).tz("Europe/Paris").format('LL') : formated_date = false;
    return formated_date;
  }
};
