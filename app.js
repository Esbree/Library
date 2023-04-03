let myLibrary = []

function Book() {
  
}


const title = document.querySelector('#title')
const author = document.querySelector('#author')
const pages = document.querySelector('#pages')
const read = document.querySelector('#read')

function addBookToLibrary() {
  
}

const addBtn = document.querySelector('.btn-add')
const modalContainer = document.querySelector('.modal-container')

addBtn.addEventListener('click', function() {
  modalContainer.classList.add('show')
})
