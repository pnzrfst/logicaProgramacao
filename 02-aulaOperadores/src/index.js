/*import ler from "readline-sync"


console.log("escreva seu nome");

var nome = ler.prompt();

console.log("Olá, " + nome); */

import leia from "readline-sync"


console.log("qual o total (em R$) arrecadado com as 5 corridas: ");

var totalArrecadado = Number(leia.prompt());

var totalDesconto = totalArrecadado * 0.25; 

var ganhoReal = totalArrecadado - totalDesconto;

console.log("o seu ganho real foi de: R$ " + ganhoReal );









