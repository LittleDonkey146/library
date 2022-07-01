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
    
    const testBook = new Book(title.value, author.value, pages.value, read.value);
    addBookToLibrary(testBook);
    bookTitle = testBook.title;
    bookAuthor = testBook.author;
    bookPages = testBook.pages;

    popupBtn.style.display = "none";
    addBookToPage();
}

function addBookToPage() {
    const removeBtn = document.createElement('button')
    const newBook = document.createElement('div');
    const titlePar = document.createElement('p');
    const authorPar = document.createElement('p');
    const pagesPar = document.createElement('p');
    // one more to show if the book is read

    newBook.classList.add('cards');
    removeBtn.classList.add('remove-button');
    removeBtn.dataset.cardIndex = '1';

    titlePar.textContent = `"${bookTitle}"`;
    authorPar.textContent = `${bookAuthor}`;
    pagesPar.textContent = `${bookPages} pages`;
    // one more text content to show if the book is read
    removeBtn.textContent = 'Remove';

    removeBtn.addEventListener('click', removeFunc);
    
    cardBox.appendChild(newBook);
    newBook.appendChild(titlePar);
    newBook.appendChild(authorPar);
    newBook.appendChild(pagesPar);
    // one more appendChild to get the read property in the site
    newBook.appendChild(removeBtn);
}

function removeFunc() {
    console.log(library[0].title);

    console.log(library[removeBtn.dataset.cardIndex].title);

}

// i need to use filter()