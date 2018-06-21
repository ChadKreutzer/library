const addBookToLibrary = require('./scripts/addBookToLibrary');
const removeBookFromLibrary = require('./scripts/removeBookFromLibrary').default;
const render = require('./scripts/render');

const myLibrary = [];
const readStatus = (didIread) => didIread ? "I've read this" : 'not read yet';


class Book {
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

addBookToLibrary(myLibrary, new Book('The Hobbit', 'J.R.R. Tolkien', 295, false));

addBookToLibrary(myLibrary, new Book('The Hunger Games', 'Suzanne Collins', 384, true));

render(myLibrary);
