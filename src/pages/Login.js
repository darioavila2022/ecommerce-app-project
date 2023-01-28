import Navbar from '../components/Navbar.js';
import Ads from '../components/Ads.js';
import Footer from '../components/Footer.js';
import './login.css'
import { useState } from 'react';
import { loginFailure } from '../redux/userRedux.js';
import { login } from '../redux/apiCalls.js';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const { error } = useSelector((state) => state.user);

    const handleClick = (e) => {
        e.preventDefault()
        login(dispatch, {username, password})
    }
    return (
        <div>
            <Ads />
            <Navbar />
            <div className="login-container">
                <div className="login-wrapper">
                    <h1>SIGN IN</h1>
                    <form className='login-form'>
                        <input 
                        className='login-input' 
                        placeholder="username" 
                        onChange={(e) => setUserName(e.target.value)} 
                        />
                        <input 
                        className='login-input' 
                        type="password"
                        placeholder="password" 
                        onChange={(e) => setPassword(e.target.value)} 
                        />
                        <button 
                        className='login-btn'
                        onClick={handleClick}
                        >Login</button>

                        {error && <span className='error'>Hm, something went wrong. Check your spelling and try again, please.</span>}

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