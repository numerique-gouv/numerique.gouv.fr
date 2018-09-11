export class Instantsearch_factory {
  constructor(instantsearch, searchClient, routing) {
    this.instantsearch = instantsearch;
    this.searchClient = searchClient;
    this.routing = routing;
  }

  init() {
    const parameters = {
      indexName: 'jekyll-dinsic',
      searchClient: this.searchClient,
      routing: this.routing,
      searchParameters: {
        hitsPerPage: 10
      }
    };
    return this.instantsearch(parameters);
  }
}
