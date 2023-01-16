import './register.css'

const Register = () => {
    return (
        <div className="container">
            <div className="wrapper">
                <h1>CREATE YOUR ACCOUNT</h1>
                <form>
                    <input placeholder="name"/>
                    <input placeholder="last name"/>
                    <input placeholder="email"/>
                    <input placeholder="username"/>
                    <input placeholder="password"/>
                    <input placeholder="confirm password"/>
                    <div className="agreement">I hereby agree to the storage of my own personal information, as well as other information not expressed here that may be suitable for this webpage's sponsors; in accordance with the <b>POLICIES</b>.</div>
                    <button>SEND</button>
                </form>
            </div>
        </div>
    )
}

export default Register