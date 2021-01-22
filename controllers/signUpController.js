import SignUpModel from '../models/signUpModel.js';
import signUpMediator from '../utils/signUpMediator.js';

export class SignUpController {
  constructor(model, signUpMediator) {
    this.model = model;
    this.signUpMediator = signUpMediator;
  }

  handleChange(input) {
    this.model[input.name] = input.value;
  }

  submit(view, course) {
    const student = this.model;

    this.signUpMediator.send({
      addStudent: true,
      student,
      course,
    })

    this.signUpMediator.send({
      billing: true,
      student,
      course,
    })

    this.signUpMediator.send({
      confirmation: true,
      student,
      course,
    })

    view.closeModal();
  }

  init() {
    return this;
  }
}

export default new SignUpController(new SignUpModel(), signUpMediator);
