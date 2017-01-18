// Object-oriented programming (OOP)
var today = new Date();
// Class -> blueprint for objects
// objects -> instances of a class

// Manually creating an object
//var jill = {
//    firstName: "Jill",
//    lastName: "Hill",
//    age: 42   
//}

//var today = new Date();
//today.getDate()
// Creating a constructor to create objects for us
function User(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.photos = [];
    this.speak = function() {
        console.log("My name is " + this.firstName + " " + this.lastName);
    };
    this.addPhoto = function(photo) {
        this.photos.push(photo);
    }
}

var jill = new User("Jill", "Hill", 42);
var jack = new User("Jack", "Hill", 43);
var james = new User("James", "Hill", 12);

jill.speak();
jack.speak();
james.speak();

jill.addPhoto("New Photo");
console.log(jill.photos);