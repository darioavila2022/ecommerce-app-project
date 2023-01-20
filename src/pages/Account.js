import { Link } from 'react-router-dom'

import Ads from '../components/Ads.js';
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js';

import './account.css'

const Profile = () => {
    return (
        <div>
            <Ads />
            <Navbar />
                <div className="acct-wrapper">
                    <h1>WELCOME</h1>
                    <div className="profile">
                        <div className='acct-left'>
                            <div className="profile-detail">
                                {/* <div className="image">image</div> */}
                                <h2>NAME LASTNAME</h2>
                                <h2>email@email.com</h2>
                            </div>
                            <ul className='acct-links'>
                                <li><Link to='#' className='link'>Account</Link></li>
                                <li><Link to='#' className='link'>Password</Link></li>
                                <li><Link to='#' className='link'>My Orders</Link></li>
                                <li><Link to='#' className='link'>Payments Info</Link></li>
                                <li><Link to='#' className='link'>Delete Account</Link></li>
                                <li><Link to='#' className='link'>Logout</Link></li>
                            </ul>
                        </div>

                        <div className='acct-right'>
                            <div className="acct-detail">
                                <h2>Account</h2>
                                <input className='acct-input' placeholder="name" />
                                <input className='acct-input' placeholder="last name" />
                                <input className='acct-input' placeholder="email" />
                                <input className='acct-input' placeholder="username" />
                                <input className='acct-input' placeholder="country" />
                                <input className='acct-input' placeholder="city" />
                                <input className='acct-input' placeholder="address" />
                                <input className='acct-input' placeholder="phone" />
                            </div>
                            <div>
                            <button>UPDATE</button>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer />
        </div>
    )
};

export default Profile;