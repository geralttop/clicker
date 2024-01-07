"use strict"

const square = document.querySelector('.square');

const blockOfSum = document.querySelector('.sum');
const textChanges = document.querySelector('.text-changes');

const buyClick = document.querySelector('.buy-click');
const buyColorOfSquare = document.querySelector('.buy-color-of-square');
const buyProfit = document.querySelector('.buy-profit');

const textBuyClick = document.querySelector('.text-buy-click');
const textBuyProfit = document.querySelector('.text-buy-profit');

const textPriceOfClick = document.querySelector('.text-price-of-click');
const textPriceOfColor = document.querySelector('.text-price-of-color');
const textPriceOfProfit = document.querySelector('.text-price-of-profit');

const reset = document.querySelector('.reset');

let sum = localStorage.getItem('sum') === null ? 0 : +localStorage.getItem('sum'),
    click = localStorage.getItem('click') === null ? 1 : +localStorage.getItem('click'),
    changes = localStorage.getItem('changes') === null ? 0 : +localStorage.getItem('changes'),
    profit = localStorage.getItem('profit') === null ? 0 : +localStorage.getItem('profit'),
    priceOfClick = localStorage.getItem('priceOfClick') === null ? 40 : +localStorage.getItem('priceOfClick'),
    priceOfColor = localStorage.getItem('priceOfColor') === null ? 50 : +localStorage.getItem('priceOfColor'),
    priceOfProfit = localStorage.getItem('priceOfProfit') === null ? 1 : +localStorage.getItem('priceOfProfit');

blockOfSum.innerHTML = `Сумма: ${sum}`;
textBuyClick.innerHTML = `Купить клик: ${click*2}`;
textPriceOfClick.innerHTML = `Стоимость: ${priceOfClick}`
textPriceOfColor.innerHTML = `Стоимость: ${priceOfColor}`
textChanges.innerHTML = `Цветов сменено: ${changes}`;
textBuyProfit.innerHTML = `Купить доход: ${profit*2}`;
textPriceOfProfit.innerHTML = `Стоимость: ${priceOfProfit}`;

//Событие кликания на квадрат
square.addEventListener('click', clicking);

function clicking(){
    sum+=click;
    localStorage.setItem('sum', sum)
    blockOfSum.innerHTML = `Сумма: ${sum}`;
}

//События покупки увеличения силы клика
buyClick.addEventListener('click', clickIncrease);

function clickIncrease(){
    if (sum>=priceOfClick){

        click*=2;
        localStorage.setItem('click', click);
        textBuyClick.innerHTML = `Купить клик: ${click*2}`;

        sum-= priceOfClick;
        localStorage.setItem('sum', sum);
        blockOfSum.innerHTML = `Сумма: ${sum}`;

        priceOfClick = Math.floor(priceOfClick*2.1);
        localStorage.setItem('priceOfClick', priceOfClick)
        textPriceOfClick.innerHTML = `Стоимость: ${priceOfClick}`
    }
}

//Событие покупки смены цвета
buyColorOfSquare.addEventListener('click', colorChanging);

function colorChanging(){
    if (sum >= priceOfColor){
        square.style.background = getRandomColor();

        sum -= priceOfColor;
        localStorage.setItem('sum', sum);
        blockOfSum.innerHTML = `Сумма: ${sum}`;

        priceOfColor = Math.floor(priceOfColor*2.1);
        localStorage.setItem('priceOfColor', priceOfColor)
        textPriceOfColor.innerHTML = `Стоимость: ${priceOfColor}`;

        changes++;
        localStorage.setItem('changes', changes)
        textChanges.innerHTML = `Цветов сменено: ${changes}`;
    }
}

//Задает случайный цвет квадрата
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//Событие увеличения дохода
buyProfit.addEventListener('click', profitIncrease)

function profitIncrease(){
    if (sum >= priceOfProfit){
        sum -= priceOfProfit;
        localStorage.setItem('sum', sum);
        blockOfSum.innerHTML = `Сумма: ${sum}`;

        profit*=2;
        localStorage.setItem('profit', profit);
        textBuyProfit.innerHTML = `Купить доход: ${profit*2}`;

        priceOfProfit = Math.floor(priceOfProfit*2.3);
        localStorage.setItem('priceOfProfit', priceOfProfit)
        textPriceOfProfit.innerHTML = `Стоимость: ${priceOfProfit}`;
    }
}

setInterval(()=>{
    sum+=profit;
    localStorage.setItem('sum', sum);
    blockOfSum.innerHTML = `Сумма: ${sum}`;
}, 1000)
//Обнуление всего
reset.addEventListener('click', reseting)

function reseting(){
    localStorage.setItem('sum', 0);
    sum = 0;
    blockOfSum.innerHTML = `Сумма: ${sum}`;

    click = 1;
    localStorage.setItem('click', click);
    textBuyClick.innerHTML = `Купить клик: ${click*2}`;

    priceOfClick = 40;
    textPriceOfClick.innerHTML = `Стоимость: ${priceOfClick}`;
    localStorage.setItem('priceOfClick', priceOfClick);

    priceOfColor = 50;
    textPriceOfColor.innerHTML = `Стоимость: ${priceOfColor}`;
    localStorage.setItem('priceOfColor', priceOfColor);

    changes = 0;
    textChanges.innerHTML = `Цветов сменено: ${changes}`;
    localStorage.setItem('changes', changes);

    profit = 1;
    localStorage.setItem('profit', profit);
    textBuyProfit.innerHTML = `Купить доход: ${profit*2}`;

    priceOfProfit = 40;
    textPriceOfProfit.innerHTML = `Стоимость: ${priceOfProfit}`;
    localStorage.setItem('priceOfProfit', priceOfProfit);
}
