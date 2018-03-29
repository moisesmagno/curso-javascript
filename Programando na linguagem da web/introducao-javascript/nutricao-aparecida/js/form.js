//PEGA OS DADOS DO FORMULÁRIO E OS ADICIONA A TABELA.
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    //Recupera os dados do paciente.
    //Retorna um objeto.
    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(form);

    var erros = validaPaciente(paciente);

    if(erros.length > 0){
        exibeMensagemErro(erros);
        return;
    }

    //Monta e retorna um TR válida.
    var pacienteTr = montarTR(paciente);

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);


    form.reset(); //Limpa os campos do formuláiro.

    var msgErro = document.querySelector("#msg-error");
    msgErro.innerHTML = "";

});


function obtemPacienteDoFormulario(form){
    
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaIMC(form.peso.value,form.altura.value)
    }

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

function validaPaciente(paciente){

    var error = [];

    if(paciente.nome.length == 0) error.push("O campo nome não pode ser vazio!");

    if(paciente.peso.length == 0) error.push("O campo peso não pode ser vazio!");

    if(paciente.altura.length == 0) error.push("O campo altura não pode ser vazio!");

    if(paciente.gordura.length == 0) error.push("O campo gordura não pode ser vazio!");

    if(!validaPeso(paciente.peso)) error.push("Peso inválido!");

    if(!validaAltura(paciente.altura)) error.push("Altura Inválida!");

    return error;
}

function exibeMensagemErro(erros){

    var ul = document.querySelector("#msg-error");
    ul.innerHTML = "";
    
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });

}
