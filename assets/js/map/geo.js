class Geo {
  constructor(coordinatesService, address) {
    this.coordinatesService = coordinatesService;
    this.address = address;
  }

  getCoordinates() {
    const url = this.coordinatesService.getURLFromAddress(this.address);
    return this.coordinatesService.getCoordinates(url);
  }
}

export { Geo }
