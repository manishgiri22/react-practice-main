import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="w-40 p-2 flex flex-col justify-center items-center m-5 gap-3 bg-blue-600 border border-black ">
        <div className="bg-yellow-400 px-2 text-black">
          This is the count {count}{" "}
        </div>
        <button
          className="bg-blue-300 text-white border rounded p-2"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          click me{" "}
        </button>
      </div>
    </>
  );
};

export default Counter;
