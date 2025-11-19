// main.js
const number1 = document.querySelector('h1');
const plusButton1 = document.querySelector('button');

let count = 0;

plusButton1.addEventListener('click',function() {
    count ++;
    number1.innerHTML = count;
});

const number = document.querySelector('h1');
const plusButton = document.querySelector('button2');

plusButton.addEventListener('click',function() {
    count --;
    number.innerHTML = count;
});