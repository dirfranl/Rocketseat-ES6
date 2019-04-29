class List {
  constructor(){
    this.data = [];
  }

  add(data){
    this.data.push(data);
    console.log(this.data);    
  }
}

class TodoList extends List {
  constructor(){
    super();

    this.usuario = 'Diego';
    // this.todos = [];
  }

  mostraUsuario(){
    console.log(this.usuario);
    
  }

  // addTodo(){
  //   this.todos.push('novo todo');
  //   console.log(this.todos);
  // }
}

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){
  MinhaLista.add('Novo Todo');
}