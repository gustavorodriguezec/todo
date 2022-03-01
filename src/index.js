import './styles.css';
import { Todo,Todolist } from './clases';
import { crearTodoHtml } from './js/componentes';
// import { Todolist } from './classs/todo-list.class';
// import { Todo } from './classs/todo.class';


export const todoList = new Todolist();

// todoList.todos.forEach(crearTodoHtml); // se pude poner asi pero si es olo un argumento se lo envia a crearTodoHtml
todoList.todos.forEach(todo => crearTodoHtml(todo)); // se pude poner asi pero si es olo un argumento se lo envia a crearTodoHtml

// const tarea = new Todo('Prueba')
// todoList.nuevoTodo(tarea);
// console.log(todoList);
// crearTodoHtml(tarea);

// localStorage.setItem('mi-key', 'abc 123');
// setTimeout(() => {
//     localStorage.removeItem('mi-key');    
// }, 1500);

