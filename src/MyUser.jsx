import cuid from 'cuid';

export default class MyUser {
  constructor(first, last) {
    this.id = cuid();
    this.first = first;
    this.last = last;
  }

  get name() {
    return `${this.first} ${this.last}`;
  }
}
