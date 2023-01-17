import './register.css'

const Register = () => {
    return (
        <div className="register-container">
            <div className="register-wrapper">
                <h1 className='register-title'>CREATE YOUR ACCOUNT</h1>
                <form className='register-form'>
                    <input className='register-input' placeholder="name"/>
                    <input className='register-input' placeholder="last name"/>
                    <input className='register-input' placeholder="email"/>
                    <input className='register-input' placeholder="username"/>
                    <input className='register-input' placeholder="password"/>
                    <input className='register-input' placeholder="confirm password"/>
                    <div className="register-agreement">I hereby agree to the storage of my own personal information, as well as other information not expressed here that may be suitable for this webpage's sponsors; in accordance with the <b>POLICIES</b>.</div>
                    <button className='register-button'>SEND</button>
                </form>
            </div>
        </div>
    )
}

export default Register