import L from "leaflet"

class Map {
  constructor (coordinates, div){
    this.coordinates = coordinates;
    this.div = div;
    this.map = null;
  }
  initialise() {
    this.map = L.map(this.div, {
      center: this.coordinates,
      zoom: 15
    });
    // L.tileLayer('https://{s}.tiles.quaidorsay.fr/tile/forte{r}/{z}/{x}/{y}.png').addTo(this.map);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; les contributeurs d’<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);
  }
  addMarkerOnCenter() {
    this.addMarker(this.coordinates);
  }
  addMarker(coordinates) {
    L.marker(coordinates).addTo(this.map);
  }
}

export { Map }
