import './category.css'

const CategoryItem = ({ item }) => {
    return (
        <div className='category-items'>
            <img className='category-img' src={item.img} />
            <div>
                <h2>{item.title}</h2>
                <button>SHOP NOW</button>
            </div>
        </div>
    )
};

export default CategoryItem