import CourseController from './controllers/courseController.js';
import TeacherController from './controllers/teacherController.js';

window.addEventListener('load', (() => {
  new CourseController(document.querySelector('.courses')).init();
  new TeacherController(document.querySelector('.teachers')).init();
}))
