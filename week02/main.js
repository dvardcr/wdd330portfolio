const question = "What is Superman's real name?"
const answer = prompt(question);
alert(`You answered ${answer}`);

let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
    console.log("Your number is the square root of " +
        theNumber * theNumber);
} else {
    console.log("Hey. Why didn't you give me a number?");
}

let num = Number(prompt("Pick a number"));

if (num < 10) {
    console.log("Small");
} else if (num < 100) {
    console.log("Medium");
} else {
    console.log("Large");
}

let result = 1;
for (let counter = 0; counter < 10; counter = counter + 1) {
    result = result * 2;
}
console.log(result);

let number = 1;
while (number <= 100) {
    if (number % 15 == 0) {
        console.log("FizzBuzz")
    } else if (number % 3 == 0) {
        console.log("Fizz");
    } else if (number % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(number);
    }

    number += 1;
}

/* This is a solution I found which is simple and lean. */
for (let i = 1; i < 101;) console.log((i++ % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i)

const myArray = [3, 9, 4, 7, 23, 51, 15, 12];
console.log("Original Array: " + myArray);

function numerically(a, b) {
    return a - b;
}

myArray.sort(numerically);
console.log("Ascending Array: " + myArray);

function backwards(a, b) {
    return b - a;
}

myArray.sort(backwards);
console.log("Descending Array: " + myArray);

const romanNumerals = new Map();
romanNumerals.set(1, 'I').set(2, 'II').set(3, 'III').set(4, 'IV').set(5, 'V');
console.log(romanNumerals);
console.log(romanNumerals.size);
console.log(romanNumerals.get(2));

const square = x => x * x;
console.log(square(12));

function sing(song, callback) {
    console.log(`I'm singing along to ${song}.`);
    callback();
}

function dance() {
    console.log("I'm moving my body to the groove.");
}
sing("Blue Moon", dance);

const colors = ['Red', 'Green', 'Blue']
colors.forEach((color, index) =>
    console.log(`Color at position ${index}  is ${color}`));