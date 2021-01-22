import AdminModel from './adminModel.js';
import chai from 'chai';
const expect = chai.expect;

describe('Admin model', function() {
  beforeEach(function() {
    this.adminModel = new AdminModel();
  });

  afterEach(function() {
    this.adminModel = null;
  });
  
  it('Should have propery called bills thats an empty array', function() {
    expect(this.adminModel).to.have.property('bills');
    expect(this.adminModel.bills).to.be.an('array').that.is.empty;
  });
});
