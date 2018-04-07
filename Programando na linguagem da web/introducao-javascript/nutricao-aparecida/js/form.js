//PEGA OS DADOS DO FORMULÁRIO E OS ADICIONA A TABELA.
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    //Recupera os dados do paciente.
    //Retorna um objeto.
    var paciente = obtemPacienteDoFormulario("#form-adiciona");

    var erros = validaPaciente(paciente);

    if(erros.length > 0){

        var ul = document.querySelector("#msg-error");
        
        for(var i = 0; i < error.length; i++){
            var li = document.createElement("li");
            li.textContent = error[i];
            ul.appendChild(li);
        }

        return;
    }

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

function validaPaciente(paciente){

    var error = [];

    if(!validaPeso(paciente.peso)) error.push("Peso inválido");

    if(!validaAltura(paciente.altura)) error.push("Altura Inválida");

    return error;
}

//.reset() : Limpas os campos de um formulário selecionado.
//event.preventDefault() : Previne que a página seja atualizada.
//.appendChild() : Add algúm conteúdo dentro de um elemento selecionado previamente, exemplo Divs, Tabelas, Tr, ul, li, etc.
//.Push() :  Add um elemente ao array
//document.querySelector() : Seleciona um elemento, classe ou ID do Dom.
//document.querySElectorAll() : Seleciona todos os elementos, classes ou IDs selecionados do DOM
//.classList.add() : Adiciona uma classe a um elemento selecionado previamente.
//.addEventListener() : Está constantemente ouvindo os elementos selecionados do DOM, a espsera de uma ação de um evento. Exemplo: Eventos click, dblclick, etc.