let library = [];

const doc = document.querySelector("body");
const addBook = document.querySelector(".add-book");
const cardBox = document.querySelector(".cards-box");
const popupBtn = document.querySelector(".popup");
const submitBtn = document.querySelector(".submit");

addBook.addEventListener('click', newBook);
submitBtn.addEventListener('click', closePopup);

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `${title} by ${author}, ${pages} pages, ${read}`;
    }
}

function addBookToLibrary(newBook) {
    library.push(newBook);
}

function newBook() {
    popupBtn.style.display = "block";
    ;
}

function readLibrary() {
    for(let i = 0; i < library.length; i++) {
        console.log(library[i]);
    }
}

function addBookToPage(book) {
    const newBook = document.createElement('div');
    const newBookElement = document.createElement('p');
    newBook.classList.add('cards');
    newBookElement.textContent = `Title: ${book.title}` 
    + ` Author: ${book.author}` 
    + ` Pages: ${book.pages}` 
    + ` Did you read it? ${book.read}`;
    cardBox.appendChild(newBook);
    newBook.appendChild(newBookElement);
}

function closePopup() {
   
    popupBtn.style.display = "none";
}