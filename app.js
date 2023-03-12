let myLibrary = []

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

Book.prototype.info = function() {
  return `${this.title} by ${this.author}, ${this.pages} pages, read: ${this.read}`
}

const titleInput = document.getElementById('title')
const authorInput = document.getElementById('author')
const pagesInput = document.getElementById('pages')
const readInput = document.getElementById('read')
const submitButton = document.getElementById('btn-submit')

function addBookToLibrary(title, author, pages, read) {
  title = titleInput.value
  author = authorInput.value
  pages = pagesInput.value
  read = readInput.checked

  const book = new Book(title, author, pages, read)

  myLibrary.push(book)
  console.log(myLibrary);
}

submitButton.addEventListener('click', function() {
  addBookToLibrary()
})