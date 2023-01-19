import React from 'react'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Slider from '../components/Slider'
import Footer from '../components/Footer'
import Ads from '../components/Ads'

const Home = () => {
    return (
        <div>
            <Ads/>
            <Navbar/>
            <Slider/>
            <Categories/>
            <Products/>
            <Footer />
        </div>
    )
};

export default Home