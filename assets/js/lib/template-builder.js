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
          <div class="search-card">
            <div class="block-link grid-x grid-margin-x">
              <div class="content cell large-8 medium-7 small-12">
              <h3 class="h5 font-bold margin-bottom-0-5">
                <a class="black-link" href="${this.data.url}">${ this.data._highlightResult.title.value }</a>
              </h3>
              {{#category}}
              <p class="category margin-bottom-">
                <img alt="" class="icon category-icon" src="${ hit_helper.select_icon_link() }">
                <span class="h6">${ hit_helper.get_first_category() }</span>
              </p>
              {{/category}}
              {{#date}}
              <time class="post-meta h6 date">${ hit_helper.get_date_formated() }</time>
              {{/date}}
              <p>${ hit_helper.get_most_valuable_content() }</p>
            </div>
            <div class="cell object-fit__image-container large-4 medium-5 small-12 height-10rem carte-image">
              <img class="object-fit__featured-image" alt="" src="${ image.image }">
            </div>
           </div>
          </div>
          <hr>
        `);
    return template.render({date:hit_helper.get_date_formated(), category:hit_helper.get_first_category()});
  };
  get_template_event() {
    const hit_helper = new Hit_helper(this.data);
    const image = hit_helper.select_image("une-ou-diaporama");
    const template = hogan.compile(`
          <div class="event-card">
            <div class="block-link grid-x grid-margin-x" href="${this.data.url}">
            <div class="content cell large-8 medium-7 small-12">
              {{#date}}
              <div class="margin-bottom-1 date">
                <img alt="" class="icon date-icon" src="/assets/img/pictogrammes/dates.svg">
                <time class="post-meta date-text">${ hit_helper.get_event_date_formated() }</time><br />
              </div>
              {{/date}}
              <h2 class="h3 margin-bottom-0-5">
                <a class="black-link" href="${this.data.url}">${ this.data._highlightResult.title.value }</a>
              </h2>
              {{#category}}
              <p class="category margin-bottom-">${ hit_helper.get_first_category() }</p>
              {{/category}}
              <p class="event-content">${ hit_helper.get_most_valuable_content() }</p>
            </div>
            <div class="row align-self-middle align-middle align-center cell object-fit-complet__image-container large-4 medium-5 small-12 height-10rem">
              <img class="object-fit-complet__featured-image" alt="" src="${ image.image }">
            </div>
            </div>
          </div>
          <hr class="margin-0">
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
  get_template_categories() {
    const template =  hogan.compile(`
      <a href="${ this.data.url }" class=" tag-select {{#isRefined}}selected{{/isRefined}}" title="{{#isRefined}}actif{{/isRefined}}">
        ${ capitalizeFirstLetter(this.data.label) }
      </a>
    `);
    return template.render({isRefined:this.data.isRefined});
  };
  get_template_stats() {
    const template =  hogan.compile(`
      <h2 class="h4 medium-dark-gray">Il y a ${ this.data.nbHits } résultats</h2>
    `);
    return template.render();
  };
};
