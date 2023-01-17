import { Facebook, Instagram, Mail, Phone, Pinterest, Room, Twitter } from "@mui/icons-material"

import './footer.css'

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-left">
                <h1>LOGO</h1>
                <div className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sagittis nisl faucibus semper maximus. Duis vitae euismod tortor. Nunc iaculis egestas nunc quis facilisis. Praesent vel nisl sed arcu imperdiet pretium quis id justo.
                </div>
                <div className="social-networks">
                    <icon><Facebook/></icon>
                    <icon><Instagram/></icon>
                    <icon><Twitter/></icon>
                    <icon><Pinterest/></icon>
                </div>
            </div>
            <div className="footer-center">
                <h2>Useful links</h2>
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
                <h2>Contact</h2>
                <p><Room/>Adress information. City, Country, Post-code</p>
                <p><Phone/>Phone number +5 789</p>
                <p><Mail/>cassetes-store@email.com</p>
                <img className='payment' src='https://www.pngkey.com/png/full/272-2720502_union-hand-roasted-coffee-registered-in-england-and.png'></img>
            </div>
        </div>
    )
}

export default Footer;