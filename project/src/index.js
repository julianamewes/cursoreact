import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/global-styles.css';


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




