const Hit_helper = require('../lib/hit-helper');
const assert = require('assert');


describe('Hit_helper', function() {
  describe('#get_most_valuable_content()', function() {
    it('should return something', function() {
      // GIVEN
      hit = {
        _snippetResult: {
          'chapeau-text': {
            value: 'lorem ipsum'
          }
        }
      };
      const hit_helper = new Hit_helper(hit);
      // WHEN
      const result = hit_helper.get_most_valuable_content(hit);
      // THEN
      assert.equal(result, hit._snippetResult['chapeau-text'].value);
    });
    it('should not return content if no chapeau text', function() {
      // GIVEN
      hit = {
        _snippetResult: {
          content: {
            value: 'lorem ipsum'
          }
        }
      };
      const hit_helper = new Hit_helper(hit);
      // WHEN
      const result = hit_helper.get_most_valuable_content(hit);
      // THEN
      assert.equal(result, hit._snippetResult['content'].value);
    });
    it('should return highlight content if no chapeau highlight', function() {
      // GIVEN
      hit = {
        _snippetResult: {
          'chapeau-text': {
            matchLevel: "none",
            value: 'lorem ipsum'
          },
          content: {
            matchLevel: "full",
            value: 'dolor sit'
          }
        }
      };
      const hit_helper = new Hit_helper(hit);
      // WHEN
      const result = hit_helper.get_most_valuable_content(hit);
      // THEN
      assert.equal(result, hit._snippetResult['content'].value);
    });
    it('should return highlight chapeau if no chapeau and content highlight', function() {
      // GIVEN
      hit = {
        _snippetResult: {
          'chapeau-text': {
            matchLevel: "none",
            value: 'lorem ipsum'
          },
          content: {
            matchLevel: "none",
            value: 'dolor sit'
          }
        }
      };
      const hit_helper = new Hit_helper(hit);
      // WHEN
      const result = hit_helper.get_most_valuable_content(hit);
      // THEN
      assert.equal(result, hit._snippetResult['chapeau-text'].value);
    });
  });
});
