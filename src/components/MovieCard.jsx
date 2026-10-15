function MovieCard(item){
return(
    <>
    {/* <div className="container"> */}
        <div className="card">
            <img src={item.image} alt="image"/>
            <div className="textcontainer">

            <h1>{item.title}</h1>
            <h2>{item.rating}</h2>
            <hr/>
            <h3>{item.year}</h3>
            <h4>{item.genre}</h4>
            </div>
        </div>
    {/* </div> */}
    </>
)

}
export default MovieCard