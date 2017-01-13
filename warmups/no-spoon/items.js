var roomObjects = [];

var coffeeMug = {
    name: "Coffee Mug",
    uses: ["sipping", "throwing", "hitting"],
    isEdible: false,
    warningLabel: function() {
        return "Caution: hot!"
    }
}

roomObjects.push(coffeeMug);

var table = {
    legs: 4,
    material: ["wood", "metal"],
    screensOnTop: 2,
    totalNumberOfLegs: function(number) {
        var allLegs = number * 4;
        console.log(allLegs);
    }
}

roomObjects.push(table);

var myPhone = {
    brand: "Apple",
    model: "iPhone 7 Plus",
    matteBlack: true,
    working: function() {
        return "Works great!";
    }
}

roomObjects.push(myPhone);

var coffeeMachine = {
    color: "Black",
    isBrewing: false,
    isClean: true,
    flipSwitch: function() {
        if (this.isBrewing === true) {
            this.isBrewing = false;
            this.isClean = false;
        } else {
            this.isBrewing = true;
        }
    },
    turnOn: function() {
        if (this.isBrewing === false) {
            this.isBrewing = true;
            console.log("Your coffee is brewing. Please come back in 2 minutes to grab a fresh cup");    
        }
    },
    clean: function() {
        this.isClean = true;
        console.log("Machine in cleaned");
    },
    turnOff: function() {
        this.isBrewing = false;
        console.log("Machine in off");
        this.isClean = false;
    }
}

roomObjects.push(coffeeMachine);

console.log(roomObjects);
