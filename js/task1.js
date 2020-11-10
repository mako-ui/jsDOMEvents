let box = document.querySelector(".box");
let boxText = document.querySelector("#box-text");
const yellowButton = document.querySelector(".yellow");

boxText.addEventListener("copy", () => {
    if(boxText.innerHTML === "Blank"){
        alert("You have copied Blank", boxText.innerHTML);
    }else{
    console.log("Text copied: ", boxText.innerHTML);
    }
});

box.addEventListener("mouseenter", () => {
    console.log("The mouse is in the box!" );
});

box.addEventListener("mouseleave", () => {
    box.style.backgroundColor = ("transparent");
    box.style.color = ("black");
    boxText.innerHTML = ("Blank");
    console.log("Oops, the mouse have left the area");
});

yellowButton.addEventListener("click", () => {
    box.style.backgroundColor = "yellow";
    box.style.color = "brown";
    boxText.innerHTML = "yellow";
});

function paintRed(){
    box.style.backgroundColor = "red";
    box.style.color = "white";
    boxText.innerHTML = "red";
}

function paintGreen(){
    box.style.backgroundColor = "green";
    box.style.color = "white";
    boxText.innerHTML = "green";
}

function paintBlue(){
    box.style.backgroundColor = "blue";
    box.style.color = "white";
    boxText.innerHTML = "blue";
}