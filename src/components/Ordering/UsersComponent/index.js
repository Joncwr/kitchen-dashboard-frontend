import React from 'react'
// import { Scrollbars } from 'react-custom-scrollbars';

import OrderComponent from './OrderComponent'

import './index.css'

class UsersComponent extends React.Component {
  constructor(){
    super()

    this.state = {

    }

  }

  renderOrders() {
    let { orders } = this.props.data
    console.log(orders);
    if (orders) {
      let renderOrders = []
      orders.map((data, index) =>
        renderOrders.push(
          <OrderComponent
            key={index}
            data={data}
          />
        )
      )

      return renderOrders
    }
  }

  render() {
    let { name } = this.props.data
    return (
      <div className="usersComponent">
        <div className="usersComponent-nameContainer">
          <div className="usersComponent-nameContainer-name">
            {name}
          </div>
        </div>
        <div className="usersComponent-orderComponentContainer">
          {this.renderOrders()}
        </div>
      </div>
    )
  }
}

export default UsersComponent
