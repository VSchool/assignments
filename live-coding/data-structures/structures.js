// Simple/primitive JavaScript data types

var anotherName = "Dan"; // String

var age = 10;  // Number

var isAdmin = true;  // Boolean

// Other simple data types in JavaScript include:
undefined;
null;
NaN;


// Complex data types

// Arrays
var students = ["Morgan", "Dan", "Gabe"];
var ages = [3, 4, 5];
var admins = [true, true, false];
var multiple = [true, 42, "Hello", [1, 2, 3], {}, function() {}];  // Usually not best practice. You probably need an object.

// Objects
var person = {
    firstName: "Dan",
    lastName: "Pak",
    age: 23,
    isJapanese: false,
    speak: function() {
        console.log("Hey there");
    }
};


var shopper = {
    firstName: "Sarah", 
    //...
}




person.speak();

var phone = {
    color: "Black",
    brand: "Apple",
    version: "iPhone 7",
    memCapacity: "128GB",
    isJailBroken: false,
    case: {
        color: "Black",
        brand: "Spigen"
    },
    owners: [
        {
            firstName: "Bob",
            lastName: "Ziroll"
        }, 
        {
            firstName: "Dan",
            lastName: "Pak"
        }
    ]
}

console.log(phone.owners[0].lastName);