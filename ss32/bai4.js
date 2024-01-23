function Product(id, name, price, quantity) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}
let product = new Product(1, "Laptop", 1200, 5);
console.log("Thông tin sản phẩm:");
console.log("ID:", product.id);
console.log("Tên:", product.name);
console.log("Giá:", product.price);
console.log("Số lượng:", product.quantity);
