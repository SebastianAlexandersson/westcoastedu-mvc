import { AdminController } from './adminController.js';
import chai from 'chai';
import sinonChai from 'sinon-chai';
import sinon from 'sinon'
const expect = chai.expect;
chai.use(sinonChai);

describe('Admin controller', () => {
  //Fake dependencies
  const model = {
    bills: [],
  }
  const adminController = new AdminController(model);
  let consoleMock, sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    consoleMock = sandbox.stub(console, 'log');
  });
  
  afterEach(() => {
    sandbox.restore();
  })

  describe('Constructor', () => {
    it('Should have a property called model that has a property called bills', () => {
      expect(adminController).to.have.a.property('model').that.has.a.property('bills');
    });
  });

  describe('addBill()', () => {
    adminController.addBill('test')

    it('Should add an object to the bills property on the model', () => {
      expect(adminController.model.bills).to.include('test');
    });

    it('It should log a message and list the current bills', () => {
      adminController.addBill('test');
      expect(consoleMock.calledOnceWith('Current bills: ', ['test', 'test'])).to.be.true;
    });
  });
})
