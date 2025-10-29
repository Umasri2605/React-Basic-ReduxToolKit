import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {inc,dec} from "./counterSlice"
function Counter() {
   var {count} = useSelector((state)=>state.counterR)
   var dispatch=useDispatch();
  return (
    <div className='border border-1 border-warning-subtle p-2 m-2'>
      <h3>Counter:{count}</h3>
      <button onClick={()=>{dispatch(inc())}} className='me-4 border-success-subtle bg-success-subtle'>Increment</button>
      <button onClick={()=>{dispatch(dec())}} className='border-danger-subtle bg-danger-subtle'>Decrement</button>
    </div>
  )
}
export default Counter;
