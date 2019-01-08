import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

import socket from './services/Sockets.js'
import Accounts from './services/Accounts.js'

import Start from './Start'
import Ordering from './components/Ordering'
import RecipeViewer from './components/RecipeViewer'

import './App.css';

const history = createHistory()

class App extends Component {
  constructor(){
    super()

    this.state = {
      orderData: [],
    }
  }

  componentDidMount() {
    if (localStorage.getItem('data')) {
      let data = localStorage.getItem('data')
      this.setState({orderData: JSON.parse(data)})
    }
    else {
      Accounts.accountData()
      .then(res => {
        let dataArr = []
        res.forEach(data => {
          dataArr.push({name: data, orders: []})
        })

        this.setState({orderData: dataArr},() => {
          localStorage.setItem('data', JSON.stringify(dataArr))
        })
      })
      .catch(err => console.log(err))
    }

    socket.on('socket_order', res => {
      Accounts.authorizeUser(res.name)
      .then(() => {
        this.changeOrders(res, 'add')
      })
      .catch(err => console.log(err))
    });

    socket.on('delete_last_order', res => {
      Accounts.authorizeUser(res.name)
      .then(() => {
        this.changeOrders(res, 'delete')
      })
      .catch(err => console.log(err))
    })
  }

  changeOrders(res, method) {
    this.state.orderData.forEach((data, index) => {
      if (data.name === res.name) {
        let data = Object.assign([], this.state.orderData)
        let dataObject = Object.assign({},this.state.orderData[index])

        if (method === 'add') {
          dataObject.orders.push(res.order)
        }
        else if (method === 'delete') {
          dataObject.orders.pop()
        }
        data[index] = dataObject

        this.setState({orderData: data},() => {
          localStorage.setItem('data', JSON.stringify(data))
        })
      }
    })
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
              data={this.state.orderData}
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
