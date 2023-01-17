import './login.css'

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-wrapper">
                <h1 className='login-title'>sign in</h1>
                <form className='login-form'>
                    <input className='login-input' placeholder="username" />
                    <input className='login-input' placeholder="password" />
                    <button className='login-button'>login</button>
                    <a className="login-link">forgot your password?</a>
                    <a className="login-link">create a new account</a>
                </form>
            </div>
        </div>
    )
}

export default Login