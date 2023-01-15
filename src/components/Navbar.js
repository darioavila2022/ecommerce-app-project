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
                        input
                        icon
                    </div>
                </div>
                <div className='center'>Center</div>
                <div className='right'>Right</div>
            </div>
        </div>
    )
}

export default Navbar