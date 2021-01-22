import { Teacher } from './teacherModel.js';
import chai from 'chai';
const expect = chai.expect;

describe('Teacher model', () => {
  const teacher = {
    id: '123',
    birthDate: new Date(Date.now()),
    email: 'test@test.com',
    firstName: 'Pelle',
    lastName: 'Johnsson',
    phone: 123456,
    expertise: ['Java'],
  }
  const teacherModel = new Teacher(teacher.id, teacher.birthDate, teacher.email, teacher.firstName, teacher.lastName, teacher.phone, teacher.expertise);

  describe('Constructor', () => {
    it('Should have a property called expertise that is an array with atleast 1 item', () => {
      expect(teacherModel).to.have.a.property('expertise').that.is.an('array').that.is.not.empty;
    });
  });

  describe('getDisplayData()', () => {
    const displayData = teacherModel.getDisplayData();

    it('Should return an object with a full name, an email and a phone number', () => {
      expect(displayData).to.have.a.property('name').that.is.equal(`${teacher.firstName} ${teacher.lastName}`);
      expect(displayData).to.have.a.property('email').that.is.equal(teacher.email);
      expect(displayData).to.have.a.property('phone').that.is.equal(teacher.phone);
    });
  });
});
