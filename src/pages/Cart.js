import { Link } from 'react-router-dom';
import { AddCircleOutlineRounded, RemoveCircleOutlineRounded } from '@mui/icons-material';
import StripeCheckout from 'react-stripe-checkout';

import Navbar from '../components/Navbar.js';
import Ads from '../components/Ads.js';
import Footer from '../components/Footer.js';
import './cart.css';

import { useState } from 'react';
import { useSelector } from 'react-redux';


//WRITING THE STRIPE PUBLIC KEY
const KEY = process.env.REACT_APP_STRIPE

const Cart = () => {
    const cart = useSelector((state) => state.cart)
    const [stripeToken, setStripeToken] = useState(null) //SETTING TOKEN WITH USESTATE WHICH IS GOING TO BE NULL AT THE BEGGINNING
    const onToken = (token) => {//GETS TOKEN FROM STRIPE
        setStripeToken(token)
    }

    console.log(stripeToken);
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



                            {cart.products.map(product =>(

                             <div className='cart-prod'>
                                <div className='prod-details'>
                                    <img className='cart-prod-img' src={product.img} alt='img' />
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
                                <span>shipping discount</span>
                                <span>$ -5</span>
                            </div>
                            <div className='order-details'>
                                <span>total</span>
                                <span>$ {cart.total}</span>
                            </div>


                            <StripeCheckout
                            name="The Cassette Store"
                            image="https://cdn-icons-png.flaticon.com/512/1169/1169939.png"
                            billingAddress
                            shippingAddress
                            description={`Your total is $${cart.total}`}
                            amount={cart.total*100}
                            token={onToken}
                            stripeKey={KEY}
                            >
                            <button className='cart-btn'>CHECKOUT NOW</button>
                            </StripeCheckout>


                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Cart;