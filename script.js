//Script for initial page 16x16 grid

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

colorBox();