import React from "react"
import {useState} from "react"
function HookBasis(){
    const [counter,setCounter] = useState(0)
    const addValue = () => {
        counter+=1
        setCounter(counter)

    }
    const removeValue = () => {
        setCounter(counter-1)
    }
    return(
        <>
        <p>This is count {counter}</p>
        <button onClick = {addValue} >Add Value</button>
        <button onclick = {removeValue}>remove Value</button>
        </>
    )
}
export default HookBasis