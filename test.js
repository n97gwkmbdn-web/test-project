// main.js
const number = document.querySelector('.count');
const plusButton = document.querySelector('#plus');
const minusButton = document.querySelector('#minus');
const resetButton = document.querySelector('#reset');

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

resetButton.addEventListener('click',function() {
    count = 0;
    updateCount();
    
});


function updateCount() {
    number.textContent = count;
}
