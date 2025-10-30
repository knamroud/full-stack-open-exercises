const Part = ({name, exercises}) => {
    return (
        <>
          <p>
            {name} {exercises}
          </p>
        </>
    )
}

const Content = ({part1, part2, part3}) => {
    return (
        <>
          <Part name={part1.name} exercises={part1.exercises}/>
          <Part name={part2.name} exercises={part2.exercises}/>
          <Part name={part3.name} exercises={part3.exercises}/>
        </>
    )
}
export default Content