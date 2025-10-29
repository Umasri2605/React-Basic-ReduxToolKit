import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo } from './todolistSlice';

function Todolist() {
    var {todos}=useSelector((state)=>state.todolistR);
    var dispatch=useDispatch();
    var [newtodo,setNewtodo]=React.useState("");
  return (
    <div className='border border-1 border-info-subtle m-2 p-2'>
      <h3>Todolist</h3>
      <input type="text" onChange={(e)=>{setNewtodo(e.target.value)}}/>
      <button onClick={()=>{dispatch(addTodo(newtodo))}}>AddTodo</button>
      <ul>
        {
            todos.map((todo)=>{
                return<li className='list-unstyled'>
                    {todo}
                    <button onClick={()=>{dispatch(deleteTodo())}} className='border-danger-subtle bg-danger-subtle ms-3 mt-2'>Delete</button>
                    </li>
            })
        }
      </ul>
    </div>
  )
}

export default Todolist;
