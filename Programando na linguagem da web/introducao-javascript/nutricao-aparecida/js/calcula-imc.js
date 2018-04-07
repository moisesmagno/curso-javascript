//Troca o titulo principal da página.
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

//Calcula o IMC de todos os pacientes. 
var pacientes = document.querySelectorAll(".paciente");
  
for(var i = 0; i < pacientes.length; i++){
   
    var paciente = pacientes[i]; 
    var tdPeso = paciente.querySelector(".info-peso").textContent;
    var tdAltura = paciente.querySelector(".info-altura").textContent;  
    var tdIMC = paciente.querySelector(".info-imc");

    var pesoValido = validaPeso(tdPeso);
    var alturaValida = validaAltura(tdAltura);

    if(!pesoValido){
        tdIMC.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
        pesoValido = false;
    }

    if(!alturaValida){
        tdIMC.textContent = "Altura Inválida!";
        paciente.classList.add("paciente-invalido");
        alturaValida = false;
    }

    if(pesoValido && alturaValida){
        tdIMC.textContent = calculaIMC(tdPeso,tdAltura); 
    }
}

function validaPeso(peso){
    if(peso >= 0 && peso < 1000){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura < 3.0){
        return true;
    }else{
        return false;
    }
}   

function calculaIMC(peso, altura){
    var imc = peso / (altura * altura);
    return imc.toFixed(2); //.toFixed define a quantidade de casas decimais que serão exibidos.
}

//.toFixed(n) : Define a quantidade de casas decimais que serão exibidos.
//.textContent : Recupera ou pode modificar o conteúdo de um elemento selecionado previamente. 

