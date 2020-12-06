class SignUpView {
  constructor(parentElement, data) {
    this.parentElement = parentElement;
    this.data = data;
    this.ID = `${this.parentElement.classList[0]}${this.data.id}signUp`;
  }

  closeModal() {
    const modal = this.parentElement.querySelector(`#${this.ID}`);
    this.parentElement.removeChild(modal);
  }

  signUpHandler(subscriber) {
    const button = this.parentElement.querySelector(`#${this.ID} .submitButton`);
    button.addEventListener('click', () => {
      subscriber(this.data.id);
    })
  }

  onChangeHandler(subscriber) {
    this.parentElement.querySelector('input[name=fullName]')
      .addEventListener('change', (e) => {
        subscriber(e.target);
      })
    this.parentElement.querySelector('input[name=email]')
      .addEventListener('change', (e) => {
        subscriber(e.target);
      })
    this.parentElement.querySelector('input[name=city]')
      .addEventListener('change', (e) => {
        subscriber(e.target);
      })
  }

  render() {
    const HTML = `
      <div class="modal" id="${this.ID}">
        <div class="btn-close-modal" id="close">x</div>
        <h3>Sign up for course</h3>
        <input type="text" name="fullName" placeholder="Name">
        <input type="text" name="city" placeholder="City">
        <input type="text" name="email" placeholder="Email">
        <button class="submitButton">Sign me up!</button>
      </div>
    `
    this.parentElement.insertAdjacentHTML('beforeend', HTML);
    this.parentElement.querySelector(`#${this.ID} .btn-close-modal`)
      .addEventListener('click', () => {
        this.closeModal();
      })
  }
}

export default SignUpView;
