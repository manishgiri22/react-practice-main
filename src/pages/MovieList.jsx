import N from "../assets/N.png"
function MovieList({listimg}){
    return(
        <>
        <div className="">
            <img className="absolute h-8 " src={N} />


                <img src={listimg} className="Relative h-[18vh] w-[95%] shadow-2xs rounded " /> 
        </div>
                </>
    )
}
export default MovieList