import StudentsModel from '../models/studentsModel.js';

export class StudentController {
  constructor(model) {
    this.model = model;
  }

  init() {
    return this;
  }

  addStudent(student) {
    this.model.students.push(student);
  }

  generateId() {
    return this.model.students.length + 1;
  }
}

export default new StudentController(new StudentsModel());
