import Person from './personModel.js';
import chai from 'chai';
const expect = chai.expect;

describe('Person model', function() {
  beforeEach(function() {
    this.person = new Person('123', new Date(Date.now()), 'test@test.com', 'Pelle', 'Johnsson', 123456);
  });

  afterEach(function() {
    this.person = null;
  });

  it('Should have a property called id that is a string', function() {
    expect(this.person).to.have.a.property('id').that.is.a('string');
  });

  it('Should have a property called birthDate that is a date', function() {
    expect(this.person).to.have.a.property('birthDate').that.is.a('date');
  });

  it('Should have a property called email that is a string', function() {
    expect(this.person).to.have.a.property('email').that.is.a('string');
  });

  it('Should have a property called firstName that is a string', function() {
    expect(this.person).to.have.a.property('firstName').that.is.a('string');
  });

  it('Should have a property called lastName that is a string', function() {
    expect(this.person).to.have.a.property('lastName').that.is.a('string');
  });

  it('Should have a property called phone that is a number', function() {
    expect(this.person).to.have.a.property('phone').that.is.a('number');
  });

});
