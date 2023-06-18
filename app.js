let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  let title = document.querySelector('#title').value;
  let author = document.querySelector('#author').value;
  let pages = document.querySelector('#pages').value;
  let read = document.querySelector('#read').checked;
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  function closeModal() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#pages').value = '';
    document.querySelector('#read').checked = false;
    modalContainer.classList.remove('show');
  }
  closeModal();
  render();
}

function render() {
  // render books on the grid
  const grid = document.querySelector('.card-grid');
  let bookEl;

  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    bookEl = document.createElement('div');
    bookEl.innerHTML = `
      <div>
        <p>${book.title}</p>
        <p>by ${book.author}</p>
        <p>${book.pages} pages</p>
        <p>read: ${book.read}</p>
      </div>
      `;
  }

  grid.appendChild(bookEl);
}

// add button - pop up modal
const addBtn = document.querySelector('.btn-add');
const modalContainer = document.querySelector('.modal-container');

addBtn.addEventListener('click', function () {
  modalContainer.classList.add('show');
});

// submit button
const submitbtn = document.querySelector('#submit');

submitbtn.addEventListener('click', function () {
  event.preventDefault();
  addBookToLibrary();
});
