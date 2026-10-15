// Create an EmployeeCard component that receives name, position, salary, and department.
//  Use destructuring props.
function BookCard(item){
return(
    <>
    {/* <div className="container"> */}
        <div className="card">
            <img src={item.image} alt="image"/>
            <h1>{item.title}</h1>
            <h2>{item.author}</h2>
            <hr/>
            <h3>{item.price}</h3>
            <h4>{item.available}</h4>
        </div>
    {/* </div> */}
    </>
)

}
export default BookCard