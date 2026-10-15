// Create an EmployeeCard component that receives name, position, salary, and department.
//  Use destructuring props.
function EmployeeCard({name,position,salary,department,image}){
return(
    <>
    {/* <div className="container"> */}
        <div className="card">
            <img src={image} alt="image"/>
            <h1>{name}</h1>
            <h2>{position}</h2>
            <hr/>
            <h3>{salary}</h3>
            <h4>{department}</h4>
        </div>
    {/* </div> */}
    </>
)

}
export default EmployeeCard