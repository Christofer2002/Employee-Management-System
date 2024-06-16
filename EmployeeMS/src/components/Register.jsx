// src/components/Register.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faEye, faEyeSlash, faUser } from '@fortawesome/free-solid-svg-icons';
import '../styles/Register.css';

const Register = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };

    return (
        <div className='d-flex justify-content-center align-items-center vh-100 registerPage'>
            <div className='p-3 rounded w-25 border registerForm'>
                <h2 className='d-flex justify-content-center text-center'>Register</h2>
                <form>
                    <div className='mb-3'>
                        <label htmlFor="username" className='d-flex align-items-center'>
                            <FontAwesomeIcon icon={faUser} className='me-2' />
                            <strong>Username:</strong>
                        </label>
                        <input type="text" name='username' placeholder='Enter Username' className='form-control rounded-0' />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email" className='d-flex align-items-center'>
                            <FontAwesomeIcon icon={faEnvelope} className='me-2' />
                            <strong>Email:</strong>
                        </label>
                        <input type="email" name='email' autoComplete='on' placeholder='Enter Email' className='form-control rounded-0' />
                    </div>
                    <div className='mb-3 position-relative'>
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
                    <div className='position-relative'>
                        <label htmlFor="confirmPassword" className='d-flex align-items-center'>
                            <FontAwesomeIcon icon={faLock} className='me-2' />
                            <strong>Confirm Password:</strong>
                        </label>
                        <div className="input-group">
                            <input
                                type={confirmPasswordVisible ? 'text' : 'password'}
                                name='confirmPassword'
                                placeholder='Confirm Password'
                                className='form-control rounded-0'
                            />
                            <span
                                className='input-group-text'
                                onClick={toggleConfirmPasswordVisibility}
                                style={{ cursor: 'pointer', color: 'black' }}
                            >
                                <FontAwesomeIcon icon={confirmPasswordVisible ? faEyeSlash : faEye} />
                            </span>
                        </div>
                    </div>
                    <button className='btn btn-success w-100 rounded-0 mb-4'>Register</button>
                    <div className='text-center'>
                        <span>Do you have an account? </span>
                        <Link to="/login">Sign In</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
