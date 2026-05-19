//        Laço de Repetição - FOR (PARA)
// O professor te colocou de castigo e pediu para você escrever mil vezes a frase
// "Eu vou prestar atenção às aulas e anotar tudo!"

// let i = 0 => primeiro utilizo uma variável de controle
// i < 1000 => condição da repetição
// i++ => aumenta a variável de controle para não travar e somar
for (let i = 0; i < 1000; i++) {
  console.log("Eu vou prestar atenção às aulas e anotar tudo!");
}
console.log("-------------------------------------------------------");

// Escreva todos os números de 1 a 20
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

// Escreva todos os números pares entre 1 e 20
for (let i = 0; i <= 20; i += 2) {
  console.log(i);
}
// outra solução de números pares
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) console.log(i);
  // % => resto da divisão
  // i % 2 == 0 => se o resto da divisão de i por 2 for 0, ele mostra i
}

console.log("-------------------------------------------------------");
// Dado um vetor [array], calcule e exiba o somatório de seus elementos
let numeros = [5, 6, 8, 14, 0, 6, 9, 7, 2];
let soma = 0;

console.log(numeros.length);
// numeros.length => mostra a quantidade de itens do array

for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}
console.log(soma);

// Laço de repetição - While / Do While
// ------------------------------------
// While testa a condição antes de entrar no laço de repetição
// Se a condição for inicialmente falsa, o laço não é executado nenhuma vez.
var x = 11;

while (x > 10) {
  console.log("Entrei no laço While...");
  x = 0;
}
console.log("Terminei!");

// Somar enquanto (While) menor que 10
var somar = 0; // variável para armazenar a soma dos números
var num = 0; // variável para aumentar de 1 em 1

while (num < 10) {
  somar += num;  // somo o número atual com o que já existe na variável
  num++;        // variável de controle para o while funcionar
  console.log('Somando...',somar);
  console.log('Numero...',num);
}

for (let i = 0; i < 10; i++) {
}

var i = 0
while (i < 10) {
  i++
}