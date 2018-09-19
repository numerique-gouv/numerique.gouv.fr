import { assert }from 'chai'
import { capitalizeFirstLetter } from '../../lib/capitalize.js';

describe('capitalize', function() {
  describe('#capitalizeFirstLetter()', function() {
    it('should capitalize the first letter', function () {

      // GIVEN
      const string = 'lorem ipsum';
      const expectedString = 'Lorem ipsum';
      // WHEN
      const resultString = capitalizeFirstLetter(string);
      // THEN
      assert.equal(expectedString, resultString);
    });
  });
});
