var train1 = ["wheat", "barley", "salt", "potato", "rocks"];
// console.log(train1[0])

function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(i+1, arr[i])
    }
}
listArrayItems(train1);


function letterFinder(word,match) {
    for (var i = 0; i < word.length; i++) {
        if (word[i] == match) {
            console.log("Found the", match, "at", i)
        } else {
            console.log("---No match found at", i)
        }
    }
}
letterFinder("test","t")

var fruits = [];
fruits.push("apple"); // ["apple"]
fruits.push("pear"); // ["apple", "pear"]

function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr;
}
var simpleFruitArr = arrayBuilder('apple', 'pear', 'plum');
console.log(simpleFruitArr); // ['apple','pear','plum']