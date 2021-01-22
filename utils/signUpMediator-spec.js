import { SignUpMediator } from './signUpMediator.js';
import chai from 'chai';
const expect = chai.expect;

class MockService {
  canHandle(message) {
    return Boolean(message.mock);
  }

  handle(message) {
    return message;
  }
}

describe('Sign up Mediator', () => {
  const signUpMediator = new SignUpMediator();
  const mockService = new MockService();

  it('Should validate a service', () => {
    expect(signUpMediator.isValidService(mockService)).to.be.true;
  })

  it('Should register a service', () => {

    signUpMediator.registerService(mockService);

    expect(signUpMediator.services.length).to.be.equal(1);
  })

  it('Should send message', () => {
    const message = {
      mock: true,
      message: 'Hello World',
    }

    expect(signUpMediator.send(message)).to.be.equal(message);
  })
})
