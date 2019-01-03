import React from 'react'

import UsersComponent from './UsersComponent'

import './index.css'

class Ordering extends React.Component {
  constructor(){
    super()

    this.state = {

    }

  }

  renderUsers() {
    let dataArr = testData
    if (dataArr.length > 0) {
      let renderDataArr = []
      dataArr.map((data,index) =>
        renderDataArr.push(
          <UsersComponent
            key={index}
            data={data}
          />
        )
      )

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
        {this.renderUsers()}
      </div>
    )
  }
}

export default Ordering


let testData = [
  {
    name: 'Jon',
    orders: [
      {
        name: 'Chicken Sandwich',
        deadline: 'Tomorrow Breakfast',
        comments: 'Only put 1 tbsp of sweetener',
      },
      {
        name: 'Chicken Sandwich',
        deadline: 'Tomorrow Breakfast',
        comments: 'Only put 1 tbsp of sweetener',
      },
    ],
  },
  {
    name: 'Chuchuu',
  },
]
