import AdminModel from '../models/adminModel.js';

class AdminController {
  constructor() {
    this.model = null;
  }

  addBill(bill) {
    this.model.bills.push(bill);
    console.log('Current bills: ', this.model.bills);
  }

  init() {
    this.model = new AdminModel();
  }
}

export default new AdminController;
