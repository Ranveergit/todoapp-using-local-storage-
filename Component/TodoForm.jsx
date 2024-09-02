import React, { useState } from "react";
import { useTodo } from "../Context";
export default function TodoForm() {
  // yaha hume add krna h 
  // sabse pahle mai addtodo  launga context se
  const [todo , settodo] = useState ("")
  const { addtodo } = useTodo();

   const add = (e)=>{
    e.preventDefault()
    if(!todo) return 
    addtodo({id:Date.now(), todo: todo , completed : false})
    settodo("")
   }
  
  
  
  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo}
        onChange={(e)=> settodo(e.target.value)}
      />
      <button
        type="submit"
        className="px-3 py-1 text-white bg-green-600 rounded-r-lg shrink-0"
      >
        ADD       
      </button>
    </form>
  )
}

