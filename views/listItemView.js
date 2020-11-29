class ListItemView {
  constructor(parentElement, data) {
    this.parentElement = parentElement;
    this.data = data;
  }

  closeModal(el) {
    this.parentElement.removeChild(el);
  }

  render() {
    const HTML = `
      <div class="modal" id="modal">
        <div class="btn-close-modal" id="close">x</div>
        <p>${this.data}</p>
      </div>
    `
    this.parentElement.insertAdjacentHTML('beforeend', HTML);
    document.querySelector('#close')
      .addEventListener('click', () => {
        const modal = this.parentElement.querySelector('#modal');
        this.closeModal(modal);
      })
  }
}

export default ListItemView;
