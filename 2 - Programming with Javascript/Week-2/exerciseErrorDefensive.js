```
function addTwoNums (a,b) {
    try {
        if (typeof(a) != "number") {
            throw new ReferenceError("The first argument is not a number")
        } else if (typeof(b) != "number") {
            throw new ReferenceError("The second argument is not a number")
        } else (console.log(a+b))
    } 
    catch(err) {
        console.log("Error!:", err)
    }
}
addTwoNums(5,"5")
console.log("It still works!")
```

function letterFinder(word, match) {
    var condition1 = typeof(word) == "string" && word.length >= 2
    var condition2 = typeof(match) == "string" && match.length == 1
    if ((condition1 == true) && (condition2 == true)) {
        for(var i = 0; i < word.length; i++) {
            if(word[i] == match) {
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    } else {
        console.log("Please pass correct arguments to the function")
    }
}
letterFinder(4, 20)
letterFinder("cat", "c")