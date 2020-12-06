import Bill from '../models/billsModel.js';
import adminController from '../controllers/adminController.js';
import FejkEmailer from '../utils/fejkEmailer.js';

class BillingService {
  canHandle(message) {
    return Boolean(message.billing);
  }

  handle(message) {
    const email = `
      New bill ready for handling.

      Student: ${message.student.fullName}.
      Course: ${message.course.title}.
    `

    new FejkEmailer(email, 'admin@westcoast.edu').send();

    const bill = new Bill(message.student, message.course, false);
    adminController.addBill(bill);
  }
}

export default BillingService;
