import React from 'react';
/* eslint-disable react/prop-types */

export default function Square(props) {
  const { handleClick, value } = props;
  return (
    <button type="button" className="square" onClick={handleClick}>
      {value}
    </button>
  );
}
