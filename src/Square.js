import React, { Component } from 'react'

export default class Square extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: null
    }
    this.someFunc = this.someFunc.bind(this)
  }
  someFunc(){
    this.setState({
      value: 'X'
    })
  }
  render() {
    return (
      <button className="square" onClick = {this.someFunc}>
        {this.state.value}
      </button>
    )
  }
}
