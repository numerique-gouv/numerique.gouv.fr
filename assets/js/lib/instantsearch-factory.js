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

    this.search = this.instantsearch(parameters);
  }
  addWidget(widget,configuration){
    this.search.addWidget(
    widget(configuration)
    );
  }
  start(){
    this.search.start();
  }
}
