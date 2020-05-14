import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
  console.log(props)
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
      {props.part1} 
      {props.part2} 
      {props.part3} 
      </p>
                    
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>
      all courses total :{props.total}
      </p>
    </div>
  )
}








const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
   name: 'Fundamentals of React',
   exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      
      <Content part1={part1.name + ", excercises: " + part1.exercises}  />
      <Content part2={part2.name + ", excercises: " + part2.exercises}  />
      <Content part3={part3.name + ", excercises: " + part3.exercises}  />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
      
    </div>
  )
}




ReactDOM.render(<App />, document.getElementById('root'))