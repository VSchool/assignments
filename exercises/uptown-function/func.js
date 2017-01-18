var lyrics = ["This", "hit", "that", "ice", "cold",
              "Michelle", "Pfeiffer", "that", "white",
              "gold", "This", "one", "for", "them",
              "hood", "girls", "Them", "good", "girls",
              "straight", "masterpieces", "Stylin'",
              "whilen'", "livin'", "it", "up", "in",
              "the", "city", "Got", "Chucks", "on",
              "with", "Saint", "Laurent", "Gotta", "kiss",
              "myself", "I'm", "so", "pretty"];


function printLyrics(lyricsArray) {
    var lyricsString = lyricsArray.join(" ");
    lyricsString += ".";
    console.log(lyricsString);
}

//printLyrics(lyrics);
//printLyrics(otherLyrics);



function backWords(lyrics) {
    console.log(lyrics.reverse().join(" "));
}

//backWords(lyrics);


//function everyOther(lyrics) {
//    // Empty string where I'll build up the final String;
//    var everyOtherWord = "";
//    // Loop through the array, adding every other item
//    // to the final lyrics string
//    for (var i = 0; i < lyrics.length; i += 2) { // i += 2 iteration instead of i++;
//        everyOtherWord += lyrics[i] + " ";
//    }
//    console.log(everyOtherWord);
//}

//everyOther(lyrics);

//function flipLyrics(lyrics) {
//    var string = "";
//    for (var i = 0, j = 1; j < lyrics.length; i += 2, j += 2) {
//        string += lyrics[j] + " " + lyrics[i] + " ";
//    }
//    console.log(string);
//}



function songRev() {
    var song = "";
    for (var i = 0; i < lyrics.length - 1; i++) {
        song = song + lyrics[i + 1] + " " + lyrics[i] + " ";
        i++;
    }
    if (lyrics.length % 2 === 1)
        song = song + lyrics[lyrics.length - 1];
    return song;
}
console.log(songRev());

songRev(lyrics);










