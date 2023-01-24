import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

import Home from './pages/Home.js'
import AllProducts from './pages/AllProducts.js'
import CategProducts from './pages/CategProducts.js'
import Product from './pages/SingleProduct.js';
import Cart from './pages/Cart.js'
import Login from './pages/Login.js'
import Register from './pages/Register.js'
import Account from './pages/Account.js'
import './App.css';

const App = ( ) => {
  // const user = true
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/allcategories' element={<AllProducts />} />
        <Route path='/allproducts/:category' element={<CategProducts />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/account' element={<Account />} />
        {/* <Route path='/login' element={user ? <Navigate to='/'/> : <Login/>} />
        <Route path='register' element={user ? <Navigate to='/'/> : <Register />} /> */}
      </Routes>
      </BrowserRouter>
    </div>
  )
};

export default App;
