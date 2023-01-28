// import Ads from '../components/Ads.js';
// import Footer from '../components/Footer.js';
// import Navbar from '../components/Navbar.js';
// import './register.css';

// const Register = () => {
//     return (
//         <div>
//             <Ads />
//             <Navbar />
//             <div className="reg-container">
//                 <div className="reg-wrapper">
//                     <h1>CREATE YOUR ACCOUNT</h1>
//                     <form className='reg-form'>
//                         <input className='reg-input' placeholder="name" />
//                         <input className='reg-input' placeholder="last name" />
//                         <input className='reg-input' placeholder="email" />
//                         <input className='reg-input' placeholder="username" />
//                         <input className='reg-input' placeholder="password" />
//                         <input className='reg-input' placeholder="confirm password" />
//                         <div className="reg-terms">I hereby agree to the storage of my own personal information, as well as other information not expressed here that may be suitable for this webpage's sponsors; in accordance with the <b>POLICIES</b>.</div>
//                         <button className='reg-btn'>SEND</button>
//                     </form>
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     )
// };

// export default Register;

import React, { useState } from "react";
import axios from "axios";

export default function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [register, setRegister] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();

        const configuration = {
            method: "post",
            url: "http://localhost:5000/api/auth/register",
            data: {
                email,
                password,
            },
        };

        axios(configuration)
    .then((result) => {setRegister(true)})
    .catch((error) => {error= new Error()})
    };


    
    return (
        <>
            <h2>Register</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
 
                <div >
                    <div>Email</div>
                    <input
                        className='reg-input'
                        placeholder="email"
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div >
                    <div>Password</div>
                    <input
                        className='reg-input'
                        placeholder="password"
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button
                    variant="primary"
                    type="submit"
                    onClick={(e) => handleSubmit(e)}
                >
                    Register
                </button>

                {register ? (
                    <p className="text-success">You Are Registered Successfully</p>
                ) : (
                    <p className="text-danger">You Are Not Registered</p>
                )}
            </form>
        </>
    );
}