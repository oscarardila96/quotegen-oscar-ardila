import React from 'react';

const Button = ({ nextQuote, colors, newColor }) => {
  return (
    <button onClick={nextQuote} className='btn' style={{ background: colors[newColor] }}>{<i className="fa-solid fa-shuffle"></i>}{" "}Next Quote</button>
  );
};

export default Button;