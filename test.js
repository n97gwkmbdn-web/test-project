// main.js
const number = document.querySelector('.count');
const plusButton = document.querySelector('#plus');
const minusButton = document.querySelector('#minus');

let count = 0;

plusButton.addEventListener('click',function() {
    count ++;
    updateCount();
});

minusButton.addEventListener('click',function() {
    if (count > 0) {
        count --;
        updateCount();
    }
});

function updateCount() {
    number.textContent = count;
}
