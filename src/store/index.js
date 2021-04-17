import {pokemonReducer} from "./reducer/pokemon";
import {appReducer} from "./reducer/appState";
import {combineReducers} from 'redux'
const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  app: appReducer
})
export default rootReducer;
