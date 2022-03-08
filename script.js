let newDiv;

for (i = 1; i <= 16; i++) {
    newDiv = document.createElement('div');
    newDiv.id = `box-${i}`;
    newDiv.classList.add("boxes");

    container.appendChild(newDiv);
}