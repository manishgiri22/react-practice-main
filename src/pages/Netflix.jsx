//rafc for shortcut functon
// rafce for the export as we use
import logo from '../assets/Netflix.png'
import {Search , House, ShoppingBasket, ShoppingCart, Bell} from 'lucide-react'

function Netflix(){
    return(
        <>
        <div className="text-white h-[8vh] flex justify-between px-5 mx-5">
            <div className="div flex items-center ">
                <img src={logo} alt="logo" className='h-20'/>
                <div className="nav-items flex  item-center gap-5">
                    <div>Home</div>
                    <div>Tv Shows</div>
                    <div>Movies</div>
                    <div>New & Popular</div>
                    <div>My List</div>
                    <div>Browse by Languages</div>
                </div>
            </div>
            <div className="icon flex items-center gap-5" >
                <Search />
                <div>Kids</div>
                <Bell />
                <ShoppingCart />
                
                
            </div>
        </div>
        </>
    )
}
export default Netflix

