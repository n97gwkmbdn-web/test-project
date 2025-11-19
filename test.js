// main.js
const number = document.querySelector('#count');
const plusButton = document.querySelector('#plus');
const minusButton = document.querySelector('#minus');

let count = 0;

plusButton.addEventListener('click',function() {
    count ++;
    number.innerHTML = count;
    updateCount();
});

minusButton.addEventListener('click',function() {
    count --;
    number.innerHTML = count;
        updateCount();
});

function updateCount() {
    nubber
}