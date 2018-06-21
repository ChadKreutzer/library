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
}
