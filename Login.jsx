import {
    txtLogin,
    txtSenha
} from '../App';

export const fazerLogin = (e) => {

var login = "teste";
var senha = "teste";

//var txtLogin = document.getElementById("txtLogin");
//var txtSenha = document.getElementById("txtSenha");

    if (txtLogin.current.value == login && txtSenha.current.value == senha) {
        console.log("Acesso liberado");
    } else {
        console.log("Login ou senha inválidos");
    }
return true;
}