var campoFiltro = document.querySelector("#filtrar-tabela");
var pacientes = document.querySelectorAll(".paciente");

campoFiltro.addEventListener("input", function(){

	if(this.value.length > 0){
		var valorDigitado = this.value;
		pacientes.forEach(function(paciente){
			var pacienteSelecionado = paciente.querySelector(".info-nome").textContent;
			var expressao = new RegExp(valorDigitado, "i"); //icasesensitive
			if(!expressao.test(pacienteSelecionado)){
				paciente.classList.add("esconderTr");
			}else{
				paciente.classList.remove("esconderTr");
			}
		});
	}else{
		pacientes.forEach(function(paciente){
			paciente.classList.remove("esconderTr");
		});
	}

});