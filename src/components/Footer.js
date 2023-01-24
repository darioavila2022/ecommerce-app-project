import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, Phone, Pinterest, Room, Twitter, Radio } from "@mui/icons-material";

import './footer.css';
import payment from '../images/payment.png';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-left">
                <Link to='/' className='logo'> THE CASSETTE STORE <Radio /></Link>
                <div className="footer-info">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis nisl faucibus semper maximus. Duis vitae euismod tortor. Nunc iaculis egestas nunc quis facilisis. Praesent vel nisl sed arcu imperdiet pretium quis id justo.
                </div>
                <div className="social-networks">
                    <icon><Facebook /></icon>
                    <icon><Instagram /></icon>
                    <icon><Twitter /></icon>
                    <icon><Pinterest /></icon>
                </div>
            </div>
            <div className="footer-center">
                <h3>Useful links</h3>
                <ul className="footer-links">
                    <li><Link to='/' className="link">Home</Link></li>
                    <li><Link to='/account' className="link">Account</Link></li>
                    <li><Link to='/cart' className="link">Cart</Link></li>
                    <li><Link to='/allproducts' className="link">Shop</Link></li>
                    <li><Link to='/allproducts' className="link">Types</Link></li>
                    <li><Link to='/allproducts' className="link">Popular</Link></li>
                    <li><Link to='/register' className="link">Register</Link></li>
                    <li><Link to='/' className="link">Terms</Link></li>
                </ul>
            </div>
            <div className="footer-right">
                <h3>Contact</h3>
                <p><Room /> Adress information. City, Country, Post-code</p>
                <p><Phone /> Phone number +5 789</p>
                <p><Mail /> cassetes-store@email.com</p>
                <img className='payment' src={payment} alt='img'></img>
            </div>
        </div>
    )
};

export default Footer;