import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

// Page
import HomePage from './pages/home/home-page.component';
import LivingBeingPage from './pages/living-beings/living-beings.component'

// Component
import Header from './components/header/header.component';

import logo from './logo.svg';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  componentDidMount(){}

  componentWillUnmount(){}

  render(){
    return (
      <div>
        <Header currentUser={ this.state.currentUser } />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/living-beings" component={LivingBeingPage} />
        </Switch>
      </div>
    )
  }
}

export default App;
