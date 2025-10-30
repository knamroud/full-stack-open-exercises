const GoodMorning = ({name}) => {
  return (
    <div>
      <p>Good morning {name}</p>
    </div>
  )
}

const Rant = () => {
  return (
    <div>
      <b>Che cos'è? Il ballo delle debuttanti?!?!</b>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>

      <GoodMorning name="Mr. Lee"/>
      <GoodMorning name="Mr. Robots"/>
      <GoodMorning name="Mr. Lee"/>
      <GoodMorning name="Mr. Robots"/>

      <Rant />
    </div>
  )
}

export default App