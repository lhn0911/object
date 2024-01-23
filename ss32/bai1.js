function Information(id, name, phone, address) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.address = address;
}

function submitForm() {
    let id = prompt("Nhập ID:");
    let name = prompt("Nhập tên:");
    let phone = prompt("Nhập số điện thoại:");
    let address = prompt("Nhập địa chỉ:");

    if (id && name && phone && address) {
        let infoObject = new Information(id, name, phone, address);
        displayInformation(infoObject);
    } else {
        alert("Vui lòng nhập đầy đủ thông tin.");
    }
}

function displayInformation(infoObject) {
    console.log("Thông tin cá nhân:");
    console.log("ID:", infoObject.id);
    console.log("Tên:", infoObject.name);
    console.log("Số điện thoại:", infoObject.phone);
    console.log("Địa chỉ:", infoObject.address);
}
submitForm();
