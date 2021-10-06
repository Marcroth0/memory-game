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

//day time array

let cardArrayLight = [
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

    let rulesBtn = document.getElementsByClassName("rules-btn");
    rulesBtn[0].addEventListener("click", showRules);
    let startBtn = document.getElementsByClassName("play-btn");
    startBtn[0].addEventListener("click", removeRules);
});

let theme = "background.jpg";

function showRules() {
    let rulesSct = document.getElementsByClassName("rules-sctn");
    rulesSct[0].style.display = "flex";
}

function removeRules() {
    let rulesSct = document.getElementsByClassName("rules-sctn");
    rulesSct[0].style.display = "none";
}

function createBoard(grid, array) {
    for (let i = 0; i < array.length; i++) {
        let img = document.createElement("img");
        img.setAttribute("src", `assets/images/${theme}`);
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
    this.classList.add("flip");
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
        imageOne.style.boxShadow = "0px 0px 5px #fff";
        imageTwo.style.boxShadow = "0px 0px 5px #fff";
    } else {
        imageOne.setAttribute("src", `assets/images/${theme}`);
        imageTwo.setAttribute("src", `assets/images/${theme}`);
        imageOne.classList.remove("flip");
        imageTwo.classList.remove("flip");
    }
    cardsId = [];
}

function resetGame() {
    let grid = document.querySelector(".grid");
    grid.innerHTML = null;
    createBoard(grid, cardArray);
    arrangeCards(cardArray);
}

function dayTime() {
    let imgs = document.getElementsByTagName("img");
    let labels = document.getElementsByClassName("font");
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].setAttribute("src", "assets/images/day-time.jpg");
        // imgs[i].style.borderColor = "white";
    }
    document.body.style.backgroundImage = "url('assets/images/day-time.jpg')";
    labels[0].style.color = "black";
    labels[1].style.color = "black";
    theme = "day-time.jpg";
}

function nightTime() {
    let imgs = document.getElementsByTagName("img");
    let labels = document.getElementsByClassName("font");
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].setAttribute("src", "assets/images/background.jpg");
        // imgs[i].style.borderColor = "black";
    }
    document.body.style.backgroundImage = "url('assets/images/background.jpg')";
    labels[0].style.color = "white";
    labels[1].style.color = "white";
    theme = "background.jpg";
}
