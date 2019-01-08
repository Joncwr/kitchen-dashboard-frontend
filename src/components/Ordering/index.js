import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars'

import UsersComponent from './UsersComponent'

import './index.css'

class Ordering extends React.Component {
  renderUsers() {
    let dataArr = Object.assign([],this.props.data)
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
    let dataArr = Object.assign([],this.props.data)

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
        <Scrollbars
          autoHide
        >
          {this.renderUsers()}
          {this.renderNoCurrentOrders()}
        </Scrollbars>
      </div>
    )
  }
}

export default Ordering
