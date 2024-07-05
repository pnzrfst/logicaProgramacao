
import leia from "readline-sync"

function validarLogin() {
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



var loginValido = validarLogin();




    


