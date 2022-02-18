//
//Length returns the number of parameters a function has.
/*function square(x) {
    return x * x;
}
console.log(`Length parameters of function square: ${square.length}`)*/

//call() method
function sayHello() {
    return `Hello, my name is ${ this.name }.`;
}

const clark = {
    name: 'Clark'
};
const bruce = {
    name: 'Bruce'
};

console.log(sayHello.call(clark))
console.log(sayHello.call(bruce))



square.description = 'Squares a number that is provided as an argument'
console.log(square.description)

//Memoization

function square(x) {
    square.cache = square.cache || {};
    if (!square.cache[x]) {
        square.cache[x] = x * x;
    }
    return square.cache[x]
}

console.log(square(3))
console.log(square(-11))
console.log(square.cache)

//IIFE - Immediately Invoked Function Expression

console.log((function () {
    const temp = 'World';
    console.log(`Hello ${temp}`);
})())

//Temporary Variables

let x = 1;
let y = 2;

(() => {
    const temp = x;
    x = y;
    y = temp;
})();

console.log(x)
console.log(y)
//console.log(temp)

//Destructuring

let [a, b] = [1, 2];
[a, b] = [b, a];

console.log(a)
console.log(b)

//Initialization Code

console.log((function () {
    const name = 'Peter Parker'; // This might be obtained from a cookie in reality
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(),
        today = days[date.getDay()];
    console.log(`Welcome back ${name}. Today is ${today}`);

})())

{
    const name = 'Peter Parker'; // This might be obtained from a cookie in reality
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(),
        today = days[date.getDay()];
    console.log(`Welcome back ${name}. Today is ${today}`);
}

//Creating Self-contained Code Blocks

(function () {
    // block A
    const name = 'Block A';
    console.log(`Hello from ${name}`);
}());

(function () {
    // block B
    const name = 'Block B';
    console.log(`Hello from ${name}`);
}());

//Function Dynamic

function party() {
    console.log('Wow this is amazing!');
    party = function () {
        console.log('Been there, got the T-Shirt');
    }
}

console.log(party())

function party() {
    console.log('Been there, got the T-Shirt');
}

console.log(party())
console.log(party())

//Init-Time Branching

function ride() {
    if (window.unicorn) {
        ride = function () {
            // some code that uses the brand new and sparkly unicorn methods
            return 'Riding on a unicorn is the best!';
        }
    } else {
        ride = function () {
            // some code that uses the older pony methods
            return 'Riding on a pony is still pretty good';
        }
    }
    return ride();
}
console.log(ride())

//Recursive Functions

function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function collatz(n, sequence = [n]) {
    if (n === 1) {
        return `Sequence took ${sequence.length} steps. It was ${sequence}`;
    }

    if (n % 2 === 0) {
        n = n / 2;
    } else {
        n = 3 * n + 1;
    }

    return collatz(n, [...sequence, n]);
}

console.log(collatz(18))

//Callbacks - JavaScript Event-Loop

function wait(message, callback, seconds) {
    setTimeout(callback, seconds * 1000);
    console.log(message);
}

function selfDestruct() {
    console.log('BOOOOM!');
}

wait('This tape will self-destruct in five seconds ... ', selfDestruct, 5);
console.log('Hmmm, should I accept this mission or not ... ?');

wait('This tape will self-destruct immediately ... ', selfDestruct, 0); // This code will run immediately
console.log('Hmmm, should I accept this mission or not ... ?');

//Promise

/*const promise = new Promise((resolve, reject) => {
    // initialization code goes here
    if (success) {
        resolve(value);
    } else {
        reject(error);
    }
});*/


/*const dice = {
    sides: 6,
    roll() {
        return Math.floor(this.sides * Math.random()) + 1;
    }
}

const promise = new Promise((resolve, reject) => {
    const n = dice.roll();
    setTimeout(() => {
        (n > 1) ? resolve(n): reject(n);
    }, n * 1000);
});

/*promise.then(result => console.log(`Yes! I rolled a ${result}`), result => console.log(`Drat! ... I rolled a ${result}`));*/

/*promise.then(result => console.log(`I rolled a ${result}`))
    .catch(result => console.log(`Drat! ... I rolled a ${result}`));*/

//Promise//

const dice = {
    sides: 6,
    roll() {
        return Math.floor(this.sides * Math.random()) + 1;
    }
}

console.log('Before the roll');

const roll = new Promise((resolve, reject) => {
    const n = dice.roll();
    if (n > 1) {
        setTimeout(() => {
            resolve(n)
        }, n * 200);
    } else {
        setTimeout(() => reject(n), n * 200);
    }
});

roll.then(result => console.log(`I rolled a ${result}`))
    .catch(result => console.log(`Drat! ... I rolled a ${result}`));

console.log('After the roll');

//Generalized Functions

/*function random(a, b = 1) {
    // if only 1 argument is provided, we need to swap the values of a and b
    if (b === 1) {
        [a, b] = [b, a];
    }
    return Math.floor((b - a + 1) * Math.random()) + a;
}

console.log(random(6))
console.log(random(10, 20))*/

function random(a, b, callback) {
    if (b === undefined) b = a, a = 1; // if only one argument is supplied, assume the lower limit is 1
    const result = Math.floor((b - a + 1) * Math.random()) + a
    if (callback) {
        result = callback(result);
    }
    return result;
}

//Function returns a Function

function returnHello() {
    console.log('returnHello() called');
    return function () {
        console.log('Hello World!');
    }
}

returnHello();
const hello = returnHello();
hello()


function greeter(greeting = 'Hello') {
    return function () {
        console.log(greeting);
    }
}

const englishGreeter = greeter();
englishGreeter();

const frenchGreeter = greeter('Bonjour');
frenchGreeter();

const germanGreeter = greeter('Guten Tag');
germanGreeter();

//Function Scope

const outside = 'In the global scope';

function fn() {
    const inside = 'In the function scope';
}

console.log(outside)
/*console.log(inside)*/ //>> Error Message

function outer() {
    const outside = 'Outside!';

    function inner() {
        const inside = 'Inside!';
        console.log(outside);
        console.log(inside);
    }
    console.log(outside);
    inner();
}
outer()

function closure() {
    const m = 1.8;
    const n = 32;
    return p => p * m + n;
}

const toFahrenheit = closure();

console.log(toFahrenheit(30))

//Counter

function counter(start) {
    let i = start;
    return function () {
        return i++;
    }
}

const count = counter(1);

console.log(count())
console.log(count())
console.log(count())
console.log(count())

//Fibonacci

function* fibonacci(a, b) {
    let [prev, current] = [a, b];
    while (true) {
        [prev, current] = [current, prev + current];
        yield current;
    }
}

const sequence = fibonacci(1, 1);

/*console.log(sequence.next())
console.log(sequence.next())
console.log(sequence.next())*/

for (n of sequence) {
    // stop the sequence after it reaches 100
    if (n > 10) break;
    console.log(n);
}

//Pure Functions

function reverse(string) {
    return string.split('').reverse().join('');
}

const message = 'Hello JavaScript';
console.log(reverse(message))
console.log(message)

//

let number = 42;
let result = 0;

function impureAdd(x) {
    result = number + x;
}

impureAdd(10)
console.log(result)

//

const numeral = 42;

function pureAdd(x, y) {
    return x + y;
}

result = pureAdd(numeral, 10);

//

function sum(array, callback) {
    if (callback) {
        array = array.map(callback);
    }
    return array.reduce((a, b) => a + b);
}
console.log(sum([1, 2, 3]))
console.log(sum([1, 2, 3], square))

function mean(array) {
    return sum(array) / array.length;
}

console.log(mean([1, 2, 3]))

function variance(array) {
    return sum(array, square) / array.length - square(mean(array))
}

console.log(variance([1, 2, 3]))

//Higher-Order Functions

function multiplier(x) {
    return function (y) {
        return x * y;
    }
}
/*doubler = multiplier(2);
console.log(doubler(10))*/

/*tripler = multiplier(3);
console.log(tripler(10))*/

function power(x) {
    return function (power) {
        return Math.pow(x, power);
    }
}

twoExp = power(2);

console.log(twoExp(5))

//Currying

function multiplier(x, y) {
    if (y === undefined) {
        return function (z) {
            return x * z;
        }
    } else {
        return x * y;
    }
}

const tax = multiplier(0.22, 400);
console.log(tax)