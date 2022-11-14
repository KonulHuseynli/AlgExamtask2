class Message {
    constructor(name, time, text) {
      this.name = name;
      this.time = time;
      this.text = text;
    }
  
    toString() {
      console.log(`${this.time} ${this.name}: ${this.text}`)
    }
  }
  
  class Messenger {
    constructor() {
      this.history = [];
    }
  
    gettime() {
      let now = new Date();
      return `${now.getHours()}:${now.getMinutes()}`;
    }
  
    send(name, text) {
      this.history.push(new Message(name, this.gettime(), text));
    }
  
    show_history() {  
      this.history.forEach(el=> el.toString())
    }
  }
  
  
  let messenger = new Messenger()
  messenger.send('Konul', 'ilk mesaj')
  messenger.send('Aysun', 'İkinci mesaj')
  messenger.show_history()