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
        deadline: '17 Sep 2019',
        period: 'Breakfast',
        comments: ['Only put 1 tbsp of sweetener on my shit','only put 1 tbsp of oil'],
      },
      {
        name: 'Egg White & Roquette Sandwich',
        deadline: '17 Sep 2019',
        period: 'Lunch',
        comments: ['test'],
      },
      {
        name: 'Garlic & Onion Pancakes',
        deadline: '17 Sep 2019',
        period: 'Dinner',
      },
    ],
  },
  {
    name: 'Chuchuu',
    orders: [
      {
        name: 'Garlic & Onion Pancakes',
        deadline: '17 Sep 2019',
        period: 'Breakfast',
        comments: ['Only put 1 tbsp of sweetener','only put 1 tbsp of oil','test', 'tes'],
      },
      {
        name: 'Garlic & Onion Pancakes',
        deadline: '17 Sep 2019',
        period: 'Dinner',
        comments: ['Only put 1 tbsp of sweetener','only put 1 tbsp of oil','test', 'tes'],
      },
      {
        name: 'Egg White & Roquette Sandwich',
        deadline: '17 Sep 2019',
        period: 'Urgent',
        comments: ['Only put 1 tbsp of sweetener','only put 1 tbsp of oil','test', 'tes'],
      },
    ],
  },
  {
    name: 'Chuchuu',
    orders: [
      {
        name: 'Egg White & Roquette Sandwich',
        deadline: '17 Sep 2019',
        period: 'Breakfast',
        comments: ['Only put 1 tbsp of sweetener','only put 1 tbsp of oil','test', 'tes'],
      },
      {
        name: 'Egg White & Roquette Sandwich',
        deadline: '17 Sep 2019',
        period: 'Dinner',
        comments: ['Only put 1 tbsp of sweetener','only put 1 tbsp of oil','test', 'tes'],
      },
      {
        name: 'Egg White & Roquette Sandwich',
        deadline: '17 Sep 2019',
        period: 'Urgent',
        comments: ['Only put 1 tbsp of sweetener','only put 1 tbsp of oil','test', 'tes'],
      },
    ],
  },
  {
    name: 'Chuchuu',
    orders: [
      {
        name: 'Egg White & Roquette Sandwich Egg White & Roquette Sandwich Egg White & Roquette Sandwich Egg White & Roquette Sandwich',
        deadline: '17 Sep 2019',
        period: 'Breakfast',
        comments: ['Only put 1 tbsp of sweetener','only put 1 tbsp of oil','test', 'tes'],
      },
      {
        name: 'Egg White & Roquette Sandwich Egg White & Roquette Sandwich Egg White & Roquette Sandwich Egg White & Roquette Sandwich',
        deadline: '17 Sep 2019',
        period: 'Breakfast',
        comments: ['Only put 1 tbsp of sweetener','only put 1 tbsp of oil','test', 'tes'],
      },
      {
        name: 'Egg White & Roquette Sandwich Egg White & Roquette Sandwich Egg White & Roquette Sandwich Egg White & Roquette Sandwich',
        deadline: '17 Sep 2019',
        period: 'Breakfast',
        comments: ['Only put 1 tbsp of sweetener','only put 1 tbsp of oil','test', 'tes'],
      },
    ],
  },
  {
    name: 'Chuchuu',
    orders: [
      {
        name: 'Egg White & Roquette Sandwich',
        deadline: '17 Sep 2019',
        period: 'Breakfast',
        comments: ['Only put 1 tbsp of sweetener','only put 1 tbsp of oil','test', 'tes'],
      },
      {
        name: 'Egg White & Roquette Sandwich',
        deadline: '17 Sep 2019',
        period: 'Dinner',
        comments: ['Only put 1 tbsp of sweetener','only put 1 tbsp of oil','test', 'tes'],
      },
      {
        name: 'Egg White & Roquette Sandwich',
        deadline: '17 Sep 2019',
        period: 'Urgent',
        comments: ['Only put 1 tbsp of sweetener','only put 1 tbsp of oil','test', 'tes'],
      },
    ],
  },
]
