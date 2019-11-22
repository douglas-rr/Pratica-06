document.write("<h1>Média Aritmética</h1><button onclick='media ()''>Calcular média</button>")

var x = parseInt(prompt("Informe a quantidades de números para média:"));
var soma = 0;

function media() {
    document.write("<h1>Média Aritmética</h1>")

    var i, vet = new Array(x);

    for (i = 0; i < vet.length; i++) {
        vet[i] = parseInt(prompt("Informe um número: "))
    }

    for (i = 0; i < vet.length; i++) {
        document.write("<div class='resultado'>O " + (i + 1) + "° valor informado = " + vet[i] + "</div><br/>");

        soma += vet[i];

    }

    document.write("<br/>");
    document.write(`<div class='resposta'>A Média Aritmética dos ${x} valores é: ${parseFloat(soma)/x} </div>`);
}