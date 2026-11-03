import React, { useState } from 'react'

const ToDo = () => {
    const[todos,setTodos] = useState(["task1","task2","task3"])
    const[task,setTask] = useState("")
    const addTodo = ()=>{
        const updatedTodo = [...todos,task]   
        // todo arrays maa task ko value thapina paryo
        setTodos(updatedTodo)
        setTask("")
        console.log(todos,"check")
    }

    const deleteTodo = (indexToDelete)=>{
        console.log(indexToDelete)
        const updatedtodo = todos.filter((item,index)=> index !== indexToDelete)
        setTodos(updatedtodo)
         
    }

  return (
   
    <>
  <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-blue-100 flex items-center justify-center p-6">

    <div className="w-full max-w-xl bg-white rounded-3xl shadow-2xl p-8">

      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight">
          My Todo List
        </h1>
        <p className="text-gray-400 mt-2">
          Organize your day, one task at a time.
        </p>
      </div>

      <div className="flex gap-3 mb-8">
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          type="text"
          placeholder="What needs to be done?"
          className="flex-1 min-w-0 px-5 py-3 rounded-xl border border-gray-200 bg-gray-50 outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
        />

        <button
          onClick={addTodo}
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-lg shadow-indigo-200 transition duration-200 active:scale-95"
        >
          + Add
        </button>
      </div>

      <div className="space-y-3">
        {todos.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between gap-3 bg-gray-50 hover:bg-indigo-50 border border-gray-100 hover:border-indigo-200 rounded-xl px-5 py-4 transition duration-200 group"
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
          </div>
        ))}
      </div>

    </div>
  </div>
</>
  )
}

export default ToDo