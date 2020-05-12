import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Todo } from "./models/todo";
import { addTodo } from "./store/todoSlice";

interface AddTodoProps {
  title?: string;
}

const AddTodo: React.FC<AddTodoProps> = ({ title = '' }: AddTodoProps) => {
  const dispatch = useDispatch();
  const [titleValue, setTitleValue ] = useState(title);

  const handleChange = (event: any) => {
    setTitleValue(event.target.value);
  };

  const addNewTodo = () => {
    const todo: Todo = {
      id: 0,
      title: titleValue,
      completed: false,
    };
    dispatch(addTodo(todo));
    setTitleValue('');
  };

  const content = (
    <div className="add-items d-flex">
      <input
        type="text"
        className="form-control todo-list-input"
        placeholder="Another todo, really?"
        value={titleValue}
        onChange={handleChange}
      />
      <button
        className="add btn btn-primary font-weight-bold todo-list-add-btn"
        onClick={addNewTodo}
      >
        +
      </button>
    </div>
  );

  return content;
};

export default AddTodo;
