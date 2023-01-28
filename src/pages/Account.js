import Ads from '../components/Ads.js';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import './account.css';

//Account or profile, shows user information after registration

const Profile = () => {
    return (
        <div>
            <Ads />
            <Navbar />
            <div className='acct-wrapper'>
                <h1>WELCOME</h1>
                <div className='profile'>
                    <div className='acct-left'>
                        <div>
                            <h2>NAME LASTNAME</h2>
                            <h2>email@email.com</h2>
                        </div>
                        <div className='acct-elements'>
                            <div><button>LOG OUT</button></div>
                        </div>
                    </div>

                    <div className='acct-right'>
                        <div className='acct-elements'>
                            <div>
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
                            <div><button>UPDATE</button></div>
                        </div>

                        <div className='acct-elements'>
                            <div>
                                <h2>Orders</h2>
                                <input className='acct-input' placeholder="Order #1" />
                                <input className='acct-input' placeholder="21/05/2000" />
                                <input className='acct-input' placeholder="Order #2" />
                                <input className='acct-input' placeholder="09/07/3000" />
                                <input className='acct-input' placeholder="Order #3" />
                                <input className='acct-input' placeholder="15/09/1999" />
                            </div>
                        </div>

                        <div className='acct-elements'>
                            <div>
                                <h2>Password</h2>
                                <input className='acct-input' placeholder="password" />
                                <input className='acct-input' placeholder="new password" />
                            </div>
                            <div><button>UPDATE</button></div>
                        </div>

                        <div className='acct-elements'>
                            <div>
                                <h2>Payment</h2>
                                <input className='acct-input' placeholder="credit card number" />
                                <input className='acct-input' placeholder="expiration date" />
                            </div>
                            <div><button>UPDATE</button></div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Profile;