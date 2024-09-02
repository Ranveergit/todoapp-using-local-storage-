import { createContext , useContext } from "react";


// ek context create kiye  
export const TodoContext = createContext({
 todos :{
  id: 1,
  todo : "todo msg",
  completed : false,
 },
 
 addtodo : (todo) =>{},
 updatetodo: (id, todo)=>{}, 
 deletetodo:(id, todo) =>{},
 togglecomplete:(id)=>{}
})

export const useTodo =()=>{
  return useContext(TodoContext)
}

export const Todoprovider = TodoContext.Provider