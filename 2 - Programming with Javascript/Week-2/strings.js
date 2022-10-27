var greet = "Hello, ";
var place = "World"

greet.length; // 7
greet.charAt(0); // 'H'
"Wo".concat("rl").concat("d"); // 'World'
"ho-ho-ho".indexOf('h'); // 0
"ho-ho-ho".indexOf('o'); // 1
"ho-ho-ho".indexOf('-'); // 2
"ho-ho-ho".split("-"); // ['ho', 'ho', 'ho']
greet.toUpperCase(); // "HELLO, "
greet.toLowerCase(); // "hello, "

var letters = ["a", "b", "c"]
for (var i = 0; i < letters.length; i++) {
    console.log(letters[i])
}
var letters2 = "abc"
for (var i = 0; i < letters2.length; i++) {
    console.log(letters2[i])
}

var veggies = ["onion", "parsley", "carrot"];
console.log(veggies.length) // 3
veggies.pop("parsley")

var greeting = "Howdy";
console.log(greeting.length); //5

var greet = "Hello "
var user = "Lisa"
console.log(greet+user); //Hello Lisa
console.log(greet.concat(user)); //Hello Lisa