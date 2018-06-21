module.exports = function removeBookFromLibrary(library, id) {
  const index = library.findIndex(book => book.id === id);
  library.splice(index, 1);
};
