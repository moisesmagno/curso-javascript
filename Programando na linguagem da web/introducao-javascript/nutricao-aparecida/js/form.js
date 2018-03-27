//PEGA OS DADOS DO FORMULÁRIO E OS ADICIONA A TABELA.
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
  event.preventDefault();
  
  var form = document.querySelector("#form-adiciona");

  var nome = form.nome.value;
  var peso = form.peso.value;
  var altura = form.altura.value;
  var gordura = form.gordura.value;

  var pacienteTr = document.createElement("tr"); //Criando o elemento Tr

// Crido o elemento TD
  var nomeTd = document.createElement("td"); 
  nomeTd.classList.add("info-nome");
  var pesoTd = document.createElement("td");
  pesoTd.classList.add("info-peso");
  var alturaTd = document.createElement("td");
  alturaTd.classList.add("info-altura");
  var gorduraTd = document.createElement("td");
  gorduraTd.classList.add("info-gordura");
  var imcTd = document.createElement("td");
  imcTd.classList.add("info-imc");

  // Atribuindo o texto dentro da tag TD
  nomeTd.textContent = nome;
  pesoTd.textContent = peso;
  alturaTd.textContent = altura;
  gorduraTd.textContent = gordura;

  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);

  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);

});