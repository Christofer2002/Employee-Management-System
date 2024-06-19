// src/components/Register.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faEye, faEyeSlash, faUser } from '@fortawesome/free-solid-svg-icons';
import authService from '../services/authService';
import { toast } from 'react-toastify';
import '/src/features/auth/styles/Register.css';

const Register = () => {
    const navigate = useNavigate();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [termsChecked, setTermsChecked] = useState(false);

    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        idRole: '2'
    })

    console.log('Register values:', values);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (values.password !== values.confirmPassword) {
            toast.error('Passwords do not match. Please check and try again.');
            return;
        }
        if (!termsChecked) {
            toast.error('You must agree with terms & conditions to sign in.');
            return;
        }
        try {
            const response = await authService.register(values);
            if (response.data.registerStatus === 'success') {
                toast.success('Register successful');
                console.log('Register successful:', response.data);
                // Redirigir al usuario al dashboard
                navigate('/');
            } else {
                toast.error(response.data.error);
            }
        } catch (error) {
            console.error('Error register account:', error);
            toast.error(response.data.error);
        }
    };

    return (
        <div className='d-flex justify-content-center align-items-center vh-100 registerPage'>
            <div className='rounded w-25 border registerForm'>
                <h2 className='d-flex justify-content-center text-center'>Register Account</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="username" className='d-flex align-items-center'>
                            <FontAwesomeIcon icon={faUser} className='me-2' />
                            <strong>Username:</strong>
                        </label>
                        <input type="text" name='username' placeholder='Enter Username' className='form-control rounded-0 custom-input'
                        onChange={(e) => setValues({ ...values, username: e.target.value })} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email" className='d-flex align-items-center'>
                            <FontAwesomeIcon icon={faEnvelope} className='me-2' />
                            <strong>Email:</strong>
                        </label>
                        <input type="email" name='email' autoComplete='on' placeholder='Enter Email' className='form-control rounded-0 custom-input'
                            onChange={(e) => setValues({ ...values, email: e.target.value })} />
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
                                className='form-control rounded-0 custom-input'
                                onChange={(e) => setValues({ ...values, password: e.target.value })}
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
                        <div className="input-group mb-4">
                            <input
                                type={confirmPasswordVisible ? 'text' : 'password'}
                                name='confirmPassword'
                                placeholder='Confirm Password'
                                className='form-control rounded-0 custom-input'
                                onChange={(e) => setValues({ ...values, confirmPassword: e.target.value })}
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
                    <button className='btn btn-success w-100 rounded-0 mb-2'>Register</button>
                    <div className='mb-3 d-flex gap-2'>
                        <input type="checkbox" name="tick" id='tick' onChange={(e) => setTermsChecked(e.target.checked)} />
                        <label htmlFor="password">You are Agree with terms & conditions</label>
                    </div>
                    <div className='text-center'>
                        <span>Do you have an account? </span>
                        <Link to="/">Sign In</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
