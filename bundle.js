(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports = function addBookToLibrary(library, book) {
  library.push(book);
};

},{}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
module.exports = function removeBookFromLibrary(library, id) {
  const index = library.findIndex(book => book.id === id);
  library.splice(index, 1);
};

},{}],4:[function(require,module,exports){
module.exports = function render(books) {
  const library = document.getElementById("library");
  books.forEach(function (book) {
    const newBook = document.createElement("li");
    newBook.classList.add("book");
    newBook.dataset.id = book.id;
    newBook.innerHTML = `
      <h3 class="title">${book.title}</h3>
      <div class="author">${book.author}</div>
      <div class="pages">${book.pages}</div>
      <div class="read">${book.read}</div>
    `;
    library.appendChild(newBook);
  });
};

},{}],5:[function(require,module,exports){
const addBookToLibrary = require('./addBookToLibrary');
const removeBookFromLibrary = require('./removeBookFromLibrary');
const render = require('./render');
const Book = require('./book');
const myLibrary = [];

addBookToLibrary(myLibrary, new Book('The Hobbit', 'J.R.R. Tolkien', 295, false));

addBookToLibrary(myLibrary, new Book('The Hunger Games', 'Suzanne Collins', 384, true));

addBookToLibrary(myLibrary, new Book('The Cathedral and the Bazaar', 'Eric S. Raymond', 241, true));

removeBookFromLibrary(myLibrary, (myLibrary[1]).id);

render(myLibrary);

},{"./addBookToLibrary":1,"./book":2,"./removeBookFromLibrary":3,"./render":4}]},{},[5]);
