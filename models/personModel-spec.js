import Person from './personModel.js';
import chai from 'chai';
const expect = chai.expect;

describe('Person model', () => {
  const person = new Person('123', new Date(Date.now()), 'test@test.com', 'Pelle', 'Johnsson', 123456);

  it('Should have a property called id that is a string', () => {
    expect(person).to.have.a.property('id').that.is.a('string');
  });

  it('Should have a property called birthDate that is a date', () => {
    expect(person).to.have.a.property('birthDate').that.is.a('date');
  });

  it('Should have a property called email that is a string', () => {
    expect(person).to.have.a.property('email').that.is.a('string');
  });

  it('Should have a property called firstName that is a string', () => {
    expect(person).to.have.a.property('firstName').that.is.a('string');
  });

  it('Should have a property called lastName that is a string', () => {
    expect(person).to.have.a.property('lastName').that.is.a('string');
  });

  it('Should have a property called phone that is a number', () => {
    expect(person).to.have.a.property('phone').that.is.a('number');
  });

});
