const collection_routing_conf = {
  stateMapping: {
    stateToRoute(uiState) {
      return {
        query: uiState.query,
        categories: uiState.menu,
        tags: uiState.refinementList && uiState.refinementList.tags.join('~'),
      };
    },
    routeToState(routeState) {
      return {
        query: routeState.query,
        menu: {
          categories: routeState.categories,
        },
        refinementList: {
          tags: routeState.tags && routeState.tags.split('~')
        },
      };
    }
  }
};

const rechercher_routing_conf = true;


module.exports = {collection_routing_conf, rechercher_routing_conf};
