import './login.css'

const Login = () => {
    return (
        <div className="container">
            <div className="wrapper">
                <h1>sign in</h1>
                <form>
                    <input placeholder="username" />
                    <input placeholder="password" />
                    <button>login</button>
                    <a className="link">forgot your password?</a>
                    <a className="link">create a new account</a>
                </form>
            </div>
        </div>
    )
}

export default Login