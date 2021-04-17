import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootStore from './store/index'
import {Provider} from "react-redux";
import {createStore} from "redux";

const store = createStore(rootStore);
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
