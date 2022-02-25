class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
  }

  falar() {
    console.log(`${this.nome} ${this.sobrenome} está dormindo`);
  }
}

const p1 = new Pessoa('Luiz', 'Miranda');
const p2 = new Pessoa('Maria', 'Miranda');
const p3 = new Pessoa('José', 'Miranda');
const p4 = new Pessoa('João', 'Miranda');
console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);

//métodos estáticos:métodos que podem ser acessados na classe sem instaciar a classe (sem usar a palavra new)

class ControleRemoto {
  constructor(tv) { // não está recebendo o volume aqui. Na linha 26, está apenas iniciando o volume
    this.tv = tv;
    this.volume = 0;
  }

  aumentarVolume() {
    this.volume += 2; // ao apertar o volume, vai subir de 2 em 2
  }

  abaixarVolume() {
    this.volume -= 2; // ao apertar o volume, vai subir de 2 em 2
  }
}

const controle1 = new ControleRemoto('TV-LG');
controle1.aumentarVolume(); // aumentou em 2 o volume
controle1.aumentarVolume(); // aumentou em 2 o volume
console.log(controle1);


