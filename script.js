//variable and function declaration

let newDiv;

for (i = 1; i <= 16; i++) {
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

//Script for initial page 16x16 grid

colorBox();

//script to reset grid

function getSize() {
    let answer = prompt("Select a whole number 1-100 to set as the height and width of your grid.");
    return answer;
}

let reset = document.getElementById('reset');
reset.addEventListener('click', function(e) {
    let size = getSize();
    let sizeType = Number(size);
    let divWidth = 680 / size;
    let divHeight = 600 / size;
    console.log(size);
    console.log(sizeType);

    if (sizeType == NaN) {
        alert("Your entry was not a valid number. Please press the 'Reset' button and try again.")
    } else if ((size % 1) != 0) {
        alert("Your entry was not a valid number. Please press the 'Reset' button and try again.")
    } else if (size < 0 || size > 100) {
        alert("Your entry was not a valid number. Please press the 'Reset' button and try again.")
    }
});