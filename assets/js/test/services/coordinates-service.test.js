import { assert } from 'chai'
import sinon from 'sinon'

import CoordinatesService from "../../services/coordinates-service"
import FetchService from "../../services/fetch-services"

describe('coordinatesService', function() {
  const sandbox = sinon.createSandbox();
  const fetchService = new FetchService();
  let coordinatesService;
  describe('#getCoordinates()', function() {
    let getJsonResponseStub;
    beforeEach(function () {
      getJsonResponseStub = sandbox.stub(fetchService,"getJsonResponse");
      coordinatesService = new CoordinatesService(fetchService);

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
      getJsonResponseStub.withArgs(url).resolves(response);
      // WHEN
      coordinatesService.getCoordinates(url);
      // THEN
      assert(getJsonResponseStub.withArgs(url).calledOnce)
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
      getJsonResponseStub.withArgs(url).resolves(response);
      // WHEN
      coordinatesService.getCoordinates(url).then((coordinates) => {
        // THEN
        assert.deepEqual(coordinates, expectedCoordinates);
      })
    });
  });
  describe('#getURLfromAdress()', function () {
    it('should return an object', function () {
      // GIVEN
      coordinatesService = new CoordinatesService(fetchService);
      // WHEN
      const url = coordinatesService.getURLfromAdress('');
      // THEN
      assert.isOk(url, 'is valid object');
    });
    it('should return a valid url when one word request', function () {
      // GIVEN
      coordinatesService = new CoordinatesService(fetchService);
      const expectedURL = "https://api-adresse.data.gouv.fr/search/?q=dinsic";
      const address = "dinsic";
      // WHEN
      const url = coordinatesService.getURLfromAdress(address);
      // THEN
      assert.deepEqual(url, expectedURL);
    })
    it('should return a valid url when multi word request', function () {
      // GIVEN
      coordinatesService = new CoordinatesService(fetchService);
      const expectedURL = "https://api-adresse.data.gouv.fr/search/?q=20+avenue+de+Ségur";
      const address = "20 avenue de Ségur";
      // WHEN
      const url = coordinatesService.getURLfromAdress(address);
      // THEN
      assert.deepEqual(url, expectedURL);
    })
  })
});
