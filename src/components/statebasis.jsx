import React, { useState } from "react";
import { Text } from '@mantine/core';


const StateBasis = () => {
    const [count,setCount] = useState(0)
    const [show,setShow] = useState(true)
    const[color,setColor] = useState('black')
    function addVal(){
        setCount(count+1)
    }
    function subVal(){
        setCount(count-1)
    }
    function showHide(){
        setShow(!show)
    }
    function trafficLight(){
        setColor('yellow')
    }
  return (

    <div className="p-10">
      <div className="flex gap-3">
        <button onClick={addVal}className="border border-black bg-green-400 px-5 rounded">
          Increase
        </button>
        <p>{count}</p>
        <button onClick={subVal}className="border border-black bg-red-400 px-5 rounded ">
          decrease
        </button>
        <button onClick={showHide} className="border border-black bg-gray-400 px-5 rounded">{show?"show":"hide"}</button>
        {show?<p>this is the show message after toggle</p>:null}


        {/* traffic button using state */}
        <div style={{backgroundColor:color}}className="bg-black rounded-full h-20 w-20 "></div>
        <button onClick={trafficLight} className="border border-black bg-red-400 px-3 rounded ">yellow</button>
        <button  onClick={trafficLight} className="border border-black bg-red-400 px-3 rounded ">green</button>
        <button  onClick={trafficLight} className="border border-black bg-red-400 px-3 rounded ">red</button>

      </div>
      {/* // mantine practice here  */}
      <Text size="xs">Extra small text</Text>
      <Text size="sm">Small text</Text>
      <Text size="md">Default text</Text>
      <Text size="lg">Large text</Text>
      <Text size="xl">Extra large text</Text>
      <Text fw={500}>Semibold</Text>
      <Text fw={700}>Bold</Text>
      <Text fs="italic">Italic</Text>
      <Text td="underline">Underlined</Text>
      <Text td="line-through">Strikethrough</Text>
      <Text c="dimmed">Dimmed text</Text>
      <Text c="blue">Blue text</Text>
      <Text c="teal.4">Teal 4 text</Text>
      <Text tt="uppercase">Uppercase</Text>
      <Text tt="capitalize">capitalized text</Text>
      <Text ta="center">Aligned to center</Text>
      <Text ta="right">Aligned to right</Text>
      <TextInput />

    </div>
  );
};

export default StateBasis;
