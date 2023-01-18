import { Radio, Search, ShoppingCart } from '@mui/icons-material'
import { Badge } from '@mui/material'

import './navbar.css'

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
                    <div className='nav-logo'>
                        THE CASSETTE STORE <Radio />
                    </div>
                </div>
                <div className='nav-right'>
                    <div className='nav-menu'> REGISTER</div>
                    <div className='nav-menu'> SIGN IN </div>
                    <div className='nav-menu'>
                        <Badge badgeContent={2} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Navbar