2 + 3 // Addition
3 - 2 // Subtraction
3 / 2 // Division
3 * 2 // Multiplication
3 > 2 // Greater than
2 < 3 // Less than
2 == 2 // Equal to
3 != 2 // Not equal to

3 > 2 && 3 != 2 // and
3 > 2 || 3 == 2 // or
!(3 > 2) // not (this would return false)

console.log(2+2);
console.log(3*3);
console.log(3>2);
console.log(3>2 || 3==2)
console.log(!(3==3))


// NUMBERS
// 123
// 123.456

10**2 // 100
18 % 8 // 0
9 % 7 // 1

2 * 4 + 8 // 16
2 * (4 = 8) // 24


// STRINGS
"Hello there!"
"Hello there! 123"
"It's a lovely day"

// BOOLEANS
1 < 2 // true
1 > 2 // false
100 == "100" // true
100 === "100" // false
1 != 1 // false
1 !== "1" // true

var petHungry = true;
petHungry = !petHungry;
var petHungry = false;

"inter" + "net" // "internet"
365 + " days" // "365 days"
1 + "2" // 12
5 > 4 > 3; // 5 > 4 is true, true > 3 is false


// practice
var score = 8
console.log("Mid-level skills:", score > 0 && score < 10)

var timeRemaining = 0
var energy = 10
console.log("Game over:", timeRemaining == 0 || energy == 0)

var num1 = 2
var num2 = 5
var test1 = num1 % 2
var test2 = num2 % 2
var result1 = test1 == 0
var result2 = test2 == 0
console.log("Is", num1, "an even number?", result1)
console.log("Is", num2, "an even number?", result2)

var now = "Now in "
var three = 3
var d = "D!"
console.log(now + three + d)

var counter = 0
counter += 5
counter += 3
console.log(counter)