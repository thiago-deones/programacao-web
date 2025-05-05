console.log("Esta é uma mensagem de log.");
console.error("esta é uma mensagem de erro");
console.warn("Esta é uma mensagem de alerta");
console.info("Esta é uma menagem de informação");

const pessoa = {
    saudar: function() {
        console.log("Olá meu nome é " + this.nome + " e tenho " + this.idade + " anos.");
    }
}

const usuario = Object.create(pessoa);
usuario.nome = "Lucas";
usuario.idade = 25;

usuario.saudar();


function exemploVariaveis() {
    var bola;
    bola = 2;

    var BOLA;
    BOLA = 8;

    window.console.log(`Valor de bola: ${bola}`);
    window.console.log(`Valor de BOLA: ${BOLA}`);
}

exemploVariaveis();

function exemploFlexivelTipoVariavel() {
    var variavel = 2; // Number
    window.console.log(`Tipo Variavel ${typeof variavel}, Valor de bola: ${variavel}`);

    variavel = "Lucas"; // String
    window.console.log(`Tipo Variavel ${typeof variavel}, Valor de bola: ${variavel}`);

    variavel = true; // Boolean
    window.console.log(`Tipo Variavel ${typeof variavel}, Valor de bola: ${variavel}`);

    variavel = [1, 2, 3, 4, 5]; // Array
    window.console.log(`Tipo Variavel ${typeof variavel}, Valor de bola: ${variavel}`);

    variavel = { nome: "Lucas", idade: 25 }; // Object
    window.console.log(`Tipo Variavel ${typeof variavel}, Valor de bola: ${JSON.stringify(variavel)}`);

    variavel = null; // Null
    window.console.log(`Tipo Variavel ${typeof variavel}, Valor de bola: ${variavel}`);

    variavel = [ [1, 2, 3], [4, 5, 6] ], // Array de Arrays
    window.console.log(`Tipo Variavel ${typeof variavel}, Valor de bola: ${variavel}`);
}

exemploFlexivelTipoVariavel();


function exemploEstruturaLogica() {
    const salario = 950;

    if (salario < 1000) {
        window.console.log("Salário deve ser reajustado.(R$" + salario + ")");
    } else {
        window.console.log("Salário não deve ser reajustado. Pois o seu valor é R$" + salario);
    }
}

exemploEstruturaLogica();

// Certifique-se de que há um elemento <canvas> no HTML com id="canvas"
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Defina as dimensões do canvas
const WIDTH = canvas.width;
const HEIGHT = canvas.height;

// Função para gerar números aleatórios dentro de um intervalo
function random(max) {
    return Math.random() * max;
}

function draw() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    for (var i = 0; i < 100; i++) {
        ctx.beginPath();
        ctx.fillStyle = "rgba(255, 0, 0, 0.5)";
        ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
        ctx.fill();
    }
}

draw();