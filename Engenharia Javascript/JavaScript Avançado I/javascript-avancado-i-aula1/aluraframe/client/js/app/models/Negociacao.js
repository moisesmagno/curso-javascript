class Negociacao{

	//Obs. Um atributo que usa "_" não pode ser acessado ou modificado diretamente. 

	constructor(data, quantidade, valor){
		this._data = new Date(data.getTime());
		this._quantidade = quantidade;
		this._valor = valor;

		//Congela o objeto assim que for instacinada, evitando que valores das propriedade privadas sejam modificadas posteriormente. 
		//*    console.log(Object.isFrozen(n1)); //Verifica se um objeto está congelado.
		Object.freeze(this);
	}

	get data(){
		return new Date(this._data.getTime());
	}

	get quantidade(){
		return this._quantidade;
	}

	get valor(){
		return this._valor;
	}

	get volume(){
		return this._quantidade * this.valor;
	}

}