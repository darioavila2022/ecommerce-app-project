import { Link } from 'react-router-dom';
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCart } from '@mui/icons-material';
import './product.css';

const Product = ({ item }) => {
    return (
        <div>
            <Link to='/product/id'>
                <img className='prod-img' src={item.img} alt='img' />
            </Link>
            <div className='prod-icons'>
                <icon> <ShoppingCart /> </icon>
                <icon> <SearchOutlined /> </icon>
                <icon> <FavoriteBorderOutlined /> </icon>
            </div>
        </div>
    )
};

export default Product;