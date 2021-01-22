import Bill from '../models/billsModel.js';
import adminController from '../controllers/adminController.js';
import fejkEmailer from '../utils/fejkEmailer.js';

export class BillingService {
  constructor(billModel, adminController, fejkEmailer) {
    this.Bill = billModel;
    this.adminController = adminController;
    this.fejkEmailer = fejkEmailer;
  }

  canHandle(message) {
    return Boolean(message.billing);
  }

  handle(message) {
    const email = `
      New bill ready for handling.

      Student: ${message.student.fullName}.
      Course: ${message.course.title}.
    `

    this.fejkEmailer.send(email, 'admin@westcoast.edu');

    const bill = new this.Bill(message.student, message.course, false);
    this.adminController.addBill(bill);
  }
}

export default new BillingService(Bill, adminController, fejkEmailer);
