// Define Array of cards
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

// Define variables
let clicks = 0;
let pairMatch = 0;
let cardsId = [];
let theme = "grid-img.png";
let isTransitioning = false;

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

// Create the game board with $theme var depending on light/dark theme (theme default: dark)
function createBoard(grid, array) {
    // Set default image background for cards
    for (let i = 0; i < array.length; i++) {
        let img = document.createElement("img");
        img.setAttribute("src", `assets/images/${theme}`);
        img.setAttribute("id", i);
        img.setAttribute("alt", "city skyline");
        // Make resetGame consistent with current theme
        img.style.borderColor = theme == "grid-img.png" ? "#086068" : "#eaddcb";
        grid.appendChild(img);
    }
    // Add event listener to each card on the board
    let imgs = document.querySelectorAll("img");
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].addEventListener("click", flipCards);
    }
}

// Randomly sort cards in the Array
function arrangeCards(array) {
    array.sort(() => 0.5 - Math.random());
}

// Show rules when "Rules" button is clicked
function showRules() {
    let rulesSct = document.getElementsByClassName("rules-sctn");
    rulesSct[0].style.display = "flex";
}

// Hide rules when "Play!" button is clicked
function removeRules() {
    let rulesSct = document.getElementsByClassName("rules-sctn");
    rulesSct[0].style.display = "none";
}

// Flip the cards
function flipCards() {
    if (isTransitioning == true) {
    } else {
        this.classList.add("flip");
        this.setAttribute("src", cardArray[this.id].img);
        cardsId.push(this.id);
        // If two cards are clicked, check if it's a match
        if (cardsId.length === 2) {
            isTransitioning = true;
            setTimeout(checkForMatch, 500);
        }
    }
}

//Check for a match
function checkForMatch() {
    let imageOne = document.getElementById(cardsId[0]);
    let imageTwo = document.getElementById(cardsId[1]);
    // Check if the images are the same but different cards
    if (imageOne.src === imageTwo.src && imageOne.id != imageTwo.id) {
        imageOne.style.boxShadow = "0px 0px 5px #fff";
        imageTwo.style.boxShadow = "0px 0px 5px #fff";
        pairMatch += 1;
        scoreBoard.innerText = pairMatch;
        // Check if all cards have been matched
        if (pairMatch === cardArray.length / 2) {
            let youWon = document.getElementsByClassName("you-won");
            youWon[0].style.display = "flex";
            youWon[0].classList.add("flip");
        }
    } else {
        imageOne.setAttribute("src", `assets/images/${theme}`);
        imageTwo.setAttribute("src", `assets/images/${theme}`);
        imageOne.classList.remove("flip");
        imageTwo.classList.remove("flip");
    }
    clicks += 1;
    clickBoard.innerText = clicks;
    cardsId = [];
    isTransitioning = false;
}

// Reset game if "reset" button is clicked
function resetGame(display = true) {
    let grid = document.querySelector(".grid");
    grid.innerHTML = null;
    createBoard(grid, cardArray);
    arrangeCards(cardArray);
    clicks = 0;
    pairMatch = 0;
    clickBoard.innerText = clicks;
    scoreBoard.innerText = pairMatch;
    if (!display) {
        document.getElementsByClassName("you-won")[0].style.display = "none";
    }
}

// Change the background and border for the images if user chooses light theme
function dayTime() {
    let imgs = document.getElementsByTagName("img");
    let btns = document.getElementsByClassName("btn");
    for (let i = 0; i < imgs.length; i++) {
        if (imgs[i].getAttribute("src") == "assets/images/grid-img.png") {
            imgs[i].setAttribute("src", "assets/images/day-time-grid.jpg");
        }
        imgs[i].style.borderColor = "#eaddcb";
    }
    document.body.style.backgroundImage = "url('assets/images/day-time.jpg')";
    for (let i = 0; i < btns.length; i++) {
        btns[i].style.backgroundColor = "#caa865";
    }
    theme = "day-time-grid.jpg";
}

// Redundant? Could be done in a single "changeTheme" function
function nightTime() {
    let imgs = document.getElementsByTagName("img");
    let btns = document.getElementsByClassName("btn");
    for (let i = 0; i < imgs.length; i++) {
        // Continue the game when you change between themes
        if (imgs[i].getAttribute("src") == "assets/images/day-time-grid.jpg") {
            imgs[i].setAttribute("src", "assets/images/grid-img.png");
        }
        imgs[i].style.borderColor = "#086068";
    }
    document.body.style.backgroundImage = "url('assets/images/background.jpg')";
    for (let i = 0; i < btns.length; i++) {
        btns[i].style.backgroundColor = "#01394a";
    }
    theme = "grid-img.png";
}
