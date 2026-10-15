function UserCard(userValue){   // props in react as argument as an object accept in one agrguments , immutable(not changing)
    console.log(userValue)
    const user = {
        name : "manish",
        age : 21,
        address :"Arjun dhara"
    }
    let number = 21
    number++
    // const marks = 30
    // const sum = (a,b)=>{
    //     return a+b
    // }
    // sum(3,4)

    return (

        <>
        {/* <h1>this is {number}</h1> */}
        {/* <h2>Your result is : {marks>30?"pass":"fail"}</h2> */}
        <img src="https://tse2.mm.bing.net/th/id/OIP.e1KNYwnuhNwNj7_-98yTRwHaF7?r=0&pid=Api&h=220&P=0" alt='image' />
        <h2>{userValue.name}</h2>
        <h3>{userValue.age}</h3>
        <h4>{userValue.address}</h4>

        
        </>
    )
}
export default UserCard