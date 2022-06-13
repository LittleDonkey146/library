const addBook = document.querySelector(".add-book");
addBook.addEventListener('click', newBook);

let library = [];

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

// const hobbit = new Book("Hobbit", "Alex", "25", "not read");
// console.log(hobbit.info());

function newBook() {
    let answer = new Book(prompt("title"), prompt("author"), prompt("pages"), prompt("yes/no"));
    addBookToLibrary(answer);     
}

console.log(library);
console.log(answer.info());