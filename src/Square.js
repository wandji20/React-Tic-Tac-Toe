import React from 'react';

export default function Square(props) {
  const { handleClick, value } = props
  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}
