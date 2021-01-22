import AdminModel from './adminModel.js';
import chai from 'chai';
const expect = chai.expect;

describe('Admin model', () => {
  const adminModel = new AdminModel();
  
  it('Should have propery called bills thats an empty array', () => {
    expect(adminModel).to.have.property('bills');
    expect(adminModel.bills).to.be.an('array').that.is.empty;
  });
});
