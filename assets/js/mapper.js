import { Map } from "./map/map"
import { Geo } from "./map/geo"
import { CoordinatesServices } from "./services/coordinates-service"
import { FetchServices } from "./services/fetch-services"

if ($("#map").length){
  const address = $("#map").data("address");
  const geo = new Geo(new CoordinatesServices(new FetchServices()),address);
  geo.getCoordinates().then((coordinates) => {
    const map = new Map(coordinates,"map");
    map.initialise();
    map.addMarkerOnCenter();
  });
}

