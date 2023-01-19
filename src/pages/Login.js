import Navbar from '../components/Navbar.js';
import Ads from '../components/Ads.js';
import Footer from '../components/Footer.js';

import './login.css'

const Login = () => {
    return (
        <div>
            <Ads />
            <Navbar />
            <div className="login-container">
                <div className="login-wrapper">
                    <h1>SIGN IN</h1>
                    <form className='login-form'>
                        <input className='login-input' placeholder="username" />
                        <input className='login-input' placeholder="password" />
                        <button className='login-btn'>Login</button>
                        <a className="login-link">Forgot your password?</a>
                        <a className="login-link">Create a new account</a>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Login