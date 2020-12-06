import ListView from '../views/listView.js';
import CourseView from '../views/courseView.js';
import SignUpView from '../views/signUpView.js';
import courseModel from '../models/courseModel.js';
import signUpController from './signUpController.js';

export class CourseController {
  constructor(parentElement) {
    this.parentElement = parentElement;
    this.list = new ListView(this.parentElement, courseModel.courses, courseModel.headers, 'Kurser');
  }

  renderCourseList() {
    this.list.render();
  }

  addListItemViewHandler() {
    this.list.clickHandler((id) => {
      const course = courseModel.courses.find((course) => course.id === id);
      const courseView = new CourseView(this.parentElement, course)
      courseView.render();
      this.addSignUpViewHandler(courseView, course);
    })
  }

  addSignUpViewHandler(view, course) {
    view.signUpHandler(() => {
      const signUpView = new SignUpView(this.parentElement, course)
      signUpView.render();
      signUpView.onChangeHandler((input) => {
        signUpController.handleChange(input);
      })
      signUpView.signUpHandler(() => {
        signUpController.submit(signUpView, course);
      })
      view.closeModal();
    })
  }

  init() {
    this.renderCourseList()
    this.addListItemViewHandler();
  }
}

export default CourseController;
