import { Todo } from "../clases"

import { todoList } from "../index"

// Referencia en el HTML
const divtodoList = document.querySelector('.todo-list')
const txtInput = document.querySelector('.new-todo')
const btnBorrarCompletado =   document.querySelector('.clear-completed')
const ulFiter  =   document.querySelector('.filters')
const anchorFiltros   =   document.querySelectorAll('.filtro')

export const crearTodoHtml = (todo) => {
    const htmlTodo =`
    <li class="${ (todo.completado) ? 'completed': '' }" data-id="${ todo.id }">
        <div class="view">
            <input class="toggle" type="checkbox" ${ (todo.completado) ? 'checked': '' }>
            <label>${ todo.tarea }</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`

    const div = document.createElement('div')
    div.innerHTML = htmlTodo;   

    divtodoList.append(div.firstElementChild);

    return div.firstElementChild;
}

txtInput.addEventListener('keyup', ( event ) => {
    if (event.keyCode === 13 && txtInput.value.length > 0 ){
        const nuevoTodo = new Todo (txtInput.value);
        todoList.nuevoTodo (nuevoTodo);

        crearTodoHtml(nuevoTodo);

        txtInput.value='';

    };
})


divtodoList.addEventListener('click', (event) => {
    const nombreElemento = event.target.localName;
    const todoElemento = event.target.parentElement.parentElement;
    const todoId = todoElemento.getAttribute('data-id');
    if (nombreElemento === 'input'){
        todoList.marcarCompletado(todoId);  
        todoElemento.classList.toggle('completed')
    } else if (nombreElemento === 'button'){
        todoList.eliminarTodo(todoId);
        divtodoList.removeChild(todoElemento);
    }
  })


  btnBorrarCompletado.addEventListener('click', (event) => {
    todoList.eliminarCompletados();
    for (let i = divtodoList.children.length - 1; i >=0 ; i-- ){
        const elmento = divtodoList.children[i];
        if (elmento.classList.contains('completed')) {
            divtodoList.removeChild(elmento);
        }
    }
  })

  ulFiter.addEventListener('click', (event) => {

    const filtro = event.target.text;
    if (!filtro){
        return;
    }

    anchorFiltros.forEach ( elemento => elemento.classList.remove('selected') );

    event.target.classList.add('selected');
    
    for (const elmento of divtodoList.children ){
        elmento.classList.remove('hidden');
        const completado = elmento.classList.contains('completed');
        switch(filtro){

            case 'Pendientes':
                if (completado) {
                    elmento.classList.add('hidden');
                }
            break;           

            case 'Completados':                 
            if (!completado) {
                    elmento.classList.add('hidden');
                }
            break;                

        }
    }

  })

  
  