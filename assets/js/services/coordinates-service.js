module.exports = class CoordinatesService {
  constructor(fetchService) {
    this.fetchService = fetchService;
  }
  getCoordinates(url) {
    return this.fetchService.getJsonResponse(url)
      .then((json) => json.features[0].geometry.coordinates)
  };
};
