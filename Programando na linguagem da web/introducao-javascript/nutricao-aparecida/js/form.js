//PEGA OS DADOS DO FORMULÁRIO E OS ADICIONA A TABELA.
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    //Recupera os dados do paciente.
    //Retorna um objeto.
    var paciente = obtemPacienteDoFormulario("#form-adiciona");

    //Monta e retorna um TR válida.
    var pacienteTr = montarTR(paciente);

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

});


function obtemPacienteDoFormulario(parameter){
    var form = document.querySelector(parameter);

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaIMC(form.peso.value,form.altura.value)
    }

    form.reset(); //Limpa os campos do formuláiro.

    return paciente;
}

function montarTR(paciente){

    var pacienteTr = document.createElement("tr"); //Criando o elemento Tr
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;

}

function montaTd(dado,classe){
    var td = document.querySelector("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}
