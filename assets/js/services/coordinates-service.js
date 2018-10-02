const API_BASE_URL = "https://api-adresse.data.gouv.fr/search/";
export class CoordinatesServices {
  constructor(fetchService) {
    this.fetchService = fetchService;
  }
  getCoordinates(url) {
    return this.fetchService.getJsonResponse(url)
      .then((json) => {
        return (json.features[0].geometry.coordinates).reverse()
      })
  };
  getURLFromAddress(address) {
    const url = API_BASE_URL + '?q=' +address.replace(/ /g,'+');
    return url;
  }
};
