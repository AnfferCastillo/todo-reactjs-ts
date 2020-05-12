import {
  createSlice,
  PayloadAction,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { Todo } from "../models/todo";
import { AppThunk } from "../../../store";
import { fetchTodos } from "../todoService";

const todosAdapter = createEntityAdapter<Todo>();

const initialState = todosAdapter.getInitialState({ isLoading: false });

export type TodoState = typeof initialState;

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    loadTodosStart: (state) => {
      return {
        ...state,
        isLoading: true,
      };
    },
    loadTodosSuccess: (state, action: PayloadAction<Todo[]>) => {
      return todosAdapter.addMany(state, action.payload);
    },
    loadTodosFailed: (state) => {
      return {
        ...state,
        isLoading: false,
      };
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
      return todosAdapter.updateOne(state, {
        id: action.payload.id,
        changes: action.payload,
      });
    },
    addTodo: (state, action: PayloadAction<Todo>) =>{
      const nextId = state.ids.length + 1;
      return todosAdapter.addOne(state, {...action.payload, id: nextId});
    }
  },
});

export const {
  loadTodosSuccess,
  loadTodosFailed,
  loadTodosStart,
  updateTodo,
  addTodo
} = todoSlice.actions;

export const todoReducer = todoSlice.reducer;

const { selectAll } = todosAdapter.getSelectors();

export const selectTodos = (state: TodoState, props: any) => {
  const todos: Todo[] = selectAll(state);
  return todos.filter(todo => todo.completed === props.completed)
}

export const loadTodos = (): AppThunk => async (dispatch) => {
  let todos: Todo[] = [];
  try {
    dispatch(loadTodosStart());
    todos = await fetchTodos();
  } catch (e) {
    console.error(e);
    dispatch(loadTodosFailed());
    return;
  }
  dispatch(loadTodosSuccess(todos));
};
