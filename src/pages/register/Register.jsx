import "./register.css";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className='register'>
             <pan className="registerTitle">
                Register
            </pan>
            <form className="registerForm">
                <label>Username</label>
                <input className="registerInput" type="text" placeholder="Enter Your username..."/>
                <label>Email</label>
                <input className="registerInput" type="text" placeholder="Enter Your email..."/>
                <label>Password</label>
                <input className="registerInput" type="password" placeholder="Enter Your password..."/>
                <button className="registerButton">
                    Register
                </button>
            </form>
            <button className="registerRegisterButton">
            <Link className="link" to="/login">Login</Link>

                </button>
        </div>
    );
}

export default Register;
