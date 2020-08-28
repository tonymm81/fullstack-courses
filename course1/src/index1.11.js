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
    <table>
      <tbody>
        <tr>
          <th>Statics:</th>
        </tr>
        <tr>
          <th> No feed back given yet</th>
        </tr>
      </tbody>
    </table>
    )
  }
  return (
  
  <table>
  <tbody>
  <tr>
  <th>Statics:</th>
  </tr>
  <tr>
  <th> Good: </th>
  <td> {props.good} </td>
  </tr>
  <tr>
  <th> Neutral: </th>
  <td> {props.neutral} </td>
  </tr>
  <tr>
  <th> bad: </th>
  <td> {props.bad} </td>
  </tr>
  <tr>
  <th> all: </th>
  <td> {props.neBad} </td>
  </tr>
  <tr>
  <th> average: </th>
  <td> {props.average} </td>
  </tr>
  <tr>
  <th> positive: </th>
  <td> {props.positive} </td>
  </tr>
  </tbody>
  </table>

  
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
        
      </Statics>
       
    </div>
  )
}


ReactDOM.render(
  <App />, 
  document.getElementById('root')
)
