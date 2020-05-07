import React, {Component} from 'react';
import {TodoItem} from '../models/TodoItem';

export class TodoItemComponent extends Component<TodoItem, {}> {
  render(): React.ReactElement<TodoItemComponent, string> {
    return (<p>this is just a test item</p>);
  }
}
