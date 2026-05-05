// Criando função para gerar frases aleatórias
function falar() {
  // Criando vetor de frases
  const frases = [
    "Hoje está um dia bonito!",
    "Falta muito para sexta-feira?",
    "Qual o cardápio de hoje no almoço?",
    "Vish, tem prova de matemática.",
  ];

  // Criando uma variável para armazenar a DIV com id "tagarela"
  let tagarela = document.getElementById("tagarela");

  // Criando variável de controle para a frase exibida
  let controle = 0;

  // Gerando número aleatório entre 0 e 1 (lembrando que o 1 não entra na contagem)
  let numero = Math.random();

  // Obtendo o índice da frase a ser usada
  if (numero > 0.75) controle = 3;
  else if (numero > 0.5) controle = 2;
  else if (numero > 0.25) controle = 1;

  // Alterando o conteúdo da DIV "tagarela"
  tagarela.innerHTML = frases[controle];
}
