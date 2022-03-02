import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react';

// para estudar: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

class ContadorHora extends Component {
    constructor(props) {
      super(props);
      this.state = {horaAtual: new Date()};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.contarHora(),
        1000
      );
    }
    //o componente 'ContadorHora' pede ao navegador para configurar um temporizador para chamar o método 
    //'contarHora()' do componente uma vez por segundo.
    //A cada segundo o navegador chama o método 'contarHora()'. 
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
    // Se o componente 'ContadorHora' for removido do DOM, o React chama o método do ciclo de vida 
    // componentWillUnmount() para que o temporizador seja interrompido.
  
    contarHora() {
      this.setState({
        horaAtual: new Date()
      });
    }
    // O componente 'ContadorHora' agenda uma atualização chamando setState() com um objeto contendo a hora atual.
    // Graças à setState(), o método render() será diferente e, portanto, a saída de renderização incluirá a hora atualizada.
  
    //React chama então o método render() do componente 'ContadorHora'. É assim que o React aprende o que deve 
    //ser exibido na tela. React em seguida atualiza o DOM para coincidir com a saída de renderização do Clock.
    render() {
      return (
        <div>
          <h1>Olá</h1>
          <h2>São {this.state.horaAtual.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <ContadorHora />,
    document.getElementById('root')
  );
  // Quando <ContadorHora /> é passado para ReactDOM.render(),o React chama o construtor do componente 'ContadorHora'. 
  //Como ContadorHora precisa exibir a hora atual, ele inicializa this.state 
  //com um objeto incluindo a hora atual. Mais tarde, atualizaremos este state.