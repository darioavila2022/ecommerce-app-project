import { FavoriteBorderOutlined, SearchOutlined, ShoppingCart } from '@mui/icons-material'
import './product.css'

const Product = ({ item }) => {
    return (
        <div className='product-container'>
            <img className='product-image' src={item.img} />
            <div className='product-icons'>
                <icon> <ShoppingCart /> </icon>
                <icon> <SearchOutlined /> </icon>
                <icon> <FavoriteBorderOutlined /> </icon>
            </div>
        </div>
    )
};

export default Product;