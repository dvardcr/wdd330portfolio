import {
    renderNotFound
} from './notfound.js';
import {
    renderPokemonData
} from './utilities.js';

export const pokeCard = document.querySelector('[data-poke-card]');
export const pokeName = document.querySelector('[data-poke-name]');
export const pokeImg = document.querySelector('[data-poke-img]');
export const pokeImgContainer = document.querySelector('[data-poke-img-container]');
export const pokeId = document.querySelector('[data-poke-id]');
export const pokeTypes = document.querySelector('[data-poke-types]');
export const pokeAbilities = document.querySelector('[data-poke-abilities]');
export const pokeEvolution = document.querySelector('[data-poke-evolution]');
export const pokeWeight = document.querySelector('[data-poke-weight]');
export const pokeHeight = document.querySelector('[data-poke-height]');
export const pokeStats = document.querySelector('[data-poke-stats]');
export const pokeDescription = document.querySelector('[data-poke-description]');

export const typeColors = {
    electric: '#FFE600',
    normal: '#CDC9A5',
    fire: '#FF675C',
    water: '#62B1F6',
    ice: '#AFEAFD',
    rock: '#999799',
    flying: '#8AABE4',
    grass: '#228B22',
    psychic: '#FF92BB',
    ghost: '#694489',
    bug: '#9ACD32',
    poison: '#871F78',
    ground: '#D2B074',
    dragon: '#DA627D',
    steel: '#1D8A99',
    fighting: '#2F2F2F',
    fairy: '#F6CCDA',
    default: '#2A1A1F',
};

fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(res => res.json())
    .then(data => fetchPokemon(data))
const fetchPokemon = (res) => {
    const firstArr = [res][0].results
    var select = document.getElementById("selectPokemon");
    firstArr.forEach(function (entry, valueToSelect) {
        var option = document.createElement("option");
        option.value = valueToSelect + 1;
        option.appendChild(document.createTextNode(entry.name));
        select.appendChild(option);
    });
}

export function searchPokemon(event) {
    event.preventDefault();
    var choice = document.getElementById("selectPokemon");
    var pokemonChoice = choice.options[choice.selectedIndex].value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonChoice}`)
        .then(data => data.json())
        .then(response => renderPokemonData(response))
        .catch(err => renderNotFound());

    fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonChoice}`)
        .then(result => {
            result.json()
                .then(data => {
                    const filteredFlavorTextEntries = data.flavor_text_entries.filter(
                        (element) => element.language.name === "en"
                    );

                    const flavorTextEntry = filteredFlavorTextEntries.length > 0 ? filteredFlavorTextEntries[0] : {};

                    const flavorText = flavorTextEntry.flavor_text;
                    pokeDescription.innerHTML = '';
                    const descTextElement = document.createElement("div");
                    descTextElement.textContent = flavorText.replace('', ' ');
                    pokeDescription.appendChild(descTextElement);
                });
        });

    fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonChoice}`)
        .then(response => response.json())
        .then(data => {
            const chainUrl = data.evolution_chain.url;
            fetch(chainUrl)
                .then(response => response.json())
                .then(data => console.log(data.chain.species.name, '\n', data.chain.evolves_to[0].evolution_details[0].trigger.name, '\n', data.chain.evolves_to[0].evolution_details[0].min_level, '\n', data.chain.evolves_to[0].species.name, '\n', data.chain.evolves_to[0].evolves_to[0].evolution_details[0].trigger.name, '\n', data.chain.evolves_to[0].evolves_to[0].evolution_details[0].min_level, '\n', data.chain.evolves_to[0].evolves_to[0].species.name));
        });
}

document.querySelector('button').addEventListener("click", searchPokemon)