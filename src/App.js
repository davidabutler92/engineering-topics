import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import HomePage from './HomePage';
import Quantity from './Quantity';
import CleanCode from './CleanCode';
import Refactor from './Refactor';
import './App.css';

export default class App extends Component {
  
  render() {
    return (
      <div className='mainHeader'>
        <Router>
          <Switch>
            <Route exact path='/' render={(routerProps) => <HomePage
              {...routerProps} />}
            />
            <Route exact path='/quantity' render={(routerProps) => <Quantity
              {...routerProps} />}
            />
            <Route exact path='/cleanCode' render={(routerProps) => <CleanCode
              {...routerProps} />}
            />
            <Route exact path='/refactor' render={(routerProps) => <Refactor
              {...routerProps} />}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}