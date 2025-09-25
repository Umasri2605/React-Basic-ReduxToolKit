import Counter from "./features/counter/Counter"
import Todolist from "./features/todolist/Todolist"

function App() {
  return (
    <div className="border border-2 m-4 p-4 border-secondary-subtle">
       <h1>Redux Took Kit Component</h1>
       <Counter></Counter>
       <br></br>
       <Todolist></Todolist>
    </div>
     
  )
}

export default App
