/*******************
Lista de Exercícios
******************/
/*
Crie uma função que receba a nota de um aluno e
retorne uma mensagem informando sua situação.

    Considere as seguintes regras:

        Nota menor que 5: reprovado
        Nota entre 5 e 6.9: recuperação
        Nota igual ou maior que 7: aprovado

    A função deve retornar uma frase indicando a situação do aluno.

    Extra: Receber 4 notas de 0 a 10, calcule a média e retorne a sua situação ao final do ano (Aprovado, Reprovado ou Recuperação)
*/

// Parte 01 - início da resolução do exercício
console.log("-----------------------------------------");
console.log("                 Solução 01");
console.log("-----------------------------------------");

function verificarSituacao(nota) {
  if (nota < 5) {
    return "Reprovado";
  } else if (nota < 7) {
    return "Recuperação";
  } else {
    return "Aprovado";
  }
}

console.log(verificarSituacao(5));
console.log(verificarSituacao(7));
console.log("-----------------------------------------");
console.log("                 Solução 03");
console.log("-----------------------------------------");

// Parte 02 - solução + parte extra
function situacaoFinal(n1, n2, n3, n4) {
  let media = (n1 + n2 + n3 + n4) / 4;

  if (media < 5) {
    return "Reprovado";
  } else if (media < 7) {
    return "Recuperação";
  } else {
    return "Aprovado";
  }
}
console.log(situacaoFinal(7, 8, 6, 5));
console.log(situacaoFinal(7, 7, 7, 7));

console.log("-----------------------------------------");
console.log("                 Solução 03");
console.log("-----------------------------------------");

function final(n1, n2, n3, n4) {
  let media = (n1 + n2 + n3 + n4) / 4;
  let situacao;

  if (media < 5) situacao = "Reprovado";
  else if (media < 7) situacao = "Recuperação";
  else situacao = "Aprovado";

  return "Média: " + media + " - Situação: " + situacao;
}
console.log(final(7, 8, 6, 5));
