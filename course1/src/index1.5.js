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
  const course = {
    name: 'Half Stack application development',
    parts: [ 
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
  }
  return (
    <div>
      <Header course={course.name} />
      
      <Content parts={course.parts[0]}  />
      <Content parts={course.parts[1]} />
      <Content parts={course.parts[2]} />
      
      <Total total={course.parts[0]} />
      <Total total={course.parts[1]} />
      <Total total={course.parts[2]} />
      
    </div>
  )
}




ReactDOM.render(<App />, document.getElementById('root'))