import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React from 'react'
import './navbar.css'

const Navbar = () => {
    return (
        <div className='container'>
            <div className='wrapper'>
                <div className='left'>
                    <div className='language'>
                        EN
                    </div>
                    <div className='searchContainer'>
                        <input className='input'>

                        </input>
                        <div className='searchIcon'>
                            <Search style={{color:"gray", fontSize:16}} />
                        </div>
                    </div>
                </div>
                <div className='center'>
                    <div className='logo'>
                        LOGO
                    </div>
                </div>
                <div className='right'>
                    <div className='menuItem'> REGISTER</div>
                    <div className='menuItem'> SIGN IN </div>
                    <div className='menuItem'>
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