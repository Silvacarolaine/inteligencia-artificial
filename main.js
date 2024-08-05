const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "racismo é derivado de algo cultural ou histórico ?",
        alternativas: [
            "cultural",
            "foi definido que uma cultura é melhor que a outra"
        ]
    },
    {
        enunciado: "Qual é o papel da educação na luta contra o racismo?",
        alternativas: [
            "A educação é fundamental para conscientizar as pessoas sobre as consequencias sobre racismo",
            "Não é importante, pois a obrigação das escolas é ensinar apenas a gratitude escolar"
        ]
    },
    {
        enunciado: "Como o racismo se manifesta no dia a dia?",
        alternativas: [
            "O racismo pode se manifestar atraves de comentarios ofensivos, brincadeiras, microagressoẽs, dificuldades de acessos a empregos, saude ea educação",
            "O racismo não se manifesta no dia a dia."
        ]
    }
];

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

mostraPergunta();
