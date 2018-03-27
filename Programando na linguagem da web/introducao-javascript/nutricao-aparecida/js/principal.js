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

    var pesoValido = true;
    var alturaValida = true;

    if(tdPeso >= 1000 || tdPeso <= 0){
      tdIMC.textContent = "Peso inválido!";
      paciente.classList.add("paciente-invalido");
      pesoValido = false;
    }

    if(tdAltura >= 3.00 || tdAltura <= 0){
      tdIMC.textContent = "Altura Inválida!";
      paciente.classList.add("paciente-invalido");
      alturaValida = false;
    }
   
    if(pesoValido && alturaValida){
       var imc = tdPeso / (tdAltura * tdAltura);
       tdIMC.textContent = imc.toFixed(2); //.toFixed define a quantidade de casas decimais que serão exibidos.
    }
  
}

//PEGA OS DADOS DO FORMULÁRIO E OS ADICIONA A TABELA.
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
  event.preventDefault();
  
  var form = document.querySelector("#form-adiciona");

  var nome = form.nome.value;
  var peso = form.peso.value;
  var altura = form.altura.value;
  var gordura = form.altura.gordura;

  console.log(nome);
  console.log(peso);
  console.log(altura);
  console.log(gordura);
});

