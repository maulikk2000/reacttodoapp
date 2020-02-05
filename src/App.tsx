import React, { useState } from "react";
import "./App.css";
import { ITodoList } from "./ITodoList";
import { TodoList } from "./TodoList";
import { AddTodoForm } from "./AddTodoForm";

const initialTodos: Array<ITodoList> = [
  { text: "buy milk", complete: false },
  { text: "do shopping", complete: true }
];

const App = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (selectedTodo: ITodoList) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo = (newTodo: string) => {
    newTodo.trim() !== "" &&
      setTodos([...todos, { text: newTodo, complete: false }]);
  };

  return (
    <React.Fragment>
      {/* <TodoListItem todo={todos[0]} toggleTodo={toggleTodo}></TodoListItem>
      <TodoListItem todo={todos[1]} toggleTodo={toggleTodo}></TodoListItem> */}
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo}></AddTodoForm>
    </React.Fragment>
  );
};

export default App;
