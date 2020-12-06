import FejkEmailer from '../utils/fejkEmailer.js';

class ConfirmationService {
  canHandle(message) {
    return Boolean(message.confirmation);
  }

  handle(message) {
    const email = `
      Dear ${message.student.fullName},
      Thank you for chosing our school.
      This is an email confirming your
      participation in the course:
      ${message.course.title}
    `

    new FejkEmailer(email, message.student.email).send();
  }
}

export default ConfirmationService;
