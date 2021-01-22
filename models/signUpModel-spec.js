import SignUpModel from './signUpModel.js';
import chai from 'chai';
const expect = chai.expect;

describe('Sign up model', function() {
  beforeEach(function() {
    this.signUpModel = new SignUpModel();
  });

  afterEach(function() {
    this.signUpModel = null;
  });

  it('Should have a property called fullName that is a string', function() {
    expect(this.signUpModel).to.have.a.property('fullName').that.is.a('string');
  });

  it('Should have a property called email that is a string', function() {
    expect(this.signUpModel).to.have.a.property('email').that.is.a('string');
  });

  it('Should have a property called city that is a string', function() {
    expect(this.signUpModel).to.have.a.property('city').that.is.a('string');
  });
});
