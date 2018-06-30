class NegociacaoController{

	constructor(){
		let $ = document.querySelector.bind(document); //Cria um alias do document.querySelector() e o associa ao caracter "$".

		//Este script evita percorrer o DOM toda vez que algume submeter o formulário. 
		this._inputData = $('#data');
		this._inputQuantidade = $('#quantidade');
		this._inputValor = $('#valor');
	}


	adiciona(event){

		event.preventDefault();

		let negociacao = new Negociacao(
				DateHelper.textoParaData(this._inputData.value),
				this._inputQuantidade.value,
				this._inputValor.value,
		);

		console.log(negociacao.data);
		console.log(DateHelper.dataParaTexto(negociacao.data));
	}
}