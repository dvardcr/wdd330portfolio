import {
    pokeName,
    pokeImg,
    pokeTypes,
    pokeAbilities,
    pokeId,
    pokeWeight,
    pokeHeight,
    pokeStats,
    pokeDescription
} from "./pokedex.js";

export const renderNotFound = () => {
    pokeName.textContent = 'Not found';
    pokeImg.setAttribute('src', 'pokeball.jpg');
    pokeImg.style.background = '#fff';
    pokeTypes.innerHTML = '';
    pokeAbilities.innerHTML = '';
    pokeId.textContent = '';
    pokeWeight.textContent = '';
    pokeHeight.textContent = '';
    pokeStats.textContent = '';
    pokeDescription.textContent = '';
}