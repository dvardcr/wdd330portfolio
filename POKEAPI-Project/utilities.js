import {
    pokeName,
    pokeImg,
    pokeId,
    pokeTypes,
    pokeAbilities,
    pokeWeight,
    pokeHeight,
    pokeStats,
    typeColors,
} from './pokedex.js';

export const renderPokemonData = data => {
    const sprite = data.sprites.front_default;
    const {
        types,
        abilities,
        weight,
        height,
        stats,
    } = data;

    pokeName.textContent = data.name;
    pokeName.className = "poke-name";
    pokeImg.setAttribute('src', sprite);
    pokeId.textContent = `# ${data.id}`;
    pokeId.className = "poke-id";
    renderPokemonTypes(types);
    renderPokemonAbilities(abilities);
    renderPokemonWeight(weight);
    renderPokemonHeight(height);
    renderPokemonStats(stats);
}

export const renderPokemonTypes = types => {
    pokeTypes.innerHTML = '';
    types.forEach(type => {
        const typeTextElement = document.createElement("div");
        typeTextElement.style.color = typeColors[type.type.name];
        typeTextElement.textContent = type.type.name;
        pokeTypes.appendChild(typeTextElement);
    });
}

export const renderPokemonAbilities = abilities => {
    pokeAbilities.innerHTML = '';
    const abilityElement = document.createElement("ul");
    abilityElement.textContent = `Abilities`;
    abilities.forEach(ability => {
        const abilityElementName = document.createElement("li");
        abilityElementName.textContent = `${ability.ability.name}`;
        abilityElement.appendChild(abilityElementName);
        pokeAbilities.appendChild(abilityElement);
    });
}

export const renderPokemonWeight = weight => {
    pokeWeight.innerHTML = '';
    const weightTextElement = document.createElement("div");
    weightTextElement.textContent = `Weight: ${weight/10} kgs`;
    pokeWeight.appendChild(weightTextElement);
}

export const renderPokemonHeight = height => {
    pokeHeight.innerHTML = '';
    const heightTextElement = document.createElement("div");
    heightTextElement.textContent = `Height: ${height/10} m`;
    pokeHeight.appendChild(heightTextElement);
}

export const renderPokemonStats = stats => {
    pokeStats.innerHTML = '';
    stats.forEach(stat => {
        const statElement = document.createElement("div");
        statElement.className = "element";
        const statElementName = document.createElement("div");
        statElementName.className = "stat";
        const statElementAmount = document.createElement("div");
        statElementAmount.className = "num";
        statElementName.textContent = stat.stat.name;
        statElementAmount.textContent = stat.base_stat;
        statElement.appendChild(statElementName);
        statElement.appendChild(statElementAmount);
        pokeStats.appendChild(statElement);
    });
}