class NegociacaoController{

	constructor(){
		let $ = document.querySelector.bind(document); //Cria um alias do document.querySelector() e o associa ao caracter "$".

		//Este script evita percorrer o DOM toda vez que algume submeter o formulário. 
		this._inputData = $('#data');
		this._inputQuantidade = $('#quantidade');
		this._inputValor = $('#valor');
		this._listaNegociacoes = new ListaNegociacoes();

		this._negociacoesView = new NegociacoesView($("#negociacoesView"));
		this._negociacoesView.update(this._listaNegociacoes);

		this._mensagem = new Mensagens();
		this._mensagemView = new MensagemView($("#mensagem-view"));
		this._mensagemView.update(this._mensagem);
	}


	adiciona(event){

		event.preventDefault();

		this._listaNegociacoes.adiciona(this._criaNegociacao());
		this._negociacoesView.update(this._listaNegociacoes)
		
		this._mensagem.texto = "Negociação adicionada com sucesso!";
		this._mensagemView.update(this._mensagem);
		
		this._limpaFormulario();

		console.log(this._listaNegociacoes.negociacoes);
	}

	_criaNegociacao(){
		return new Negociacao(
					DateHelper.textoParaData(this._inputData.value),
					this._inputQuantidade.value,
					this._inputValor.value,
				);
	}


	//Coloca-se um "_" no começo do método para entender que somente a classe NegociacaoController pode chama-lo.
	_limpaFormulario(){
		this._inputData.value = '';
		this._inputQuantidade.value = 1;
		this._inputValor.value = 0.0;

		this._inputData.focus();
	}
}


