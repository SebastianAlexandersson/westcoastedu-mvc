import { StudentController } from './studentController.js';
import StudentsModel from '../models/studentsModel.js';
import chai from 'chai';
import sinonChai from 'sinon-chai';
import sinon from 'sinon';
const expect = chai.expect;
chai.use(sinonChai);

describe('Student controller', function() {
  beforeEach(function() {
    this.studentController = new StudentController(new StudentsModel());
  });

  afterEach(function() {
    this.studentController = null;
  });

  describe('Constructor', function() {
    it('Should have a property called model that is an instance of the StudentsModel class', function() {
      expect(this.studentController).to.have.a.property('model');
      expect(this.studentController.model instanceof StudentsModel).to.be.true;
    });
  });

  describe('addStudent()', function() {
    it('Should add a student to this.model.students', function() {
      this.studentController.addStudent('Pelle');

      expect(this.studentController.model.students).to.include('Pelle');
    });
  });

  describe('generateId()', function() {
    it('Should return a number equal to this.model.students.length + 1', function() {
      const id = this.studentController.generateId();

      expect(id).to.be.equal(this.studentController.model.students.length + 1);
    });
  });
});
