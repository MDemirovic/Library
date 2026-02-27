const library = document.querySelector(".library");

const addBookBtn = document.querySelector(".addBook");
const modalOverlay = document.querySelector(".modal-overlay");
const closeModalBtn = document.querySelector(".close-modal");
const form = document.querySelector(".book-form");
const myLibrary = [];


addBookBtn.addEventListener("click", () => {
  modalOverlay.classList.remove("hidden");
});

closeModalBtn.addEventListener("click", () => {
  modalOverlay.classList.add("hidden");
});

modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.classList.add("hidden");
  }
});



form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  const title = formData.get("title");
  const author = formData.get("author");
  const pages = formData.get("pages");
  const read = formData.get("read") === "on";

  addToLibrary(title, author, pages, read);

  form.reset();
  modalOverlay.classList.add("hidden");
});





function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = "id" + Math.random().toString(16).slice(2);
}

function renderLibrary() {
  library.innerHTML = "";

  myLibrary.forEach((book) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.id = book.id;
    const title = book.title.toUpperCase();

    card.innerHTML =
      `
    <h2>${title}</h2>
    <h4>Author: ${book.author}</h4>
    <span>Pages: ${book.pages}</span>
    <span>Read? ${book.read}</span>
    <i class="fa fa-trash fa-2x"></i>
    `;
    library.appendChild(card);
  });
}

function addToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
  renderLibrary();
}

library.addEventListener("click", (e) => {
  if (!e.target.classList.contains("fa-trash")) return;

  const card = e.target.closest(".card");
  const bookId = card?.dataset.id;
  const bookIndex = myLibrary.findIndex((book) => book.id === bookId);

  if (bookIndex !== -1) {
    myLibrary.splice(bookIndex, 1);
    renderLibrary();
  }
});

addToLibrary("poirot","agatha","232","false");
addToLibrary("poirot","agatha","232","false");
addToLibrary("poirot","agatha","232","false");
addToLibrary("poirot","agatha","232","false");
addToLibrary("poirot","agatha","232","false");
addToLibrary("poirot","agatha","232","false");
addToLibrary("poirot","agatha","232","false");
addToLibrary("poirot","agatha","232","false");
addToLibrary("poirot","agatha","232","false");
addToLibrary("poirot","agatha","232","false");
addToLibrary("poirot","agatha","232","false");


