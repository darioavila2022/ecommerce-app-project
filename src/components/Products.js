import { useEffect, useState } from 'react';
import axios from 'axios';

import Product from './Product.js';
import './products.css'

const Products = ({ categ, filters, sort }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(categ
                        ? `http://localhost:5000/api/products?category=${categ}`
                        : "http://localhost:5000/api/products"
                );
                setProducts(res.data);
            } catch (err) { }
        };
        getProducts();
    }, [categ]);

      useEffect(() => {
        categ &&
          setFilteredProducts(
            products.filter((item) =>
              Object.entries(filters).every(([key, value]) =>
                item[key].includes(value)
              )
            )
          );
      }, [products, categ, filters]);

    //   useEffect(() => {
    //     if (sort === "newest") {
    //       setFilteredProducts((prev) =>
    //         [...prev].sort((a, b) => a.createdAt - b.createdAt)
    //       );
    //     } else if (sort === "high") {
    //       setFilteredProducts((prev) =>
    //         [...prev].sort((a, b) => a.price - b.price)
    //       );
    //     } else {
    //       setFilteredProducts((prev) =>
    //         [...prev].sort((a, b) => b.price - a.price)
    //       );
    //     }
    //   }, [sort]);

    return (
        <div>
            <h1>OUR PRODUCTS</h1>
            <div className="products">
                {categ
                    ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
                    : products.map((item) => <Product item={item} key={item.id} />)}
            </div>
        </div>
    );
};

export default Products;