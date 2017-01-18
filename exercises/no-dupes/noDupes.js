function noDupes(string) {
    // lowercase letters
    string = string.toLowerCase().split(" ").join("");
    // create an empty string for unique letters
    // create an empty string for the misfits (duplicates)
    var uniques = "";
    var misfits = "";
    
    // loop through each letter in the lowercase string
    for (var i = 0; i < string.length; i++) {
        // check if the current letter is already in the unique letters string
        if (uniques.indexOf(string[i]) !== -1) {
            // put it in the duplicates string
            misfits += string[i];
        } else {
            // put it in the unique letters string
            uniques += string[i];
        }
    }
    // console.log uniques and the misfits/duplicates
    console.log("Uniques: " + uniques);
    console.log("Extras: " + misfits);
    
    var arr = uniques.split("");
    console.log(arr.sort().join(""));
}

noDupes("bookkeeper larry and his best friend jerry");