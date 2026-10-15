// import heroimage from "./assets/hero.png"
import {Link} from "react-router-dom"
function Athena(){
    return (
        <>
        
    <nav className="navbar flex justify-center gap-6 bg-black px-10 py-4 ">
        <h1 className="text-white">Athena</h1>
        <div className="nav-items text-white flex justify-center gap-[16px]">
            <Link to="/Athena">Home</Link>
            <div>About</div>
            <div>Services</div>
            <div>Products</div>
        </div>
    </nav>
    <div className='herosection flex justify-between'> 
        <div className="textsec flex flex-col gap-0 w-[40%]">
            <h1>Some Catchy Line</h1>
            <h3>Line to support the catchy line</h3>
            <p>Lorem ipsum dolor sit amet consectetur,</p>
            <button>Get Started</button>
    </div>
    <div className="imagearea">
            <img src="https://tse4.mm.bing.net/th/id/OIP.VdDc3iT3PCrJnnsiThNzGgHaF_?r=0&pid=Api&h=220&P=0"/>
    </div>
    </div> 
    <div className="screen">
        <Link to="profiles"><button className="btnname border-2 p-1 m-1 px-2 rounded-xl hover:bg-yellow-400" >Click me</button></Link>
    </div>
    </>
    )
}
export default Athena