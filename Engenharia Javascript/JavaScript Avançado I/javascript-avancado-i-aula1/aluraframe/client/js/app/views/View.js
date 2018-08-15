class View{

    constructor(element){
        this.element = element;
    }

    template(){
        throw new Error('O método template deve ser implementado!');
    }

    update(model){
        this.element.innerHTML = this.template(model);
    }
}