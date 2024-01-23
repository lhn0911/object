class Book {
    constructor(title, author, publishedYear) {
        this.title = title;
        this.author = author;
        this.publishedYear = publishedYear;
    }

    displayInfo() {
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Published Year: ${this.publishedYear}`);
        console.log();
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    displayLibrary() {
        if (this.books.length === 0) {
            console.log("The library is empty.");
        } else {
            console.log("Library Books:");
            this.books.forEach(book => {
                book.displayInfo();
            });
        }
    }
}
const book1 = new Book("manga", "japan", 2020);
const book2 = new Book("manga 2", "japan 2", 2018);
const book3 = new Book("manga 3", "japan 3", 2022);
const library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.displayLibrary();
