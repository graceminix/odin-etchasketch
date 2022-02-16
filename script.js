const container = document.querySelector('#grid');

makeGrid(16);

let box = document.getElementById('grid')

box.addEventListener("mouseover", function( event ) {
    event.target.style.backgroundColor = randomColor();
}, false);

const button = document.querySelector('#heh');
button.addEventListener("click", reSet);

function reSet() {
    const color = document.getElementsByClassName('etch')
    var result = [].slice.call(color);
    for (i = 0; i < result.length; ++i) {
        result[i].className = 'square';
    }
    var newgrid = 101;
    while (newgrid  > 100 || newgrid < 0) {
        newgrid = window.prompt("Please enter a grid size between 0 and 100!");
    }
    if (isNaN(parseInt(newgrid))) {
        newgrid = 16;
        window.alert("You must enter a positive integer!");
    }
    removeAllChildNodes(container);
    makeGrid(newgrid);
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function makeGrid(number) {
    var num = Number(number);
    for (i = 0; i < num; i++) {
        for (j = 0; j < num; j++) {
            var d = document.createElement('div');
            d.classList.add('square');
            container.appendChild(d);
        }
    }
    container.style.setProperty('grid-template-columns', 'repeat(' + number + ', 1fr)');
    container.style.setProperty('grid-template-rows','repeat(' + number + ', 1fr)');

}

function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
}
