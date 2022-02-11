//declaração de função
function FalaOi() {
  console.log('Oi');
}
FalaOi();

// as função são objetos de primeira classe (first class objects) - pode ser tratada como um dado 
// criar uma função como um dado (function expression)

const souUmDado = function () { // assim, a função é o resultado de uma costante(a constante recebe a função como dado)
  console.log('sou um dado!');
};
souUmDado();

//receber uma função como parÂmetro
function executaFuncao(funcao) { // a 'funcao' é a variavel que será recebida como parâmetro, e nesse caso o parâmetro é um função)
  funcao();
};
console.log('aqui também sou um dado');
executaFuncao();

// arrow functions
const arrowFunction = () => {
  console.log('sou uma arrow function');
};
arrowFunction();
