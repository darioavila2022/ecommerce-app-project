import { Link } from 'react-router-dom';
import './category.css';

const CategoryItem = ({ item }) => {
    return (
        <div className='category-wrapper'>
            <img className='category-img' src={item.img} alt='img' />
            <div className='category-items'>
                <h2>{item.title}</h2>
                <Link to={`/shop/${item.name}`}>
                <button className='category-btn'>SHOP NOW</button>
                </Link>
            </div>
        </div>
    )
};

export default CategoryItem