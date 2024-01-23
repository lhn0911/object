let addressBook = [
    { name: "a ", phone: "0123456789", email: "a@example.com" },
    { name: "b ", phone: "1234567890", email: "b@example.com" },
    { name: "c ", phone: "2345678901", email: "c@example.com" },
];
function displayFullContactInfo(contact) {
    console.log("Name:", contact.name);
    console.log("Phone:", contact.phone);
    console.log("Email:", contact.email);
}
for (let contact of addressBook) {
    displayFullContactInfo(contact);
    console.log("\n");
}