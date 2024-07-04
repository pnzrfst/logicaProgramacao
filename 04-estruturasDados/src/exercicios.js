import leia from "readline-sync";


/*
var contador = 0;

do{ 
    var idade = leia.questionInt("digite sua idade: ");
    contador++
    const lista = [];
    lista.push(idade)

    for(var i = 0; i <= 5; i++){
    if(lista[i] >= 18){
        console.log("voce pode beber.");
    }else{
        console.log("voce nao pode beber");
    }
    }
}while(contador <= 5);*/

/*Crie um algoritmo que solicite a entrada de 10 números pelo usuário, armazene-os em
um vetor e então crie outro vetor com os valores do primeiro vetor multiplicados por 5.
Por fim exiba os dois vetores.

var listaNum = [];
var totalMult = [];


for(var i = 0; i < 5; i++){
    listaNum[i] = leia.questionInt("digite um numero: ");
}

for(var i = 0; i < listaNum.length; i++){
    totalMult[i] = listaNum[i] * 5; 
}

console.log(listaNum);
console.log(totalMult);*/

/*Escreva um algoritmo que solicite ao usuário a entrada de 5 números, e que exiba o
somatório desses números na tela. Após exibir a soma, o programa deve mostrar
também os números que o usuário digitou, um por linha.

var numerosUsuario = [];
var soma = 0

for (var i = 0; i < 5; i++){
    numerosUsuario[i] = leia.questionInt("digite um numero: ");
    soma += numerosUsuario [i];
    console.log(`o valor da soma é de ${soma}`)
    for(var digito of numerosUsuario){
        console.log(digito)
    }
}*/

/*Crie um algoritmo para ler 10 números inteiros e mostrar os números pares deste vetor;

var numerosUsuario = [];

for(var i = 0; i < 4; i++){
    numerosUsuario[i] = leia.questionInt("informe um digito: ");
    if(numerosUsuario[i] % 2 === 0){
        console.log("numero par");
    }else{
        console.log("numero impar")
    }
}*/

/*Crie um algoritmo para ler 15 números inteiros e mostrar no final, os que forem maiores
ou igual a 10;

var numerosUsuario = [];
var maioresQue = [];

for(var i = 0; i < 5; i++){
    numerosUsuario[i] = leia.questionInt("digite um valor: ");
}

for(var i = 0; i < numerosUsuario.length; i++){
    
    if(numerosUsuario[i] >= 10){
        maioresQue.push(numerosUsuario[i]);
    }
}

if(maioresQue.length > 0){
    console.log(`numeros maiores que 10: ${maioresQue}`)
}else{
    console.log(`nenhum numero é maior que 10.`)
}
console.log(maioresQue)*/

/*Faça um algoritmo para ler um vetor com 10 elementos e inverter a posição destes
elementos, de tal modo que o primeiro elemento venha a ser o último depois da
inversão;

var lista = [];
let numerosUsuario;

for(var i = 0; i < 5; i++){
    numerosUsuario = leia.questionInt("digite um numero: ");
    lista.push(numerosUsuario);
}

lista.reverse();

console.log(lista);*/

/*Criem um algoritmo que tenha dois vetores de 30 posições,
um para armazenar a mínima de cada dia e outro para a
máxima;
- Usando a função Math.random(), gerem dois valores de
temperatura para o dia. Estes valores devem estar entre 12 e
35 graus.
- De posse destes dois valores gerados, coloquem o menor no
vetor de mínimas e o maior no vetor de máximas.*/


var valoresMinimas = [];
var valoresMaximas = [];
var numeroAleatorio2;

for(var i = 0; i < 30; i++){
    var numeroAleatorio1 = parseInt(Math.random() * (35 - 12) + 12).toFixed(2);
    do{
        var numeroAleatorio2 = parseInt(Math.random() * (35 - 12) + 12).toFixed(2);
    }while(numeroAleatorio2 === numeroAleatorio1)
    if(numeroAleatorio1 < numeroAleatorio2){
        valoresMinimas.push(numeroAleatorio1);
        valoresMaximas.push(numeroAleatorio2);
    }else{
        valoresMinimas.push(numeroAleatorio2);
        valoresMaximas.push(numeroAleatorio1);
    }

}



for(var i = 0; i < 30; i++){
    console.log(`menor valor: ${valoresMinimas[i]}`)
    console.log(`maior valor: ${valoresMaximas[i]}`)
    
}



/*Crie um vetor de 50 posições, um chamado pai e uma vetora
de 50 posições chamada mãe. Estes dois vetores devem ser
preenchidos com valores aleatórios. Depois, crie mais um
vetorzinho de 50 posições chamado filho. Este vetorzinho filho
deve ser preenchido com as características genéticas pares
do pai e com as características genéticas ímpares da mãe

var vetorPai = [];

for(var P = 0; P < 4; P++){
    var  numeroAleatorioPai = parseInt((Math.random() * 10));
    vetorPai.push(numeroAleatorioPai);
}

var vetorMae = [];

for(var M = 0; M < 4; M++){
    var numeroAleatorioMae = parseInt((Math.random() * 10));
    vetorMae.push(numeroAleatorioMae);
}


var vetorFilho = [];

for(var F = 0; F < vetorPai.length; F++){
    if(F % 2 === 0){
        vetorFilho.push(vetorPai[F]);
    }else{
        vetorFilho.push(vetorMae[F]);
    }
}

console.log(vetorPai);
console.log(vetorMae);  
console.log(vetorFilho);*/