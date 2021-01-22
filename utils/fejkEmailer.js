export class FejkEmailer {
  send(message, adress) {
    console.log(`Message to: ${adress}\n${message}`);
  }
}

export default new FejkEmailer;
