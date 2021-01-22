import signUpController, { SignUpController } from './signUpController.js';
import SignUpModel from '../models/signUpModel.js';
import { SignUpMediator } from '../utils/signUpMediator.js';
import SignUpView from '../views/signUpView.js';
import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
const expect = chai.expect;
chai.use(sinonChai);

describe('Sign up controller', function() {
  let sandbox;

  beforeEach(function() {
    sandbox = sinon.createSandbox();
    sandbox.stub(SignUpMediator.prototype, 'send').resolves();
    sandbox.stub(SignUpView.prototype, 'closeModal').resolves();
    this.signUpController = new SignUpController(new SignUpModel(), new SignUpMediator());
  });

  afterEach(function() {
    sandbox.restore();
    this.signUpController = null;
  });

  describe('Constructor', function() {
    it('Should have a property called model that is an instance of the SignUpModel class', function() {
      expect(this.signUpController).to.have.a.property('model');
      expect(this.signUpController.model instanceof SignUpModel).to.be.true;
    });
  });

  describe('handleChange()', function() {
    it('SignUpController.model should have a property called name with the value test', function() {
      this.signUpController.handleChange({ name: 'name', value: 'value' });

      expect(this.signUpController.model).to.have.a.property('name');
      expect(this.signUpController.model.name).to.equal('value');
    });
  });

  describe('submit()', function() {
    it('Should call signUpMediator.send() three times', function() {
      this.signUpController.submit(new SignUpView({classList: ['123']}, { id: '123'}));

      expect(signUpController.signUpMediator.send).to.be.calledThrice;
    });
  });
});
