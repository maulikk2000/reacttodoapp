import { ITodoList } from "./ITodoList";
import React from "react";

interface TodoListItemProps {
  todo: ITodoList;
  toggleTodo: (selectedTodo: ITodoList) => void;
}
export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleTodo
}) => {
  return (
    <li>
      <label
        style={{ textDecoration: todo.complete ? "line-through" : "none" }}
      >
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={() => toggleTodo(todo)}
        ></input>
        {todo.text}
      </label>
    </li>
  );
};
