function addNums(a, b) {
    console.log(a+b);
}
addNums("1",2); // "12"


try {
    console.log(c + d)
} catch(err) {
    console.log(err)
}
console.log("This line still runs")

//throw new ReferenceError();

//console.log(username);
//Uncaught ReferenceError: username is not defined

//var a "there's no assignment operator here";
//Uncaught SyntaxError: Unexpected string

//"hello".pop() // Uncaught TypeError: "hello".pop is not a function
//TypeError

//(10).toString(2); // '1010'
//Uncaught RangeError: toString() radix argument must be between 2 and 36

//undefined, null, empty

// null = the absence of value
var letters = "abc"
letters.match(/a/);
letters.match(/d/); // null

// undefined
console.log("Jane Smith") // also says undefined, is funtion and we arent returning a value
var noise;
console.log(noise) // undefined
//console.log(noise2) // reference error

var game = {
    score: 100
}
game.score; // undefined, captials matter

//empty
var name1 = ""
var name2 = ''

var str = "Hello";
str.match("jello");