import { AddCircleOutlineRounded, RemoveCircleOutlineRounded } from '@mui/icons-material';
import { addProduct } from '../redux/cartRedux.js';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { publicRequest } from '../requests/requestMethods.js';

import Navbar from '../components/Navbar.js';
import Ads from '../components/Ads.js';
import Footer from '../components/Footer.js';
import './singleProduct.css';

//Single product page 

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
      } catch { }
    };
    getProduct();
  }, [id]);

  const addQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const addToCart = () => {
    dispatch(addProduct({ product, quantity, price: product.price * quantity }))
  }

  return (
    <div>
      <Navbar />
      <Ads />
      <div className='product'>
        <div className='img-wrapper'>
          <img className='product-img' src={product.img} alt='img'>
          </img>
        </div>
        <div className='product-info'>
          <h2>{product.title}</h2>
          <div>{product.desc}</div>
          <div>
            <h2>$ {product.price}</h2>
            <div className='amount'>
            <h3 onClick={() => addQuantity("dec")}><RemoveCircleOutlineRounded /></h3>
            <h3>{quantity}</h3>
            <h3 onClick={() => addQuantity("inc")}><AddCircleOutlineRounded /></h3>
            </div>
            <button onClick={addToCart}>ADD TO CART</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
};

export default Product;

