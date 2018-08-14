class MensagemView{

    constructor(element){
        this.element = element;
    }

    _template(model){
        return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : `<p></p>`;
    }

    update(model){
        this.element.innerHTML = this._template(model);
    }
}