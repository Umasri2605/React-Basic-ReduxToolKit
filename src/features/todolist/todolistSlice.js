import { createSlice} from "@reduxjs/toolkit";
const initialState={
    todos:["Buy a Car","Pay Bills","Get Veggies","Make Chocalates","Goto Trip"]
}

export const todolistSlice=createSlice({
   name:"todolistS",
   initialState,
   reducers:{
     addTodo:(state,action)=>{
        state.todos.push(action.payload)
     },
     deleteTodo:(state,action)=>{
        state.todos.splice(action.payload,1)
     },
   } 
})
export const{addTodo,deleteTodo}=todolistSlice.actions;
export default todolistSlice.reducer;