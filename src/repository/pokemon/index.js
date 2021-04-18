import axiosInstance from "../../common/axios";
import {pokedexNo, pokemonMapping, pokemonSelectedMapping} from "./Mapping/Mapping";
export const getSelectedPokemonData = async (name) => {
  return  axiosInstance.get(`/api/pokemon/ + ${name}`).then(resp => {
    const mappingResult = pokemonMapping(resp);
    return mappingResult;
  })
}
export const getPokemonListData = async () => {
  return axiosInstance.get(`/api/pokemon/listall` ).then(resp => {
    const mappingResult = pokemonMapping(resp.data);
    console.log(mappingResult)
    return mappingResult;
  })
  }
export const getPokemonListWithLimit = async (limit) => {
  return axiosInstance.get(`/api/pokemon/list?limit=${limit}` ).then(resp => {
    const mappingResult = pokemonMapping(resp.data);
    return mappingResult;
  })
}
export const searchListPokemonFromName = async (name) => {
  return  axiosInstance.get(`/api/pokemon/searchList?name=${name}`).then(resp => {
    const mappingResult = pokemonMapping(resp.data);
    return mappingResult;
  })
}
export const searchPokemonFromName = async (name) => {
  return  axiosInstance.get(`/api/pokemon/search?name=${name}`).then(resp => {
    const mappingResult = pokemonSelectedMapping(resp.data);
    return mappingResult;
  })
}

export const getPokedexNo = async () => {
  return axiosInstance.get(`/api/pokedex/number`).then(resp => {
  const mappingResult = pokedexNo(resp.data);
    return mappingResult;
  })
}
