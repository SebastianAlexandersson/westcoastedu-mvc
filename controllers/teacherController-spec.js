import { TeacherController } from './teacherController.js';
import ListView from '../views/listView.js';

import chai from 'chai';
import sinonChai from 'sinon-chai';
import sinon from 'sinon';
const expect = chai.expect;
chai.use(sinonChai);

describe('Teacher controller', function() {
  let sandbox;

  beforeEach(function () {
    sandbox = sinon.createSandbox();
    sandbox.stub(TeacherController.prototype, 'addListItemViewHandler').resolves();
    sandbox.stub(ListView.prototype, 'render').resolves();
    sandbox.stub(ListView.prototype, 'clickHandler').resolves();
    this.teacherController = new TeacherController({}, ListView);
  });

  afterEach(function() {
    sandbox.restore();
    this.teacherController = null;
  })

  describe('Constructor', function() {
    it('Should have a property called parentElement that is an object', function() {
      expect(this.teacherController).to.have.property('parentElement').that.is.an('object');
    });

    it('Should have a property called listView that is a ListView class declaration', function() {
      expect(this.teacherController).to.have.property('listView');
      expect(typeof this.teacherController.listView === 'function' && /^\s*class\s+/.test(this.teacherController.listView.toString())).to.be.true;
    });
  })

  describe('init()', function() {
    it('Should have set property this.parentElement to the value of the parentElement argument', function() {
      this.teacherController.init('test');

      expect(this.teacherController.parentElement).to.equal('test');
    });

    it('Should call this.list.render() once', function() {
      this.teacherController.init();
      expect(this.teacherController.list.render).to.be.calledOnce;
    });

    it('Should call this.addListItemViewHandler() once', function() {
      this.teacherController.init();
      expect(this.teacherController.addListItemViewHandler).to.be.calledOnce;
    });
  });

  describe('addListItemViewHandler()', function() {
    it('It should call this.list.clickHandler once', function() {
      this.teacherController.addListItemViewHandler.restore();
      this.teacherController.list = new ListView();
      this.teacherController.addListItemViewHandler();

      expect(this.teacherController.list.clickHandler).to.be.calledOnce;
    });
  });
});
