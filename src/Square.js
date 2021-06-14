import React from 'react'
export default function Square({handleClick, value}) {
  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}
