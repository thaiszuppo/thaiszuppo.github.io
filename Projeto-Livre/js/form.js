window.onload = function () {
  
};


var botao = document.getElementById("botao");
botao.addEventListener("click", 
function validar (event){
    event.preventDefault()
    var inputNome = document.getElementById("formGroupName");
    var inputEmail = document.getElementById("formGroupEmail"); 
    
    if (inputNome.value == "" || inputNome.value.length < 2) {
        alert("Por favor, digite seu nome corretamente"); 
    } else if (inputEmail.value == "" || inputEmail.value.length < 2) {
        alert("Por favor, digite seu email corretamente"); 
    } else {
        alert("Obrigada, contatinho enviado!!!");
         
    }
});


