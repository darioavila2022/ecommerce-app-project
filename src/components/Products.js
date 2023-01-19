import { popularProducts } from '../data/products.js';
import Product from './Product.js';

import './products.css';

const Products = () => {
    return (
        <div>
            <h1>POPULAR PRODUCTS</h1>
            <div className='products-container'>
                {popularProducts.map((item) => (
                    <Product item={item} key={item.id} />
                ))}
            </div>
        </div>
    )
};

export default Products