document.getElementById("botaoenviar").addEventListener("click", validaFormulario)

var nome;
var email;
var telefone;

nome = CharacterData
email = CharacterData
telefone = [0,1,2,3,4,5,6,7,8,9]


function validaFormulario(){
  if (nome != "" && email != "" && telefone != ""){
      alert("Prontinho! Você receberá as novidades por email.")
  }else{
      alert("Por Favor, preeencha seu nome, email e telefone!")
  }
}
