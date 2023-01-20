import { Link } from 'react-router-dom';

import { Radio, Search, ShoppingCart } from '@mui/icons-material';
import { Badge } from '@mui/material';
import './navbar.css';

const Navbar = () => {
    return (
        <div className='nav-container'>
            <div className='nav-wrapper'>
                <div className='nav-left'>
                    <div className='nav-language'>
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
                        <Badge badgeContent={2} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default Navbar