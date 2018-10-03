import { assert } from 'chai'

import { CoordinatesServices } from "../../services/coordinates-service"
import { FetchServices } from "../../services/fetch-services"

describe('coordinatesService', function() {
  describe('#get_coordinates()', function() {
    it('Should call find coordinate of url 20+avenue+de+segur', function () {
      // GIVEN
      const url = 'https://api-adresse.data.gouv.fr/search/?q=20+avenue+de+segur&limit=1';
      const coordinatesService = new CoordinatesServices(new FetchServices());
      const expectedCoordinates = [48.850318, 2.308309];
      // WHEN
      return coordinatesService.getCoordinates(url).then((coordinates) => {
        // THEN
        assert.deepEqual(coordinates, expectedCoordinates);
      })
    });
  });
});
