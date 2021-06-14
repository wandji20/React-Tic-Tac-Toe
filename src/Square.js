import React, { Component } from 'react'

export default class Square extends Component {
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     value: null
  //   }
  //   this.handleClick = this.handleClick.bind(this)
  // }
  // handleClick(){
  //   this.setState({
  //     value: 'X'
  //   })
  // }
  render() {
    return (
      <button className="square" onClick = {this.props.handleClick}>
        {this.props.value}
      </button>
    )
  }
}
