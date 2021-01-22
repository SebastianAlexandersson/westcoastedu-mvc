import { Course } from './courseModel.js';
import chai from 'chai';
const expect = chai.expect;

describe('Course model', () => {
  const courseModel = new Course('123', 'title', 'description', 'duration', []);
  
  describe('Constructor', () => {
    it('Should have a property called id that is a string', () => {
      expect(courseModel).to.have.a.property('id').that.is.a('string')
    });

    it('Should have a property called title that is a string', () => {
      expect(courseModel).to.have.a.property('title').that.is.a('string')
    });

    it('Should have a property called description that is a string', () => {
      expect(courseModel).to.have.a.property('description').that.is.a('string')
    });

    it('Should have a property called duration that is a string', () => {
      expect(courseModel).to.have.a.property('duration').that.is.a('string')
    });

    it('Should have a property called students that is an array', () => {
      expect(courseModel).to.have.a.property('students').that.is.an('array').that.is.empty;
    });
  });

  describe('getDisplayData()', () => {
    it('Should return an object with a title and a duration', () => {
      const displayData = courseModel.getDisplayData();

      expect(displayData).to.be.an('object');
      expect(displayData).to.have.a.property('title').that.is.a.string;
      expect(displayData).to.have.a.property('duration').that.is.a.string;
    })
  })

  describe('addStudent()', () => {
    it('Should add a student to the students array', () => {
      courseModel.addStudent('Pelle');
      expect(courseModel.students).to.include('Pelle');
    })
  })
});
