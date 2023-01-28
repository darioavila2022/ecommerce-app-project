import { useLocation } from 'react-router-dom';

import Ads from '../components/Ads';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './success.css'

const Success = () => {

    const location = useLocation()

    console.log(location);
    return (
        <div>
            <Ads />
            <Navbar />
            <div className="success-container">
                <div className="success-wrapper">
                    <h3>Success!</h3>
                    <h2>This is your order</h2>
                    <p>Order number</p>
                    <p>Products</p>
                    <p>Price</p>
                    <p>Delivery</p>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Success;