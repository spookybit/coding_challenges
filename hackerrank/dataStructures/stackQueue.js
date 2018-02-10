class StackQueue{
  constructor() {
    this.entry = [];
    this.exit = [];
  }

  enqueue(data) {
    this.entry.push(data);
    return data;
  }

  dequeue() {
    if (this.exit.length > 0) {
      return this.exit.pop();
    } else {
      if (this.entry.length === 0) {return false}
      else {
        let len = this.entry.length;
        for (let i = 0; i < len; i++) {
          let data = this.entry.pop();
          this.exit.push(data);
        }
        let out = this.exit.pop()
        return out;
      }
    }
  }

  first(){
    if (this.exit.length > 0) {
      return this.exit[this.exit.length - 1]
    } else if (this.entry.length > 0){
      return this.entry[0];
    } else {
      return false;
    }
  }
}
