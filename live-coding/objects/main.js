var car = {
    brand: "Honda",
    model: "Civic",
    numberOfDoors: 4,
    automatic: true,
    color: "blue",
    miles: 0,
    driveOneMile: function(){
        miles++;
        return this.miles;
    } 
};

car.numberOfDoors = 32;

console.log(car.numberOfDoors);

car.driveOneMile();
