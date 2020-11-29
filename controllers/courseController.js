import ListView from '../views/listView.js';
import ListItemView from '../views/listItemView.js';
import courseModel from '../models/courseModel.js';

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
      const data = course.description;
      const listItemView = new ListItemView(this.parentElement, data);
      listItemView.render();
    })
  }

  init() {
    this.renderCourseList()
    this.addListItemViewHandler();
  }
}

export default CourseController;
