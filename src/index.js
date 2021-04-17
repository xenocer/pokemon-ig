import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './store/index'
import {Provider} from "react-redux";
import {applyMiddleware,createStore} from "redux";
import thunk from 'redux-thunk';
import {fetchPokemon} from "./store/reducer/pokemon";

const store = createStore(rootReducer, applyMiddleware(thunk));
store.dispatch(fetchPokemon)
const PokemonApp = () => (
  <Provider store={store}>
    <App/>
  </Provider>
)
ReactDOM.render(
  <PokemonApp/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
