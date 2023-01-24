import { useState } from 'react';

import Navbar from '../components/Navbar.js';
import Ads from '../components/Ads.js';
import Products from '../components/Products.js';
import Footer from '../components/Footer.js';
import './allProducts.css';

const AllProducts = () => {

  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState();

  const filterItem = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <div>
      <Navbar />
      <Ads />
      <div className='filter-wrapper'>
        <div>
          <div>Filter By Type and Year</div>
          <select className='select-options' name="type" onChange={filterItem}>
            <option disabled>Type</option>
            <option>typei</option>
            <option>typeii</option>
            <option>typeiv</option>
          </select>
          <select className='select-options' name="year" onChange={filterItem}>
            <option disabled>Year</option>
            <option>70s</option>
            <option>80s</option>
            <option>90s</option>
          </select>
        </div>
        <div>
          <div>Sort By Price</div>
          <select className='select-options' onChange={(e) => setSort(e.target.value)}>
            <option value="asc">low</option>
            <option value="desc">high</option>
          </select>
        </div>
      </div>
      <Products filters={filters} sort={sort} />
      <Footer />
    </div>
  );
};

export default AllProducts;