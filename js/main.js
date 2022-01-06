const toggleMenu = () => {
    document.querySelector('#navigation').classList.toggle('display');
}

document.querySelector('#navigation').addEventListener('click', toggleMenu);
