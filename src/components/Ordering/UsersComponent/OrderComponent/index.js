import React from 'react'

import './index.css'

class OrderComponent extends React.Component {
  constructor(){
    super()

    this.state = {

    }

  }

  render() {
    return (
      <div className="orderComponent">
        <div className="orderComponent-wrapper">
          <div className="orderComponent-headerContainer">
            <div className="orderComponent-headerContainer-text">
              Mon, 7 Jul - Breakfast
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default OrderComponent
