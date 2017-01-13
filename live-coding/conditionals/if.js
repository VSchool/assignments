var myScore = 161;
var highScore = 80;

if (myScore > highScore) {
    console.log("You set a new high score!");
    if (myScore > highScore * 2) {
        console.log("You're an über winner!");
    } else {
        console.log("You're just a plain winner. Boring.")
    }
} else if (myScore === highScore) {
    console.log("You tied the high score. So close!");
} else {
    console.log("Loser!");
}

