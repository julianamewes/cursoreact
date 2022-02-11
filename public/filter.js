//               0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
/*function callbackFilter(valor, indice, array) {
  if (valor > 10) {
    return true;
  } else {
    return false;
  }
}
const maiorQue10 = numeros.filter(callbackFilter); // .filter é um método
console.log(maiorQue10);

*/

const numerosFiltrados = numeros.filter((valor, indice, array) => {
  console.log(valor, indice, array)
  return valor > 10;
});
console.log(numerosFiltrados);

//o jeito mais adequado na escrita seria:
/* 
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
function maiorQue10 = numeros.filter(function(valor) {
  return valor > 10
}) 

OU FAZER UMA ARROW
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
function maiorQue10 = numeros.filter(valor => valor > 10) 

o " => valor > 10) " é tipo o return os valor maiores que 10  

*/
