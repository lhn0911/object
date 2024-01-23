class Book {
    constructor(title, author, publishedYear) {
        this.title = title;
        this.author = author;
        this.publishedYear = publishedYear;
        this.isAvailable = true;
    }

    displayInfo() {
        console.log(`Tiêu đề: ${this.title}, Tác giả: ${this.author}, Năm xuất bản: ${this.publishedYear}, Có sẵn: ${this.isAvailable}`);
    }

    borrowBook() {
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log(`Sách "${this.title}" đã được mượn.`);
        } else {
            console.log(`Sách "${this.title}" không có sẵn để mượn.`);
        }
    }

    returnBook() {
        if (!this.isAvailable) {
            this.isAvailable = true;
            console.log(`Sách "${this.title}" đã được trả.`);
        } else {
            console.log(`Sách "${this.title}" đã có sẵn.`);
        }
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
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach(book => {
            book.displayInfo();
        });
    }

    isBookAvailable(title) {
        const book = this.books.find(book => book.title === title);
        if (book) {
            return book.isAvailable;
        }
        return false;
    }
}

const myLibrary = new Library();
const book1 = new Book("Dragon Ball", "Toriyama Akira", 1983);
const book2 = new Book("Dragon Ball Super", "Torotaru", 2015);
const book3 = new Book("Dragon Ball GT", "Toriyama Akira", 1997);

myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);

myLibrary.displayLibrary();

book1.borrowBook();
book2.borrowBook();
book2.returnBook();
book3.borrowBook();

myLibrary.displayLibrary();

console.log(`Có sẵn sách "Giết Con Chim Nhại"? ${myLibrary.isBookAvailable("Giết Con Chim Nhại")}`);
