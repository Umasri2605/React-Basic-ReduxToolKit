import React from 'react'
import { useSelector } from 'react-redux'

function Todolist() {
    var {todos}=useSelector((state)=>state.todolistR);

  return (
    <div className='border border-1 border-info-subtle m-2 p-2'>
      <h3>Todolist</h3>
      <ul>
        {
            todos.map((todo)=>{
                return<li>{todo}</li>
            })
        }
      </ul>
    </div>
  )
}

export default Todolist
