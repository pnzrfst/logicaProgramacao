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
(quantos anos) Enzo será mais alto que Valentina.

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
console.log(`Vão demorar ${anos} anos para Joao ser mais alto Valentina.`);*/

/*Foi feita uma pesquisa entre os habitantes de um a região e coletados os dados de altura e
gênero (0=masc , 1=fem) das pessoas. Faça um programa que leia os dados de 10 pessoas e
informe:
– a maior e a menor altura encontrada;
– a média de altura das mulheres;
– a média de altura da população;
– o percentual de homens na população.


var somaAlturaMulheres = 0;
var totalHomens = 0;     
var totalMulheres = 0;
var totalHomens = 0;
var totalAlturaPopulacao = 0;
let menorAltura = Infinity;
let maiorAltura = -Infinity;

for(var contador = 0; contador <=10; contador++){
 var alturaHab = leia.questionFloat("digite sua altura: ");

 if(alturaHab < menorAltura){
    menorAltura = alturaHab;
 }

 if(alturaHab > maiorAltura){
    maiorAltura = alturaHab;
 }

 totalAlturaPopulacao += alturaHab;

 var generoHab = leia.questionInt("digite seu genero: (0) masculino   (1)feminino ");

    if(generoHab === 0){
        totalHomens++
    }else if(generoHab === 1){
        totalMulheres++
        somaAlturaMulheres += totalMulheres;
    }else{
        console.log("valor invalido, por favor, preencha um numero valido.");
        contador--;
    }
}

var mediaMulheres = somaAlturaMulheres / totalMulheres;

var mediaPopulacao = totalAlturaPopulacao / 10;

var percentualHomens = (totalHomens / 10) * 100;

console.log(`menor altura: ${menorAltura}, maior altura: ${maiorAltura}`);
console.log(`media de altura das mulheres: ${mediaMulheres.toFixed(2)}`);
console.log(`media de altura da populacao: ${mediaPopulacao.toFixed(2)}`);
console.log(`percentual de homens na populacao: ${percentualHomens}`);*/

/*Vamos desenvolver um jogo pra gente se divertir um pouco com a criançada, trata-se do
“Número mágico”. Neste jogo um número deve ser cadastrado pelo ‘mestre’ (PvP) ou sorteado
pelo game (PvE) e o desafiante deve tentar adivinhar. A cada tentativa incorreta o sistema
informa se o chute foi mais alto ou mais baixo que o número mágico. Quando o desafiante
acertar o game informar em quantas tentativas ele conseguiu. No início do jogo o jogador
escolhe entre PvP e PvE.
- Sistema de dificuldade para o PvE, onde o jogador escolhe a dificultade e ela
influencia o tamanho do range possível para o número mágico

var numeroMagico;
var modoJogo = leia.keyInSelect(["PvP", "PvE"]);

if(modoJogo === 0 ){ 
    var numeroMagico = leia.questionInt("qual o numero magico: ", {hideEchoBack: true});
    let tentativas = 0;
    let palpite;

    do {
        palpite = leia.questionInt('Desafiante, digite seu palpite: ');

        if (palpite < numeroMagico) {
            console.log('O número é maior.');
        } else if (palpite > numeroMagico) {
            console.log('O número é menor.');
        }

        tentativas++;
    } while (palpite !== numeroMagico);

    console.log(`Desafiante acertou o número ${numeroMagico} em ${tentativas} tentativas.`);

}else if (modoJogo === 1){
    var dificuldadeSelecionada = leia.questionInt("(0) facil; (1) media; (2)dificil ");
    switch(dificuldadeSelecionada){
        case 0 : 
        numeroMagico = parseInt(Math.random() * 10);
        break;
        case 1 : 
        numeroMagico = parseInt(Math.random() * 100);
        break;
        case 2 :
        numeroMagico = parseInt(Math.random() * 1000);
    }
    
    var tentativas = 0

    do{
        var palpite = leia.questionInt("digite seu palpite: ");
        if(palpite < numeroMagico){
            console.log("o numero é maior.");  
        }

        if(palpite > numeroMagico){
            console.log("o numero é menor.");
        }

        if(palpite === numeroMagico){
            console.log("voce acertou!");
        }
        
        tentativas++

    }while(palpite !== numeroMagico);

    console.log(`voce precisou de ${tentativas} para acertar o numero.`)
    
}*/

/* Crie um algoritmo que receba um número e que ele mostre os números da sequência
fibonacci. (Exemplo, se o usuário digitar 5, deve ser mostrado até o 5 número da sequência
fibonacci). Lembrando que a sequência fibonacci, sempre é a soma dos dois números
anteriores, começando sempre em 1 e 1; 1+1 = 2, 2+1 = 3, 3+2 =5.

var numero = leia.questionInt("DIGITE ATE QUAL VALOR QUER: ");
var anterior = 0, atual = 1, proximo, resultado = "0 - 1";

for(var i = 2; i < numero; i++){
    proximo = anterior + atual;
    anterior = atual;
    atual = proximo;
    resultado = resultado + " - " + proximo;
}
console.log(resultado);*/


/*Faça um algoritmo que receba um número e ele calcule o fatorial desse número. O Fatorial, é
o número vezes todos os valores multiplicados até 1.

var teste = leia.questionNewPassword("DIGITE NUMERO");
console.log(teste)
var numero = leia.questionInt("DIGITE UM NUMERO: ")
var resultado = 1;

while(numero > 0){
    resultado = resultado * numero;
    numero--;
}

console.log("FATORIAL E: " + resultado);*/

/*Crie um algoritmo para realizar a conversão de um número inteiro decimal, para binário. Vale
lembrar, que para realizar esse exercícios, vocês devem usar a técnica da divisão.*/

var decimal = leia.questionInt("DIGITE UM NUMERO");
var binario = '';

while(decimal >= 1){
    var result = parseInt(decimal / 2);
    var resto = decimal % 2;
    decimal = result;
    binario = resto + binario;
}

console.log(binario)
