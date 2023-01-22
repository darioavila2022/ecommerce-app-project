import { Link } from 'react-router-dom';
import './category.css';

const CategoryItem = ({ item }) => {
    return (
        <div className='categ-wrapper'>
            <img className='categ-img' src={item.img} alt='img' />
            <div className='categ-element'>
                <h2>{item.title}</h2>
                <Link to={`/shop/${item.categ}`}>
                <button className='categ-btn'>SHOP NOW</button>
                </Link>
            </div>
        </div>
    )
};

export default CategoryItem;