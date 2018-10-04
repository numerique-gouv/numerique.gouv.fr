import Hit_helper from "./hit-helper";
import hogan from "hogan.js"
import { capitalizeFirstLetter } from './capitalize'

export class Template_builder {
  constructor(data) {
    this.data = data;
  }
  get_template_rechercher() {
    const hit_helper = new Hit_helper(this.data)
    const image = hit_helper.select_image("une-ou-diaporama");
    const template =  hogan.compile(`
          <div class="">
            <a class="black-link grid-x grid-margin-x" href="${this.data.url}">
            <div class="cell object-fit__image-container large-4 medium-5 small-12 height-10rem">
              <img class="object-fit__featured-image" alt="${ image.alternative_textuelle }" src="${ image.image }">
            </div>
            <div class="content cell large-8 medium-7 small-12">
              {{#category}}
              <img alt="icon ${ hit_helper.get_first_category() }" class="icon category-icon" src="${ hit_helper.select_icon_link() }">
              <span class="h6">${ hit_helper.get_first_category() }</span>
              {{/category}}
              <h3 class="h5 font-bold margin-bottom-0-5">${ this.data._highlightResult.title.value }</h3>
              {{#date}}
              <time class="post-meta h6 date">${ hit_helper.get_date_formated() }</time>
              {{/date}}
              <p>${ hit_helper.get_most_valuable_content() }</p>
            </div>
           </a>
          </div>
          <hr>
        `);
    return template.render({date:hit_helper.get_date_formated(), category:hit_helper.get_first_category()});
  };
  get_template_event() {
    const hit_helper = new Hit_helper(this.data);
    const image = hit_helper.select_image("une-ou-diaporama");
    const template = hogan.compile(`
          <div>
            <a class="black-link grid-y grid-margin-y" href="${this.data.url}">
            <div class="cell object-fit__image-container large-4 medium-5 small-12 height-10rem">
              <img class="object-fit__featured-image" alt="${ image.alternative_textuelle }" src="${ image.image }">
            </div>
            <div class="content cell large-8 medium-7 small-12">
              {{#category}}
              <img alt="icon ${ hit_helper.get_first_category() }" class="icon category-icon" src="${ hit_helper.select_icon_link() }">
              <span class="h6">${ hit_helper.get_first_category() }</span>
              {{/category}}
              <h3 class="h5 font-bold margin-bottom-0-5">${ this.data._highlightResult.title.value }</h3>
              {{#date}}
              <time class="post-meta h6 date">${ hit_helper.get_event_date_formated() }</time>
              {{/date}}
              <p>${ hit_helper.get_most_valuable_content() }</p>
            </div>
           </a>
          </div>
        `);
    return template.render({date:hit_helper.get_date_formated(), category:hit_helper.get_first_category()});
  };

  get_template_tags() {
    const template =  hogan.compile(`
      <a href="${ this.data.url }" class=" tag-select {{#isRefined}}selected{{/isRefined}}">
        #${ capitalizeFirstLetter(this.data.label) }
      </a>
    `);
    return template.render({isRefined:this.data.isRefined});
  };
  get_template_stats() {
    const nbHits = new Hit_helper(this.data);
    const template =  hogan.compile(`
      <h2 class="h4">Il y a ${ this.data.nbHits } résultats</h2>
    `);
    return template.render();
  };
};
