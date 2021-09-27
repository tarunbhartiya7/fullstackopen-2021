import React from "react"

const Header = ({ course }) => <h2>{course.name}</h2>

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
)

const Content = ({ course }) => (
  <div>
    {course.parts.map((part) => (
      <Part key={part.id} part={part} />
    ))}
  </div>
)

const Total = ({ course }) => {
  const total = course.parts.reduce((a, b) => ({
    exercises: a.exercises + b.exercises,
  }))
  return <b>total of {total.exercises} exercises </b>
}

const Course = ({ course }) => (
  <>
    <Header course={course} />
    <Content course={course} />
    <Total course={course} />
  </>
)

export default Course
