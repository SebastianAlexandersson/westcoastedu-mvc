import CourseController from './controllers/courseController.js';
import TeacherController from './controllers/teacherController.js';
import SignUpController from './controllers/signUpController.js';
import StudentController from './controllers/studentController.js';
import AdminController from '../controllers/adminController.js';

window.addEventListener('load', (() => {
  CourseController.init(document.querySelector('.courses'));
  TeacherController.init(document.querySelector('.teachers'));
  SignUpController.init();
  StudentController.init();
  AdminController.init();
}))
