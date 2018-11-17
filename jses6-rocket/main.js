class Matematica{
    
    // Um método estático, nunca encherga outros atributos e métodos da classe. 
    static somar(n1, n2){
        return n1 + n2;
    }
}

class List{
    
    constructor(element=[]){
        this.data = element;
    }

    addData(data){
        this.data.push(data);
        console.log(this.data)
    }

}

class TodoList extends List{

    constructor(){
        super();
        this.todos = [];
    }

    addTodo(){
        this.todos.push("Novo todo","List");
        console.log(this.todos)
    }
}

const minhaLista = new TodoList();

let btn1 = document.querySelector("#btn_todoList");
let btn2 = document.querySelector("#btn_novodado");
let btn3 = document.querySelector("#btn_somar");

btn1.addEventListener("click", function(){
    minhaLista.addTodo();
});

btn2.addEventListener("click", function(){
    minhaLista.addData("mensagem");
})

btn3.addEventListener("click", function(){
    console.log(Matematica.somar(5,5));
})