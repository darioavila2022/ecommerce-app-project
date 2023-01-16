

const CategoryItem = ({item}) => {
    return (
        <div className='category-item-container'>
            <img className='category-item-img' src={item.img}/>
            <div>
                <h1>{item.title}</h1>
                <button>SHOP NOW</button>
            </div>
        </div>
    )
};

export default CategoryItem