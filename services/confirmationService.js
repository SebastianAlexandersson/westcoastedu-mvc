import fejkEmailer from '../utils/fejkEmailer.js';

export class ConfirmationService {
  constructor(fejkEmailer) {
    this.fejkEmailer = fejkEmailer;
  }

  canHandle(message) {
    return Boolean(message.confirmation);
  }

  handle(message) {
    const email = `Dear ${message.student.fullName}, Thank you for chosing our school. This is an email confirming your participation in the course: ${message.course.title}`

    this.fejkEmailer.send(email, message.student.email);
  }
}

export default new ConfirmationService(fejkEmailer);
