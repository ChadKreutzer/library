const readStatus = (didIread) => didIread ? "I've read this" : 'not read yet';

module.exports = class Book {
  constructor(title, author, pages, read) {
    this.id = (() => `${(new Date()).getTime()}${pages}`)();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  info() {
    return `${this.title} by ${this.author}, ${readStatus(this.read)}`;
  }
}