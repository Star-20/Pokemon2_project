

//1.Lets fetch the pokermon API and let put all inside a for loop in order to apply to all 150 pokemon

const fetchPokemon = () =>{
    //console.log("Fetching Pokermon!") i use this one for test.
    const promises = [];
for (let i = 1;  i <=150 ; i++){
    const url =`https://pokeapi.co/api/v2/pokemon/${i}`;
    
    promises.push(fetch(url).then(res => res.json()));
}
   Promise.all(promises).then(results => {
  const pokemon = results.map(data => ({
    name: data.name,
    id: data.id,
    image: data.sprites["front_default"],
    type: data.types.map(type => type.type.name).join(", "),
    Height:data.height,
    Weight:data.weight,
  
  }));
  
  displayPokemon(pokemon);
});
  
};


//2. lets make it dynamic by referncing the ul from the html

const pokemon1 = document.getElementById ("pokemon1");
console.log(pokemon1);

const displayPokemon = (pokemon)=>{
    console.log(pokemon);
//2.2 to list each of 150 pokemon, i rename them pokemon_new
const pokemonHTMLString = pokemon.map((pokemon_new) => `
<li  class="banner">
<img class="banner-image" src="${pokemon_new.image}"/>

<h2 class="banner-title">${pokemon_new.id}. ${pokemon_new.name}</h2>

<p class="banner-info">${pokemon_new.type}</p>
<p class="banner-info">Height:${Math.round(pokemon_new.Height * 3.9)}</p>
<p class="banner-info">Weight:${Math.round(pokemon_new.Weight / 4.3)}</p>


</li>
`).join('');



    //2.1
    //const html = '<li>Bulbasaur</li>'
    //2.1 pokemon1.innerHTML = html;
    //2.2
    pokemon1.innerHTML = pokemonHTMLString;
};
fetchPokemon();



{/*<p class="banner-subtitle">Type:${pokemon_new.type}</p>*/}