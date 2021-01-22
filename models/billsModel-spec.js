import BillsModel from './billsModel.js';
import chai from 'chai';
const expect = chai.expect;

describe('Bills model', () => {
  beforeEach(function() {
    const student = {};
    const course = {};
    const isPayed = false;
    this.billsModel = new BillsModel(student, course, isPayed);
  });

  afterEach(function() {
    this.billsModel = null;
  });

  it('Should have a property called student that is an object', function() {
    expect(this.billsModel).to.have.a.property('student').that.is.an('object');
  });

  it('Should have a property called course that is an object', function() {
    expect(this.billsModel).to.have.a.property('course').that.is.an('object');
  });

  it('Should have a property called isPayed that is a boolean', function() {
    expect(this.billsModel).to.have.a.property('isPayed').that.is.a('boolean');
  });
});
