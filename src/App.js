import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

import Home from './pages/Home.js'
import AllProducts from './pages/AllProducts.js'
import CategProducts from './pages/CategProducts.js'
import Product from './pages/SingleProduct.js';
import Cart from './pages/Cart.js'
import Login from './pages/Login.js'
import Register from './pages/Register.js'
import Account from './pages/Account.js'
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import './App.css';
import Success from './pages/Success.js';

const App = () => {
  return (
    <PayPalScriptProvider options={{ "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID }}>
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path='/allproducts' element={<AllProducts />} />
            <Route path='/category/:categories' element={<CategProducts />} />
            <Route path='/product/:id' element={<Product />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/account' element={<Account />} />
            <Route path='/success' element={<Success />} />
            {/* <Route path='/login' element={user ? <Navigate to='/'/> : <Login/>} />
        <Route path='register' element={user ? <Navigate to='/'/> : <Register />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </PayPalScriptProvider>
  )
};

export default App;