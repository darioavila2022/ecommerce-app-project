import { Link } from 'react-router-dom';
import './category.css';

const CategoryItem = ({ item }) => {
    return (
        <div className='category-items'>
            <img className='category-img' src={item.img} alt='img' />
            <div>
                <h2>{item.title}</h2>
                <Link to='shop/category'>
                <button>SHOP NOW</button>
                </Link>
            </div>
        </div>
    )
};

export default CategoryItem