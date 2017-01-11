var friend = {
    firstName: "Jack",
    lastName: "Flash",
    age: 42,
    prefersBlades: false,
    favoriteSkates: [
        {
            brand: "Zoom-zooms",
            model: "Molasses model 3",
            size: 15,
            style: "Classic"
        }
    ],
    ageOneYear: function () {
        this.age++;
        console.log(this.age);
    }
}

friend.ageOneYear();

var anotherFriend = {
    firstName: "Jill",
    lastName: "Flash",
    prefersBlades: true,
    favoriteSkates: [
        {
            brand: "Zoom-zooms",
            model: "Molasses model 3",
            size: 5,
            style: "Classic"
        }
    ]
}

var skater = {
    firstName: "Bob",
    lastName: "Ziroll",
    prefersBlades: true,
    favoriteSkates: [
        {
            brand: "Bladetastic",
            model: "Speedster X 4000",
            size: 10,
            style: "Classic"
        },
        {
            brand: "Apple",
            model: "iBlade",
            size: 10,
            style: "Inline",
            ram: "32GB",
            headphoneJack: false,
        }
    ],
    skaterFriends: [friend, anotherFriend]
}

console.log(skater.toString());