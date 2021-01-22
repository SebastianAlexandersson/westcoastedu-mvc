import { AddStudentService } from './addStudentService.js';
import sinon from 'sinon';
import chai from 'chai';
import sinonChai from 'sinon-chai';
const expect = chai.expect
chai.use(sinonChai);

describe('Add student service', () => {
  //Fake dependencies
  const studentController = {}
  studentController.generateId = sinon.fake();
  studentController.addStudent = sinon.fake();
  const Student = sinon.fake();
  const course = {};
  course.addStudent = sinon.fake();

  it('Should be able to handle adding a student', () => {
    const addStudentService = new AddStudentService(Student, studentController);
    
    expect(addStudentService.canHandle({ addStudent: true })).to.be.equal(true);
  })

  it('Should handle the add student event', () => {
    const addStudentService = new AddStudentService(Student, studentController);
    const message = {
      student: {
        fullName: 'Test',
        city: 'Test',
        email: 'Test',
      },
      course,
    }

    addStudentService.handle(message);

    expect(Student).to.have.been.calledOnce;
    expect(studentController.generateId).to.have.been.calledOnce;
    expect(studentController.addStudent).to.have.been.calledOnce
    expect(course.addStudent).to.have.been.calledOnce
  })
})
