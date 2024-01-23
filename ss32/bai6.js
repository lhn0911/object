function sortProductsByPrice(products) {
    return products.sort((a, b) => a.price - b.price);
}
function printProducts(products) {
    products.forEach(product => {
        console.log(`ID: ${product.id}, Product Name: ${product.product_name}, Price: ${product.price}`);
    });
}
const products = [
    { id: 1, product_name: 'Iphone 12', price: 200000000 },
    { id: 2, product_name: 'Iphone 11', price: 100000000 },
    { id: 3, product_name: 'samsung note 10 C', price: 500000000 },
];
const sortedProducts = sortProductsByPrice(products);
printProducts(sortedProducts);
