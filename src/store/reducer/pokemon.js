import {
  getPokedexNo,
  getPokemonListData, getPokemonListWithLimit,
  searchListPokemonFromName,
  searchPokemonFromName
} from "../../repository/pokemon";

const initState = {
  pokemonList: [],
  searchList:[],
  selectedPokemon: {
    picture: "",
    height: 0,
    id: 0,
    name: "",
    species: {
      name: "",
      url: ""
    },
    stats: [],
    types: [],
    weight: 0
  },
  pokedexNo: 0
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
    case "GET_POKEDEX_NO":
      return {
        ...state,
        pokedexNo: payload
      }
    case 'CLEAR_SEARCH_LIST':
      return {
        ...state,
        searchList: []
      }
    case 'SEARCH_SELECTED':
      return {
        ...state,
        selectedPokemon: payload
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
export function searchListPokemon(name) {
  return async function saveNewSearchThunk(dispatch, getState) {
    const response = await searchListPokemonFromName(name).then(resp => resp)
    dispatch({ type: 'SEARCH', payload: response })
  }
}
export function searchPokemon(name) {
  return async function savePokemonThunk(dispatch, getState) {
    const response = await searchPokemonFromName(name).then(resp => resp)
    dispatch({ type: 'SEARCH_SELECTED', payload: response })
  }
}
export function fetchPokemonWithLimit(limit) {
  return async function saveListThunk(dispatch, getState) {
    const response = await getPokemonListWithLimit(limit).then(resp => resp)
    dispatch({ type: 'GET_LIST', payload: response })
  }
}
export async function fetchPokedexNo(dispatch, getState) {
  const response = await getPokedexNo().then(resp => {
    return resp
  })
  dispatch({ type: 'GET_POKEDEX_NO', payload: response })
}
