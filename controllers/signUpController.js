import SignUpModel from '../models/signUpModel.js';
import signUpMediator from '../utils/signUpMediator.js';

class SignUpController {
  constructor() {
    this.model = null;
  }

  handleChange(input) {
    this.model[input.name] = input.value;
  }

  submit(view, course) {
    const student = this.model;

    signUpMediator.send({
      addStudent: true,
      student,
      course,
    })

    signUpMediator.send({
      billing: true,
      student,
      course,
    })

    signUpMediator.send({
      confirmation: true,
      student,
      course,
    })

    view.closeModal();
  }

  init() {
    this.model = new SignUpModel();
  }
}

export default new SignUpController;
