// import { AddCircleOutlineRounded, RemoveCircleOutlineRounded } from '@mui/icons-material';
// import { Link } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import { useNavigate } from "react-router"
// import { userRequest } from '../requests/requestMethods.js';
// import Navbar from '../components/Navbar.js';
// import Ads from '../components/Ads.js';
// import Footer from '../components/Footer.js';
// import PaypalCheckoutButton from './PaypalCheckoutButton.js';
// // import StripeCheckout from 'react-stripe-checkout';


// import './cart.css';

// const KEY = process.env.REACT_APP_STRIPE

// const Cart = () => {
//     const cart = useSelector((state) => state.cart)
//     const [stripeToken, setStripeToken] = useState(null) //SETTING TOKEN WITH USESTATE WHICH IS GOING TO BE NULL AT THE BEGGINNING
//     const navigate = useNavigate()

//     const onToken = (token) => {// GETS TOKEN FROM STRIPE
//         setStripeToken(token)
//     }

// // STRIPE CREATES A TOKEN FOR EACH TRANSACTION

//     useEffect(() => {// AFTER TAKING THE TOKEN I ADD A USEEFFECT
//         const makeRequest = async () => {// MAKEREQUEST IS AN ASYNC FUNCTION
//             try {
//                 const res = await userRequest.post("/checkout/payment", // THE RESPONSE WILL BE INSIDE USERREQUEST FROM "REQUEST METHODS" AND IT WILL BE POSTED IN THE ENDPOINT WHICH IS /CHECKOUT/PAYMENT. 
//                     {
//                         tokenId: stripeToken.id,// SENDING THE TOKENID WHICH IS THE ID FROM THE OBJECT "STRIPETOKEN"
//                         amount: cart.total * 100,// *100 BECAUSE STRIPE WORKS WITH CENTS. 100 CENTS = 1 DOLLAR. AFTER THIS IT GOES TO SUCCESS OR ORDER PAGE
//                     })
//                 navigate("/Success", { replace: true }, { data: res.data })// TO DO SO USE THE "HISTORY" HOOK FROM REACT-ROUTER AND THEN GO TO THE SUCCESS PAGE IN SUCCESS.JS. ALSO PARMATERS CAN BE ADDED TO THE HISTORY HOOK
//             } catch { }
//         }// END OF THE MAKEREQUEST FUNCTION
//         stripeToken && makeRequest()// IF STRIPETOKEN EXISTS THE FUNCTION WILL BE CALLED
//     }, [stripeToken, cart.total, navigate])// THE DEPENDENCY OF THE USEEFFECT WILL BE THE STRIPE TOKEN

//     return (
//         <div>
//             <Navbar />
//             <Ads />
//             <div>
//                 <div className='cart-wrapper'>
//                     <h1>YOUR CART</h1>
//                     <div className='cart-links'>
//                         <Link to='/allproducts' className='link'>KEEP SHOPPING</Link>
//                         <p>SHOPPING CART (3)</p>
//                     </div>
//                     <div className='cart-sections'>
//                         <div className='cart-elements'>



//                             {cart.products.map((product) => (

//                                 <div className='cart-prod'>
//                                     <div className='prod-details'>
//                                         <img className='cart-prod-img' alt='img' src={product.img} />
//                                         <div className='prod-name'>
//                                             <span><b>Product: </b>{product.title}</span>
//                                         </div>
//                                         <div className='prod-id'>
//                                             <span><b>ID: </b>{product._id}</span>
//                                         </div>
//                                     </div>
//                                     <div className='price'>
//                                         <h2>${product.price}</h2>
//                                     </div>
//                                     <div className='amount'>
//                                         <h3><AddCircleOutlineRounded /></h3>
//                                         <h3>{product.quantity}</h3>
//                                         <h3><RemoveCircleOutlineRounded /></h3>
//                                     </div>
//                                 </div>))}
//                         </div>


//                         <div className='order'>
//                             <h2>Order Summary</h2>
//                             <div className='order-details'>
//                                 <span>subtotal</span>
//                                 <span>$ {cart.total}</span>
//                             </div>
//                             <div className='order-details'>
//                                 <span>handling + shipping</span>
//                                 <span>$ 10</span>
//                             </div>
//                             <div className='order-details'>
//                                 <span>shipping discount</span>
//                                 <span>$ -5</span>
//                             </div>
//                             <div className='order-details'>
//                                 <span>total</span>
//                                 <span>$ {cart.total}</span>
//                             </div>


//                             <PaypalCheckoutButton
//                                 name="The Cassette Store"
//                                 image="https://cdn-icons-png.flaticon.com/512/1169/1169939.png"
//                                 billingAddress
//                                 shippingAddress
//                                 description={`Your total is $${cart.total}`}
//                                 amount={cart.total * 100}
//                                 token={onToken}
//                                 stripeKey={KEY}
//                             >
//                                 <button className='cart-btn'>CHECKOUT NOW</button>
//                             </PaypalCheckoutButton>


//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     )
// };





// curl -v -X POST https://api-m.sandbox.paypal.com/v2/checkout/orders \
// -H "Content-Type: application/json" \
// -H "Authorization: Bearer <Access-Token>" \
// -H "PayPal-Request-Id: 7b92603e-77ed-4896-8e78-5dea2050476a" \
// -d '{
//   "intent": "CAPTURE",

  "purchase_units": [
    {
      "reference_id": "d9f80740-38f0-11e8-b467-0ed5f89f718b",
      "amount": {
        "currency_code": "USD",
        "value": "100.00"
      }
    }
  ],
  "payment_source": {
    "paypal": {
      "experience_context": {
        "payment_method_preference": "IMMEDIATE_PAYMENT_REQUIRED",
        "payment_method_selected": "PAYPAL",
        "brand_name": "EXAMPLE INC",
        "locale": "en-US",
        "landing_page": "LOGIN",
        "shipping_preference": "SET_PROVIDED_ADDRESS",
        "user_action": "PAY_NOW",
        "return_url": "https://example.com/returnUrl",
        "cancel_url": "https://example.com/cancelUrl"
      }
    }
  }
}'