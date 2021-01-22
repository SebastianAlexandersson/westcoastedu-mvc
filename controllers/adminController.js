import AdminModel from '../models/adminModel.js';

export class AdminController {
  constructor(model) {
    this.model = model;
  }

  addBill(bill) {
    this.model.bills.push(bill);
    console.log('Current bills: ', this.model.bills);
  }

  init() {
    this.model = new this.model();
  }
}

export default new AdminController(AdminModel);
