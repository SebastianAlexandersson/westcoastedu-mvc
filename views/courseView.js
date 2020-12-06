class CourseView {
  constructor(parentElement, data) {
    this.parentElement = parentElement;
    this.data = data;
    this.ID = `${this.parentElement.classList[0]}${this.data.id}course`;
  }

  closeModal() {
    const modal = this.parentElement.querySelector(`#${this.ID}`);
    this.parentElement.removeChild(modal);
  }

  signUpHandler(subscriber) {
    const button = this.parentElement.querySelector(`#${this.ID} .signUpButton`);
    button.addEventListener('click', () => {
      subscriber(this.data.id);
    })
  }

  render() {
    const HTML = `
      <div class="modal" id="${this.ID}">
        <div class="btn-close-modal" id="close">x</div>
        <h3>${this.data.title}</h3>
        <p>${this.data.description}</p>
        <h3>List of current students:</h3>
        ${this.data.students.length > 0
          ? this.data.students.map((student) => {
              return (`
                <p>${student.fullName}</p>
              `)
            })
          : `
              <p>No current students.</p>
          `
        }
        <button class="signUpButton">Sign me up!</button>
      </div>
    `
    this.parentElement.insertAdjacentHTML('beforeend', HTML);
    this.parentElement.querySelector(`#${this.ID} .btn-close-modal`)
      .addEventListener('click', () => {
        this.closeModal();
      })
  }
}

export default CourseView;
