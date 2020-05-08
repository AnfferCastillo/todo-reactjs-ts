import {createReducer} from '@reduxjs/toolkit';
import {TodoState} from '../actions/store';


const initialState: TodoState = {
  todos: []
}

export default createReducer(initialState, {
  loadTodoActions: (state, action) => console.log({state, action}),
  loadTodoActionsSuccess: (state, action) => console.log({state, action}),
  addTodoAction: (state, action) => console.log({state, action}),
  deleteTodoActionAction: (state, action) => console.log({state, action})
});

