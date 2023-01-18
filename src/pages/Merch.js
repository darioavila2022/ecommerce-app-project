import Ads from "../components/Ads.js"
import Navbar from "../components/Navbar.js"
import Products from "../components/Products.js"

import './merch.css'

const Merch = () => {
    return (
        <div classNAme='merch-container'>
          <Navbar/>
          <Ads/>
          <h1>Cassettes</h1>
          <div className='filter-wrapper'>
            <div className='filter'>
                <div className="filter-text">Filter products</div>
                <select className="prod-select">
                    <option disabled selected>Genre</option>
                    <option>Rock</option>
                    <option>Pop</option>
                    <option>Metal</option>
                    <option>Alternative</option>
                    <option>Electro</option>
                    <option>Balads</option>
                </select>
                <select className="prod-select">
                    <option disabled selected>Year</option>
                    <option>40s</option>
                    <option>50s</option>
                    <option>60s</option>
                    <option>80s</option>
                    <option>90s</option>
                    <option>00s</option>
                </select>
            </div>
            <div className='filter2'>
            <div className="filter-text">Sort products</div>
            <select className="prod-select">
                    <option selected>Newest</option>
                    <option>Price high</option>
                    <option>Price low</option>
                </select>
            </div>
            
          </div>
          <Products />
        </div>
    )
}

export default Merch