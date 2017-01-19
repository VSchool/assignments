var voters = [  
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

// Objective: Find the percentage of each age group who voted

// Divide the voters into their respective age groups (3 separate arrays)
var youths = [];
var middleages = [];
var seniorCitizens = [];
    // loop through the voters array and separate into 3 separate arrays
for (var i = 0; i < voters.length; i++) {
    var voter = voters[i];
    if (voter.age >= 18 && voter.age < 26) {
        youths.push(voter);
    } else if (voter.age >= 26 && voter.age < 36) {
        middleages.push(voter);
    } else {
        seniorCitizens.push(voter);
    }
}

// In each age group array, count the number of those who voted
    // Compare the number of those who voted to the number of people in that array (voted/array.length * 100);

var youthVotes = 0;
var middleVotes = 0;
var seniorVotes = 0;

for (var i = 0; i < youths.length; i++) {
    var voter = youths[i];
    if (voter.voted) {
        youthVotes++;
    }
}

for (var i = 0; i < middleages.length; i++) {
    var voter = middleages[i];
    if (voter.voted) {
        middleVotes++;
    }

    
for (var i = 0; i < seniorCitizens.length; i++) {
    var voter = seniorCitizens[i];
    if (voter.voted) {
        seniorVotes++;
    }
}

// Print the percentages by age group in this format:
// 18-25: n%
