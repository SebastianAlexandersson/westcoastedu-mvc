import { AdminController } from './adminController.js';
import chai from 'chai';
import sinonChai from 'sinon-chai';
import sinon from 'sinon'
const expect = chai.expect;
chai.use(sinonChai);

describe('Admin controller', function() {
  let sandbox;

  beforeEach(function() {
    sandbox = sinon.createSandbox();
    this.consoleMock = sandbox.stub(console, 'log');
    const model = {
      bills: [],
    }
    this.adminController = new AdminController(model);
  });
  
  afterEach(function() {
    sandbox.restore();
    this.adminController = null;
    this.consoleMock = null;
  });

  describe('Constructor', function() {
    it('Should have a property called model that has a property called bills', function() {
      expect(this.adminController).to.have.a.property('model').that.has.a.property('bills');
    });
  });

  describe('addBill()', function() {
    it('Should add an object to the bills property on the model', function() {
      this.adminController.addBill('test')
      expect(this.adminController.model.bills).to.include('test');
    });

    it('It should log a message and list the current bills', function() {
      this.adminController.addBill('test');
      expect(this.consoleMock.calledOnceWith('Current bills: ', ['test'])).to.be.true;
    });
  });
});
