//const form = document.forms[0];
//const form = document.getElementsByTagname('form')[0];
//const form = document.forms['search'];
//const [input, button] = form.elements;
const input = form['searchInput']

//Focus
//const input = form.elements.searchInput;
//input.addEventListener('focus', () => alert('focused'), false);

//Blur
//input.addEventListener('blur', () => alert('blurred'), false);

//Change
//input.addEventListener('change', () => alert('changed'), false);

//Submit
const form = document.forms['search'];
form.addEventListener('submit', search, false);

/*function search() {
    alert(' Form Submitted');
}*/

//Stop the form from being submitted

/*function search(event) {
    alert('Form Submitted');
    event.preventDefault();
}*/

//Value

/*function search(event) {
    alert(`You Searched for: ${input.value}`);
    event.preventDefault();
}*/

//input.value = 'Search Here';

input.addEventListener('focus', function () {
    if (input.value === 'Search Here') {
        input.value = ''
    }
}, false);

input.addEventListener('blur', function () {
    if (input.value === '') {
        input.value = 'Search Here';
    }
}, false);