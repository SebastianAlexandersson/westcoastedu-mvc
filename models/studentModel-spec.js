import StudentModel from './studentModel.js';
import chai from 'chai';
const expect = chai.expect;

describe('Student model', function() {
  beforeEach(function() {
    this.studentModel = new StudentModel('123', 'Pelle Johnsson', 'GBG', 'test@test.com');
  });

  afterEach(function() {
    this.studentModel = null;
  });

  it('Should have a property called id that is a string', function() {
    expect(this.studentModel).to.have.a.property('id').that.is.a('string');
  });

  it('Should have a property called fullName that is a string', function() {
    expect(this.studentModel).to.have.a.property('fullName').that.is.a('string');
  });

  it('Should have a property called city that is a string', function() {
    expect(this.studentModel).to.have.a.property('city').that.is.a('string');
  });

  it('Should have a property called email that is a string', function() {
    expect(this.studentModel).to.have.a.property('email').that.is.a('string');
  });
});
