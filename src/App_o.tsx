import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { TodoListItem } from "./TodoListItem";
import { ITodoList } from "./ITodoList";

const initialTodos: Array<ITodoList> = [
  { text: "buy milk", complete: false },
  { text: "do shopping", complete: true }
];

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

const App = () => {
  return (
    <React.Fragment>
      <TodoListItem todo={todos[0]} toggleTodo={toggleTodo}></TodoListItem>
      <TodoListItem todo={todos[1]} toggleTodo={toggleTodo}></TodoListItem>
    </React.Fragment>
  );
};

export default App;
