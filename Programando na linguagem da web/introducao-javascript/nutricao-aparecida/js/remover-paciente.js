//Cria um arrey das TR da tabela.
// var pacientes = document.querySelectorAll(".paciente");

//Para cada paciente do array, quero que seja criado um evento de Listening.
// pacientes.forEach(function(paciente){
// 	paciente.addEventListener("dblclick", function(){
// 		var nomePaciente = this.querySelector(".info-nome").textContent;
// 		this.remove();
// 		alert(nomePaciente + " será removido(a) da lista.");
// 	});
// });

//---------------------------------------------------------------------------

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event){
	var alboClick = event.target; //Pega o Albo clicado
	var paiAlbo = alboClick.parentNode; //Seleciona o pai do Albo clicado.
	paiAlbo.remove();
});


//.forEach(function(param){}) : Percorre um array;