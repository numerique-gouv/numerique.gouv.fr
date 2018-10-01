import { assert } from 'chai'
import sinon from 'sinon'

import CoordinatesService from "../../services/coordinates-service"
import FetchService from "../../services/fetch-services"

describe('coordinatesService', function() {
  const sandbox = sinon.createSandbox();
  describe('#get_coordinates()', function() {
    const fetchService = new FetchService();
    const coordinatesService = new CoordinatesService(fetchService);
    let fetchStub;
    beforeEach(function () {
      fetchStub = sandbox.stub(fetchService,"fetch");
    });
    afterEach(function () {
      sandbox.restore();
    });
    it('Should call fetch with url', function () {

      // GIVEN
      const url = 'https://api-adresse.data.gouv.fr/search/?q=20+avenue+de+segur&limit=1';
      const response = {
        "features": [
          {
            "geometry": {
              "coordinates": []
            }
          }
        ],
        "query": "20 avenue de segur",
        "licence": "ODbL 1.0"
      };
      fetchStub.withArgs(url).resolves(response);
      // WHEN
      coordinatesService.getCoordinates(url);
      // THEN
      assert(fetchStub.withArgs(url).calledOnce)
    });
    it('Should return coordinate', function () {
      // GIVEN
      const url = 'https://api-adresse.data.gouv.fr/search/?q=20+avenue+de+segur&limit=1';
      const response = {
        "attribution": "BAN",
        "version": "draft",
        "limit": 1,
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "properties": {
              "context": "75, Paris, Île-de-France",
              "label": "20 Avenue de Ségur 75007 Paris",
              "x": 649242.6,
              "y": 6861364.1,
              "name": "20 Avenue de Ségur",
              "housenumber": "20",
              "id": "ADRNIVX_0000000354621142",
              "postcode": "75007",
              "citycode": "75107",
              "type": "housenumber",
              "street": "Avenue de Ségur",
              "score": 0.8558818181818182,
              "city": "Paris",
              "importance": 0.4147
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                2.308309,
                48.850318
              ]
            }
          }
        ],
        "query": "20 avenue de segur",
        "licence": "ODbL 1.0"
      };
      const expectedCoordinates = [2.308309, 48.850318];
      fetchStub.withArgs(url).resolves(response);
      // WHEN
      const coordinates = coordinatesService.getCoordinates(url);
      // THEN
      assert.deepEqual(coordinates, expectedCoordinates);
    });
  });
});
