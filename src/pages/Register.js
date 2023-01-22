import Ads from '../components/Ads';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import './register.css';

const Register = () => {
    return (
        <div>
            <Ads />
            <Navbar />
            <div className="reg-container">
                <div className="reg-wrapper">
                    <h1>CREATE YOUR ACCOUNT</h1>
                    <form className='reg-form'>
                        <input className='reg-input' placeholder="name" />
                        <input className='reg-input' placeholder="last name" />
                        <input className='reg-input' placeholder="email" />
                        <input className='reg-input' placeholder="username" />
                        <input className='reg-input' placeholder="password" />
                        <input className='reg-input' placeholder="confirm password" />
                        <div className="reg-terms">I hereby agree to the storage of my own personal information, as well as other information not expressed here that may be suitable for this webpage's sponsors; in accordance with the <b>POLICIES</b>.</div>
                        <button className='reg-btn'>SEND</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Register;