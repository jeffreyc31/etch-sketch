//variable and function declaration

let newDiv;
let divHeight = 500 / 16;
let divWidth = 500 / 16;

for (i = 1; i <= 256; i++) {
    newDiv = document.createElement('div');
    newDiv.id = `box-${i}`;
    newDiv.classList.add("boxes");

    container.appendChild(newDiv);
}

function changeColor() {
    this.style.backgroundColor = "black";
    return false;
}

function colorBox() {
    let boxList = document.querySelectorAll('div.boxes');
    const boxArray = Array.from(boxList);
    boxArray.forEach(element => element.addEventListener("mouseover", changeColor));
}

function getSize() {
    let answer = prompt("Select a whole number 1-100 to set as the height and width of your grid.");
    return answer;
}

function setDimension() {
    let boxList = document.querySelectorAll('div.boxes');
    const boxArray = Array.from(boxList);
    boxArray.forEach(element => element.setAttribute(`style`, `width:${divWidth}px; height:${divHeight}px`));
}

//Script for initial page 16x16 grid

setDimension();
colorBox();


//script to reset grid

let reset = document.getElementById('reset');
reset.addEventListener('click', function(e) {
    let size = getSize();
    let sizeType = Number(size);
    divWidth = 680 / size;
    divHeight = 600 / size;
    console.log(size);
    console.log(sizeType);

    if (sizeType == NaN) {
        alert("Your entry was not a valid number. Please press the 'Reset' button and try again.")
    } else if ((size % 1) != 0) {
        alert("Your entry was not a valid number. Please press the 'Reset' button and try again.")
    } else if (size < 0 || size > 100) {
        alert("Your entry was not a valid number. Please press the 'Reset' button and try again.")
    } else {
        const emptyCont = document.getElementById('container');
        while (emptyCont.firstChild) {
            emptyCont.removeChild(emptyCont.lastChild);
        }

        for (i = 1; i <= (size * size); i++) {
            newDiv = document.createElement('div');
            newDiv.id = `box-${i}`;
            newDiv.classList.add("boxes");

            container.appendChild(newDiv);
        }
        colorBox();
        setDimension();
    }
});