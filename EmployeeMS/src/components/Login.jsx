// src/components/Login.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import '../styles/Login.css';

const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
            <div className='p-3 rounded w-25 border loginForm'>
                <h2 className='d-flex justify-content-center text-center'>Employee Management System</h2>
                <form>
                    <div className='mb-3'>
                        <label htmlFor="email" className='d-flex align-items-center'>
                            <FontAwesomeIcon icon={faEnvelope} className='me-2' />
                            <strong>Email:</strong>
                        </label>
                        <input type="email" name='email' autoComplete='on' placeholder='Enter Email'
                            className='form-control rounded-0' />
                    </div>
                    <div className='position-relative'>
                        <label htmlFor="password" className='d-flex align-items-center'>
                            <FontAwesomeIcon icon={faLock} className='me-2' />
                            <strong>Password:</strong>
                        </label>
                        <div className="input-group">
                            <input
                                type={passwordVisible ? 'text' : 'password'}
                                name='password'
                                placeholder='Enter Password'
                                className='form-control rounded-0'
                            />
                            <span
                                className='input-group-text'
                                onClick={togglePasswordVisibility}
                                style={{ cursor: 'pointer', color: 'black' }}
                            >
                                <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
                            </span>
                        </div>
                    </div>
                    <button className='btn btn-success w-100 rounded-0 mb-5'>Login</button>
                    <div className='text-center'>
                        <span>Don't have an account? </span>
                        <Link to="/register">Sign Up</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
