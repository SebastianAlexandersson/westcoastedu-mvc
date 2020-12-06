import StudentsModel from '../models/studentsModel.js';

class StudentController {
  init() {
    this.model = new StudentsModel();
  }

  addStudent(student) {
    this.model.students.push(student);
  }

  generateId() {
    return this.model.length + 1;
  }
}

export default new StudentController;
