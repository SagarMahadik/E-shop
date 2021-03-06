import React, { Component } from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component'
import Header from  './components/header/header.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.components'


class App extends Component {
  render() {
    return <div className='App'>
              <Header />
              <Switch>
                <Route exact path='/' component ={HomePage} /> 
                <Route path ='/shop' component ={ShopPage} />
                <Route path ='/signin' component ={SignInAndSignUpPage} />  
              </Switch>               
          </div>;
  }
}

export default App;
