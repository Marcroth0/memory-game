let cardArray = [
    { name: "athens", img: "assets/images/athens.png" },
    { name: "athens", img: "assets/images/athens.png" },
    { name: "barcelona", img: "assets/images/barcelona.png" },
    { name: "barcelona", img: "assets/images/barcelona.png" },
    { name: "bari", img: "assets/images/bari.png" },
    { name: "bari", img: "assets/images/bari.png" },
    { name: "porto", img: "assets/images/porto.png" },
    { name: "porto", img: "assets/images/porto.png" },
    { name: "pisa", img: "assets/images/pisa.png" },
    { name: "pisa", img: "assets/images/pisa.png" },
    { name: "rome", img: "assets/images/rome.png" },
    { name: "rome", img: "assets/images/rome.png" },
];

document.addEventListener("DOMContentLoaded", function () {
    let grid = document.querySelector(".grid");
    createBoard(grid, cardArray);
    arrangeCards(cardArray);
});

function createBoard(grid, array) {
    for (let i = 0; i < array.length; i++) {
        let img = document.createElement("img");
        img.setAttribute("src", "assets/images/background.jpg");
        img.setAttribute("id", i);
        grid.appendChild(img);
    }
    let imgs = document.querySelectorAll("img");
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].addEventListener("click", flipCards);
    }
}

//Randomly sort cards in the Array
function arrangeCards(array) {
    array.sort(() => 0.5 - Math.random());
}

//flip the cards

let cardsId = [];
function flipCards() {
    this.setAttribute("src", cardArray[this.id].img);
    cardsId.push(this.id);
    if (cardsId.length === 2) {
        setTimeout(checkForMatch, 500);
    }
}

//Check for a match
function checkForMatch() {
    let imageOne = document.getElementById(cardsId[0]);
    let imageTwo = document.getElementById(cardsId[1]);
    if (imageOne.src === imageTwo.src && imageOne.id != imageTwo.id) {
        alert("Match!");
    } else {
        imageOne.setAttribute("src", "assets/images/background.jpg");
        imageTwo.setAttribute("src", "assets/images/background.jpg");
    }
    cardsId = [];
}
