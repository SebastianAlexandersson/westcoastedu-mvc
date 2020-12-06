class FejkEmailer {
  constructor(message, adress) {
    this.message = message;
    this.adress = adress;
  }

  send() {
    console.log('Message to: ' + this.adress, this.message);
  }
}

export default FejkEmailer;
