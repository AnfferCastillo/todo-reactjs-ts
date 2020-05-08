import React, {Component} from 'react';
import {Todo} from '../models/Todo';

export class TodoItemComponent extends Component<Todo, {}> {
  render(): React.ReactElement<TodoItemComponent, string> {
    return (<p>this is just a test item</p>);
  }
}
