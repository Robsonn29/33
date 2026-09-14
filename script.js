import {aleatorio} from './aleatorio.js';
import {perguntas} from './perguntas.js';


const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const textoResultado = document.querySelector(".texto-resultado");


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
  if (atual >= perguntas.length) {
    mostraResultado();
    return;
  }

  perguntaAtual = perguntas[atual];

  caixaPerguntas.textContent = perguntaAtual.enunciado;

  mostraAlternativas();
}

function mostraAlternativas() {
  caixaAlternativas.innerHTML = "";

  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativas = document.createElement("button");

    botaoAlternativas.textContent = alternativa.texto;

    botaoAlternativas.addEventListener("click", function () {

      // Escolhe uma afirmação aleatória
      const afirmacaoAleatoria = aleatorio(alternativa.afirmacao);

      // Adiciona somente a afirmação sorteada
      historiaFinal += afirmacaoAleatoria + " ";

      // Vai para a próxima pergunta
      atual++;

      mostraPergunta();
    });

    caixaAlternativas.appendChild(botaoAlternativas);
  }
}

function mostraResultado() {
  caixaPerguntas.textContent = "Seu perfil no futebol:";

  caixaAlternativas.innerHTML = "";

  textoResultado.textContent = historiaFinal;
}



mostraPergunta();
