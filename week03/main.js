/*let user = {
    name: "John",
    age: 30
};

let admin = {
    name: "Richard",
    age: 45
};

function sayHi() {
    console.log("Hello!");
    console.log("I am " + this.name);
};

user.f = sayHi;
admin.f = sayHi;

user.f();
admin.f();*/



/*admin['f']();*/

/*
user = {
    sayHi: function () {
        console.log("Hello!");
    }
};

user.sayHi();

user = {
    sayHi() {
        console.log("Hello!");
    }
};

user.sayHi();*/

/*let calculator = {
    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    },

    read() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());*/

/*let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function () { // shows the current step
        console.log(this.step);
        return this;
    }
};

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0

ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0 */


/*function human(age) {
    this.age = age
}

let greg = new human(22)
let thomas = new human(24)

console.log(greg) // this.age = 22
console.log(thomas) // this.age = 24*/


/*function Human(name) {
    return {
        name,
        getName() {
            return this.name
        }
    }
}

const zell = new Human('Zell')
const vincy = new Human('Vincy')

console.log(zell.getName()) // Zell
console.log(vincy.getName()) // Vincy*/


/*const o = {
    doSomethingLater() {
        const self = this
        setTimeout(function () {
            self.speakLeet()
        }, 1000)
    },
    speakLeet() {
        console.log(`1337 15 4W350M3`)
    }
}*/

/*const o = {
    doSomethingLater() {
        setTimeout(() => this.speakLeet(), 1000)
    },
    speakLeet() {
        console.log(`1337 15 4W350M3`)
    }
}

o.speakLeet();*/


//BIND

function sayThis() {
    console.log(this)
}
const boundFunc = sayThis.bind({
    hippy: 'hipster'
})
boundFunc()

function sayParams(...args) {
    console.log(...args)
}
const boundFunc2 = sayParams.bind(null, 1, 2, 3, 4, 5)
boundFunc2()

const spiderman = {
    name: 'Spider-Man',
    'real name': 'Peter Parker',
    height: 5.10,
    weight: 167,
    hero: true,
    villain: false,
    allies: ['Tony Stark', 'Ned', 'MJ'],
    phrase() {
        return 'With great power comes great responsibility';
    }
};

console.log(spiderman.name)
console.log(spiderman['real' + " " + 'name'])

const hulk = {
    name: 'Hulk',
    ['catch' + 'Phrase']: 'Hulk Smash!'
};

console.log(hulk)

console.log(spiderman.phrase())
/*console.log(spiderman['phrase']())*/

console.log('phrase' in spiderman)

for (const key in spiderman) {
    if (spiderman.hasOwnProperty(key)) {
        console.log(key + ": " + spiderman[key]);
    }
}

spiderman.city = "New York";

for (const [key, value] of Object.entries(spiderman)) {
    console.log(`${key}: ${value}`);
}

const ints = [1, 2, 3];
const evens = ints.filter(function (item) {
    return item >= 2;
});
console.log(ints === evens, evens);

const avengers = {
    ironman: {
        realName: 'Tony Stark'
    },
    captainAmerica: {
        realName: 'Steve Rogers'
    },
    hulk: {
        realName: 'Bruce Banner'
    },
    hawkeye: {
        realName: 'Clint Barton'
    },
    blackWidow: {
        realName: 'Natasha Romanov'
    },
    thor: {
        realName: 'Donald Blake'
    },
}

console.log(avengers)

console.log(avengers.blackWidow.realName)
console.log(avengers['hawkeye']['realName'])
console.log(avengers.hulk['realName'])

function greet({
    greeting,
    name,
    age
}) {
    return `${greeting}! My name is ${name} and I am ${age} years old.`;
}
console.log(greet({
    greeting: `What's up dude`,
    age: 10,
    name: `Bart`
}))

console.log(greet({
    greeting: `Hello`,
    age: 8,
    name: `Lisa`
}))

/*Rolling Dice*/

const dice = {
    sides: 6,
    roll() {
        return Math.floor(this.sides * Math.random()) + 1;
    }
}

console.log(dice.roll())
console.log(dice.roll())
dice.sides = 8;
console.log(dice.roll())

//JSON

const batman = '{"name": "Batman","real name": "Bruce Wayne","height": 74, "weight": 210, "hero": true, "villain": false, "allies": ["Robin","Batgirl","Superman"]}' // JSON string

console.log(JSON.parse(batman)) // The parse() method takes a string of data in JSON format and returns a JavaScript object

console.log(JSON.stringify(spiderman)) // The stringify() method does the opposite, taking a JavaScript object and returning a string of JSON data. Methods are ignored

console.log(JSON.stringify(spiderman, null, " "))

const today = new Date();
console.log(today.toString())

const pattern = /[a-zA-Z]+ing$/;
const pattern2 = new RegExp('[a-zA-Z]+ing');
const language = 'JavaScript';
const pattern3 = new RegExp(language);

const game = {
    start(quiz) {
        this.questions = [...quiz];
        this.score = 0;
        // main game loop
        for (const question of this.questions) {
            this.question = question;
            this.ask();
        }
        // end of main game loop
        this.gameOver();
    },
    ask() {
        const question = `What is ${this.question.name}'s real name?`;
        const response = prompt(question);
        this.check(response);
    },
    check(response) {
        const answer = this.question.realName;
        if (response === answer) {
            alert('Correct!');
            this.score++;
        } else {
            alert(`Wrong! The correct answer was ${answer}`);
        }
    },
    gameOver() {
        alert(`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
    }
}

const quiz = [{
        name: "Superman",
        realName: "Clark Kent"
    },
    {
        name: "Wonder Woman",
        realName: "Diana Prince"
    },
    {
        name: "Batman",
        realName: "Bruce Wayne"
    },
];

game.start(quiz);