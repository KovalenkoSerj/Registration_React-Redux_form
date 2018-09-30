import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import RegistrationPage from '../RegistrationPage/RegistrationPage';
import { history } from '../utils/history';
import HomePage from '../HomePage/HomePage'



export default class App extends Component {
  render() {
    return (
        <div className='container'>
        <Router history={ history }>
          <Switch>
            <Route exact path='/home' component={ HomePage }/> 
            <Route to='/register' component={ RegistrationPage }/>
          </Switch>
        </Router>
        </div>
    );
  }
}

