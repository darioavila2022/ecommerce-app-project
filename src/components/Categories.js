import { categories } from '../data/categories.js'
import Category from './Category.js'

import './categories.css'

const Categories = () => {
    return (
        <div>
            <h1>BROWSE BY GENRE</h1>
            <div className='categories'>
                {categories.map(item => (
                    <Category item={item} />
                ))}
            </div>
        </div>
    )
};

export default Categories