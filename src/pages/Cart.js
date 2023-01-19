import './cart.css'
import Navbar from "../components/Navbar"
import Ads from "../components/Ads"
import Footer from '../components/Footer.js'

import bluecassette from '../images/bluecassette.jpg'
import whitecassette from '../images/whitecassette.jpg'
import greycassette from '../images/greycassette.jpg'

const Cart = () => {
    return (
        <div>
            <Navbar />
            <Ads />
            <div className='cart-container'>
                <div className='cart-wrapper'>
                    <h1>YOUR CART</h1>
                    <div className='cart-buttons'>
                        <button>Keep Shopping</button>
                            <a className='cart-links'>Shopping Bag (7)</a>
                            <a className='cart-links'>Wish List (0)</a>
                        <button>Checkout</button>
                    </div>
                    <div className='cart-info'>
                        <div className='cart-items'>

                            <div className='cart-product'>
                                <div className='product-details'>
                                    <img className='cart-product-img' src={bluecassette} alt="" />
                                    <div className='product-type'>
                                        <span><b>Product: </b>FYDELITY Silver Chrome Cassette Tape</span>
                                        <span><b>ID: </b>123456789</span>
                                    </div>
                                </div>
                                <div className='amount-price'>
                                        {/* <div className='cart-add'>+</div> */}
                                        <div className='cart-pAmount'>1</div>
                                        {/* <div className='cart-remove'>-</div> */}
                                    <div className='product-price'>$50</div>
                                </div>
                            </div>

                            <div className='cart-product'>
                                <div className='product-details'>
                                    <img className='cart-product-img' src={whitecassette} alt="" />
                                    <div className='product-type'>
                                        <span><b>Product: </b>FYDELITY Silver Chrome Cassette Tape</span>
                                        <span><b>ID: </b>123456789</span>
                                    </div>
                                </div>
                                <div className='amount-price'>
                                        {/* <div className='cart-add'>+</div> */}
                                        <div className='cart-pAmount'>2</div>
                                        {/* <div className='cart-remove'>-</div> */}
                                    <div className='product-price'>$45</div>
                                </div>
                            </div>

                            <div className='cart-product'>
                                <div className='product-details'>
                                    <img className='cart-product-img' src={greycassette} alt="" />
                                    <div className='product-type'>
                                        <span><b>Product: </b>FYDELITY Silver Chrome Cassette Tape</span>
                                        <span><b>ID: </b>123456789</span>
                                    </div>
                                </div>
                                <div className='amount-price'>
                                        {/* <div className='cart-add'>+</div> */}
                                        <div className='cart-pAmount'>1</div>
                                        {/* <div className='cart-remove'>-</div> */}
                                    <div className='product-price'>$50</div>
                                </div>
                            </div>

                        </div>
                        <div className='summary'>
                            <h2>Order Summary</h2>
                            <div className='summary-description'>
                                <span>subtotal</span>
                                <span>$ 80</span>
                            </div>
                            <div className='summary-description'>
                                <span>handling + shipping</span>
                                <span>$ 10</span>
                            </div>
                            <div className='summary-description'>
                                <span>shipping discount</span>
                                <span>$ -5</span>
                            </div>
                            <div className='summary-description'>
                                <span>total</span>
                                <span>$ 100</span>
                            </div>
                            <button className='cart-btn'>CHECKOUT NOW</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Cart;