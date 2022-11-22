// var variables can be accessed before initializaion
// as long as they are declared somewhere, at some point
console.log(userVar);
var user;
// vars can be declared and redeclared without issue
var userVar = "Jesus";
var userVar = "Mary";
var userVar = "Joseph";
console.log(user);

// you cannot access a let variable before declaration
// console.log(userLet); // error
// let userLet;
// you can declare an unassigned variable with let
let userLet;
console.log(userLet);
// you cannot redeclare a let variable
// let userLet = "Jack"; // error
// you can reassign a let variable
userLet = "Ralph";
console.log(userLet);

// const must be initialized first
// console.log(userConst); // error
// const userConst;
// you cannot redclare a const
// userConst = "Sally" // error