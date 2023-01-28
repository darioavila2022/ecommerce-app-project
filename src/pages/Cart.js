import { DeleteForever } from '@mui/icons-material';
import PaypalCheckoutButton from './PaypalCheckoutButton';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { removeProduct } from '../redux/cartRedux.js';
import Navbar from '../components/Navbar.js';
import Ads from '../components/Ads.js';
import Footer from '../components/Footer.js';
import './cart.css';

const Cart = () => {

    const cart = useSelector((state) => state.cart);
    const products = useSelector(state => state.cart.products);
    const dispatch = useDispatch();

    const product = {
        description: "Bunch of cassette tapes",
        price: `${cart.total}`
    };

    const totalPrice = () => {
        let total = 0;
        products.forEach((item) => (total += item.quantity * item.price));
        // return total.toFixed(2);
        return total;
    };

    return (
        <div>
            <Navbar />
            <Ads />
            <div>
                <div className='cart-wrapper'>
                    <h1>YOUR CART</h1>
                    <div className='cart-links'>
                        <Link to='/allproducts' className='link'>KEEP SHOPPING</Link>
                        <p>SHOPPING CART ({cart.quantity})</p>
                    </div>
                    <div className='cart-sections'>
                        <div className='cart-elements'>
                            {products?.map((item) => (
                                <div className='cart-prod'>
                                    <div className='prod-details'>
                                        <img className='cart-prod-img' alt='img' src={item.img} />
                                        <div className='prod-name-id'>
                                            <span><b>Product: </b>{item.title}</span>
                                            <span><b>ID: </b>{item.id}</span>
                                        </div>
                                    </div>
                                    <div className='price'><h2>$ {item.price}</h2></div>
                                    <div className='amount'><h2>x {item.quantity}</h2></div>
                                    <div><icon onClick={() => dispatch(removeProduct(item.id))}>
                                        <DeleteForever /></icon>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className='order'>
                            <h2>Order Summary</h2>
                            <div className='order-details'>
                                <span>Subtotal</span>
                                <span>$ {totalPrice()}</span>
                            </div>
                            <div className='order-details'>
                                <span>Handling + shipping</span>
                                <span>$ 50</span>
                            </div>
                            <div className='order-details'>
                                <span>Special discount</span>
                                <span>$ -50</span>
                            </div>
                            <div className='order-details'>
                                <span>Total</span>
                                <span>$ {totalPrice()}</span>
                            </div>
                            <PaypalCheckoutButton product={product} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Cart;