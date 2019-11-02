import React, { Component } from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component'

const HatsPage = () =>(
  <div>
    <h1>Hello</h1>
  </div>
)


class App extends Component {
  render() {
    return <div className='App'>
              <Switch>
                <Route exact path='/' component ={HomePage} /> 
                <Route path ='/hats' component ={HatsPage} />  
              </Switch>               
          </div>;
  }
}

export default App;
