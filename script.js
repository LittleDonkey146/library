let library = [];

const addBook = document.querySelector(".add-book");
const cardBox = document.querySelector(".cards-box");

addBook.addEventListener('click', newBook);

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
    let answer = new Book(prompt("title"), prompt("author"), prompt("pages"), prompt("yes/no"));
    addBookToLibrary(answer);
    addBookToPage(answer);
}

function readLibrary() {
    for(let i = 0; i < library.length; i++) {
        console.log(library[i]);
    }
}

function addBookToPage(book) {
    const newnewBook = document.createElement('div');
    newnewBook.classList.add('cards');
    newnewBook.textContent = `Title: ${book.title}` 
    + ` Author: ${book.author}` 
    + ` Pages: ${book.pages}` 
    + ` Did you read it? ${book.read}`;
    cardBox.appendChild(newnewBook);
}