function Book(author, name) {
    this.author = author;
    this.name = name;
}
let library = [
    new Book("Toriyama Akira", "Dragon Ball"),
    new Book("Kishimoto Masashi", "Naruto"),
    new Book("Mangaka Murata Yusuke", "One puch man"),
];
let inputAuthor = prompt("Nhập tên tác giả:");
let foundBooks = library.filter(book => book.author === inputAuthor);
if (foundBooks.length > 0) {
    console.log("Thông tin sách của tác giả", inputAuthor + ":");
    foundBooks.forEach(book => console.log("Tên sách:", book.name));
} else {
    console.log("Không tìm thấy sách của tác giả", inputAuthor);
}
