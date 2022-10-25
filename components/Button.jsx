import React from 'react';

const Button = ({ nextQuote, colors, newColor }) => {
  return (
    <button onClick={nextQuote} style={{ backgroundColor: colors[newColor] }} className='btn'>{<i className="fa-solid fa-shuffle"></i>}{" "}Next Quote</button>
  );
};

export default Button;