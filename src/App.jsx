import './App.css'
import Button from '../components/Button'
import QuoteBox from '../components/QuoteBox'
import quotes from '../src/assets/quotes.json'
import { useState } from 'react'


function App() {
  const [index, setIndex] = useState(Math.floor(Math.random() * quotes.length));
  const nextQuote = () => {
    setIndex(Math.floor(Math.random() * quotes.length));
  }

  const colors = ['#845AEC', '#5AC3EC', '#A3EC5A', '#EC5AB6', '#EC5A5C', '#C2EC5A', '#5A68EC', '#EC5AC0', '#5A6DEC', '#5AB9EC'];

  const newColor = Math.floor(Math.random() * colors.length);

  document.body.style = `background: ${colors[newColor]} `

  return (
    <div className="App">
      <QuoteBox index={index} colors={colors} newColor={newColor} />
      <Button nextQuote={nextQuote} colors={colors} newColor={newColor} />
    </div>
  )
}

export default App
