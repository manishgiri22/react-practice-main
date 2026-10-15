import React from 'react'
import N from '../assets/N.png'
import moviename from '../assets/moviename.png'
import MovieList from './MovieList'
import movieees from "./movieimagedata"


const NetflixBody = () => {
  return (
    <>
    <div className=" h-[92vh] w-screen flex flex-col justify-between text-white">
        <div className="pt-[20vh] ml-[10vh] h-[40vh] w-[31vw]   border-white flex flex-col  ">
            <div className="top bg-center bg-cover flex items-center"  >
                <img className="h-10" src={N}/>
                <h2 className="tracking-[2px] ml-1 "> Series</h2>
            </div>
           <img className="w-auto h-30"src={moviename}/>
           <h2 className="mt-2">#1 In the TV Shows Today</h2> 
           <h3>Determined to protect a young patient who escaped a mysterious
cult, a psychiatrist takes the girl in, putting her own family — and
life — in danger.</h3>
<div className="buttons">
    <button className="text-black bg-white px-[3vh] mx-2 my-3 font-medium rounded">Play</button>
    <button className="text-white bg-[#515451]  px-[3vh] mx-2 my-3 font-medium rounded ">More info</button>
</div>

        </div>
        {/* for the movie list  */}
<div className = " float-end h-[20vh] grid grid-cols-10  overflow-hidden  ">
{movieees.map((item,index)=>{
    return <MovieList key = {index} listimg={item.image} />}
)}
</div>
      
    </div>
    </>
  )
}

export default NetflixBody