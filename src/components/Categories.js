import { categories } from '../data/categories.js'
import CategoryItem from './CategoryItem'
import './categories.css'

const Categories = () => {
    return (
        <div className='categories-container'>
            {categories.map(item=>(
                <CategoryItem item={item}/>
            ))}
        </div>
)};


export default Categories