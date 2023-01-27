import { AddCircleOutlineRounded, RemoveCircleOutlineRounded } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { userRequest } from '../requests/requestMethods.js';
import { useNavigate } from "react-router"
import Navbar from '../components/Navbar.js';
import Ads from '../components/Ads.js';
import Footer from '../components/Footer.js';
import PaypalCheckoutButton from './PaypalCheckoutButton.js';

import './cart.css';


const Cart = () => {
    const cart = useSelector((state) => state.cart)
    
    const product = {
        description: "Bunch of cassette tapes",
        // price: 10
        price: `${cart.total}`
    }

    return (
        <div>
            <Navbar />
            <Ads />
            <div>
                <div className='cart-wrapper'>
                    <h1>YOUR CART</h1>
                    <div className='cart-links'>
                        <Link to='/allproducts' className='link'>KEEP SHOPPING</Link>
                        <p>SHOPPING CART (3)</p>
                    </div>
                    <div className='cart-sections'>
                        <div className='cart-elements'>


        {cart.products.map((product) => (


                                <div className='cart-prod'>
                                    <div className='prod-details'>
                                        <img className='cart-prod-img' alt='img' src={product.img} />
                                        <div className='prod-name'>
                                            <span><b>Product: </b>{product.title}</span>
                                        </div>
                                        <div className='prod-id'>
                                            <span><b>ID: </b>{product._id}</span>
                                        </div>
                                    </div>
                                    <div className='price'>
                                        <h2>${product.price}</h2>
                                    </div>
                                    <div className='amount'>
                                        <h3><AddCircleOutlineRounded /></h3>
                                        <h3>{product.quantity}</h3>
                                        <h3><RemoveCircleOutlineRounded /></h3>
                                    </div>
                                </div>))}
                        </div>


                        <div className='order'>
                            <h2>Order Summary</h2>
                            <div className='order-details'>
                                <span>subtotal</span>
                                <span>$ {cart.total}</span>
                            </div>
                            <div className='order-details'>
                                <span>handling + shipping</span>
                                <span>$ 10</span>
                            </div>
                            <div className='order-details'>
                                <span>cool discount</span>
                                <span>$ -10</span>
                            </div>
                            <div className='order-details'>
                                <span>total</span>
                                <span>$ {cart.total +10 -10}</span>
                            </div>

                            <PaypalCheckoutButton 
                            product={product}/>
                            {/* <button className='cart-btn'>CHECKOUT NOW</button> */}

                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />

            <Footer />
        </div>
    )
};

export default Cart;