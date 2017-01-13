function greeting() {
    var date = new Date();
    var hour = date.getHours();

    if (hour < 12) {
        console.log("Good morning!");
    } else if (hour >= 12 && hour < 17) {
        console.log("Good afternoon!");
    } else {
        console.log("Good night!");
    }
}

greeting();


//var aSmile = true;
//var bSmile = false;

// true, true √
// true, false √
// false, true √
// false, false √

//function monkeyTrouble(aSmile, bSmile) {
//    if (aSmile === bSmile) {
//        return true;
//    } else {
//        return false;
//    }
//}


//if (aSmile === true && bSmile === true) {
//    console.log("Both are smiling. You're in trouble.");
//} else if ( (aSmile === true && bSmile === false) || (aSmile === false && bSmile === true) ) {
//    console.log("Not in trouble. Phew!");
//} else {
//    console.log("Neither is smiling. Uh oh.")
//}

//if (aSmile === true && bSmile === true) {
//    console.log("Both are smiling. You're in trouble.");
//} else if (aSmile === false && bSmile === false) {
//    console.log("Neither is smiling. Uh oh.")
//} else {
//    console.log("Not in trouble. Phew!");
//}
//
//if (aSmile === bSmile) {
//    console.log("You're in trouble");
//} else {
//    console.log("No trouble.");
//}


//function compareNums(num1, num2) {
//    if (num1 < num2) {
//        console.log("num1 is the smallest number: " + num1);
//    } else if (num2 < num1) {
//        console.log("num2 is the smallest number: " + num2);
//    } else {
//        console.log("They are exactly equal");
//    }
//}
//
//compareNums(3, 2);