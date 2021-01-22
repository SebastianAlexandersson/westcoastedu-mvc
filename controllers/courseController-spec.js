import { CourseController } from './courseController.js';
import CourseView from '../views/courseView.js';
import SignUpView from '../views/signUpView.js';
import ListView from '../views/listView.js';
import { Course } from '../models/courseModel.js';
import { SignUpController } from '../controllers/signUpController.js';
import chai from 'chai';
import sinonChai from 'sinon-chai';
import sinon from 'sinon';
const expect = chai.expect;
chai.use(sinonChai);

describe('Course controller', function() {
  let sandbox;
  const document = {
    querySelector: () => null,
  };

  beforeEach(function() {
    sandbox = sinon.createSandbox()
    sandbox.stub(CourseView.prototype, 'closeModal').resolves();
    sandbox.stub(CourseView.prototype, 'signUpHandler').resolves();
    sandbox.stub(CourseView.prototype, 'render').resolves();
    sandbox.stub(SignUpView.prototype, 'closeModal').resolves();
    sandbox.stub(SignUpView.prototype, 'signUpHandler').resolves();
    sandbox.stub(SignUpView.prototype, 'onChangeHandler').resolves();
    sandbox.stub(SignUpView.prototype, 'render').resolves();
    sandbox.stub(ListView.prototype, 'clickHandler').resolves();
    sandbox.stub(ListView.prototype, 'render').resolves();
    sandbox.stub(Course.prototype, 'getDisplayData').resolves();
    sandbox.stub(Course.prototype, 'addStudent').resolves();
    sandbox.stub(SignUpController.prototype, 'handleChange').resolves();
    sandbox.stub(SignUpController.prototype, 'submit').resolves();
    sandbox.stub(SignUpController.prototype, 'init').resolves();
    sandbox.stub(document, 'querySelector').resolves({ element: 'test' });
    sandbox.stub(CourseController.prototype, 'addListItemViewHandler').resolves();
    this.courseController = new CourseController(document, ListView, CourseView, SignUpView, new Course(), new SignUpController())
    this.courseController.init(document);
  });

  afterEach(function() {
    sandbox.restore();
    this.courseController = null;
  });

  describe('Contructor', function() {
    it('Should have a property called parentElement that is an object', function() {
      expect(this.courseController).to.have.a.property('parentElement').that.is.an('object');
    });

    it('Should have a property called listView that is a class declaration', function() {
      expect(this.courseController).to.have.a.property('listView');
      expect(typeof this.courseController.listView === 'function' && /^\s*class\s+/.test(this.courseController.listView.toString())).to.be.true;
    });

    it('Should have a property called courseView that is a class declaration', function() {
      expect(this.courseController).to.have.a.property('courseView');
      expect(typeof this.courseController.courseView === 'function' && /^\s*class\s+/.test(this.courseController.courseView.toString())).to.be.true;
    });

    it('Should have a property called signUpView that is a class declaration', function() {
      expect(this.courseController).to.have.a.property('signUpView');
      expect(typeof this.courseController.signUpView === 'function' && /^\s*class\s+/.test(this.courseController.signUpView.toString())).to.be.true;
    });

    it('Should have a property called courseModel that is an instance of the class Course', function() {
      expect(this.courseController).to.have.a.property('courseModel');
      expect(this.courseController.courseModel instanceof Course).to.be.true;
    });

    it('Should have a property called signUpController that is an instance of the class SignUpController', function() {
      expect(this.courseController).to.have.a.property('signUpController');
      expect(this.courseController.signUpController instanceof SignUpController).to.be.true;
    });
  });

  describe('init()', function() {
    it('Should have a property called parentElement that is an object', function() {
      expect(this.courseController.parentElement).to.be.an('object');
    });

    it('Should have a property called list that is an instance of the ListView class', function() {
      expect(this.courseController.list instanceof ListView).to.be.true;
    });

    it('Should call this.list.render() once', function() {
      expect(this.courseController.list.render).to.be.calledOnce;
    });

    it('Should call addListItemViewHandler() once', function() {
      expect(this.courseController.addListItemViewHandler).to.be.calledOnce;
    });
  });

  describe('addListItemViewHandler()', function() {
    it('Should call this.list.clickHandler once', function() {
      this.courseController.addListItemViewHandler.restore();
      this.courseController.addListItemViewHandler();
      expect(this.courseController.list.clickHandler).to.be.calledOnce;
    });
  });

  describe('addSignUpViewHandler()', function() {
    it('Should call view.signUpHandler once', function() {
      const signUpView = new SignUpView({ classList: ['123'] }, { id: '123' });
      const course = new Course();
      this.courseController.addSignUpViewHandler(signUpView, course);
      expect(signUpView.signUpHandler).to.be.calledOnce;
    });
  });
});
