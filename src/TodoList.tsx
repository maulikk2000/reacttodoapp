import React from "react";
import { TodoListItem } from "./TodoListItem";
import { ITodoList } from "./ITodoList";

interface TodoListProps {
  todos: Array<ITodoList>;
  toggleTodo: (selectedTodo: ITodoList) => void;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map(todo => {
        return (
          <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
        );
      })}
    </ul>
  );
};
