function Information(id, name, phone, address) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.address = address;
}
let infoObject = new Information(1, "John Doe", "123456789", "123 Main St");
console.log("Thông tin ban đầu:");
console.log("ID:", infoObject.id);
console.log("Tên:", infoObject.name);
console.log("Số điện thoại:", infoObject.phone);
console.log("Địa chỉ:", infoObject.address);
delete infoObject.address;
infoObject.email = "john.doe@example.com";
console.log("\nThông tin sau khi sửa:");
console.log("ID:", infoObject.id);
console.log("Tên:", infoObject.name);
console.log("Số điện thoại:", infoObject.phone);
console.log("Email:", infoObject.email);
