`Hello, World!` // template string, aka template literal

// console.log(`${greet} ${place} !`) // easier than
// console.log(greet + " " + place + "!");

// `Hello,
// World
// !
// ` // also good syntax

// "Hello,
// World" // would throw a syntax error

console.log(`${1 + 1 + 1 + 1 + 1} stars!`) // 5 stars!

let multiLine = `
Using ES6 backticks,
multi-line strings
are possible!
`;
console.log(multiLine)

let first = `This is a sentence.`;
let second = `Template literals make joining things easier!`
console.log(`${first} This is another sentence. ${second}`)