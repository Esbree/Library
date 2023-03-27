let myLibrary = []

function Book() {
  
}


function addBookToLibrary() {
  
}

const addBtn = document.querySelector('.btn-add')
const modalContainer = document.querySelector('.modal-container')
const modalCloseBtn = document.querySelector('.modal-confirm-btn')

addBtn.addEventListener('click', function() {
  modalContainer.classList.add('show')
})

modalCloseBtn.addEventListener('click', function() {
  modalContainer.classList.remove('show')
})

// create addBookToLibrary function -> click on OK button