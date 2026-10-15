// import App2 from "./App2"
// import App3 from "./App3"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Body from "./Body"
import UserCard from "./components/UserCard"
import CardShop from "./components/CardShop"
import products from "./components/productdata"
import ProductCard from "./components/productCard"
import Button from "./components/destructure"
import EmployeeCard from "./components/EmployeeCard"
import BookCard from "./components/BookCard"
import MobileCard from "./components/MobileCard"
import MovieCard from "./components/MovieCard"
import {books,mobiles,movies} from "./components/dataprops"
import Profile from "./components/profiles"
import Athena from "./components/Athena"
import HomePage from "./components/HomePage"
import { Route, Routes } from "react-router-dom"
import toImportImage from "./components/toImportImage"
import Netflix from "./pages/Netflix"
import NetflixBody from "./pages/NetflixBody"
import bgimage from "./assets/Netflixbg.png"



function App(){
//   const employees = [
//   {
//     name: "Aarav Sharma",
//     position: "Frontend Developer",
//     salary: 75000,
//     department: "IT",
//     image: "https://images.unsplash.com/photo-1560250097-0b93528c311a"
//   },
//   {
//     name: "Sita Gurung",
//     position: "UI Designer",
//     salary: 65000,
//     department: "Design",
//     image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
//   },
//   {
//     name: "Rohan Thapa",
//     position: "Backend Developer",
//     salary: 85000,
//     department: "IT",
//     image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
//   },
//   {
//     name: "Anisha Rai",
//     position: "Project Manager",
//     salary: 95000,
//     department: "Management",
//     image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df"
//   }
// ];
  console.log('i am inside app.jsx')
  // props in formated manner
//   const users = [
//     {
//     name : 'jamuna',
//     age: 22,
//     address:'btm'
//   },
//   {
//     name : 'lily',
//     age: 22,
//     address:'btm'
//   }

// ]
// const views = {
//   name:"manish",
//   age:20
// }



  return(
   <> 
  
  {/* <Athena/>
  <HomePage/> */}
  
  {/* Routing in react  */}
{/*   
  <Navbar/>
  <Routes>
    <Route path ="/" element = {<HomePage/>} />
    <Route path = "Athena" element = {<Athena/>}/>
    <Route path = "/services" element = {<Athena/>}/>
    <Route path = "/profiles" element = {<Profile/>}/>
    <Route path = "about" element ={<Athena/>}/>
    <Route path = "*" element ={<h1>page not found</h1>}/>

    <Route path = '/importimagelearning' element = {<toImportImage/>}/>
  </Routes>
  <Footer/> */}
<div 
      className="bg-cover bg-center object-fill "
      style={{ backgroundImage: `url(${bgimage})` }}
    >
<Netflix/>
<Routes>
  
  <Route path = '/' element = {<NetflixBody />}/>

</Routes>



</div>





   {/* {views.map((item,index) => {
        return <Button key={index} name = {views.name} age={views.age} />

  })} */}
  
  {/* props example questions  */}
  {/* <div className="container">
  {
    employees.map((item,index)=>{
      return <EmployeeCard key={index} name={item.name} position = {item.position} salary = {item.salary} department = {item.department} image={item.image} />
    })
  }
   {
    books.map((item,index)=>{
      return <BookCard key={index} title={item.title} author = {item.author} price = {item.price} available = {item.available} image={item.image} />
    })
  }
   {
    mobiles.map((item,index)=>{
      return <MobileCard key={index} brand={item.brand} model = {item.model} price = {item.price} storage = {item.storage} image={item.image} />
    })
  }
  {
    movies.map((item,index)=>{
      return <MovieCard key={index} title={item.title} rating = {item.rating} year = {item.year} genre = {item.genre} image={item.image} />
    })
  }
  </div> */}
  

    {/* {products.map((item,index) => {
        return <ProductCard productValue = {item} />

  })}
  
   <h1 style={{color:'red'}}>All users</h1>  */}
    {/*same as dome  */}
   
   {/* {
    users.filter((item,index)=>{
      return item.age>20
    }).map((item,index)=>{
          return <UserCard name = {item.name} age={item.age} address={item.address}/>
    })
   } */}
  
  
  {/* <Navbar/>
  <Body/>
  <Footer/> */}
  {/* <UserCard name='aron angdabe' age={21} address="ktm"/>
  <UserCard name = 'Esmon Thapa' age={23} address = "pkh"/>
  <UserCard name = 'Namaste Haste' age={22} address ="lph"/> */}
{/* sends all at once using map to above user */}
  {/* {users.map((item) => {
    return <UserCard name = {item.name} age={item.age} address={item.address}/>

  })} */}






  {/* <div className="containerprops">

  <CardShop img="https://tse1.mm.bing.net/th/id/OIP.Nx-wPJss2Pihc6Ps0Z0oqAHaHa?r=0&pid=Api&h=220&P=0" content="Technology" title = "WHat's New in 2022 tech" description = " lorem20 i do not know what iam writing becuse the lorem is not working here so it is fucked up  " profile = "https://tse4.mm.bing.net/th/id/OIP._kUskeaV166luG8bXe6nPwHaE7?r=0&pid=Api&h=220&P=0" name = 'lily'/>
  <CardShop img="https://tse1.mm.bing.net/th/id/OIP.Nx-wPJss2Pihc6Ps0Z0oqAHaHa?r=0&pid=Api&h=220&P=0" content="Technology" title = "WHat's New in 2022 tech" description = " lorem20 i do not know what iam writing becuse the lorem is not working here so it is fucked up  " profile = "https://tse4.mm.bing.net/th/id/OIP._kUskeaV166luG8bXe6nPwHaE7?r=0&pid=Api&h=220&P=0" name = 'lily'/>
  </div>
  </> */}
</>
  )
}

{/* // component = function  which return html 
// file name and component name should start with  capital letter  */}

export default App

