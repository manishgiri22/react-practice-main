import React, { useState } from 'react'

const ToDoBasic = () => {

    const [todos , setTodos] = useState(["task1","task2" ,"task3"])  // groups of todo task
    const [task , setTask] = useState("task1")                    // task individual 
    const addTodo = () =>{
            const updatedtodos = [...todos, {text:task}]   // only task matra vayo canee string maa matra aauxw 
            setTodos(updatedtodos)
            setTask("")
    }
    const deleteTodo = (indextodelete) => {
        const updatedtodos = todos.filter((item, index) => index !== indextodelete);
        setTodos(updatedtodos)

    }


  return (
  <>
    <div className="h-screen w-screen bg-blue-100 flex justify-center items-center">
        <div className="bg-white h-1/2 w-1/2 flex flex-col  items-center py-4 font-bold font-serif">
           <p> TO Do List </p>
          
           <div className="my-4">

           <input value ={task} onChange={(e)=>setTask(e.target.value)} type="text" className="border px-4 rounded border-gray-300 " placeholder="enter the task " />
           <button onclick = {addTodo} className="border px-5 rounded bg-red-400 text-white ml-4">Add</button>
           </div>
        <div className="w-full mx-4">
        {todos.map((item, index) => (
          <div
            key={index}
            className="w-full flex items-center justify-between gap-3 bg-gray-50 hover:bg-indigo-50 border border-gray-100 hover:border-indigo-200 rounded-xl px-5 py-4 transition duration-200 group"
          >
            <span className="text-gray-700 font-medium break-all">
              {item}
            </span>

            <button
              onClick={() => { deleteTodo(index) }}
              className="shrink-0 px-4 py-2 bg-red-100 text-red-600 hover:bg-red-500 hover:text-white rounded-lg font-medium text-sm transition duration-200"
            >
              Delete
            </button>
            {/* complete button  */}
             <button
              onClick={() => { ctoggleComplete(index) }}
              className="shrink-0 px-4 py-2 bg-red-100 text-red-600 hover:bg-red-500 hover:text-white rounded-lg font-medium text-sm transition duration-200"
            >
             {item.completed?"undo":"Complete"}
            </button>

          </div>
        ))}
      </div>
        </div>

    </div>
  
  
  
  </>
  )
}

export default ToDoBasic