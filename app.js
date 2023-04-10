let myLibrary = []

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}


function addBookToLibrary() {
  let title = document.querySelector('#title').value
  let author = document.querySelector('#author').value
  let pages = document.querySelector('#pages').value
  let read = document.querySelector('#read').checked
  let newBook = new Book(title, author, pages, read)
  console.log(newBook)
}

// add button - pop up modal
const addBtn = document.querySelector('.btn-add')
const modalContainer = document.querySelector('.modal-container')

addBtn.addEventListener('click', function() {
  modalContainer.classList.add('show')
})

// submit button
const submitbtn = document.querySelector('#submit')

submitbtn.addEventListener('click', function() {
  event.preventDefault()
  addBookToLibrary()
})