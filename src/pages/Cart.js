import './cart.css'
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"

const Cart = () => {
    return(
        <div className='container'>
            <Navbar />
            <Announcement />
            <div className='wrapper'>
                <h1>your cart</h1>
                <div className='top'>
                    <button className='topButton'>keep shopping</button>
                    <button className='topButton'>checkout</button>
                </div>
                <div className='bottom'></div>
            </div>
        </div>
    )
}

export default Cart