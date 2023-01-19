import { Facebook, Instagram, Mail, Phone, Pinterest, Room, Twitter, Radio } from "@mui/icons-material";
import './footer.css';
import payment from '../images/payment.png';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-left">
            <div className='logo'>
                        THE CASSETTE STORE <Radio />
                    </div>
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
                <ul className="links">
                    <li className="link-item">Home</li>
                    <li className="link-item">Cart</li>
                    <li className="link-item">Genre</li>
                    <li className="link-item">Year</li>
                    <li className="link-item">My account</li>
                    <li className="link-item">Order tracking</li>
                    <li className="link-item">Wish list</li>
                    <li className="link-item">Terms of use</li>
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