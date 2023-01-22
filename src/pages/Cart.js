import { Link } from 'react-router-dom';
import { AddCircleOutlineRounded, RemoveCircleOutlineRounded } from '@mui/icons-material';

import Navbar from '../components/Navbar';
import Ads from '../components/Ads';
import Footer from '../components/Footer.js';
import './cart.css';

import cassette2 from '../images/cassette2.jpg';
import cassette4 from '../images/cassette4.png';
import cassette5 from '../images/cassette5.jpg';

const Cart = () => {
    return (
        <div>
            <Navbar />
            <Ads />
            <div>
                <div className='cart-wrapper'>
                    <h1>YOUR CART</h1>
                    <div className='cart-links'>
                        <Link to='/shop/category' className='link'>KEEP SHOPPING</Link>
                        <p>SHOPPING CART (3)</p>
                    </div>
                    <div className='cart-sections'>
                        <div className='cart-elements'>

                            <div className='cart-prod'>
                                <div className='prod-details'>
                                    <img className='cart-prod-img' src={cassette2} alt='img' />
                                    <div className='prod-id'>
                                        <span><b>Product: </b>FYDELITY Silver Chrome Cassette Tape</span>
                                        <span><b>ID: </b>123456789</span>
                                    </div>
                                </div>

                                <div className='price'>
                                    <h2>$500</h2>
                                </div>
                                <div className='amount'>
                                    <h3><AddCircleOutlineRounded /></h3>
                                    <h3>1</h3>
                                    <h3><RemoveCircleOutlineRounded /></h3>
                                </div>
                            </div>

                            <div className='cart-prod'>
                                <div className='prod-details'>
                                    <img className='cart-prod-img' src={cassette4} alt='img' />
                                    <div className='prod-id'>
                                        <span><b>Product: </b>FYDELITY Silver Chrome Cassette Tape</span>
                                        <span><b>ID: </b>123456789</span>
                                    </div>
                                </div>

                                <div className='price'>
                                    <h2>$500</h2>
                                </div>
                                <div className='amount'>
                                    <h3><AddCircleOutlineRounded /></h3>
                                    <h3>1</h3>
                                    <h3><RemoveCircleOutlineRounded /></h3>
                                </div>
                            </div>

                            <div className='cart-prod'>
                                <div className='prod-details'>
                                    <img className='cart-prod-img' src={cassette5} alt='img' />
                                    <div className='prod-id'>
                                        <span><b>Product: </b>FYDELITY Silver Chrome Cassette Tape</span>
                                        <span><b>ID: </b>123456789</span>
                                    </div>
                                </div>

                                <div className='price'>
                                    <h2>$500</h2>
                                </div>
                                <div className='amount'>
                                    <h3><AddCircleOutlineRounded /></h3>
                                    <h3>1</h3>
                                    <h3><RemoveCircleOutlineRounded /></h3>
                                </div>
                            </div>



                        </div>
                        <div className='order'>
                            <h2>Order Summary</h2>
                            <div className='order-details'>
                                <span>subtotal</span>
                                <span>$ 80</span>
                            </div>
                            <div className='order-details'>
                                <span>handling + shipping</span>
                                <span>$ 10</span>
                            </div>
                            <div className='order-details'>
                                <span>shipping discount</span>
                                <span>$ -5</span>
                            </div>
                            <div className='order-details'>
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