

import leia from "readline-sync"

/*Crie um programa que execute a validação de uma senha digitada pelo usuário. Caso
ele digite a senha “1234” devemos informar a ele “acesso permitido”. Para qualquer
outra senha digitada, informar “acesso negado”.

console.log("Escreva sua senha: ");
var senha = leia.prompt();

if(senha = 1234){
    console.log("Acesso permitido.");
} else{
    console.log("Acesso negado.");
}*/

/*Desenvolva um programa para descobrir se o número lido no teclado é par ou ímpar.

var numero = leia.questionFloat("Escreva um numero: ");

var paridade = numero %= 2

if(paridade === 0){
    console.log("numero é par.")
}else{
    console.log("numero é impar.")
}*/

/*Faça um algoritmo que leia o último número da placa do carro e mostre o dia em que ele
não pode rodar pela cidade de São Paulo.
a) Final 0 e 1: não pode rodar na segunda-feira;
b) Final 2 e 3: não pode rodar na terça-feira;
c) Final 4 e 5: não pode rodar na quarta-feira;
d) Final 6 e 7: não pode rodar na quinta-feira;
e) Final 8 e 9: não pode rodar na sexta-feira;

var placaVeiculo = leia.question("Informe a placa do seu veiculo: ");

var finalPlaca = placaVeiculo.charAt(placaVeiculo.length - 1);

switch(finalPlaca){
    case "0":
    case "1":
        console.log("não pode rodar na segunda-feira");
    break
    case "2":
    case "3":
        console.log("não pode rodar na terça-feira");
    break    
    case "4":
    case "5":
        console.log("não pode rodar na quarta-feira");
    break
    case "6":
    case "7":
        console.log("não pode rodar na quinta-feira");
    break
    case "8":
    case "9":  
        console.log("não pode rodar na sexta-feira");
    break
    default:
       console.log("Placa invalida.");
}*/

/*As maçãs custam R$0,30 se ele comprar menos de uma dúzia, mas se comprar 12 ou
mais cada uma custa apenas R$0,25. Crie um programa para ler o número de maçãs
que ele vai comprar e informar quanto será o total da compra.

var numMacas = leia.questionInt("Informe a quant. de macas: ");
let totalCompra;


if(numMacas < 12){
    totalCompra = numMacas * 0.30
} else{
    totalCompra = numMacas * 0.25
}

console.log("O total da sua compra foi de: R$" + totalCompra.toFixed(2));*/

/*Escreva um algoritmo que leia o nome de dois clientes de uma loja e o valor (em reais)
que cada um desses clientes pagou por sua compra. O algoritmo deverá escrever: 
(a) o valor total pago pelos dois clientes; 
(b) o valor médio das compras efetuadas; 
(c) os nomes dos clientes que efetuaram compras superiores a 20 reais.


let nomeUser1 = leia.question("Escreva seu nome: ");
let nomeUser2 = leia.question("Escreva seu nome: ");
let totalCompra1 = leia.questionFloat("Informe o total da sua compra: ");
let totalCompra2 = leia.questionFloat("Informe o total da sua compra: ");

let valorTotal = totalCompra1 + totalCompra2;
console.log("o total das compras: R$" + valorTotal)
let mediaTotal = valorTotal / 2;
console.log("a média de gasto: R$" + mediaTotal);

if(totalCompra1 > 20){
    console.log(nomeUser1 + " gastou mais de 20 reais em mercadorias.")
}else{
    console.log(nomeUser1 + " nao gastou mais de 20.")
}

if(totalCompra2 > 20){
     console.log(nomeUser2 + " gastou mais de 20 reais em mercadorias.")
} else{
    console.log(nomeUser2 + " nao gastou mais de 20.")
}*/