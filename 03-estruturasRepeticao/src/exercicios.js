import leia from "readline-sync";

/*Faça um algoritmo que leia um número e mostre os números de 0 até o valor informado pelo
usuário.

let numeroUsuario = leia.questionInt("digite o numero: ");

for(var contagem = 0; contagem <= numeroUsuario; contagem++ ){
    console.log(contagem);
}*/

/*Faça um programa que leia um número e mostre os números de do valor informado até 0.

let  numeroUsuario = leia.questionInt("digite um numero: ");

while(numeroUsuario >= 0){
    console.log(numeroUsuario);
    numeroUsuario--
}*/

/*Escreva um algoritmo que conta os números entre 1000 e 1999 e mostra apenas aqueles que
divididos por 11 dão resto 5.

var i = 1000

while(i <= 1999){
   if(i % 11 === 5 ){
    console.log(i)
   }
   i++
}*/

/*Escreva um algoritmo que leia 15 valores inteiros e, ao final, mostre qual foi o maior e o menor
entre os valores digitados

let menor, maior
for(var i = 0; i <= 15; i++){
    var numero = leia.questionInt("digite um numero: ");
    
    if(i === 0){
        menor = numero;
        maior = numero;
    }
    if(numero < menor ){
        menor = numero;
    }
    
    if(numero > maior){
        maior = numero;
    }

    console.log(`o maior numero foi: ${maior}`);
    console.log(`o menor numero foi: ${menor}`);
}*/

/*Você está desenvolvendo um software para calcular preços do xerox de uma papelaria. Cada
cópia custa R$0,33. Crie um algoritmo que mostre os valores de quanto custa 1 cópia até
quanto custa 500 cópias.

var quantidadeCopias = 1;

do{
    var precoTotal = quantidadeCopias * 0.33;
    console.log(`copia: ${quantidadeCopias}, preco ${precoTotal.toFixed(2)}`);
    quantidadeCopias++
}while(quantidadeCopias <= 500)*/

/*Crie um algoritmo para mostrar a tabuada de um número até 10. Você deve solicitar ao
usuário o número do qual ele deseja a tabuada. O algoritmo deve mostrar a tabuada de um
número que ele digitar

var numeroEscolhido = leia.questionInt("Digite um numero: ");

let tabuada = 0 

do{
    var resultadoExpressao = numeroEscolhido * tabuada
    console.log(`${numeroEscolhido} * ${tabuada} = ${resultadoExpressao}`)
    tabuada++

}while(tabuada <= 10 )*/

/*Contagem de 10 até 500, depois de 900 até 1000, usando apenas um laço de repetição.

var contador = 10 

while(contador <= 1000){
    if(contador <= 500 || contador >= 900){
        console.log(contador);
    }
    contador++
}*/

/*Crie um algoritmo para que o usuário entre com 6 números inteiros e positivos e mostre a
soma dos números ímpares e o produto (multiplicação) dos números pare

let multiplicacao = 1
let soma = 0

for(var contador = 1; contador <= 6; contador++){
    var numero = leia.questionInt("digite um numero: ");

    if(numero % 2 === 0){
        multiplicacao = multiplicacao * numero;
    }else{
        soma = soma + numero;
    }
}   
console.log(`a multiplicacao dos numeros pares foi de: ${multiplicacao}`);
console.log(`a soma dos impares foi de: ${soma}`);*/

/*Faça um algoritmo que leia vários números e informe quantos números entre 100 e 200
foram digitados (o 100 e o 200 não contam), para as leituras quando o valor 0 (zero) for lido.

let contador = 0

do{
    var numero = leia.questionInt("digite um numero: ");
    if(numero > 100 && numero < 200){
        contador++
        console.log(`foram digitados ${contador} numero(s).`)
    }else if(numero <= 100 || numero >= 200){
        console.log("por favor, insira um numero valido.")
    }
     
}while(numero !== 0)*/


/*Valentina tem 1.50m e cresce 2 centímetros por ano, enquanto Joãozinho, seu irmão mais
novo, tem 1.40m e cresce 3 centímetros por ano. Crie um algoritmo que mostre quando
(quantos anos) Enzo será mais alto que Valentina.*/

var alturaVal = 1.50
var alturaJoao = 1.40
var anos = 0 


while(alturaVal >= alturaJoao){
    alturaVal += 0.02;
    alturaJoao += 0.03;
    anos++
}

console.log(`A altura da Valentina ${alturaVal.toFixed(2)}`);
console.log(`A altura do Joao ${alturaJoao.toFixed(2)}`);
console.log(`Vão demorar ${anos} anos para Joao ser mais alto Valentina.`);