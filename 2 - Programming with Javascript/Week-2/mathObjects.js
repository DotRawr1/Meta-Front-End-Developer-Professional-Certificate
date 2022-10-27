Math.PI; // pi
Math.E; // eulers constant
Math.LN2; // natural logarithm of 2

Math.ceil() // rounds up to the closest integer 
Math.floor() // rounds down to the closest integer 
Math.round() // rounds up to the closest integer if the decimal is .5 or above; 
//otherwise, rounds down to the closest integer 
Math.trunc() // trims the decimal, leaving only the integer

Math.pow(2,3) // calculates the number 2 to the power of 3, the result is 8 
Math.sqrt(16) // calculates the square root of 16, the result is 4 
Math.cbrt(8) // finds the cube root of 8, the result is 2 
Math.abs(-10) // returns the absolute value, the result is 10 
Math.log(), Math.log2(), Math.log10() // logarithmic methods
Math.min(9,8,7) // returns 7     Return the minimum and maximum values of 
Math.max(9,8,7) // returns 9     all the inputs
Math.sin(), Math.cos(), Math.tan() // Trigonometric methods

Math.random(); // generates a decimal bwtween 0 amd 0.99

function randomNumber100() {
    var rn1 = Math.random();
    var rn2 = rn1 * 100;
    var rn3 = Math.trunc(rn2);
    return rn3
} // random number 0-100

