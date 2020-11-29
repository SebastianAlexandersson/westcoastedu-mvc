import ListView from '../views/listView.js';
import ListItemView from '../views/listItemView.js';
import teachers from '../models/teacherModel.js';

class TeacherController {
  constructor(parentElement) {
    this.parentElement = parentElement;
    this.list = new ListView(
      this.parentElement,
      teachers,
      ['Namn', 'Email', 'Telefonnummer'],
      'Lärare'
    );
  }

  renderTeachersList() {
    this.list.render();
  }

  addListItemViewHandler() {
    this.list.clickHandler((id) => {
      const teacher = teachers.find((teacher) => teacher.id === id);
      const data = `Expertis: ${teacher.expertise.join(', ')}`
      const listItemView = new ListItemView(this.parentElement, data);
      listItemView.render();
    })
  }

  init() {
    this.renderTeachersList();
    this.addListItemViewHandler();
  }
}

export default TeacherController;
