import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route, Switch,
  Link
} from 'react-router-dom';
import {DoneList} from '../containers/DoneList';
import {TodoList} from '../containers/TodoList';

export class Navbar extends Component {

  render(): React.ReactElement<Navbar, string> {
    return (
        <Router>
          <ul className="nav nav-pills">
             <li className="nav-item">
                <Link className="nav-link" to="/">TO-DOs</Link>
              </li>
            <li className="nav-item">
              <Link className="nav-link" to="/done">DONE</Link>
            </li>
          </ul>
          <div className="row">
            <Switch>
              <Route path="/done">
                <DoneList/>
              </Route>
              <Route path="/">
                <TodoList/>
              </Route>
            </Switch>
          </div>
        </Router>
    );
  }

}
