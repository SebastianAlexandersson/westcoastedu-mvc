import Person from './personModel.js';

export class Teacher extends Person {
  constructor(id, birthDate, email, firstName, lastName, phone, expertise) {
    super(id, birthDate, email, firstName, lastName, phone);
    this.expertise = expertise;
  }

  getDisplayData() {
    return {
      name: `${this.firstName} ${this.lastName}`,
      email: this.email,
      phone: this.phone,
    }
  }
}

export default [
    new Teacher(
      '1',
      '1958-02-13',
      'ulf.bilting@hotmail.com',
      'Ulf',
      'Bilting',
      '072-808876',
      ['Java', 'C++', 'C']
    ),
    new Teacher(
      '2',
      '1964-02-20',
      'michael.gustavsson@gmail.com',
      'Michael',
      'Gustavsson',
      '072-111111',
      ['C++', 'JavaScript', 'TypeScript', 'Angular', 'React', 'MSSQL']
    ),
    new Teacher(
      '3',
      '1977-01-10',
      'mikael.zetterstrom@hotmail.com',
      'Mikael',
      'Zetterstršm',
      '072-222222',
      ['C', 'C++']
    ),
    new Teacher(
      '4',
      '1943-10-23',
      'ulf.malmstrom@hotmail.com',
      'Ulf',
      'Malmstršm',
      '072-33333',
      ['Visual Basic', 'Access', 'Excel']
    )
]
