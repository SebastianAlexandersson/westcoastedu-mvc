import CourseController from './controllers/courseController.js';
import TeacherController from './controllers/teacherController.js';
import SignUpController from './controllers/signUpController.js';
import StudentController from './controllers/studentController.js';
import AdminController from '../controllers/adminController.js';

window.addEventListener('load', (() => {
  const courseController = new CourseController(document.querySelector('.courses'));
  const teacherController = new TeacherController(document.querySelector('.teachers'));

  courseController.init();
  teacherController.init();
  SignUpController.init();
  StudentController.init();
  AdminController.init();
}))
