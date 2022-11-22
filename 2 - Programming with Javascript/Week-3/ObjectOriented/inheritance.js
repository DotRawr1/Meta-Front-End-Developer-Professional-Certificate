var bird = { // prototype
    hasWings: true,
    canFly: true,
    hasFeathers: true
}
var eagle1 = Object.create(bird);
console.log("Eagle can fly:", eagle1.canFly);
var eagle2 = Object.create(bird);
console.log("Eagle has wings:", eagle2.hasWings);
var penguin1 = Object.create(bird);
penguin1.canFly = false;
console.log("Penguin can fly:", penguin1.canFly);