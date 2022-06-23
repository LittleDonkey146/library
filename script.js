let library = [];

const doc = document.querySelector("body");
const addBook = document.querySelector(".add-book");
const cardBox = document.querySelector(".cards-box");
const popupBtn = document.querySelector(".popup");
const submitBtn = document.querySelector(".submit");
const form = document.getElementById("form");
const removeBtn = document.querySelector(".remove-button");

let bookTitle = ' ';
let bookAuthor = ' ';
let bookPages = ' ';

addBook.addEventListener('click', newBook);
submitBtn.addEventListener('click', closePopup);
removeBtn.addEventListener('click', removeFunc);
form.addEventListener('click', function(event) {
    event.preventDefault();
});

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(newBook) {
    library.push(newBook);
    console.log(newBook);
    console.log('test');
}

function newBook() {
    popupBtn.style.display = "block";
}

function readLibrary() {
    for(let i = 0; i < library.length; i++) {
        console.log(library[i]);
    }
}

const title = form.elements['title'];
const author = form.elements['author'];
const pages = form.elements['pages'];

function closePopup() {
    
    bookTitle = title.value;
    bookAuthor = author.value;
    bookPages = pages.value;

    console.log(bookTitle);
    console.log(bookAuthor);
    console.log(bookPages);
    popupBtn.style.display = "none";
    addBookToLibrary(bookTitle);
    addBookToPage();
}

function addBookToPage() {
    const newBook = document.createElement('div');
    const newBookElement = document.createElement('p');
    newBook.classList.add('cards');

    // Remove button creation
    const newRemoveBtn = document.createElement('button')
    newRemoveBtn.classList.add('remove-button');
    newRemoveBtn.textContent = 'Remove';

    newBookElement.textContent = `Title: ${bookTitle}` 
    + ` Author: ${bookAuthor}` 
    + ` Pages: ${bookPages}` 
    + ` Did you read it?`; //INSERT READ OPTION HERE
    cardBox.appendChild(newBook);
    newBook.appendChild(newBookElement);
    newBook.appendChild(newRemoveBtn);
}

function removeFunc() {
    const removeThis = document.querySelector('.cards');
    removeThis.parentNode.removeChild(removeThis);
}