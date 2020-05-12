import React, { ChangeEvent } from "react";
import { Todo } from "../todo/models/todo";
import { useDispatch } from "react-redux";
import { updateTodo } from "../todo/store/todoSlice";

interface Props {
  todo: Todo;
}

const TodoItem: React.FC<Props> = ({ todo }: Props) => {
  const dispatch = useDispatch();

  const toggleComplete = (event: ChangeEvent) => {
    dispatch(updateTodo({...todo, completed: !todo.completed}));
  };

  return (
    <li className="custom-control custom-checkbox">
      <input
        type="checkbox"
        className="custom-control-input"
        id={"customCheck" + todo.id}
        checked={todo.completed}
        onChange={toggleComplete}
      />
      <label className="custom-control-label" htmlFor={"customCheck" + todo.id}>
        {todo.title}
      </label>
    </li>
  );
};

export default TodoItem;
