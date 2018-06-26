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

		let data = new Date(...
						this._inputData.value
									.split("-")
									.map(function(item,indice){
										return item - indice % 2;
									})
							);
			console.log(data);
		let negociacao = new Negociacao(
				data,
				this._inputQuantidade.value,
				this._inputValor.value,
			);
	}
}