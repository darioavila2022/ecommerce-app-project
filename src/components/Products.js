import { popularProducts } from '../data/products.js';
import Product from './Product.js';
import './products.css';

const Products = ({ category, filters, sort }) => {

    console.log(category, filters, sort)

    return (
        <div>
            <h1>POPULAR PRODUCTS</h1>
            <div className='products'>
                {popularProducts.map((item) => (
                    <Product item={item} key={item.id} />
                ))}
            </div>
        </div>
    )
};

export default Products;