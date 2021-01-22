import { Course } from './courseModel.js';
import chai from 'chai';
const expect = chai.expect;

describe('Course model', () => {
  beforeEach(function() {
    this.courseModel = new Course('123', 'title', 'description', 'duration', []);
  });

  afterEach(function() {
    this.courseModel = null;
  })
  
  describe('Constructor', () => {
    it('Should have a property called id that is a string', function() {
      expect(this.courseModel).to.have.a.property('id').that.is.a('string')
    });

    it('Should have a property called title that is a string', function() {
      expect(this.courseModel).to.have.a.property('title').that.is.a('string')
    });

    it('Should have a property called description that is a string', function() {
      expect(this.courseModel).to.have.a.property('description').that.is.a('string')
    });

    it('Should have a property called duration that is a string', function() {
      expect(this.courseModel).to.have.a.property('duration').that.is.a('string')
    });

    it('Should have a property called students that is an array', function() {
      expect(this.courseModel).to.have.a.property('students').that.is.an('array').that.is.empty;
    });
  });

  describe('getDisplayData()', function() {
    it('Should return an object with a title and a duration', function() {
      const displayData = this.courseModel.getDisplayData();

      expect(displayData).to.be.an('object');
      expect(displayData).to.have.a.property('title').that.is.a.string;
      expect(displayData).to.have.a.property('duration').that.is.a.string;
    });
  });

  describe('addStudent()', function() {
    it('Should add a student to the students array', function() {
      this.courseModel.addStudent('Pelle');
      expect(this.courseModel.students).to.include('Pelle');
    });
  });
});
