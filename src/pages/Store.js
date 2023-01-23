import { useLocation } from "react-router";
import { useState } from "react";

import Navbar from '../components/Navbar.js';
import Ads from '../components/Ads.js';
import Footer from '../components/Footer.js';
import Products from '../components/Products.js';
import './store.css';


const Store = () => {
  const location = useLocation();
  const categ = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const filterItem = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  console.log(filters, sort);

return (
    <div>
      <Navbar />
      <Ads />
      <div className='filter-wrapper'>
        <div>
          <div>Filter by Type and Year</div>
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
          <div>Sort by price</div>
          <select className='select-options' onChange={(e) => setSort(e.target.value)}>
            <option value="newest">Newest</option>
            <option value="high">price high</option>
            <option value="low">price low</option>
          </select>
        </div>
      </div>
      <Products cat={categ} filters={filters} sort={sort} />
      <Footer />
    </div>
  );
};

export default Store;