import { ConfirmationService } from './confirmationService.js';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);
const expect = chai.expect;

describe('Confirmation Service', () => {
  //Fake dependencies
  const fejkEmailer = {};
  fejkEmailer.send = sinon.fake();
  const confirmationService = new ConfirmationService(fejkEmailer);
  const student = {
    fullName: 'Test',
    email: 'test@test.com',
  }
  const course = {
    title: 'Test',
  }

  it('Should be able to handle confirmation', () => {
    expect(confirmationService.canHandle({ confirmation: true })).to.be.equal(true);
  });

  it('Should handle confirmation', () => {
    confirmationService.handle({ student, course });
    expect(fejkEmailer.send).to.have.been.calledOnce;
  });
})
