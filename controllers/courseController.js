import ListView from '../views/listView.js';
import CourseView from '../views/courseView.js';
import SignUpView from '../views/signUpView.js';
import courseModel from '../models/courseModel.js';
import signUpController from './signUpController.js';

export class CourseController {
  constructor(parentElement, listView, courseView, signUpView, courseModel, signUpController) {
    this.parentElement = parentElement;
    this.listView = listView;
    this.courseView = courseView;
    this.signUpView = signUpView;
    this.courseModel = courseModel;
    this.signUpController = signUpController;
  }

  addListItemViewHandler() {
    this.list.clickHandler((id) => {
      const course = this.courseModel.courses.find((course) => course.id === id);
      const courseView = new this.courseView(this.parentElement, course)
      courseView.render();
      this.addSignUpViewHandler(courseView, course);
    })
  }

  addSignUpViewHandler(view, course) {
    view.signUpHandler(() => {
      const signUpView = new this.signUpView(this.parentElement, course)
      signUpView.render();
      signUpView.onChangeHandler((input) => {
        this.signUpController.handleChange(input);
      })
      signUpView.signUpHandler(() => {
        this.signUpController.submit(signUpView, course);
      })
      view.closeModal();
    })
  }

  init(parentElement) {
    this.parentElement = parentElement;
    this.list = new this.listView(this.parentElement, courseModel.courses, courseModel.headers, 'Kurser');
    this.list.render();
    this.addListItemViewHandler();
  }
}

export default new CourseController(null, ListView, CourseView, SignUpView, courseModel, signUpController);
