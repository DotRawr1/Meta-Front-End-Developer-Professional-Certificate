// spread
// no need to list array elements
// clear and easy to type syntax
let top3 = [
    "The Colosseum",
    "Trevi Fountain",
    "The Vatican City"
]
function showItinerary(place1, place2, place3) {
    console.log("Visit " + place1);
    console.log("Then visit " + place2);
    console.log("Finish with a visit to " + place3);
}
showItinerary(...top3);


// rest
const top7 = [
    "The Colosseum", // first
    "The Roman Forum", // second
    "The Vatican", // third
    "Trevi Fountain", // secondVisit
    "The Pantheon", // secondVisit
    "Piazza Venezia", // secondVisit
    "The Palatine Hill" // secondVisit
]
const [] = top7;
const [first, second, third, ...secondVisit] = top7;


// function addTaxToPrices(taxRate, ...itemsBought) {
    // return itemsBought.map(item => taxRate * item) }
// let shoppingCard = addTaxToPrices(1,1, 46, 89, 35, 79);
// console.log(shoppingCart);

///////////////////////////////////////////////////////////////////

const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruits, ...berries] // concatenate
console.log(fruitsAndBerries); // ['apple', 'pear', 'plum', 'blueberry', 'strawberry']


const flying = { wings: 2 }
const car = { wheels: 4 }
const flyingCar = {...flying, ...car}
console.log(flyingCar) // {wings: 2, wheels: 4}


let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies);// ['onion', 'parsley', 'carrot', 'beetroot']


const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']


const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1}
car1.speed = 201
console.log(car1.speed, car2.speed) // 201, 200


const fruits1 = ['apples', 'pears']
const fruits2 = [...fruits]
fruits1.pop()
console.log(fruits1, "not", fruits2) // ['apples'] 'not' ['apples','pears']