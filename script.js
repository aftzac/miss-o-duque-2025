const caixaPrincpal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas=[
    {
        enunciado:"Qual foi o ultimo brasileiro a ganhar a bola de ouro?",
        alternativas:[
            {
                texto:"Ronaldo Fenômeno",
                afirmação:"Resposta Errada",
                pontos:0
            },
            {
                texto:"Kaká",
                afirmação:"Resposta Correta",
                pontos:1
            }
        ]
    },
    {
        enunciado:"Qual seleção venceu a Copa do Mundo de 2002?",
        alternativas:[
            {
                texto:"Alemanha",
                afirmação:"Resposta Errada",
                pontos:0
            },
            {
                texto:"Brasil",
                afirmação:"Resposta Correta",
                pontos:1
            }
        ]
    },
      {
        enunciado:"Quem é o maior artilheiro da história da Seleção Brasileira?",
        alternativas:[
            {
                texto:"Pelé",
                afirmação:"Resposta Errada",
                pontos:0
            },
            {
                texto:"Neymar",
                afirmação:"Resposta Correta",
                pontos:1
            }
        ]
    },
    {
        enunciado:"Onde foi sediada a Copa do Mundo de 2014?",
        alternativas:[
            {
                texto:"Argentina",
                afirmação:"Resposta Errada",
                pontos:0
            },
            {
                texto:"Brasil",
                afirmação:"Resposta Correta",
                pontos:1
            }
        ]
    }, 
     {
        enunciado:"Qual jogador ganhou a Bola de Ouro pela primeira vez em 2009?",
        alternativas:[
            {
                texto:"Cristiano Ronaldo",
                afirmação:"Resposta Errada",
                pontos:0
            },
            {
                texto:"Messi",
                afirmação:"Resposta Correta",
                pontos:1
            }
        ]
    } ,
]

let atal=0;
let perguntaAtual;
let historiaFinal="";
let pontos=0;

function mostraPerguntas(){
    perguntaAtual=perguntas[atual];
    caixaPerguntas.textContent=perguntaAtual.enunciado;
    caixaAlternativas.textContent="";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent=alternativa.texto;
        botaoAlternativas.addEventListener("click",()=> respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
function respostaSelecionada(alternativa) { 
    const afirmacao = alternativa.afirmacao; 
    historiaFinal = afirmacao; 
    pontos += alternativa.pontos;  
    atual++; 

    if (atual < perguntas.length) { 
        mostraPergunta();  
    } else {
        exibeResultado();  
    }
}

function exibeResultado() { 
    caixaPerguntas.textContent = "Fim do Quiz!"; 
    caixaAlternativas.textContent = "";  
    textoResultado.textContent = `Sua pontuação final é: ${pontos} pontos.`;  

    if (pontos === perguntas.length) {
        textoResultado.textContent += " Parabéns! Você acertou todas as questões!"; 
    } else if (pontos > perguntas.length / 2) {
        textoResultado.textContent += " Bom trabalho, você teve um desempenho legal!"; 
    } else {
        textoResultado.textContent += " Você pode melhorar! Tente novamente!"; 
    }
}

mostraPergunta();