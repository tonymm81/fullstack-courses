import React, { useState } from 'react'
import ReactDOM from 'react-dom'



const App = (props) => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [neBad, setneBad] = useState(0)

  



  return (
    <div> 
      <p>
         Give feedback! </p>
     
      <button onClick={() => setGood(good +1) + setneBad(neBad +1)}>
        Good
      </button>
      <button onClick={() => setNeutral(neutral +1) + setneBad(neBad +1)}>
        
        neutral
      </button>
      <button onClick={() => setBad(bad + 1) + setneBad(neBad +1)}>
        bad
      </button>
      <p>Statics:</p>
      <p> Good: {good} </p>
      <p> Neutral: {neutral} </p>
      <p> Bad: {bad} </p>
      <p> all: {neBad} </p>
      <p> average: {(good - bad) / neBad} </p>
      <p> positive: {good / neBad * 100 } </p>
      
    </div>
  )
}


ReactDOM.render(
  <App />, 
  document.getElementById('root')
)
