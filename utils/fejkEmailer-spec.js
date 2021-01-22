import { FejkEmailer } from './fejkEmailer.js';
import chai from 'chai';
import sinon from 'sinon';
const expect = chai.expect;

describe('Fake Emailer', () => {

  describe('Send email', () => {
    let consoleMock, sandbox;

    beforeEach(() => {
      sandbox = sinon.createSandbox()
      consoleMock = sandbox.stub(console, 'log');
    })

    afterEach(() => {
      sandbox.restore();
    })

    const message = 'Hello World';
    const adress = 'example@email.com';
    const fejkEmailer = new FejkEmailer();

    it('Should log the correct message', () => {
      fejkEmailer.send(message, adress);

      expect(consoleMock.calledOnce).to.be.true;
      expect(consoleMock.calledWith(`Message to: ${adress}\n${message}`)).to.be.true;
    })
  })
})
