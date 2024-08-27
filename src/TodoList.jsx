import { TodoItem } from "./TodoItem"

export function TodoList({todos, toggleTodo, deleteTodo}){
    return(
    <>
      <h1>Todo list</h1>
      <ul className="list">
        {todos.length === 0 && "Nothing to do"}
        {todos.map((todo) => {
          return <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
        })}
      </ul>
    </>
    )
  
}