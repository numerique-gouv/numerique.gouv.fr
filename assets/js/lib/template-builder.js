import Hit_helper from "./hit-helper";
const hogan = require("hogan.js");

export default class Template_builder{
  constructor(hit) {
    this.hit = hit;
  }
  get_template_rechercher() {
    const hit_helper = new Hit_helper(this.hit)
    const image = hit_helper.select_image("une-ou-diaporama");
    const template =  hogan.compile(`
          <div class="">
            <a class="black-link grid-x grid-margin-x" href="${this.hit.url}">
            <div class="cell object-fit__image-container large-4 medium-5 small-12 height-10rem">
              <img class="object-fit__featured-image" alt="${ image.alternative_textuelle }" src="${ image.image }">
            </div>
            <div class="content cell large-8 medium-7 small-12">
              {{#category}}
              <img alt="icon ${ hit_helper.get_first_category() }" class="icon category-icon" src="${ hit_helper.select_icon_link() }">
              <span class="h6">${ hit_helper.get_first_category() }</span>
              {{/category}}
              <p class="h5 font-bold margin-bottom-0-5">${ this.hit._highlightResult.title.value }</p>
              {{#date}}
              <p class="post-meta h6 date">${ hit_helper.get_date_formated() }</p>
              {{/date}}
              <p>${ hit_helper.get_most_valuable_content() }</p>
            </div>
           </a>
          </div>
          <hr>
        `);
    return template.render({date:hit_helper.get_date_formated(), category:hit_helper.get_first_category()});
  }
};
