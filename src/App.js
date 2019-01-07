import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

import socketIOClient from "socket.io-client";
import Start from './Start'
import Ordering from './components/Ordering'
import RecipeViewer from './components/RecipeViewer'

import './App.css';

const history = createHistory()
const socketEndpoint = 'http://localhost:8000'
const socket = socketIOClient(socketEndpoint);


class App extends Component {
  constructor(){
    super()

    this.state = {
    }
  }

  componentDidMount() {
    socket.on('timer', res => console.log(res));
  }

  render() {
    return (
      <Router history={history}>
        <div className="dashboard">
          <div className="homeButton" onClick={() => history.push('/')}/>
          <Route exact path="/" render={() => (
            <Start
              history={history}
            />
          )} />
        <Route exact path="/ordering" render={() => (
            <Ordering
              history={history}
            />
          )} />
        <Route exact path="/recipeviewer" render={() => (
            <RecipeViewer
              history={history}
            />
          )} />
        </div>
      </Router>
    );
  }
}

export default App;
