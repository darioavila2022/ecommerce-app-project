import Navbar from '../components/Navbar.js'
import Ads from '../components/Ads.js'
import Footer from '../components/Footer.js'
import Products from '../components/Products.js'

import './shop.css'

const Shop = () => {
    return (
        <div>
            <div>
                <Navbar />
                <Ads />
                <div className='filter-wrapper'>
                    <div className='filter-item'>
                        <div className='filter'>
                            Filter by Genre or Year
                        </div>
                        <select className='select-options'>
                            <option disabled selected>Genre</option>
                            <option>Rock</option>
                            <option>Pop</option>
                            <option>Metal</option>
                            <option>Electro</option>
                            <option>Classical</option>
                            <option>Balads</option>
                        </select>

                        <select className='select-options'>
                            <option disabled selected>Year</option>
                            <option>40s</option>
                            <option>50s</option>
                            <option>60s</option>
                            <option>70s</option>
                            <option>80s</option>
                            <option>90s</option>
                        </select>
                    </div>

                    <div>
                        <div className='filter'>
                            Sort by Price
                        </div>
                        <select className='select-options'>
                            <option disabled selected>Price</option>
                            <option>High price</option>
                            <option>Low price</option>
                        </select>
                    </div>
                </div>
                <Products />
                <Footer />
            </div>
        </div>
    )
};

export default Shop;