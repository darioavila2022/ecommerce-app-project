import { useEffect, useState } from 'react';
import axios from 'axios';

import Product from './Product.js';
import './popular.css'

const Popular = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/products");
                setProducts(res.data);
            } catch (err) { }
        };
        getProducts();
    });

    return (
        <div>
            <h1>POPULAR PRODUCTS</h1>
            <div className='pop-wrapper'>
                <div className='pop-prods'>
                    {products.map((item) =>
                    <Product item={item} key={item.id} />).slice(0, 9)}
                </div>
            </div>
        </div>
    );
};

export default Popular;