export class Course {
  constructor(id, title, description, duration) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.duration = duration;
    this.students = [];
  }

  getDisplayData() {
    return {
      title: this.title,
      duration: this.duration,
    }
  }

  addStudent(student) {
    this.students.push(student);
  }
}

const courses = [
    new Course(
      '1365',
      'Javascript from start to end',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil minus, aliquid est, esse ab harum accusamus commodi sint quia iusto tempore architecto obcaecati quod vero assumenda nobis officia voluptatem veniam!',
      30
    ),
    new Course(
      '1366',
      'NodeJs for beginners',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil minus, aliquid est, esse ab harum accusamus commodi sint quia iusto tempore architecto obcaecati quod vero assumenda nobis officia voluptatem veniam!',
      10
    ),
    new Course(
      '1367',
      'Typescript for JavaScript developers',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil minus, aliquid est, esse ab harum accusamus commodi sint quia iusto tempore architecto obcaecati quod vero assumenda nobis officia voluptatem veniam!',
      20
    ),
    new Course(
      '1368',
      'Web API with NodeJs',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil minus, aliquid est, esse ab harum accusamus commodi sint quia iusto tempore architecto obcaecati quod vero assumenda nobis officia voluptatem veniam!',
      25
    ),
    new Course(
      '1369',
      'Introduction to programming in Swift',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil minus, aliquid est, esse ab harum accusamus commodi sint quia iusto tempore architecto obcaecati quod vero assumenda nobis officia voluptatem veniam!',
      50
    ),
]

const headers = ['Title', 'Duration'];

export default {
  courses,
  headers,
}
