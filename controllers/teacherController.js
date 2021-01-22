import ListView from '../views/listView.js';
import ListItemView from '../views/listItemView.js';
import teachers from '../models/teacherModel.js';

export class TeacherController {
  constructor(parentElement, listView) {
    this.parentElement = parentElement;
    this.listView = listView;
  }

  addListItemViewHandler() {
    this.list.clickHandler((id) => {
      const teacher = teachers.find((teacher) => teacher.id === id);
      const data = `Expertis: ${teacher.expertise.join(', ')}`
      const listItemView = new ListItemView(this.parentElement, data);
      listItemView.render();
    })
  }

  init(parentElement) {
    this.parentElement = parentElement;
    this.list = new this.listView(
      this.parentElement,
      teachers,
      ['Namn', 'Email', 'Telefonnummer'],
      'Lärare'
    );
    this.list.render();
    this.addListItemViewHandler();
  }
}

export default new TeacherController(null, ListView);
