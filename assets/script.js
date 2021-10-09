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

// let cardArrayLight = [
//     { name: "athens", img: "assets/images/athens.png" },
//     { name: "athens", img: "assets/images/athens.png" },
//     { name: "barcelona", img: "assets/images/barcelona.png" },
//     { name: "barcelona", img: "assets/images/barcelona.png" },
//     { name: "bari", img: "assets/images/bari.png" },
//     { name: "bari", img: "assets/images/bari.png" },
//     { name: "porto", img: "assets/images/porto.png" },
//     { name: "porto", img: "assets/images/porto.png" },
//     { name: "pisa", img: "assets/images/pisa.png" },
//     { name: "pisa", img: "assets/images/pisa.png" },
//     { name: "rome", img: "assets/images/rome.png" },
//     { name: "rome", img: "assets/images/rome.png" },
// ];

// Define variables
let clicks = 0;
let pairMatch = 0;
let cardsId = [];
let theme = "grid-img.png";

document.addEventListener("DOMContentLoaded", function () {
    let grid = document.querySelector(".grid");
    createBoard(grid, cardArray);
    arrangeCards(cardArray);

    let rulesBtn = document.getElementsByClassName("rules-btn");
    rulesBtn[0].addEventListener("click", showRules);
    let startBtn = document.getElementsByClassName("play-btn");
    startBtn[0].addEventListener("click", removeRules);

    var clickBoard = document.getElementById("clickBoard");
    var scoreBoard = document.getElementById("scoreBoard");
});

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

//Flip the cards
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
        pairMatch += 1;
        scoreBoard.innerText = pairMatch;
    } else {
        imageOne.setAttribute("src", `assets/images/${theme}`);
        imageTwo.setAttribute("src", `assets/images/${theme}`);
        imageOne.classList.remove("flip");
        imageTwo.classList.remove("flip");
    }
    clicks += 1;
    clickBoard.innerText = clicks;
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
    let btns = document.getElementsByClassName("btn");
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].setAttribute("src", "assets/images/day-time-grid.jpg");
        imgs[i].style.borderColor = "#eaddcb";
    }
    document.body.style.backgroundImage = "url('assets/images/day-time.jpg')";
    for (let i = 0; i < btns.length; i++) {
        btns[i].style.backgroundColor = "#caa865";
    }
    theme = "day-time-grid.jpg";
}

function nightTime() {
    let imgs = document.getElementsByTagName("img");
    let btns = document.getElementsByClassName("btn");
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].setAttribute("src", "assets/images/grid-img.png");
        imgs[i].style.borderColor = "#086068";
        document.body.style.backgroundImage =
            "url('assets/images/background.jpg')";
    }
    for (let i = 0; i < btns.length; i++) {
        btns[i].style.backgroundColor = "#01394a";
    }
    theme = "grid-img.png";
}
