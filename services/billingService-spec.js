import { BillingService } from './billingService.js';
import chai from 'chai'
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
const expect = chai.expect;
chai.use(sinonChai);

describe('Billing service', () => {
  //Fake dependencies
  const Bill = sinon.fake();
  const adminController = {};
  adminController.addBill = sinon.fake();
  const fejkEmailer = {};
  fejkEmailer.send = sinon.fake();

  it('Should be able to handle billing', () => {
    const billingService = new BillingService(Bill, adminController, fejkEmailer);

    expect(billingService.canHandle({ billing: true })).to.be.true;
  })

  it('Should be able to handle a new billing event', () => {
    const billingService = new BillingService(Bill, adminController, fejkEmailer);

    billingService.handle({
      student: {
        fulllName: 'test',
      },
      course: {
        title: 'test',
      }
    })

    expect(Bill).to.be.calledOnce;
    expect(adminController.addBill).to.be.calledOnce;
    expect(fejkEmailer.send).to.be.calledOnce;
  })
})
