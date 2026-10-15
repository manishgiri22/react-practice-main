// function Destructure({productValue}){
//     const {ProductValue} = ProductValue
//     const iden = {
//         name : "manish",
//         age : 24, 
//         address: "jhapa"
//     }
//     const {name,age,address} = iden
//     console.log(name)

//     return (
//         <>
//          <div className = 'cardContainer'>
//             <div className="card">
//                 <img src={productValue.image} alt="travel"/>
//                  <div className="content">
//                     <p>{productValue.id} </p>

//                     <h3>{productValue.name}</h3>
                    
//                     <p>{productValue.category}</p>
        
//                 </div>
//                 <hr/>
//             <h5>{productValue.name}</h5>
//             <h1>{productValue.rating}</h1>
//             <h3>{productValue.price}</h3>
     
//         </div>
//         </div>
        
        
//         </>
//     

// )

// }
function Button ({name,age}){
  return(
    <>
    <button>{name}</button>
    <h1>age</h1>
    </>
  )
}
export default Button
// export default Button