import { Instantsearch_builder } from "../../instant-search/instantsearch-builder";
import sinon from 'sinon'
import assert from 'assert'

describe('Instantsearch_builder', function() {
  describe('#addWidget()', function() {
    it('should add the widget send in parameter with his configuration', function () {
      // GIVEN
      const search_stub = sinon.stub({addWidget: function (widget) {
        }});
      const widget_spy = sinon.spy();
      const configuration = {};
      const instantsearch_builder = new Instantsearch_builder(search_stub);

      // WHEN
      instantsearch_builder.addWidget(widget_spy, configuration);
      // THEN
      assert(widget_spy.withArgs(configuration).calledOnce);

    });
  });
  describe('#start()', function() {
    it('should call start function', function () {
      // GIVEN
      const search_stub = sinon.stub({start:function () {

        }});
      const instantsearch_builder = new Instantsearch_builder(search_stub);
      // WHEN
      instantsearch_builder.start();
      // THEN
      assert(search_stub.start.calledOnce);
    });
  });
});
