import billingService from '../services/billingService.js';
import confirmationService from '../services/confirmationService.js';
import addStudentService from '../services/addStudentService.js';

export class SignUpMediator {
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
signUpMediator.registerService(billingService);
signUpMediator.registerService(confirmationService);
signUpMediator.registerService(addStudentService);

export default signUpMediator;
