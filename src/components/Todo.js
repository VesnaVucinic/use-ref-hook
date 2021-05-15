import usePrevious from './usePrevious'

const Todo = () => {
    const initialValue = {name: 'Take out laundry', points: 40}
    const [todo, setTodo] = React.useState(initialValue)
    
    const previousTodo = usePrevious(todo)
    
    React.useEffect(() => {
      if (!_isEqual(previousTodo, todo)) {
        console.log('You need to complete some tasks!')
      }
    }, [todo])
    
    const gainPoints = () => {
      const newPoints = Math.random() >= 0.5 ? todo.points : todo.points + 1
      setTodo(prevTodo => ({...prevTodo, points: newPoints}))
    }
    
    return (
      <>
         <p>Current points: {todo.points}</p>
         <button onClick={gainPoints}>Increase stakes</button>
      </>
    )
  }
  
  export default Todo