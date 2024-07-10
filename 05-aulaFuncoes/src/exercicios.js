
import leia from "readline-sync"

/*function validarLogin() {
    var usuario = leia.question("digite seu nome: ")
    var senhaUsuario = leia.question("cadastre a senha: ", {hideEchoBack: true});
    var digitarNovamente = leia.question("digite a senha novamente: ", {hideEchoBack: true});
    var validarSenha = digitarNovamente
    if(validarSenha === senhaUsuario){
        console.log(`bem vindo, ${usuario}`);
        return true
    }else{
       console.log("senha invalida.");    
    }
    var tentativas = 1
        while(validarSenha !== senhaUsuario && tentativas < 3){
        validarSenha = leia.question("digite a senha novamente: ", {hideEchoBack: true});
        tentativas++
        }
            if(tentativas == 3){
            var tentativas = leia.question("voce excedeu as tentativas maximas.");
                return false
            }else{
            console.log(`bem vindo, ${usuario}`);
                return true
            }
}
*/

/*Crie 3 vetores de 9 posições e crie outro com o 1º terço do
primeiro, o segundo 3º. do segundo e o último terço do 3º.
Escrever o vetor resultante ao final.

function vetores9posicoes(){
    var vetorUm = [];
    for(var i = 0; i < 9; i++){
        vetorUm[i] = parseInt(Math.random() * 9);
    }   
 

    var vetorDois = [];
    for(var i = 0; i < 9; i++){
        vetorDois[i] = parseInt(Math.random() * 9);
    }
  

    var vetorTres = [];
    for(var i = 0; i < 9; i++){
        vetorTres[i] = parseInt(Math.random() * 9);
    }
    

    var vetorTercos = [];   

    for(var i = 0; i < 3; i++){
        if(i >= 0 && i <= 3){
            vetorTercos[i] = vetorUm[i];
        }   
    }
    
    for(var i = 3; i < 6 ; i++){
        if(i >= 3 && i <= 6){
            vetorTercos[i] = vetorDois[i];
        }
    }

    for(var i = 6; i < 9; i++){
        if(i >= 6 && i < 9){
            vetorTercos[i] = vetorTres[i];
        }
   
    }
    
    console.log(vetorUm);
    console.log(vetorDois);   
    console.log(vetorTres);
    console.log(vetorTercos);
}
vetores9posicoes();*/

/*Crie um algoritmo que gere um vetor com 10 itens, depois
disso, você deve percorrer a lista e verificar se existe algum
valor duplicado


function igualdadeNumeros(){
    var vetor10Itens = [];


    function gerarNumero(){
        return Math.floor(parseInt(Math.random() * 10));
        
    }


    for(var i = 0; i < 10; i++){
        vetor10Itens.push(gerarNumero());
    }

    var duplicidade = false;

    for(var i = 0; i < vetor10Itens.length; i++){
        for(var j = 0; j < vetor10Itens.length; j++){
            if(vetor10Itens[i] === vetor10Itens[j]){
                duplicidade = true;
                break;
            }
        }
        if(duplicidade){
            console.log(`${vetor10Itens}, existem numeros iguais.`)
            break;
        }else{
            console.log(vetor10Itens)
        }
    }
}
igualdadeNumeros()*/

/*Criar um vetor de 4 posições e solicitar ao usuário que forneça
4 números pares para armazenar nele. Caso o usuário digite
um número ímpar, o algoritmo deve avisar e solicitar um novo
valor

var vetorPares = [];



function verificarPar(){
    for(var i = 0; i < 4; i++){
        var numeroUser = leia.questionInt("digite numeros pares: ");
        if(numeroUser % 2 !== 0){
            console.log("voce digitou um numero impar, digite novamente! ");
            i--
        }else{
            vetorPares.push(numeroUser);
        }
    }
    console.log(`${vetorPares}`)
}

verificarPar();*/


