import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

// a função App está criando um componente react (precisa começar com letra maiúscula)
// o que está dentro de chaves é executado como código, o que está fora de chaves é executado como texto
// todo componente react precisa ter um componente root (raiz)

// estado: dados que o componente utiliza

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {1+1} Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

class App extends Component {
  constructor(props) {
    super(props);
    //super() é pra chamar o constructor da clase component, já que a classe app extende a classe component
    this.state = {
      name: 'Juliana Mewes',
      counter: 0
    };
  }

  handlePClick = () => { //arrow fuction, não precisa delcarar o this fora.
    this.setState({name: 'Morais'});
  }

  handleAClick = (event) => {
    event.preventDefault(); //impede que seja feito o que seria realizado em handleAClick, e garante que será feito oq ue se pede abaixo
    const {counter} = this.state;
    this.setState({counter: counter + 1});

  }

  //quando o estado mudar, a função render será chamada
  render() {
    const {name, counter} = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handlePClick}>
            {name} {counter}
          </p>
          <a
            onClick={this.handleAClick}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Este é o link
          </a>
        </header>
      </div>
    )
  }
}

export default App;
