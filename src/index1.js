import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} />
      <Total exercises1={exercises1} />

      <Content part2={part2} />
      <Total exercises2={exercises2} />

      <Content part3={part3} />
      <Total exercises3={exercises3} />
      <Total courses_total={exercises1 + exercises2 + exercises3} />      
    <div/>
  )
}

const Header = (props) => {
  return (
    <div>
      <p>
        Header = {props.course}
      </p>
    </div>
  )
}



const Content = (props) => {
  return (
    <div>
      <p>
         part name, 
        {props.part1}
        {props.part2}
        {props.part3}       
      </p>
    </div>
  )
}


const Total = (props) => {
  return (
    <div>
      <p>
        total courses this part, {props.exercises1}
        {props.exercises2}
        {props.exercises3}
        total all of courses, {props.courses_total}
       
      </p>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))