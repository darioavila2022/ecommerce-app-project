import { AddCircleOutlineRounded, RemoveCircleOutlineRounded } from '@mui/icons-material';
import { addProduct } from '../redux/cartRedux.js';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { publicRequest } from '../requestMethods.js';

import Navbar from '../components/Navbar.js';
import Ads from '../components/Ads.js';
import Footer from '../components/Footer.js';
import './Product.css';

import cassette2 from '../images/cassette2.jpg';

const Product = () => {
    const location = useLocation()
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()

    useEffect(() => {
        const getProduct = async () => {
          try {
            const res = await publicRequest.get("/products/find/" + id);
            setProduct(res.data);
          } catch {}
        };
        getProduct();
      }, [id]);
    
      const handleQuantity = (type) => {
        if (type === "dec") {
          quantity > 1 && setQuantity(quantity - 1);
        } else {
          setQuantity(quantity + 1);
        }
      };

    const handleClick = () => {
        dispatch (addProduct({ product, quantity, price :product.price*quantity}))
    }

    return (
        <div>
            <Navbar />
            <Ads />
            <div className='product'>
                <div className='img-wrapper'>
                    <img className='product-img' src={cassette2} alt='img'>
                    </img>
                </div>
                <div className='product-info'>
                    <h2>Blue Cassette SNY Brand</h2>
                    <div>Donec sagittis risus quis mauris tincidunt, a eleifend libero auctor. Aliquam nec porttitor lorem. Praesent augue nibh, eleifend congue finibus at, placerat varius sapien. Nulla enim dolor, dictum non neque non, gravida sodales mauris.</div>
                    <div>
                        <h2>$50.00</h2>
                        <div className='amount'>
                            <h3><AddCircleOutlineRounded /></h3>
                            <h3>1</h3>
                            <h3><RemoveCircleOutlineRounded /></h3>
                        </div>
                        <button onClick={handleClick}>ADD TO CART</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Product;