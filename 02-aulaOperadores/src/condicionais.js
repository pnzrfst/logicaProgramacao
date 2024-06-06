

import leia from "readline-sync"

/*Crie um programa que execute a validação de uma senha digitada pelo usuário. Caso
ele digite a senha “1234” devemos informar a ele “acesso permitido”. Para qualquer
outra senha digitada, informar “acesso negado”.*/

console.log("Escreva sua senha: ");
var senha = leia.question(prompt); 

switch(senha){
    case 1: senha = 1234
}

