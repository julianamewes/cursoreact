import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// react renderizando dentro do elemento root através do método ReactDOM
// Um elemento descreve o que você quer ver na tela:
ReactDOM.render(
  // componentes do react (parâmetro da função "render")
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  
  // um elemento do DOM
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
