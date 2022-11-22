var currencyOne = 100;// names are CamelCase
var currencyTwo = 0;// first letter of the word is lowercase
var exchangeRate = 1.2;// no spaces, first letter is uppercase
function convertCurrency(amount,rate) {
    return amount * rate;
}
currencyTwo = convertCurrency(currencyOne, exchangeRate)
console.log(currencyTwo)


function getTotal(a,b) {
    return a + b
}
var num1 = 2;
var num2 = 3;
var total = getTotal(num1, num2);


function getDistance(mph, h) {
    return mph * h
}
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);


function getDistance(mph, h) {
    return mph * h
}
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);
console.log(distance);