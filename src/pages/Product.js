import Navbar from '../components/Navbar.js'
import Ads from '../components/Ads.js'
import Footer from '../components/Footer.js'

import './Product.css'

import cassette2 from '../images/cassette2.jpg'

const Product = () => {
    return(
        <div>
            <Navbar/>
            <Ads />
        <div className='sp-container'>
            <div className='sp-img-wrapper'>
            <img className='sp-img' src={cassette2} alt='img'>
            </img>
            </div>
            <div className='sp-info-wrapper'>
                <h2>Blue Cassette SNY Brand</h2>
                <div>Donec sagittis risus quis mauris tincidunt, a eleifend libero auctor. Aliquam nec porttitor lorem. Praesent augue nibh, eleifend congue finibus at, placerat varius sapien. Nulla enim dolor, dictum non neque non, gravida sodales mauris.</div>
                {/* <div>+</div> */}
                <h2>$50.00</h2>
                {/* <div>-</div> */}
            </div> 
        </div>
        <Footer />
        </div>
    )
};

export default Product;