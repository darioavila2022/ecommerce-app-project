import { useLocation } from 'react-router-dom';
import { useState } from 'react';

import Navbar from '../components/Navbar.js';
import Ads from '../components/Ads.js';
import Footer from '../components/Footer.js';
import Products from '../components/Products.js';

import './shop.css';

const Shop = () => {

    const location = useLocation();
    const category = location.pathname.split("/")[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState({});

    const filterItem = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        });
    };

    console.log(filters)

    return (
        <div>
            <div>
                <Navbar />
                <Ads />
                <div className='filter-wrapper'>
                    <div className='filter-item'>
                        <div className='filter'>
                            Filter by Year
                        </div>
                        {/* <select className='select-options' name='type' onChange={filterItem}>
                            <option disabled>Type</option>
                            <option>I</option>
                            <option>II</option>
                            <option>IV</option>
                        </select> */}

                        <select className='select-options' name='year' onChange={filterItem}>
                            <option disabled>Year</option>
                            <option>70s</option>
                            <option>80s</option>
                            <option>90s</option>
                        </select>
                    </div>

                    <div>
                        <div className='filter'>
                            Sort by Price
                        </div>
                        <select className='select-options' onChange={(e) => setSort(e.target.value)}>
                            <option disabled selected>Price</option>
                            <option value='high'>High</option>
                            <option value='low'>Low</option>
                        </select>
                    </div>
                </div>
                <Products category={category} filters={filters} sort={sort} />
                <Footer />
            </div>
        </div>
    )
};

export default Shop;