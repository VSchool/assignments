// AND - && - strict
// OR  - || - lax
// NOT - !

// false && false - false
// false && true  - false
// true && false  - false
// true && true   - true

// false || false - false
// false || true  - true
// true || false  - true
// true || true   - true

// false || false || false || false || true - true
// true && true && true && false && true - false

// Falsy values
    // false
    // 0
    // ""
    // undefined
    // null
    // NaN
// Truthy values
    // everything else


var basket = ["Apple", "Banana"];

if (basket.length > 0) {
    console.log("You have things in your basket");
} else {
    console.log("Go shopping!");
}