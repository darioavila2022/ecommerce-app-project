import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined, } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import './product.css'

const Product = ({ item }) => {
  return (
    <div>
      <Link to={`/product/${item._id}`}>
        <img className='prod-img' src={item.img} />
      </Link>
      <div>
        <icon><ShoppingCartOutlined /></icon>
        <icon><SearchOutlined /></icon>
        <icon><FavoriteBorderOutlined /></icon>
      </div>
    </div>
  );
};

export default Product;