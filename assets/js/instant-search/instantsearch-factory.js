export class Instantsearch_factory {
  constructor(indexName, instantsearch, searchClient, routing) {
    this.indexName = indexName;
    this.instantsearch = instantsearch;
    this.searchClient = searchClient;
    this.routing = routing;
  }

  init() {
    const parameters = {
      indexName: this.indexName ,
      searchClient: this.searchClient,
      routing: this.routing,
      searchParameters: {
        hitsPerPage: 10
      }
    };
    return this.instantsearch(parameters);
  }
}
