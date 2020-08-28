import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)



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
     
      <Button onClick={() => setGood(good +1) + setneBad(neBad +1)} text="good"/>
      <Button onClick={() => setNeutral(neutral +1) + setneBad(neBad +1)} text="neutral"/>
      <Button onClick={() => setBad(bad + 1) + setneBad(neBad +1)} text="bad" />     
      <Statics good={good} 
      neutral={neutral} 
      bad={bad} 
      neBad={neBad} 
      average={(good - bad) / neBad} 
      positive={good / neBad * 100 }>
      // tehtävän kohta staticline, en ymmärrä mitä sillä tartkoitetaan tai halutaan. statics on jo oma komponenti..
        
      </Statics>
       
    </div>
  )
}


ReactDOM.render(
  <App />, 
  document.getElementById('root')
)
