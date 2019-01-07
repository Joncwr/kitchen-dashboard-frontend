import React from 'react'

import socket from '../../services/Sockets.js'
import Accounts from '../../services/Accounts.js'

import UsersComponent from './UsersComponent'

import './index.css'

class Ordering extends React.Component {
  constructor(){
    super()

    this.state = {
      data: [],
    }

  }

  componentDidMount() {
    if (localStorage.getItem('data')) {
      let data = localStorage.getItem('data')
      this.setState({data: JSON.parse(data)},() => {

      this.calcOrders()
      })
    }
    else {
      Accounts.accountData()
      .then(res => {
        let dataArr = []
        res.forEach(data => {
          dataArr.push({name: data, orders: []})
        })

        this.setState({data: dataArr},() => {
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
    this.state.data.forEach((data, index) => {
      if (data.name === res.name) {
        let data = Object.assign([], this.state.data)
        let dataObject = Object.assign({},this.state.data[index])

        if (method === 'add') {
          dataObject.orders.push(res.order)
        }
        else if (method === 'delete') {
          dataObject.orders.pop()
        }
        data[index] = dataObject

        this.setState({data: data},() => {
          localStorage.setItem('data', JSON.stringify(data))
        })
      }
    })
  }

  renderUsers() {
    let dataArr = Object.assign([],this.state.data)
    if (dataArr.length > 0) {
      let renderDataArr = []
      dataArr.forEach((data,index) => {
        if (data.orders) {
          if (data.orders.length > 0) {
            renderDataArr.push(
              <UsersComponent
                key={index}
                data={data}
              />
            )
          }
        }
      })

      return (
        <div className="ordering">
          {renderDataArr}
        </div>
      )
    }
  }

  calcOrders() {
    let orders = 0
    let dataArr = Object.assign([],this.state.data)

    dataArr.forEach(data => {
      data.orders.forEach(orderData => {
        orders += 1
      })
    })

    return orders
  }

  renderNoCurrentOrders() {
    if (this.calcOrders() <= 0) {
      return (
        <div className="blank">
          <div className="blank-image" />
          <div className="blank-text">There are no current Orders.</div>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="default">
        {this.renderUsers()}
        {this.renderNoCurrentOrders()}
      </div>
    )
  }
}

export default Ordering
