const form = document.forms['hero'];
form.addEventListener('submit', makeHero, false);

function makeHero(event) {

    event.preventDefault(); // prevent the form from being submitted

    const hero = {}; // create an empty object

    hero.age = form.age.value;

    hero.city = form.city.value;

    hero.name = form.heroName.value; // create a name property based on the input field's value

    hero.realName = form.realName.value;

    hero.powers = [...form.powers].filter(box => box.checked).map(box => box.value);

    hero.origin = form.origin.value;

    alert(JSON.stringify(hero)); // convert object to JSON string and display in alert dialog
    return hero;
}

//Required field with validation

form.addEventListener('submit', validate, false);

function validate(event) {
    const firstLetter = form.heroName.value[0];
    if (firstLetter.toUpperCase() === 'X') {
        event.preventDefault();
        alert('Your name is not allowed to start with X!');
    }
}

//Immediate validation before submission

const label = form.querySelector('label');
const error = document.createElement('div');
error.classList.add('error');
error.textContent = '! Your name is not allowed to start with X.';
label.append(error);

function validateInline() {
    const heroName = this.value.toUpperCase();
    if (heroName.startsWith('X')) {
        error.style.display = 'block';
    } else {
        error.style.display = 'none';
    }
}

form.heroName.addEventListener('keyup', disableSubmit, false);

/*function disableSubmit(event) {
    if(event.target.value === ''){
        document.getElementById('submit').disabled = true;
    } else {
        document.getElementById('submit').disabled = false;
    }
}*/

/*hero.powers = [];
for (let i = 0; i < form.powers.length; i++) {
    if (form.powers[i].checked) {
        hero.powers.push(form.powers[i].value);
    }
}*/



//document.forms.hero.powers[0].checked = true;