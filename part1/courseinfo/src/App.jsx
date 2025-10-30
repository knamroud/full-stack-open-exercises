import Header from "./Header"
import Content from "./Content"
import Total from "./Total"

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        id: 1,
        name: 'Fundamentals of React', 
        exercises: 10
      },
      {
        id: 2,
        name: 'Using props to pass data', 
        exercises: 7
      },
      {
        id: 3,
        name: 'State of a component',
        exercises: 14
      }
    ]
  };
  let total_exercises = 0;
  course.parts.forEach(part => total_exercises += part.exercises)
  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total total={total_exercises}/>
    </div>
  )
}

export default App