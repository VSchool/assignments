var Car = function (name, make, color, year) {  
    this.name = name;
    this.make = make;
    this.color = color;
    this.year = year;
};

UserInputForName = prompt("name")
UserInputForMake = prompt("make")
UserInputForColor = prompt("color") 
UserInputForYear = prompt("year")
var yearAsNumber = Number(UserInputForYear)

var car1 = new Car(UserInputForName, UserInputForMake, UserInputForColor, yearAsNumber);  
var car2 = new Car('Model S', 'Tesla', 'black', 2014);

console.log(car1);  
console.log(car2); 