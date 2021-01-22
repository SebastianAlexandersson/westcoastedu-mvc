import { ConfirmationService } from './confirmationService.js';
import { FejkEmailer } from '../utils/fejkEmailer.js';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);
const expect = chai.expect;

describe('Confirmation Service', function() {
  let sandbox;

  beforeEach(function() {
    sandbox = sinon.createSandbox();
    sandbox.stub(FejkEmailer.prototype, 'send').resolves();
    this.confirmationService = new ConfirmationService(new FejkEmailer());
  });

  afterEach(function() {
    sandbox.restore();
    this.confirmationService = null;
  });

  describe('Constructor', function() {
    it('Should have a property called fejkEmailer that is an instance of the FejkEmailer class', function() {
      expect(this.confirmationService).to.have.property('fejkEmailer');
      expect(this.confirmationService.fejkEmailer instanceof FejkEmailer).to.be.true;
    });
  });

  describe('canHandle()', function() {
    it('Should return true when provided with an object with the property confirmation set to true', function() {
      expect(this.confirmationService.canHandle({ confirmation: true })).to.be.true;
    });
  });

  describe('handle()', function() {
    it('Should call this.fejkEmailer.send once with the correct arguments', function() {
      const message = {
        student: {
          fullName: 'Pelle',
          email: 'test@test.com'
        },
        course: {
          title: 'Test',
        },
      }
      const email = `Dear ${message.student.fullName}, Thank you for chosing our school. This is an email confirming your participation in the course: ${message.course.title}`

      this.confirmationService.handle(message);

      expect(this.confirmationService.fejkEmailer.send).calledOnceWith(email, message.student.email);
    });
  })
});
