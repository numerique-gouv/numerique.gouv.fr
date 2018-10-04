import { assert }from 'chai'
import sinon from "sinon";

import { CoordinatesServices } from "../../services/coordinates-service"
import { Geo } from "../../map/geo"
import { FetchServices } from "../../services/fetch-services"


describe('geo', function() {
  describe('#get_coordinates()', function() {
    it('Should call getURLFromAddress and getCoordinates', function () {
      // GIVEN
      const sandbox = sinon.createSandbox();
      const coordinateService = new CoordinatesServices(new FetchServices);
      const getURLfromAdressStub = sandbox.stub(coordinateService, "getURLFromAddress");
      const getCoordinatesStub = sandbox.stub(coordinateService, "getCoordinates");
      const address = "titi";
      const expectedURL = "toto";
      const expectedCoordinates = [];
      getURLfromAdressStub.withArgs(address).returns(expectedURL);
      getCoordinatesStub.withArgs(expectedURL).resolves(expectedCoordinates);
      const geo = new Geo(coordinateService, address);

      // WHEN
      return geo.getCoordinates().then((coordinates) => {
        // THEN
        assert.isOk(getURLfromAdressStub.withArgs(address).calledOnce);
        assert.isOk(getCoordinatesStub.withArgs(expectedURL).calledOnce);
      });
    });
  });
});
