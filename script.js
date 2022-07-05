let library = [];
var i = 0;

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
removeBtn.addEventListener('click', (e) => removeFunc(e.target));
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
    // removeBtn.dataset.cardIndex = this.Book.
    removeBtn.dataset.cardIndex = i;

    titlePar.textContent = `"${bookTitle}"`;
    authorPar.textContent = `${bookAuthor}`;
    pagesPar.textContent = `${bookPages} pages`;
    // one more text content to show if the book is read
    removeBtn.textContent = 'Remove';

    removeBtn.addEventListener('click', (e) => removeFunc(e.target));
    
    cardBox.appendChild(newBook);
    newBook.appendChild(titlePar);
    newBook.appendChild(authorPar);
    newBook.appendChild(pagesPar);
    // one more appendChild to get the read property in the site
    newBook.appendChild(removeBtn);
    i++;
}

function removeFunc(book) {

    // let newVar;
    // for(let i = 0; i < library.length; i++) {
    //     console.log(book.dataset.cardIndex);
    //     console.log(i);
    //     console.log(book.dataset.cardIndex == i);

    //     newVar = library.filter(() => book.dataset.cardIndex != i);
    //     console.log(newVar);
    // }
    
    // Deleting the 'card' from the HTML document (correct it is)
    book.parentElement.remove();
    
    let newVar = library.filter(function() { 
        
        console.log(book.dataset.cardIndex);
        for (let i = 0; i < library.length; i++) {
            return book.dataset.cardIndex !== i;
        }
    });

    console.log(newVar);
    library = newVar;
}

function findTitle(test) {
    
}

// i need to use filter()

// TO DO:
// - give correct index numbers to each remove button
// - I want to get the cardIndex of each remove button in order to check WHICH data attribute is
// clicked on what button and then remove this ( [i] ) Book from the Array