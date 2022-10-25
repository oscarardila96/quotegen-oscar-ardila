import React from 'react';
import quotes from '../src/assets/quotes.json'

const QuoteBox = ({ index, colors, newColor }) => {
  return (
    <>
      <div className="container" style={{ color: colors[newColor] }}>
        <div className="quoteContainer">
          <i className="fa-solid fa-quote-left"></i>
          <h2>{quotes[index].quote}</h2>
          <i className="fa-solid fa-quote-right"></i>
        </div>
        <div className="author">
          <h2>{quotes[index].author}</h2>
        </div>
      </div>
    </>
  );
};

export default QuoteBox;