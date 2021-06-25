import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Square from './Square';
/* eslint-disable react/prop-types */

export default class Board extends Component {
  renderSquare(i) {
    const { squares, handleClick } = this.props;
    return <Square value={squares[i]} handleClick={() => { handleClick(i); }} />;
  }

  render() {
    return (
      <div>
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
    );
  }
}
// Board.propTypes = {
//   squares: PropTypes.array,
//   handleClick: PropTypes.func,
// };
