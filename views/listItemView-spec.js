import ListItemView from './listItemView.js';
import chai from 'chai';
import sinonChai from 'sinon-chai';
import sinon from 'sinon';
const expect = chai.expect;
chai.use(sinonChai);

describe('List Item View', function() {
  let sandbox;

  beforeEach(function() {
    const parentElement = {
      querySelector: () => null,
      insertAdjacentHTML: () => null,
      removeChild: () => null,
    }
    const obj = {
      addEventListener: () => null,
    }
    sandbox = sinon.createSandbox();
    sandbox.stub(parentElement, 'querySelector').returns(obj);
    sandbox.stub(parentElement, 'insertAdjacentHTML').resolves();
    sandbox.stub(parentElement, 'removeChild').resolves();
    sandbox.stub(obj, 'addEventListener').resolves();
    this.listItemView = new ListItemView(parentElement, '123')
    this.obj = obj;
  });

  afterEach(function() {
    sandbox.restore();
    this.listItemView = null;
    this.obj = null;
  });

  describe('Constructor', function() {
    it('Should have a property called parentElement that is an object', function() {
      expect(this.listItemView).to.have.property('parentElement').that.is.an('object');
    });

    it('Should have a property called data that is a string', function() {
      expect(this.listItemView).to.have.property('data').that.is.an('string');
    });
  });

  describe('closeModal()', function() {
    it('Should call this.parentElement.removeChild once', function() {
      this.listItemView.closeModal();

      expect(this.listItemView.parentElement.removeChild).to.be.calledOnce;
    });
  });

  describe('render()', function() {
    it('Should call this.parentElement.insertAdjacentHTML once', function() {
      this.listItemView.render();

      expect(this.listItemView.parentElement.insertAdjacentHTML).to.be.calledOnce;
    });

    it('Should call this.parentElement.querySelector once', function() {
      this.listItemView.render();

      expect(this.listItemView.parentElement.querySelector).to.be.calledOnce;
    });
  });
});
