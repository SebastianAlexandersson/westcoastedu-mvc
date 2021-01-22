import BillsModel from './billsModel.js';
import chai from 'chai';
const expect = chai.expect;

describe('Bills model', () => {
  const student = {};
  const course = {};
  const isPayed = false;
  const billsModel = new BillsModel(student, course, isPayed);

  it('Should have a property called student that is an object', () => {
    expect(billsModel).to.have.a.property('student').that.is.an('object');
  });

  it('Should have a property called course that is an object', () => {
    expect(billsModel).to.have.a.property('course').that.is.an('object');
  });

  it('Should have a property called isPayed that is a boolean', () => {
    expect(billsModel).to.have.a.property('isPayed').that.is.a('boolean');
  });
});
