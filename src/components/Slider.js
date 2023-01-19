import { Link } from 'react-router-dom';

import './slider.css';

import { useState } from 'react'
import { slides } from '../data/slides.js'
import { KeyboardDoubleArrowLeft, KeyboardDoubleArrowRight } from '@mui/icons-material';

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }

    return (
        <div className='slider' slides={slides}>
            <div className='slider-wrapper'>
                <div>
                    <img className='slider-img' src={slides[currentIndex].img} alt='img'></img>
                </div>
                <div className='slider-info'>
                    <div className='slider-title'>{slides[currentIndex].title}</div>
                    <div className='slider-description'>{slides[currentIndex].description}</div>
                    <Link to='/shop/category'>
                    <button>SHOP NOW!</button>
                    </Link>
                </div>
            </div>
            <div className='arrows'>
            <div className='left-arrow' onClick={goToPrevious}><KeyboardDoubleArrowLeft /></div>
            <div className='right-arrow' onClick={goToNext}><KeyboardDoubleArrowRight /></div>

            </div>
        </div>
    )
};

export default Slider



