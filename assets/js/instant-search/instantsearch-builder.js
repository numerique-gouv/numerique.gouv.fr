export class Instantsearch_builder {
  constructor(search) {
    this.search = search;
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
