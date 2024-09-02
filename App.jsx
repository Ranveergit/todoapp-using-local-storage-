import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Todoprovider } from './Context'
import TodoForm from './Component/TodoForm'
import TodoItem from './Component/TodoItems'



function App() {
 // jo todos , context se aayenge usko kahi na kahi to rakhna hoga to wo usestate ke madad se rajhenge 
 const [todos , settodos] = useState([])
 // functionality 

 //  ab jo jo functionaity hum context api se laa rahe h wo  hum define krenge yaha 

 const addtodo =(todo)=>{
  settodos((prev)=>[{id:Date.now(),...todo },...prev ])
}

  const updatetodo = (id, todo) => {
    settodos((prev)=>prev.map((prevtodo)=>(prevtodo.id === id ? todo : prevtodo)))
  }
  

  const deletetodo=(id)=>{
    settodos((prev)=>prev.filter((todo)=>todo.id != id ))
  }

  const  togglecomplete =(id)=>{
    settodos((prev)=> prev.map((prevtodo) => prevtodo.id === id ? {...prevtodo , completed: !prevtodo.completed}: prevtodo))
  }

 
 
 // hum aisa maan skte h ki  jab page load ho to jo bhi data local storage me se  usko lanne ka ek method likhna hoga 
  
 // sabse pahle hum get item krte h , aur ye ek hi baar laod hoga jab component load hoga 
 // ya jab bhi app load hoga hum local storage me se todos ko call krke todos ko de dengai 
  // ab todos me jab jab bhi koi change aaye to humko usko local storage me bhejna h 
  
  
 useEffect( ()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))

    if( todos && todos.length > 0){
      settodos(todos)
    }
  
 }, []) 


 useEffect(()=>{
  localStorage.setItem("todos", JSON.stringify(todos)) 
 }, [todos])

  
  return (
    <Todoprovider
      value={{ todos, addtodo, updatetodo, deletetodo, togglecomplete }}
    >
      <div>
        <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl px-4 py-3 mx-auto text-white rounded-lg shadow-md">
            <h1 className="mt-2 mb-8 text-2xl font-bold text-center">
              Manage Your Todos
            </h1>
            <div className="mb-4">{/* Todo form goes here */}

              <TodoForm/>
            </div>
            <div className="flex flex-wrap gap-y-3">
              {/*Loop and Add TodoItem here */}
              {todos.map((todo)=>(
              <div key={todo.id} 
               className='w-full'
              >
                <TodoItem todo = {todo}></TodoItem>
              </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Todoprovider>
  );
}

export default App
