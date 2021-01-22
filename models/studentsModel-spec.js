import StudentsModel from './studentsModel.js';
import chai from 'chai';
const expect = chai.expect;

describe('Students model', () => {
  const studentsModel = new StudentsModel();

  it('Should have a property called students that is an array', () => {
    expect(studentsModel).to.have.a.property('students').that.is.an('array');
  });
});
