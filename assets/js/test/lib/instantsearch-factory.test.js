import algoliasearch from "algoliasearch"
import { Instantsearch_factory } from '../../instant-search/instantsearch-factory'
import sinon from 'sinon'
import assert from 'assert'

describe('Instantsearch_factory', function() {
  describe('#init()', function() {
    it('should call instantsearch with pass parameters', function () {

      // GIVEN
      const routing = 'routing';
      const collection = 'collection';
      const instantsearch_spy = sinon.spy();
      const searchClient = algoliasearch('OCGRURLBFM','4acb079286ac50d2c359cdc0bf0af4d7');
      const instantsearch_factory = new Instantsearch_factory(instantsearch_spy,searchClient,routing, collection);
      const args = {
        indexName: 'jekyll-dinsic',
        searchClient: searchClient,
        routing: routing,
        searchParameters: {
          hitsPerPage: 10
        }
      };
      // WHEN
      instantsearch_factory.init();
      // THEN
      assert(instantsearch_spy.withArgs(args).calledOnce);

    });
  });
});
