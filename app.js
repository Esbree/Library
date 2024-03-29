let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

function toggleRead(index) {
  myLibrary[index].toggleRead();
  render();
}

function addBookToLibrary() {
  let title = document.querySelector('#title').value.trim();
  let author = document.querySelector('#author').value.trim();
  let pages = document.querySelector('#pages').value.trim();
  let read = document.querySelector('#read').checked;

  // Check if required fields are empty
  if (title === '' || author === '' || pages === '') {
    alert('Please fill out all required fields.');
    return; // Exit the function without adding the book
  }

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

function removeBook(index) {
  myLibrary.splice(index, 1);
  render();
}

function render() {
  // render books on the grid
  const grid = document.querySelector('.card-grid');
  grid.innerHTML = '';
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookEl = document.createElement('div');
    bookEl.innerHTML = `
      <div class='card-header'>
        <h3>"${book.title}"</h3>
        <h3>by ${book.author}</h3>
      </div>
      <div class='card-body'>
        <h3>${book.pages} pages</h3>
        <h3>${book.read ? 'Read' : 'Not read'}</h3>
      </div>
      <div class='delete-button'>
        <button class='btn-delete' onclick='removeBook(${i})'>delete</button>
      </div>
      <div class='status-button' onclick='toggleRead(${i})'>
        <button>status</button>
      </div>
      `;
    grid.appendChild(bookEl);
  }
}

// add button - pop up modal
const addBtn = document.querySelector('.btn-add');
const modalContainer = document.querySelector('.modal-container');

addBtn.addEventListener('click', function () {
  modalContainer.classList.add('show');
});

// submit button
const submitbtn = document.querySelector('#submit');

submitbtn.addEventListener('click', function (event) {
  event.preventDefault();
  addBookToLibrary();
});
