let firstBox = document.querySelector(".first")
let secondBox = document.querySelector(".second")
let thirdBox = document.querySelector(".third")

firstBox.addEventListener("mouseenter", (event) => {
    event.target.style.backgroundColor = "red";
    secondBox.style.backgroundColor = "grey";
    thirdBox.style.backgroundColor = "grey";
});

secondBox.addEventListener("mouseenter", (event) => {
    event.target.style.backgroundColor = "yellow";
    firstBox.style.backgroundColor = "grey";
    thirdBox.style.backgroundColor = "grey";
});

thirdBox.addEventListener("mouseenter", (event) => {
    event.target.style.backgroundColor = "green";
    firstBox.style.backgroundColor = "grey";
    secondBox.style.backgroundColor = "grey";
});