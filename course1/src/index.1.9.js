import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statics = (props) =>{
  if (props.neBad === 0) {
    return (
    <div>
      <p>Statics:</p>
      <p>no feedback given yet!</p>
      </div>
    )
  }
  return (
  <div>
  <p>Statics:</p>
  <p> good:  {props.good} </p>
  <p> neutral: {props.neutral} </p>
  <p> bad: {props.bad} </p>
  <p> all: {props.neBad} </p>
  <p> average: {props.average} </p>
  <p> positive:{props.positive} </p>
  </div>
  )
}

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
      <Statics good={good} 
      neutral={neutral} 
      bad={bad} 
      neBad={neBad} 
      average={(good - bad) / neBad} 
      positive={good / neBad * 100 }>
        
      </Statics>
       
    </div>
  )
}


ReactDOM.render(
  <App />, 
  document.getElementById('root')
)
