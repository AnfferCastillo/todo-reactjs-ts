import {Todo} from '../models/Todo';
import {TodoState} from './store';
import {Actions} from '@reduxjs/toolkit';

export const LOAD_TODOS = 'TODO_LOAD_TODOS';
  export const LOAD_TODOS_SUCCESS = 'TODO_LOAD_TODOS_SUCCESS';
  export const ADD_TODO = 'TODO_ADD_TODO';
  export const DELETE_TODOS = 'TODO_DELETE_TODO';



export const loadTodoActions = (state: TodoState, action: Actions) => {
  console.log({state, action})
}
export class LoadTodosSuccessAction {
  readonly type = LOAD_TODOS_SUCCESS;
}

export class AddTodoAction {
  readonly type = ADD_TODO;
  constructor(public payload: Todo) {
  }
}

export class DeleteTodoActionAction {
  readonly type = DELETE_TODOS;
  constructor(public payload: string) {
  }
}

export type TodoActions = LoadTodosAction | LoadTodosSuccessAction | AddTodoAction | DeleteTodoActionAction;
