import {getPokemonListData, getSelectedPokemonData,searchPokemonFromName} from "../../repository/pokemon";

const initState = {
  pokemonList: [],
  searchList:[],
  selectedPokemon: {}
} ;
export const pokemonReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case "SEARCH":
      return {
        ...state,
        searchList: payload
      }
    case "GET_LIST":
      return {
        ...state,
        pokemonList: payload
      }
    case 'CLEAR_SEARCH_LIST':
      return {
        ...state,
        searchList: []
      }
    default:
      return state
  }
}
export async function fetchPokemon(dispatch, getState) {
  const response = await getPokemonListData().then(resp => {
    return resp
  })
  dispatch({ type: 'GET_LIST', payload: response })
}
export function searchPokemon(name) {
  return async function saveNewTodoThunk(dispatch, getState) {
    const response = await searchPokemonFromName(name).then(resp => resp)
    dispatch({ type: 'SEARCH', payload: response })
  }
}
