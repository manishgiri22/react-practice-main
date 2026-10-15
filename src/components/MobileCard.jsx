function MobileCard({brand,model,storage,price,image}){
return(
    <>
    {/* <div className="container"> */}
        <div className="card">
            <img src={image} alt="image"/>
            <h1>{brand}</h1>
            <h4>{price}</h4>
            <h2>{model}</h2>
            <hr/>
            <h3>{storage}</h3>
        </div>
    {/* </div> */}
    </>
)

}
export default MobileCard