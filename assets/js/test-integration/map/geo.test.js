import { assert } from 'chai'

import { CoordinatesServices } from "../../services/coordinates-service"
import { FetchServices } from "../../services/fetch-services"
import { Geo } from "../../map/geo"

describe('coordinatesService', function() {
  describe('#getCoordinates()', function() {
    it('Should call find coordinate of 20 avenue de Segur', function () {
      // GIVEN
      const address = '20 avenue de ségur';
      const coordinatesService = new CoordinatesServices(new FetchServices());
      const geo = new Geo(coordinatesService, address);
      const expectedCoordinates = [48.850318, 2.308309];
      // WHEN
      return geo.getCoordinates().then((coordinates) => {
        // THEN
        assert.deepEqual(coordinates, expectedCoordinates);
      })
    });
  });
});
