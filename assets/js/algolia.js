import instantsearch from "instantsearch.js";
import {searchBox ,hits , pagination} from "instantsearch.js/es/widgets";

const search = instantsearch({
  appId: 'OCGRURLBFM',
  apiKey: '4acb079286ac50d2c359cdc0bf0af4d7', // search only API key, no ADMIN key
  indexName: 'jekyll-dinsic',
  rooting: true,
  searchParameters: {
    hitsPerPage: 10
  }
});

search.addWidget(
  searchBox({
    container: '#search-input'
  })
);

search.addWidget(
  hits({
    container: '#hits',
    templates: {
      item: function(hit) {
        return `
          <div class="post-item">
            <a href="{{ site.baseurl }}${hit.url}" class="black-link">
              <h2>${hit.title}</h2>
              <span class="post-meta">${hit.date}</span>
              <div class="post-snippet">${hit.html}</div>
            </a>
          </div>
        `;
      },
      empty: "We didn't find any results for the search <em>\"{{query}}\"</em>"
    }
  })
);

search.addWidget(
  pagination({
    container: '#pagination'
  })
);

search.start();


