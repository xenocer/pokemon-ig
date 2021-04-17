const initState = {
  pokemonList: [],
  selectedPokemon: {}
} ;
export default (state = initState, { type, payload }) => {
  switch (type) {
    case 'SEARCH':
      return state
    case 'GET_LIST':
      return state
    default:
      return state
  }
}
