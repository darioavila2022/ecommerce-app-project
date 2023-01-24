import { Link } from 'react-router-dom';
import { Radio, Search, ShoppingCart } from '@mui/icons-material';
import { Badge } from '@mui/material';
import { useSelector } from 'react-redux';
import './navbar.css';

const Navbar = () => {
    // USING THE CART BADGE DYNAMICALLY
    const quantity = useSelector(state => state.cart.quantity)// SELECTING CART INSIDE THIS STATE RETURNS STATE.CART (IN THIS CASE, THE INITIAL QUANTITY OF THE CART)

    return (
        <div className='nav-container'>
            <div className='nav-wrapper'>
                <div className='nav-left'>
                    <div className='nav-lang'>
                        EN
                    </div>
                    <div className='nav-search'>
                        <input className='nav-input'>

                        </input>
                        <div className='nav-searchIcon'>
                            <Search style={{ color: "grey" }} />
                        </div>
                    </div>
                </div>
                <div className='nav-center'>
                    <Link to='/' className='logo'>
                        THE CASSETTE STORE <Radio />
                    </Link>
                </div>
                <div className='nav-right'>
                    <Link to='/register' className='link'> REGISTER</Link>
                    <Link to='/login' className='link'> SIGN IN </Link>
                    <Link to='/cart' className='link'>


                        <Badge badgeContent={quantity} color="secondary">
                            <ShoppingCart />
                        </Badge>

                        
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default Navbar