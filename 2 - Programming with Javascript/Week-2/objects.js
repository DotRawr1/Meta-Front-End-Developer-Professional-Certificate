var storeManager = {}
storeManager.rangeTilesPerTurn = 4;
storeManager.socialSkills = 50;
storeManager.streetSmarts = 50;
storeManager.health = 30;
storeManager.specialAbility = "finding business opportunities";
storeManager.greeting = "Let's make some money";
// greeting = 50;
// greeting = property key
// 50 = property value

var assistantManager = {
    rangeTilesPerTurn: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40,
    specialAbility: "young and ambitious",
    greeting: "Let's make some money"
}

storeManager.nextAchievment = "open a new store";
assistantManager.nextAchievment = "get promoted";

var table = {
    legs: 3,
    color: "brown",
    priceUSD: 100,
}
console.log(table.color); // 'brown'


var car = {};
car.color = "red";
car["color"] = "green";
car["speed"] = 200;
car.speed = 100;
car["number of doors"] = 4; //spaces can be added
car["2022"] = 1901;

var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}
//100, 200, red