

import leia from "readline-sync"

/*Crie um programa que execute a validação de uma senha digitada pelo usuário. Caso
ele digite a senha “1234” devemos informar a ele “acesso permitido”. Para qualquer
outra senha digitada, informar “acesso negado”.

console.log("Escreva sua senha: ");
var senha = leia.prompt();

if(senha ===1234){
    console.log("Acesso permitido.");
} else{
    console.log("Acesso negado.");
}*/

/*Desenvolva um programa para descobrir se o número lido no teclado é par ou ímpar.

var numero = leia.questionInt("Escreva um numero: ");

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
console.log("o total das compras: R$" + valorTotal);
let mediaTotal = valorTotal / 2;
console.log("a média de gasto: R$" + mediaTotal);

if(totalCompra1 > 20){
    console.log(nomeUser1 + " gastou mais de R$20 em mercadorias.");
}

if(totalCompra2 > 20){
     console.log(nomeUser2 + " gastou mais de R$20 em mercadorias.");
}*/

/*Uma empresa abriu uma linha de crédito para os funcionários. O valor da prestação não
pode ultrapassar 30% do salário. Faça um programa que receba o salário, o valor do
empréstimo e o número de prestações e informe se o empréstimo pode ser concedido.

var salario = leia.questionFloat("informe seu salario: R$");

var emprestimo = leia.questionFloat("quanto deseja pegar emprestado: R$");

var prestaçoes = leia.questionInt("quantas vezes deseja pagar o dinheiro: ");

let valorPrestacao = emprestimo / prestaçoes;
let limiteParcela = salario * 0.30;

if(valorPrestacao >= limiteParcela ){
    console.log("o empréstimo não sera concedido.")
}else{ 
    console.log("o empréstimo será concedido.")
}*/

/*No nosso ano, temos meses que tem 31, 30 e 29/28 dias. Crie um programa que ao receber um
número inteiro representando o mês ele informe quantos dias tem esse mês.

let mes = leia.questionInt("escreva o mes: ");

switch(mes){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("o mes tem 31 dias.");
    break    
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("o mes tem 30 dias.");
    break   
    case 2:
        console.log("o mes tem 28/29 dias, de acordo com o ano.");
    break    
    default:
        console.log("mes invalido, informe um mes válido.");
}*/

/*Faça um programa de computador que realiza o cálculo do salário dos funcionários que é
composto por um salário fixo mais uma certa porcentagem pela qtd de dependentes do
funcionário. Solicite o nome do funcionário, salário fixo e também a quantidade de
dependentes e por fim exiba o seu salário final.
0 Dependente 2%
1 Dependente 5%
2 Dependentes 7%
3 Dependentes 10%
4 ou mais dependentes 15%

var funcionario = leia.question("informe seu nome: ");
var salarioFixo = leia.questionFloat("informe seu salario: R$");
var dependentes = leia.questionInt("informe quantos dependentes voce possui: ");
let percentualDependente;

switch(dependentes){
    case 0:
        percentualDependente = 0.2;
    break 
    case 1:
        percentualDependente =  0.5;
    break     
    case 2: 
        percentualDependente = 0.7;
    break
    case 3:
        percentualDependente = 0.10;
    break
    default:
        percentualDependente = 0.15;
}

let acrescimoSalario = salarioFixo * percentualDependente;
let salarioFinal = salarioFixo + acrescimoSalario;

console.log(`olá, ${funcionario}, seu salário é de  ${salarioFinal.toFixed(2)} reais. `)*/

/*Estamos desenvolvendo o sistema de doações do Criança Esperança. O sistema deve
solicitar para o doador o quanto ele pretende doar. Atualmente existem 3 valores padrões,
são eles: R$10, R$25 e R$50. Caso o doador queira doar um valor diferente, também é
possível através de uma opção que vai solicitar ao usuário um valor. Ao final o sistema deve
mostrar qual o valor doado e também agradecer o doador.

var valorDoacao = leia.question("informe se deseja doar (R$ 10) -- 1, (R$25) --2, (R$50) --3, ou outro valor -- 4  ")
let valorDoado
switch(valorDoacao){
    case "1":
        valorDoado = 10;
    break;
    case "2":
        valorDoado = 25;
    break;
    case "3":
        valorDoado = 50;
    break;
    case "4":
        valorDoado = leia.questionInt("quanto voce deseja doar? : ");
    break;
    default:
         console.log("informe um valor valido.");
}

if (valorDoado !== undefined){
console.log(`Obrigado, voce doou R$${valorDoado.toFixed(2)}`);
}*/

/*Desenvolva um algoritmo, que com base na quantidade de gols feitos por dois times em uma
partida, deve informar se houve EMPATE, ou se foi uma PARTIDA NORMAL ou se houve uma
GOLEADA.
Diferença de gols for 0 – EMPATE
Diferença de gols 1, 2 ou 3 – PARTIDA NORMAL
Diferença de gols > 4 – GOLEADA

var quantGolsA = leia.questionInt("quantos gols o time A fez? ");
var quantGolsB = leia.questionInt("quantos gols o time B fez? ");

let diferencaGols = quantGolsA - quantGolsB;
if(quantGolsA < quantGolsB){
    diferencaGols = quantGolsB - quantGolsA;
}

if(diferencaGols === 0){
    console.log("A partida terminou empatada.");
}else if(diferencaGols >= 1 && diferencaGols < 3){
    console.log("Foi uma partida normal.")
}else{
    console.log("A partida foi uma goleada.")
}*/

/*Você está fazendo um software para o cadastro da viagem da turma. Escreva um programa
que solicite ao usuário sua idade e verifique se ele é maior de idade. Se for maior de idade,
peça o nome completo. Caso contrário, peça a permissão dos pais e depois o nome completo
do usuário

var idadeUser = leia.questionInt("informe sua idade: ");

if(idadeUser >= 18){
    var nome = leia.question("qual o seu nome completo: ");
    console.log(`Olá, ${nome}`)
}else{
    var autorizacao = leia.question("O responsavel permite seu cadastro? pressione [1] para sim e [2] para nao: ");
    switch(autorizacao){
        case "1":
            var nome = leia.question("informe seu nome completo: ");
            console.log(`Olá, ${nome}`)
        break;
        case "2":
            console.log("Permissao negada.");
        break;
        default:
            console.log("Opçao invalida.")
    }
}*/
