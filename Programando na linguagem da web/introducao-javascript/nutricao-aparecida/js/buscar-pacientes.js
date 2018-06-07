var buscarPacientes = document.querySelector("#buscar-pacientes");

buscarPacientes.addEventListener('click', function(){
	
	var xhr = new XMLHttpRequest();

	xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes");

	var erroAjax = document.querySelector("#erro-ajax");

	xhr.addEventListener("load", function(){

		if(xhr.status == 200){

			erroAjax.classList.remove("visivel");
			erroAjax.classList.add("invisivel");

			var pacientesImportados = JSON.parse(xhr.responseText);

			pacientesImportados.forEach(function(paciente){
				adicionaPacienteNaTabela(paciente);
			});	
		}else{
			console.log(xhr.status);
			console.log(xhr.responseText);
			
			erroAjax.classList.remove("invisivel");
			erroAjax.classList.add("visivel");

		}

		
	});

	xhr.send();
});