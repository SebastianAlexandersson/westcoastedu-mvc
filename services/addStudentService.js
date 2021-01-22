import studentController from '../controllers/studentController.js';
import Student from '../models/studentModel.js';

export class AddStudentService {
  constructor(studentModel, studentController) {
    this.Student = studentModel;
    this.studentController = studentController;
  }
  canHandle(message) {
    return Boolean(message.addStudent);
  }

  handle(message) {
    const student = new this.Student(
      this.studentController.generateId(),
      message.student.fullName,
      message.student.city,
      message.student.email,
    )
    message.course.addStudent(student);
    this.studentController.addStudent(student);
  }
}

export default new AddStudentService(Student, studentController);
