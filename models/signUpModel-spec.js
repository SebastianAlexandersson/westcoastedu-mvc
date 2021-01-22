import SignUpModel from './signUpModel.js';
import chai from 'chai';
const expect = chai.expect;

describe('Sign up model', () => {
  const signUpModel = new SignUpModel();

  it('Should have a property called fullName that is a string', () => {
    expect(signUpModel).to.have.a.property('fullName').that.is.a('string');
  });

  it('Should have a property called email that is a string', () => {
    expect(signUpModel).to.have.a.property('email').that.is.a('string');
  });

  it('Should have a property called city that is a string', () => {
    expect(signUpModel).to.have.a.property('city').that.is.a('string');
  });
});
