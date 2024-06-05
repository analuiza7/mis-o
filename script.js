const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "No futuro do agro, a tecnologia revolucionará a agricultura, aumentando a produtividade e a sustentabilidad.O que você acha que será uma grande inovação para o setor?",
        alternativas: [
            "Uso de drones para monitoramento de lavouras!",
            "Implementação de mais inteligência nos maquinários!"
        ]
    },
    {
        enunciado: "Qual tecnologia vocễ acha que tem maior potencial de transformar a agricultura no futuro ?",
        alternativas: [
            "Uso de robos para monitoramento de lavarouras.",
            "Máquinas agrícolas movidas a carvão.",
     },
    {
        enunciado: "Como você acha que a inteliễncia artificial pode beneficiar o setor agrícula no futuro?",
        alternativas: [
            "Aumentando a eficiência na gestão de fazendas.",
            "Reduzindo a necessidade de águas nas plantações."
        ]
    },
    {
        enunciado: "Quais são os possíveis impactos da nanotecnogia na agricultura do futuro?",
        alternativas: [
            "Melhoria da quantidade dos alimentos e aumento de eficiência na aplicação de fertilizantes.",
            "Aumento da poluição do solo e contaminação dos alimentos ."
        ]
    },
    {
        enunciado: "Além da produção de alimento,o que mais o futuro do agro pode abranger?",
        alternativas: [
           "Bioenergia e produtos farmacêuticos.",
            "Apenas alimentos."
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();
