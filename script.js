console.log("Hello world");

const myLibrary = [];

function Book(title,author,pages,read){
this.title=title;
this.author=author;
this.pages=pages;
this.read=read;
this.id=crypto.randomUUID();
}

function addBookToLibrary(title,author,pages,read){
const book = new Book(title,author,pages,read);
myLibrary.push(book);
}

addBookToLibrary("1984", "George Orwell", 328, true);
addBookToLibrary("Dune", "Frank Herbert", 604, false);
console.log(myLibrary);