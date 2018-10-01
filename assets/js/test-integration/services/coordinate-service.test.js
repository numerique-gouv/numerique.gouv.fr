import { assert } from 'chai'

import CoordinatesService from "../../services/coordinates-service"
import FetchService from "../../services/fetch-services"

describe('coordinatesService', function() {
  describe('#get_coordinates()', function() {
    it('Should call find coordinate of 20 avenue de Segur', function () {
      // GIVEN
      const url = 'https://api-adresse.data.gouv.fr/search/?q=20+avenue+de+segur&limit=1';
      const coordinatesService = new CoordinatesService(new FetchService);
      const expectedCoordinates = [2.308309, 48.850318];
      // WHEN
      coordinatesService.getCoordinates(url).then((coordinates) => {
      // THEN
      assert.deepEqual(coordinates, expectedCoordinates);
      })
    });
  });
});
