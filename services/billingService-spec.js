import { BillingService } from './billingService.js';
import Bill from '../models/billsModel.js';
import { FejkEmailer } from '../utils/fejkEmailer.js';
import { AdminController } from '../controllers/adminController.js';
import chai from 'chai'
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
const expect = chai.expect;
chai.use(sinonChai);

describe('Billing service', function() {
  let sandbox;

  beforeEach(function() {
    sandbox = sinon.createSandbox();
    sandbox.stub(FejkEmailer.prototype, 'send').resolves();
    sandbox.stub(AdminController.prototype, 'addBill').resolves();
    this.billingService = new BillingService(Bill, new AdminController, new FejkEmailer);
  });

  afterEach(function() {
    sandbox.restore();
    this.billingService = null;
  })

  describe('Constructor', function() {
    it('Should have a property Bill that is a Bill class declaration', function() {
      expect(this.billingService).to.have.property('Bill');
      expect(typeof this.billingService.Bill === 'function' && /^\s*class\s+/.test(this.billingService.Bill.toString())).to.be.true;
    });

    it('Should have a property adminController that is an instance of the AdminController class', function() {
      expect(this.billingService).to.have.property('adminController');
      expect(this.billingService.adminController instanceof AdminController).to.be.true;
    });

    it('Should have a property fejkEmailer that is an instance of the FejkEmailer class', function() {
      expect(this.billingService).to.have.property('fejkEmailer');
      expect(this.billingService.fejkEmailer instanceof FejkEmailer).to.be.true;
    });
  });

  describe('canHandle()', function() {
    it('Should return true when provided with an object with the property billing set to true', function() {
      expect(this.billingService.canHandle({ billing: true })).to.be.true;
    });
  });

  describe('handle()', function() {
    it('Should call this.fejkEmailer.send once with the correct arguments', function() {
      const student = { fullName: 'Pelle' }
      const course = { title: 'Test' }
      const email = `New bill ready for handling. Student: ${student.fullName}. Course: ${course.title}.`
      this.billingService.handle({ student, course });

      expect(this.billingService.fejkEmailer.send).calledOnceWith(email, 'admin@westcoast.edu');
      expect(this.billingService.adminController.addBill).calledOnceWith(new Bill(student, course, false));
    });
  });
});
