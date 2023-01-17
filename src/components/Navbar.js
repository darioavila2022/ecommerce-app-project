import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React from 'react'
import './navbar.css'

const Navbar = () => {
    return (
        <div className='nav-container'>
            <div className='nav-wrapper'>
                <div className='nav-left'>
                    <div className='nav-language'>
                        EN
                    </div>
                    <div className='nav-searchContainer'>
                        <input className='nav-input'>

                        </input>
                        <div className='nav-searchIcon'>
                            <Search style={{color:"gray", fontSize:16}} />
                        </div>
                    </div>
                </div>
                <div className='nav-center'>
                    <div className='nav-logo'>
                        LOGO
                    </div>
                </div>
                <div className='nav-right'>
                    <div className='nav-menuItem'> REGISTER</div>
                    <div className='nav-menuItem'> SIGN IN </div>
                    <div className='nav-menuItem'>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar