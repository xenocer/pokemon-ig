import * as _ from "lodash"
export const pokemonMapping = (data) => {
  const result = _.map(data, pokemon => {
    return {
      id: pokemon.id,
      name: pokemon.name,
      height: pokemon.height,
      weight: pokemon.weight,
      abilities: pokemon.abilities,
      species: pokemon.species,
      sprites: pokemon.sprites,
      picture: pokemon.picture,
      stats: pokemon.stats,
      types: pokemon.types
    }
  })
  return result;
}
export const pokedexNo = (data) => {
  const result = data.number
  return result;
}
