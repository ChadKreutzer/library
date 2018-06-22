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
