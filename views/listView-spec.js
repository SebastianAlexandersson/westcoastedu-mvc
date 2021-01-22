import ListView from './listView.js';
import chai from 'chai';
import sinonChai from 'sinon-chai';
import sinon from 'sinon';
const expect = chai.expect;
chai.use(sinonChai);

describe('List View', function() {
  let sandbox;

  beforeEach(function() {
    const parentElement = {
      querySelectorAll: () => null,
      insertAdjacentHTML: () => null,
      classList: ['123'],
    }
    const row = {
      addEventListener: () => null,
      getDisplayData: () => null,
    }
    sandbox = sinon.createSandbox();
    sandbox.stub(parentElement, 'querySelectorAll').returns([row]);
    sandbox.stub(parentElement, 'insertAdjacentHTML').resolves();
    sandbox.stub(row, 'addEventListener').resolves();
    sandbox.stub(row, 'getDisplayData').returns({ one: null, two: null, three: null });
    this.listView = new ListView(parentElement, [row], [row], '123');
  });

  afterEach(function() {
    sandbox.restore();
    this.listView = null;
  });

  describe('Constructor', function() {
    it('Should have a property called parentElement that is an object', function() {
      expect(this.listView).to.have.property('parentElement').that.is.an('object');
    });

    it('Should have a property called data that is an array', function() {
      expect(this.listView).to.have.property('data').that.is.an('array');
    });

    it('Should have a property called headers that is an array', function() {
      expect(this.listView).to.have.property('headers').that.is.an('array');
    });

    it('Should have a property called caption is an string', function() {
      expect(this.listView).to.have.property('caption').that.is.a('string');
    });
  });

  describe('clickHandler()', function() {
    it('Should call this.parentElement.querySelectorAll once', function() {
      this.listView.clickHandler();

      expect(this.listView.parentElement.querySelectorAll).to.be.calledOnce;
    });
  });

  describe('render()', function() {
    it('Should call this.parentElement.insertAdjacentHTML once', function() {
      this.listView.render();

      expect(this.listView.parentElement.insertAdjacentHTML).to.be.calledOnce;
    });
  });
});
