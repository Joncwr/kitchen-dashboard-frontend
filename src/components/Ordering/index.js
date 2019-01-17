import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars'

import UsersComponent from './UsersComponent'

import './index.css'

class Ordering extends React.Component {
  constructor(){
    super()

    this.state = {
      scrollPosition: 0,
    }

    this._handleKey=this._handleKey.bind(this)
  }

  componentDidMount() {
   document.addEventListener("keydown", this._handleKey, false);
  }

  _handleKey(e) {
    console.log(e.key);
    let key = e.key

    // SCROLL UP =====
    if (key === 'w') {
      let scrollPosition = this.state.scrollPosition - 20
      if (scrollPosition > 0) {
        console.log(scrollPosition);
        this.setState({scrollPosition: scrollPosition}, () => {
          this.scrollBar.scrollTop(scrollPosition)
        })
      }
      else {
        this.setState({scrollPosition: 0}, () => {
          this.scrollBar.scrollTop(0)
        })
      }
    }
    // SCROLL DOWN =====
    else if (key === 's') {
      let scrollPosition = this.state.scrollPosition + 20
      let maxScrollDown = this.scrollBar.getScrollHeight() - 1080
      if (scrollPosition < maxScrollDown) {
        console.log(scrollPosition);
        this.setState({scrollPosition: scrollPosition}, () => {
          this.scrollBar.scrollTop(scrollPosition)
        })
      }
      else {
        this.setState({scrollPosition: maxScrollDown}, () => {
          this.scrollBar.scrollTop(maxScrollDown)
        })
      }
    }
  }

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
          ref={c => this.scrollBar = c}
        >
          {this.renderUsers()}
          {this.renderNoCurrentOrders()}
        </Scrollbars>
      </div>
    )
  }
}

export default Ordering
