import React, { Component } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import TodoList from "../todo/todoList";

export class Navbar extends Component {
  render() {
    return (
      <Router>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <NavLink
              exact={true}
              className="nav-link"
              activeClassName="active"
              to="/"
            >
              TO-DOs
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/done" activeClassName="active">
              DONE
            </NavLink>
          </li>
        </ul>
        <hr></hr>
        <div className="row">
          <Switch>
            <Route path="/done">
              <TodoList completed={true} />
            </Route>
            <Route path="/">
              <TodoList completed={false} />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
