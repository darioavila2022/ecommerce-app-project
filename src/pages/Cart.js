import './cart.css'
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"

const Cart = () => {
    return (
        <div className='cart-container'>
            <Navbar />
            <Announcement />
            <div className='cart-wrapper'>
                <h1 className='cart-title'>your cart</h1>
                <div className='cart-titleTop'>
                    <button className='cart-topButton'>keep shopping</button>
                    <div className='cart-toptexting'>
                        <span className='cart-toptext'>shopping bag(7)</span>
                        <span className='cart-toptext'>wishlist(0)</span>
                    </div>
                    <button className='cart-topButton'>checkout</button>
                </div>
                <div className='cart-titleBottom'>
                    <div className='cart-info'>
                        <div className='cart-product'>
                            <div className='cart-prodDetail'>
                                <img className='cart-pImg' src="https://m.media-amazon.com/images/I/81pz2wApegS._AC_SL1500_.jpg" alt="" />
                                <div className='cart-details'>
                                    <span className='cart-pName'><b>Product: </b>FYDELITY Silver Chrome Cassette Tape</span>
                                    <span className='cart-pID'><b>ID: </b>123456789</span>
                                </div>
                            </div>
                            <div className='cart-pricePDetail'>
                                <div className='cart-pAmContainer'>
                                    <div className='cart-add'></div>
                                    <div className='cart-pAmount'>2</div>
                                    <div className='cart-remove'></div>
                                </div>
                                <div className='cart-pPrice'>$ 25</div>
                            </div>
                        </div>

                        <hr/>

                        <div className='cart-product'>
                            <div className='cart-prodDetail'>
                                <img className='cart-pImg' src="https://m.media-amazon.com/images/I/81hFVHEf5uL._AC_SL1500_.jpg" alt="" />
                                <div className='cart-details'>
                                    <span className='cart-pName'><b>Product: </b>FYDELITY Silver Chrome Cassette Tape</span>
                                    <span className='cart-pID'><b>ID: </b>123456789</span>
                                </div>
                            </div>
                            <div className='cart-pricePDetail'>
                                <div className='cart-pAmContainer'>
                                    <div className='cart-add'></div>
                                    <div className='cart-pAmount'>1</div>
                                    <div className='cart-remove'></div>
                                </div>
                                <div className='cart-pPrice'>$ 15</div>
                            </div>
                        </div>
                    </div>
                    <div className='cart-summary'>
                        <h1 className='cart-sTitle'>order summary</h1>
                        <div className='cart-sItem'>
                            <span className='cart-sItemText'>subtotal</span>
                            <span className='cart-sItemPrice'>$ 80</span>
                        </div>
                        <div className='cart-sItem'>
                            <span className='cart-sItemText'>handling + shipping</span>
                            <span className='cart-sItemPrice'>$ 10</span>
                        </div>
                        <div className='cart-sItem'>
                            <span className='cart-sItemText'>shipping discount</span>
                            <span className='cart-sItemPrice'>$ -5</span>
                        </div>
                        <div className='cart-sItem'>
                            <span className='cart-sItemText'>total</span>
                            <span className='cart-sItemPrice'>$ 100</span>
                        </div>
                        <button className='cart-sButton'>checkout now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart