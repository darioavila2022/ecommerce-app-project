import { useLocation } from 'react-router';
import { useState } from 'react';

import Navbar from '../components/Navbar.js';
import Ads from '../components/Ads.js';
import Products from '../components/Products.js';
import Footer from '../components/Footer.js';
import './allProducts.css'

//All products, all categories

const AllProducts = () => {
  const location = useLocation();
  const categ = location.pathname.split("/")[2];

  console.log(location);

  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState();

  const filterItems = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  console.log(filters);

  return (
    <div>
      <Navbar />
      <Ads />
      <h1>OUR PRODUCTS</h1>
      <div className='filter-wrapper'>
        <div>
          <div>Filter By Brand</div>
          <select className='select-options' name='brand' onChange={filterItems}>
            <option disabled>Brand</option>
            <option>Sony</option>
            <option>Maxell</option>
            <option>TDK</option>
            <option>Memorex</option>
          </select>
        </div>
        <div>
          <div>Sort By Price</div>
          <select className='select-options' onChange={(e) => setSort(e.target.value)}>
            <option disabled>Price</option>
            <option value='asc'>Low</option>
            <option value='desc'>High</option>
          </select>
        </div>
      </div>
      <Products categ={categ} filters={filters} sort={sort} />
      <Footer />
    </div>
  );
};

export default AllProducts;