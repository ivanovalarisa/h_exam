'use strict';

function catchClickOnArrow() {
    let arrows = document.getElementsByClassName('items-count');
    for(let item of arrows) {
        if(!item.classList.contains('disabled')) {
            item.addEventListener('click', function (e) {
                let arrowPressed = e.target.parentNode;
                let inpt;
                if(arrowPressed.previousElementSibling && arrowPressed.previousElementSibling.tagName === 'INPUT') {
                    // debugger;
                    inpt = arrowPressed.previousElementSibling;
                } else if(arrowPressed.nextElementSibling.tagName === 'INPUT'){
                    // debugger;
                    inpt = arrowPressed.nextElementSibling;
                }
                hold(inpt, arrowPressed);
            });
        }
    }
}
catchClickOnArrow();

function incrementInputValue(inpt, increment) {
    const val = inpt.value;
    if (typeof parseInt(val, 10) === "number" && !isNaN(parseInt(val, 10))) {
        if (parseInt(val, 10) + increment > 0) {
            inpt.value = parseInt(val, 10) + increment;
        }
    } else {
        inpt.value = 1;
    }
}

function hold(inpt, target) {
    let increment = 0;
    if (target.classList.contains('reduced')) {
        increment = -1;
        incrementInputValue(inpt, increment);
    } else if (target.classList.contains('increase')) {
        increment = 1;
        incrementInputValue(inpt, increment);
    }
}