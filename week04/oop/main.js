//Constructor Function

/*const Dice = function (sides = 6) {
    this.sides = sides;
    this.roll = function () {
        return Math.floor(this.sides * Math.random() + 1)
    }
}*/

//Class Declaration

/*class Dice {
    constructor(sides = 6) {
        this.sides = sides;
    }

    roll() {
        return Math.floor(this.sides * Math.random() + 1)
    }
    static description() {
        return 'A way of choosing random numbers'
    }
}

const blueDice = new Dice(20);

console.log(blueDice instanceof Dice)

console.log(blueDice.sides)

console.log(blueDice.roll())

console.log(blueDice.constructor)

const literalObject = {};

console.log(literalObject.constructor)

//

const greenDice = new blueDice.constructor(10);

console.log(greenDice instanceof Dice)

console.log(Dice.description())

// This code will give an error because static methods are not available to instances of the class
//console.log(blueDice.description())

/*class Turtle {
    constructor(name, color) {
        this.name = name;
        this.weapon = 'hands';
        let _color = color;
        this.setColor = color => {
            return _color = color;
        }
        this.getColor = () => _color;
    }
    sayHi() {
        return `Hi dude, my name is ${this.name}`;
    }
    attack() {
        return `Feel the power of my ${this.weapon}!`;
    }
}

const leo = new Turtle('Leonardo');
console.log(leo.sayHi(), leo.attack())

//Using prototype will allow me 

console.log(Turtle.prototype)
Turtle.prototype.weapon = 'Hands';
Turtle.prototype.attack = function () {
    return `Feel the power of my ${this.weapon}!`;
}

//<this> in the prototype always refers to the instance that actually calls the method.

//const raph = new Turtle('Raphael');

//console.log(raph.attack())

//console.log(Object.getPrototypeOf(raph))

//Own Property

//console.log(raph.hasOwnProperty('name'))


//Prototype Property

//console.log(raph.hasOwnProperty('attack'))

const don = new Turtle('Donatello');

console.log(don.attack())

console.log(leo.weapon, leo.attack())

console.log(Turtle.prototype.weapon = 'Feet')
console.log(leo.weapon, leo.attack())
leo.weapon = 'Katana Blades';
//raph.weapon = 'Sai';
don.weapon = 'Bo Staff';

//console.log(leo, raph, don)
console.log(leo.attack())
//console.log(raph.attack())
console.log(don.attack())

Turtle.prototype.food = 'Pizza';
Turtle.prototype.eat = function () {
    return `Mmm, this ${this.food} tastes great!`;
}

console.log(leo.eat())

const mike = new Turtle('Michaelangelo');
console.log(mike.eat())
mike.weapon = 'Nunchakus';
console.log(mike.attack())

raph = new Turtle('Raphael', 'Red');
console.log(raph.getColor())
console.log(Object.getPrototypeOf(raph))
console.log(Object.getPrototypeOf(Object.getPrototypeOf(raph)))*/

/*class Turtle {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        return `Hi dude, my name is ${this.name}`;
    }

    swim() {
        return `${this.name} paddles in the water`;
    }
    toString() {
        return `A turtle called ${this.name}`;
    }
}

class NinjaTurtle extends Turtle {
    constructor(name) {
        super(name);
        this.weapon = 'hands';
    }
    attack() {
        return `Feel the power of my ${this.weapon}!`
    }
}

raph = new Turtle('Raphael');
console.log(raph.toString())

Number.prototype.isEven = function () {
    return this % 2 === 0;
}

Number.prototype.isOdd = function () {
    return this % 2 === 1;
}

console.log(42..isEven())
console.log(765234..isOdd())

Array.prototype.first = function () {
    return this[0];
}

Array.prototype.last = function () {
    return this[this.length - 1];
}

const turtles = ['Leonardo', 'Donatello', 'Michaelangelo', 'Raphael '];
console.log(turtles.first())
console.log(turtles.last())

class myArray extends Array {
    constructor(...args) {
        super(...args);
    }
    delete(i) {
        return this.splice(i, 1);
    }
}
const list = new myArray(1, 2, 3);
list.delete(1);
console.log(list)

const me = {
    name: 'DAZ'
};
me.age = 21;
Object.defineProperty(me, 'eyeColor', {
    value: 'blue',
    writable: false,
    enumerable: true
});
console.log(Object.getOwnPropertyDescriptor(me, 'name'))
me.eyeColor = 'purple'
console.log(me.eyeColor)
me.retirementAge = 65;
Object.defineProperty(me, 'yearsToRetirement', {
    get() {
        if (this.age > this.retirementAge) {
            return 0;
        } else {
            return this.retirementAge - this.age;
        }
    },
    set(value) {
        this.age = this.retirementAge - value;
        return value;
    }
});

console.log(me.yearsToRetirement)
me.yearsToRetirement = 10;
console.log(me.age)*/

class Dice {
    constructor(sides = 6) {
        Object.defineProperty(this, 'sides', {
            get() {
                return `This dice has ${sides} sides`;
            },
            set(value) {
                if (value > 0) {
                    sides = value;
                    return sides;
                } else {
                    throw new Error('The number of sides must be positive');
                }
            }
        });

        this.roll = function () {
            return Math.floor(sides * Math.random() + 1)
        }
    }
}

const yellowDice = new Dice;
console.log(yellowDice.sides)
yellowDice.sides = 10;
console.log(yellowDice.sides)
//yellowDice.sides = 0; // This code will display the error recorded in the function
//console.log(yellowDice.sides)

const Human = {
    arms: 2,
    legs: 2,
    walk() {
        console.log('Walking');
    }
}
const lois = Object.create(Human);
console.log(lois.arms)
console.log(lois.legs)
lois.walk()

lois.name = 'Lois Lane';
console.log(lois.name)

lois.job = 'Reporter';
console.log(lois.job)

const Superhuman = Object.create(Human);

Superhuman.change = function () {
    return `${this.realName} goes into a phone box and comes out as ${this.name}!`;
};

Superhuman.name = 'Name needed';
Superhuman.realName = 'Real Name Needed';

const superman = Object.create(Superhuman)
superman.name = 'Superman';
superman.realName = 'Clark Kent';
console.log(superman.change())

Superhuman.init = function (name, realName) {
    this.name = name;
    this.realName = realName;
    this.init = undefined; // this line removes the init function, so it can only be called once
    return this;
}

const batman = Object.create(Superhuman);
batman.init('Batman', 'Bruce Wayne');
console.log(batman.change())

const aquaman = Object.create(Superhuman).init('Aquaman', 'Arthur Curry');

console.log(aquaman.change())
superman.walk()

//Mixins

const x = {};
const y = {
    name: 'JavaScript'
};
Object.assign(x, y);
console.log(x.name)
console.log(y.name)

//Mixin Function

function mixin(target, ...objects) {
    for (const object of objects) {
        if (typeof object === 'object') {
            for (const key of Object.keys(object)) {
                if (typeof object[key] === 'object') {
                    target[key] = Array.isArray(object[key]) ? [] : {};
                    mixin(target[key], object[key]);
                } else {
                    Object.assign(target, object);
                }
            }
        }
    }
    return target;
}

const a = {},
    b = {
        foo: 'bar'
    },
    c = {
        numbers: [1, 2, 3]
    };

console.log(mixin(a, b, c))
c.numbers.push(4);
console.log(a.numbers)
console.log(c.numbers)

const wonderWoman = Object.create(Superhuman);
mixin(wonderWoman, {
    name: 'Wonder Woman',
    realName: 'Diana Prince'
});
console.log(wonderWoman.change())

function copy(target) {
    const object = Object.create(Object.getPrototypeOf(target));
    mixin(object, target);
    return object;
}

const bizarro = copy(superman);
bizarro.name = 'Bizarro';
bizarro.realName = 'Subject B-0';
console.log(bizarro.change())

//Factory Functions

function createSuperhuman(...mixins) {
    const object = copy(Superhuman);
    return mixin(object, ...mixins);
}

const hulk = createSuperhuman({
    name: 'Hulk',
    realName: 'Bruce Banner'
});
console.log(hulk.change())

const flight = {
    fly() {
        console.log(`Up, up and away! ${this.name} soars through the air!`);
        return this;
    }
}

const superSpeed = {
    move() {
        console.log(`${this.name} can move faster than a speeding bullet!`);
        return this;
    }
}

const xRayVision = {
    xray() {
        console.log(`${this.name} can see right through you!`);
        return this;
    }
}
mixin(superman, flight, superSpeed, xRayVision);
mixin(wonderWoman, flight, superSpeed);

console.log(superman.xray())
console.log(wonderWoman.fly())

const flash = createSuperhuman({
    name: 'Flash',
    realName: 'Barry Allen'
}, superSpeed);

console.log(flash.change())
flash.move()

//Chaining Function

superman.fly().move().xray();

//Binding This

superman.friends = [batman, wonderWoman, aquaman]

superman.findFriends = function () {
    const that = this;
    this.friends.forEach(function (friend) {
        console.log(`${friend.name} is friends with ${that.name}`);
    });
}

superman.findFriends();

superman.findFriends = function () {
    this.friends.forEach(function (friend) {
        console.log(`${friend.name} is friends with ${this.name}`);
    }.bind(this))
}

superman.findFriends();

superman.findFriends = function () {
    for (const friend of this.friends) {
        console.log(`${friend.name} is friends with ${this.name}`);
    };
}

superman.findFriends();

superman.findFriends = function () {
    this.friends.forEach((friend) => {
        console.log(`${friend.name} is friends with ${this.name}`);
    });
}

superman.findFriends();