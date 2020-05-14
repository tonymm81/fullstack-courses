import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
  
  return (
    <div>
      
      <p>Header: 
      {props.course}
      </p>
    </div>
  )
}



const Content = (props) => {
  console.log(props)
  return (
  
    <div>
      <p>
      parts: {props.parts.name}
      
      
      </p>
      
                    
    </div>
  )
}

const Total = (props) => {
  
  return (
    <div>
      
      <p>course: {props.total.exercises}</p>
      
    </div>
  )
}








const App = () => {
  const course = 'Half Stack application development'
  const parts = [ 
    {
     name: 'Fundamentals of React',
     exercises: 10
    },
    {
     name: 'Using props to pass data',
     exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      
      <Content parts={parts[0]}  />
      <Content parts={parts[1]} />
      <Content parts={parts[2]} />
      
      <Total total={parts[0]} />
      <Total total={parts[1]} />
      <Total total={parts[2]} />
      
    </div>
  )
}




ReactDOM.render(<App />, document.getElementById('root'))