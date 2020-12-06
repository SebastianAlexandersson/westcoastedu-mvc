import studentController from '../controllers/studentController.js';
import Student from '../models/studentModel.js';

class AddStudentService {
  canHandle(message) {
    return Boolean(message.addStudent);
  }

  handle(message) {
    const student = new Student(
      studentController.generateId(),
      message.student.fullName,
      message.student.city,
      message.student.email,
    )
    message.course.addStudent(student);
    studentController.addStudent(student);
  }
}

export default AddStudentService;
