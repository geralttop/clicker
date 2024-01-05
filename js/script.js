"use strict"
const square = document.querySelector('.square');
const blockOfSum = document.querySelector('.sum');
const buyClick = document.querySelector('.buy-click');
const buyColorOfSquare = document.querySelector('.buy-color-of-square');
const textBuyClick = document.querySelector('.text-buy-click');
const textPriceOfClick = document.querySelector('.text-price-of-click');
const textPriceOfColor = document.querySelector('.text-price-of-color');
const textChanges = document.querySelector('.text-changes');
let sum = 1999,
    click = 1,
    priceOfClick = 40,
    priceOfColor = 50,
    changes = 0;
square.addEventListener('click', clicking);
function clicking(){
    sum+=click;
    blockOfSum.innerHTML = `Сумма: ${sum}`;
    console.log(sum);
}

buyClick.addEventListener('click', clickIncrease);
function clickIncrease(){
    if (sum>=priceOfClick){
        click*=2;
        sum-= priceOfClick;
        priceOfClick = Math.floor(priceOfClick*2.1);
        textBuyClick.innerHTML = `Купить клик: ${click*2}`;
        textPriceOfClick.innerHTML = `Стоимость: ${priceOfClick}`
        blockOfSum.innerHTML = `Сумма: ${sum}`;
    }
}

buyColorOfSquare.addEventListener('click', colorChanging);
function colorChanging(){
    if (sum >= priceOfColor){
        square.style.background = getRandomColor();
        sum -= priceOfColor;
        priceOfColor = Math.floor(priceOfColor*2.1);
        changes++;
        textPriceOfColor.innerHTML = `Стоимость: ${priceOfColor}`;
        textChanges.innerHTML = `Цветов сменено: ${changes}`;
        blockOfSum.innerHTML = `Сумма: ${sum}`;
    }
}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}