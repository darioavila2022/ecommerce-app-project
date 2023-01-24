import { useLocation } from "react-router";
import { useState } from "react";

import Navbar from "../components/Navbar.js";
import Ads from "../components/Ads.js";
import Products from "../components/Products.js";
import Footer from "../components/Footer.js";

//Products by category section

const CategProducts = () => {
  const location = useLocation();
  const categ = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState();

  const filterItems = (e) => {
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
      <div className="filter-wrapper">
        <div>
          <div>Filter By Year</div>
          <select className='select-options' name="size" onChange={filterItems}>
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
      <Products categ={categ} filters={filters} sort={sort} />
      <Footer />
    </div>
  );
};

export default CategProducts;