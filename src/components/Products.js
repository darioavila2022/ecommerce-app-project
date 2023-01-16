import { popularProducts } from '../data/products.js'
import Product from './Product.js'

import './products.css'

const Products = () => {
    return (
        <div className='products-container'>
            {popularProducts.map((item) => (
                <Product item={item} key={item.id}/>
            ))}
        </div>
    )
}

export default Products