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
    arrangeCards(array);
});

function createBoard(grid, array) {
    for (let i = 0; i < array.length; i++) {
        let img = document.createElement("img");
        img.setAttribute("src", "assets/images/background.jpg");
        img.setAttribute("id", i);
        grid.appendChild(img);
    }
    imgs = document.querySelectorAll("img");
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].addEventListener("click", null);
    }
}

//Randomly sort cards in the Array
function arrangeCards(array) {
    array.sort(() => 0.5 - Math.random());
}
