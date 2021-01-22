import CourseView from './courseView.js';
import chai from 'chai';
import sinonChai from 'sinon-chai';
import sinon from 'sinon';
const expect = chai.expect;
chai.use(sinonChai);

describe('Course View', function() {
  let sandbox;

  beforeEach(function() {
    const parentElement = {
      querySelector: () => null,
      insertAdjacentHTML: () => null,
      removeChild: () => null,
      classList: ['123'],
    }
    const obj = {
      addEventListener: () => null,
    }
    sandbox = sinon.createSandbox();
    sandbox.stub(parentElement, 'querySelector').returns(obj);
    sandbox.stub(parentElement, 'insertAdjacentHTML').resolves();
    sandbox.stub(parentElement, 'removeChild').resolves();
    sandbox.stub(obj, 'addEventListener').resolves();
    const data = {
      id: '123',
      title: 'test',
      description: 'test',
      students: [{ fullName: 'test'} ],
    }
    this.courseView = new CourseView(parentElement, data)
    this.obj = obj;
  });

  afterEach(function() {
    sandbox.restore();
    this.courseView = null;
    this.obj = null;
  });

  describe('Constructor', function() {
    it('Should have a property called parentElement that is an object', function() {
      expect(this.courseView).to.have.property('parentElement').that.is.an('object');
    });

    it('Should have a property called data that is an object', function() {
      expect(this.courseView).to.have.property('data').that.is.an('object');
    });
    it('Should have a property called ID is a string', function() {
      expect(this.courseView).to.have.property('ID').that.is.a('string');
    });
  });

  describe('closeModal()', function() {
    it('Should call this.parentElement.querySelector once', function() {
      this.courseView.closeModal();

      expect(this.courseView.parentElement.querySelector).to.be.calledOnce;
    });

    it('Should call this.parentElement.removeChild once', function() {
      this.courseView.closeModal();

      expect(this.courseView.parentElement.removeChild).to.be.calledOnce;
    });
  });

  describe('signUpHandler()', function() {
    it('Should call this.parentElement.querySelector once', function() {
      this.courseView.signUpHandler()

      expect(this.courseView.parentElement.querySelector).to.be.calledOnce;
    });

    it('Should call addEventListener once', function() {
      this.courseView.signUpHandler();

      expect(this.obj.addEventListener).to.be.calledOnce;
    });
  });

  describe('render()', function() {
    it('Should call this.parentElement.insertAdjacentHTML once', function() {
      this.courseView.render();

      expect(this.courseView.parentElement.insertAdjacentHTML).to.be.calledOnce;
    });

    it('Should call this.parentElement.querySelector once', function() {
      this.courseView.render();

      expect(this.courseView.parentElement.querySelector).to.be.calledOnce;
    });
  });
});
