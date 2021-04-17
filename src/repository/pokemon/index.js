import {axiosInstance} from "../../common/axios";
import {pokemonMapping} from "./Mapping/Mapping";

async function getSelectedPokemonData(name) {
  await axiosInstance.get(`/pokemon/ + ${name}`).then(resp => {
    const mappingResult = pokemonMapping(resp);
    return mappingResult;
  })
}
async function getPokemonListData(limit= 50, offset=0) {
  await axiosInstance.get(`/pokemon/list?limit=${limit}&&offset=${offset}` ).then(resp => {
    const mappingResult = pokemonMapping(resp);
    return mappingResult;
  })
}
