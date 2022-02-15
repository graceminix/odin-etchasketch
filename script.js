const container = document.querySelector('#grid');


for (i = 0; i < 16; i++) {
    for (j = 0; j < 16; j++) {
        var d = document.createElement('div');
        d.classList.add('square');
        container.appendChild(d); 
    }        
}

let a = document.getElementsByClassName('square')

a.addEventListener("mouseover", function( event ) {
    event.target.style.background = "purple";
}, false);

