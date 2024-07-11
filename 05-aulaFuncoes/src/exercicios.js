
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

/*function preencherTresVetores(){

} Crie 3 vetores de 9 posições e crie outro com o 1º terço do
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

/*function igualdadeNumeros(){
Crie um algoritmo que gere um vetor com 10 itens, depois
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

/* function verificarPar(){
Criar um vetor de 4 posições e solicitar ao usuário que forneça
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

/*function preencherMatriz(){
Crie uma matriz 8x8 com números aleatórios e posteriormente
escreva na tela, quais são maiores que 10;

function preencherMatriz(){
    var matriz = [];
            for(var i = 0; i < 9; i++){
                matriz[i] = [];
                for(var j = 0 ; j < 9; j++){
                    var numero = Math.ceil(Math.random() * 20);
                    matriz[i][j] = numero;
                    if(numero > 10){
                        console.log(`Número maior que 10 na posição [${i}][${j}]: ${numero}`);
                    };
                        
                }
            }   
            
            return matriz;
     }   

var matrizAleatoria = preencherMatriz();

console.log("Matriz gerada:");
for (var i = 0; i < matrizAleatoria.length; i++) {
    console.log(matrizAleatoria[i]);
};*/

/*function girarDado(){

} Você está construíndo um algoritmo para verificar se um dado de jogo é viciado ou não.
Você deve “jogar” o dado 1000x (gerar números de 1 até 6) e verificar a quantidade e a
porcentagem de vezes que cada valor é gerado. Caso, algum dos valores seja gerado,
mais de 22% das vezes, você deve dizer que o dado é viciado, caso contrário, dizer que
ele não é viciado

function girarDado(){
   
    // cria um vetor vazio, preenche ele
    var porcentagemLados = [];
    function preencherVetor(tamanhoVetor, min, max){
        var vetor = [];
        for(var i = 0; i < tamanhoVetor; i++){
            vetor[i] = parseInt(Math.random() * (max - min)) + min
        }
    
        return vetor;
    }

    // define as jogadas maximas, com o tamanho do vetor e as inf adicionais (os lados do dado)
    var jogadas = preencherVetor(1000, 1, 7);
    var qntLados = [0, 0, 0, 0, 0, 0, 0];

    // preenche o vetor qntLados com os as vezes em que o numero apareceu no primeiro vetor.
    for (var i = 0; i < jogadas.length; i++){
        qntLados[jogadas[i]]++
    }

    
    // preenche outro vetor com as porcentagem de vezes que um numero apareceu no primeiro vetor.
    
    for(var i = 0; i < qntLados.length; i++){
        porcentagemLados[(100 / jogadas.length * qntLados)]
    }

    // valida se a porcentageLados[i] é igual à 22.
    for(var i = 0; i < porcentagemLados.length; i++){
        if(porcentagemLados[i] > 22){
            console.log("Dado viciado.")
        }
    }
    
    console.table[porcentagemLados]

}

girarDado()*/

/*Você é um professor e está criando um algoritmo para fazer a correção das provas de
maneira automática para você. Primeiro, crie um vetor chamado gabarito com 10
posições e preencha manualmente com as letras das respostas. Depois, solicite, qual é
as respostas do aluno. Por fim, verifique quantas estão corretas e gere a nota.*/

var vetorRespostas = []
var nota = 0
var vetorRespostasAluno = []

for(var i = 0; i < 10; i++){
    var respostas = leia.question("digite o gabarito: ");
    vetorRespostas.push(respostas);
}


for(var i = 0; i < 10; i++){
    var respostasAluno = leia.question("digite sua resposta: ");
    vetorRespostasAluno.push(respostasAluno);
}

for(var i = 0; i < vetorRespostas.length; i++){
    if(vetorRespostas === vetorRespostasAluno){
        nota++
    }
}

console.table(vetorRespostas)
console.table(vetorRespostasAluno)
console.log(nota)