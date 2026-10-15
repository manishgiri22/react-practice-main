function ProductCard({productValue}){
    return (
        <>
         <div className = 'cardContainer'>
            <div className="card">
                <img src={productValue.image} alt="travel"/>
                 <div className="content">
                    <p>{productValue.id} </p>

                    <h3>{productValue.name}</h3>
                    
                    <p>{productValue.category}</p>
        
                </div>
                <hr/>
            <h5>{productValue.name}</h5>
            <h1>{productValue.rating}</h1>
            <h3>{productValue.price}</h3>
     
        </div>
        </div>
        
        
        </>
    )
}
export default ProductCard