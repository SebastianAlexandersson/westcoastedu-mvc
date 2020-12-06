import BillingService from '../services/billingService.js';
import ConfirmationService from '../services/confirmationService.js';
import AddStudentService from '../services/addStudentService.js';

class SignUpMediator {
  constructor() {
    this.services = [];
  }

  registerService(service) {
    if (this.isValidService) {
      this.services.push(service);
      return this;
    }
  }

  isValidService(service) {
    return (
      typeof service.canHandle === 'function'
      && typeof service.handle === 'function'
    );
  }

  send(message) {
    for (const service of this.services) {
      if (service.canHandle(message)) {
        return service.handle(message)
      }
    }
  }
}

const signUpMediator = new SignUpMediator();
signUpMediator.registerService(new BillingService);
signUpMediator.registerService(new ConfirmationService);
signUpMediator.registerService(new AddStudentService);

export default signUpMediator;
