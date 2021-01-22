import StudentsModel from './studentsModel.js';
import chai from 'chai';
const expect = chai.expect;

describe('Students model', function() {
  beforeEach(function() {
    this.studentsModel = new StudentsModel();
  });

  afterEach(function() {
    this.studentsModel = null;
  });

  it('Should have a property called students that is an array', function() {
    expect(this.studentsModel).to.have.a.property('students').that.is.an('array');
  });
});
