/*function amIOldEnough(age) {
    if (age = 12) {
        alert(age);
        return 'No, sorry.';
    } else if (age < 18) {
        return 'Only if you are accompanied by an adult.';
    } else {
        return 'Yep, come on in!';
    }
}

amIOldEnough(21)*/
//<< 'No, sorry.'


/*function amIOldEnough(age){
    if (age < 12) {
        alert(age);
        return 'No, sorry.';
    } else if (age < 18) {
        return 'Only if you are accompanied by an adult.';
    }
    else {
        return 'Yep, come on in!';
    }
}

amIOldEnough(21)*/
//<< 'Yep, come on in!'

function amIOldEnough(age) {
    console.log(age);
    if (age < 12) {
        console.log(`In the if with ${age}`);
        return 'No, sorry.';
    } else if (age < 18) {
        console.log(`In the else-if with ${age}`);
        return 'Only if you are accompanied by an adult.';
    } else {
        console.log(`In the else with ${age}`);
        return 'Yep, come on in!';
    }
}

//Throwing Exceptions

function squareRoot(number) {
    'use strict';
    if (number < 0) {
        throw new RangeError(`You can't find the square root of negative numbers`)
    }
    return Math.sqrt(number);
};

//Exception Handling

function imaginarySquareRoot(number) {
    'use strict';
    let answer;
    try {
        answer = String(squareRoot(number));
    } catch (error) {
        answer = squareRoot(-number) + "i";
    } finally {
        return `+ or - ${answer}`;
    }
}