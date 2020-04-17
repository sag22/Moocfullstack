import React from 'react'
import ReactDOM from 'react-dom'

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
      <h1>{course}</h1>
      <p>{part1.name}</p>
      <p>{part1.exercises}</p>
        <p>{part2.name}</p>
        <p>{part2.exercises}</p>
            <p>{part3.name}</p>
            <p>{part3.exercises}</p>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))