class Listy {
  constructor(array) {
    this.container = array || [];
  }

  elementAt(i) {
    if (i >= this.container.length || i < 0) {
      return -1;
    } else {
      return this.container[i];
    }
  }
}

module.exports = Listy;
