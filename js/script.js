"use strict"
const square = document.querySelector('square');
const blockOfSum = document.querySelectorAll('sum');
let sum = 0;
let click = 1;

console.log(blockOfSum[0].innerHTML);
square.addEventListener('click', clicking);

function clicking(){
    sum+=click;
    blockOfSum.innerHTML = `Сумма: ${sum}`;
    console.log(sum);
}