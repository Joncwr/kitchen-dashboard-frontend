import React from 'react'

import OrderComponent from './OrderComponent'

import './index.css'

class Ordering extends React.Component {
  constructor(){
    super()

    this.state = {

    }

  }

  renderOrders() {
    let dataArr = testData
    if (dataArr.length > 0) {
      let renderDataArr = []
      dataArr.map((data,index) => {
        renderDataArr.push(
          <OrderComponent
            key={index}
            data={data}
          />
        )
      })

      return (
        <div className="ordering">
          {renderDataArr}
        </div>
      )
    }
  }

  render() {
    return (
      <div className="default">
        {this.renderOrders()}
      </div>
    )
  }
}

export default Ordering


let testData = [
  'Jon', 'Chuchuu'
]
