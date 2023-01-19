import Navbar from '../components/Navbar.js'
import Ads from '../components/Ads.js'
import Footer from '../components/Footer.js'

import './Product.css'

import bluecassette from '../images/bluecassette.jpg'

const Product = () => {
    return(
        <div>
            <Navbar/>
            <Ads />
        <div className='sp-container'>
            <div className='sp-img-wrapper'>
            <img className='sp-img' src={bluecassette} alt='img'>
            </img>
            </div>
            <div className='sp-info-wrapper'>
                <h2>Blue Cassette SNY Brand</h2>
                <div>Donec sagittis risus quis mauris tincidunt, a eleifend libero auctor. Aliquam nec porttitor lorem. Praesent augue nibh, eleifend congue finibus at, placerat varius sapien. Nulla enim dolor, dictum non neque non, gravida sodales mauris.</div>
                <h2>$50.00</h2>
            </div> 
        </div>
        <Footer />
        </div>
    )
};

export default Product;