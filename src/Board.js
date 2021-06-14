import React, { Component } from 'react'
import Square from './Square'

export default class Board extends Component {
  constructor(props){
    super(props)
    this.state = {
      squares : Array(9).fill(null),
      xIsNext: true
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(i){
    let newSquares = this.state.squares.slice()
    newSquares[i] = this.state.xIsNext ? 'X' : 'O'
    this.setState({
      squares: newSquares,
      xIsNext: !this.state.xIsNext
    })
    
  }

  renderSquare(i){
    return <Square value = {this.state.squares[i]} handleClick = {()=>{this.handleClick(i)}} />
  }
  render() {
    const status = `Next Player: ${this.state.xIsNext ? "X" : "O"}`
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}

