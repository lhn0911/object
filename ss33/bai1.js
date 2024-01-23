let person = {
    name: "John Doe",
    age: 30,
    address: "123 Main Street",
};
console.log("Name:", person.name);
console.log("Age:", person.age);
console.log("Address:", person.address);
person.birthdate = "1990-01-01";
delete person.age;
console.log('--------------------')
console.log("Name:", person.name);
console.log("Birthdate:", person.birthdate);
console.log("Address:", person.address);
