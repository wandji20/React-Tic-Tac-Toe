import React, { Component } from 'react';
import Board from './Board';
import calculateWinner from './helper';

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{ squares: Array(9).fill(null) }],
      xIsNext: true,

    };
  }

  handleClick(i) {
    const { history, xIsNext } = this.state;
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const oIsNext = !xIsNext;
    squares[i] = xIsNext ? 'X' : 'O';
    const newHistory = history.concat([{
      squares,
    }]);

    this.setState(() => ({
      history: newHistory,
      xIsNext: oIsNext,
    }));
  }

  render() {
    const { history, xIsNext } = this.state;
    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);
    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${xIsNext ? 'X' : 'O'}`;
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            status={status}
            squares={current.squares}
            handleClick={(i) => { this.handleClick(i); }}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol />
        </div>
      </div>
    );
  }
}
