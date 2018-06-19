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

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function removeBookFromLibrary(id) {
  const index = myLibrary.findIndex(book => book.id === id);
  myLibrary.splice(index, 1);
}

function render(books) {
  const library = document.getElementById("library");
  books.forEach(function(book){
    const newBook = document.createElement("li");
    newBook.classList.add("book");
    newBook.dataset.id = book.id;
    newBook.innerHTML = `<h3 class="title">${book.title}</h3><div class="author">${book.author}</div><div class="pages">${book.pages}</div><div class="read">${readStatus(book.read)}</div>`;
    library.appendChild(newBook);
  });
}

addBookToLibrary(new Book('The Hobbit', 'J.R.R. Tolkien', 295, false));

addBookToLibrary(new Book('The Hunger Games', 'Suzanne Collins', 384, true));

render(myLibrary);
