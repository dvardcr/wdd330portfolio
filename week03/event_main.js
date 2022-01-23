/*function doSomething(event){
    console.log(event.type);
}*/

//Event Target

/*function doSomething(event) {
    console.log(event.target);
}*/

//Coordinates of an Event

/*function doSomething(event) {
    console.log(`screen: (${event.screenX},${event.screenY}), page: (${event.pageX},${event.pageY}), client: (${event.screenX},${event.screenY})`)
}

addEventListener('click', doSomething);*/

//Mouse Events

const clickParagraph = document.getElementById('click');

clickParagraph.addEventListener('click', () => console.log('click'));
clickParagraph.addEventListener('mousedown', () => console.log('down'));
clickParagraph.addEventListener('mouseup', () => console.log('up'));

const dblclickParagraph = document.getElementById('dblclick');
dblclickParagraph.addEventListener('dblclick', highlight);

function highlight(event) {
    event.target.classList.toggle('highlight');
}

const mouseParagraph = document.getElementById('mouse');
mouseParagraph.addEventListener('mouseover', highlight);
mouseParagraph.addEventListener('mouseout', highlight);

addEventListener('keydown', highlight);
addEventListener('keyup', (event) => console.log(`You stopped pressing the key on ${new Date}`));
/*addEventListener('keypress', (event) => console.log(`You pressed the ${event.key} character`));*/

addEventListener('keydown', (event) => console.log(`You pressed the ${event.key} character`));

//CTRL Key
addEventListener('keydown', (event) => {
    if (event.key === 'c' && event.ctrlKey) {
        console.log('Action canceled!');
    }
});

//Shift Key
addEventListener('click', (event) => {
    if (event.shiftKey) {
        console.log('A Shifty Click!');
    }
});

//addEventListener('touchend', () => console.log('Touch stopped');

//Removing Event Listeners

const onceParagraph = document.getElementById('once');
onceParagraph.addEventListener('click', remove);

function remove(event) {
    console.log('Enjoy this while it lasts!');
    onceParagraph.style.backgroundColor = 'pink';
    onceParagraph.removeEventListener('click', remove);
}

//Stops the page redirecting to the page specified

const brokenLink = document.getElementById('broken');

brokenLink.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('Broken Link!');
});

//Bubbling

ulElement = document.getElementById('list');
liElement = document.querySelector('#list li');

// capturing

ulElement.addEventListener('click', (event) =>
    console.log('capturing - Clicked on ul'), true);

liElement.addEventListener('click', (event) =>
    console.log('capturing - Clicked on li'), true);

// bubbling

ulElement.addEventListener('click', (event) =>
    console.log('bubbling - Clicked on ul'), false);

liElement.addEventListener('click', (event) =>
    console.log('bubbling - Clicked on li'), false);

liElement.addEventListener('click', (event) => {
    console.log('clicked on li');
    event.stopPropagation();
}, false);

//Event Delegation

ulElement.addEventListener('click', highlight);