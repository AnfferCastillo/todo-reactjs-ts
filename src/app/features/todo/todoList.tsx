import React from "react";
import { Todo } from "./models/todo";
import { useSelector } from "react-redux";
import { RootState } from "../../store/rootReducer";
import { selectTodos } from "./store/todoSlice";
import TodoItem from "../components/todoItem";
import AddTodo from "./addTodo";

interface TodoListProps {
  completed: boolean;
}

const TodoList: React.FC<TodoListProps> = ({ completed }: TodoListProps) => {
  const todos: Todo[] = useSelector((state: RootState) =>
    selectTodos(state.todo, { completed })
  );
  let content = undefined;

  if (!completed) {
    content = (
      <div className="container-fluid">
        <div className="col-12">
          <AddTodo />
        </div>
        <div className="row">
          <ul>
            {(todos || []).map((todo) => (
              <TodoItem todo={todo} key={todo.id} />
            ))}
          </ul>
        </div>
      </div>
    );
  } else {
    content = (
      <div className="container-fluid">
        <ul>
          {(todos || []).map((todo) => (
            <TodoItem todo={todo} key={todo.id} />
          ))}
        </ul>
      </div>
    );
  }

  return content;
};

export default TodoList;
