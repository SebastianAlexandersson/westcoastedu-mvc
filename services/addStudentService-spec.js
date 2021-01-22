import { AddStudentService } from './addStudentService.js';
import { StudentController } from '../controllers/studentController.js';
import Student from '../models/studentModel.js';
import { Course } from '../models/courseModel.js';
import sinon from 'sinon';
import chai from 'chai';
import sinonChai from 'sinon-chai';
const expect = chai.expect
chai.use(sinonChai);

describe('Add student service', function() {
  let sandbox;

  beforeEach(function() {
    sandbox = sinon.createSandbox();
    sandbox.stub(StudentController.prototype, 'generateId').returns('123');
    sandbox.stub(StudentController.prototype, 'addStudent').resolves();
    sandbox.stub(Course.prototype, 'addStudent').resolves();
    this.addStudentService = new AddStudentService(Student, new StudentController);
  });

  afterEach(function() {
    sandbox.restore();
    this.addStudentService = null;
  });

  describe('Constructor', function() {
    it('Should have a property called Student that is Student class declaration', function() {
      expect(this.addStudentService).to.have.property('Student');
      expect(typeof this.addStudentService.Student === 'function' && /^\s*class\s+/.test(this.addStudentService.Student.toString())).to.be.true;
    });

    it('Should have a property called studentController that is an instance of the StudentController class', function() {
      expect(this.addStudentService).to.have.property('studentController');
      expect(this.addStudentService.studentController instanceof StudentController).to.be.true;
    });
  });

  describe('canHandle()', function() {
    it('Should return true when provided with an object with a property called addStudent set to true', function() {
      expect(this.addStudentService.canHandle({ addStudent: true }));
    });
  });

  describe('handle()', function() {
    beforeEach(function() {
      this.message = {
        student: {
          fullName: 'Pelle',
          city: 'GBG',
          email: 'test@test.com',
        },
        course: new Course(),
      }
      this.student = new Student(
        '123',
        this.message.student.fullName,
        this.message.student.city,
        this.message.student.email
      );
    });

    afterEach(function() {
      this.student = null;
      this.message = null;
    });

    it('Should call this.studentController.generateId once', function() {
      this.addStudentService.handle(this.message);

      expect(this.addStudentService.studentController.generateId).calledOnce;
    });

    it('Should call message.course.addStudent once with the correct arguments', function() {
      this.addStudentService.handle(this.message);

      expect(this.message.course.addStudent).calledOnceWith(this.student);
    });

    it('Should call this.studentController once with the correct arguments', function() {
      this.addStudentService.handle(this.message);

      expect(this.addStudentService.studentController.addStudent).calledOnceWith(this.student);
    });
  });
});
