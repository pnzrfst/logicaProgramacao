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
entre os valores digitados*/

let menor, maior
for(var i = 0; i <= 15; i++){
    var numero = leia.questionInt("digite um numero: " + (i+1));
    
    if(i === 0){
        menor = num;
        maior = num;
    }
    if(num < menor ){
        menor = num;
    }
    
    if(num > maior){
        maior = num;
    }

    console.log(`o maior numero foi: ${maior}`);
    console.log(`o menor numero foi: ${menor}`);

}