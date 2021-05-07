import React, { Fragment } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App//App';
import TodoList from './TodoList/TodoList'

const Root = (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route exact path='/app' component={App}></Route>
        <Route exact path='/todolist' component={TodoList}></Route>
      </Switch>
    </Fragment>
  </BrowserRouter>
)



ReactDOM.render(Root, document.getElementById('root'));


