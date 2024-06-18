import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import authService from '../services/authService';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '/src/features/auth/styles/Login.css';

const Login = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        email: '',
        password: '',
    });
    const [passwordVisible, setPasswordVisible] = useState(false);

    console.log(values.email, values.password);
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await authService.login(values);
            if (response.data.loginStatus === 'success') {
                toast.success('Login successful');
                console.log('Login successful:', response.data);
                // Redirigir al usuario al dashboard
                navigate('/dashboard');
            } else {
                toast.error('Login failed. Invalid email or password.');
            }
        } catch (error) {
            console.error('Error logging in:', error);
            toast.error('Login failed. Please check your credentials and try again.');
        }
    };

    return (
        <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
            <div className='rounded w-25 border loginForm'>
                <h2 className='d-flex justify-content-center text-center'>Employee Management System</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="email" className='d-flex align-items-center'>
                            <FontAwesomeIcon icon={faEnvelope} className='me-2' />
                            <strong>Email:</strong>
                        </label>
                        <input type="email" name='email' autoComplete='on' placeholder='Enter Email'
                            onChange={(e) => setValues({ ...values, email: e.target.value })}
                            className='form-control rounded-0 custom-input' />
                    </div>
                    <div className='position-relative mb-4'>
                        <label htmlFor="password" className='d-flex align-items-center'>
                            <FontAwesomeIcon icon={faLock} className='me-2' />
                            <strong>Password:</strong>
                        </label>
                        <div className="input-group">
                            <input
                                type={passwordVisible ? 'text' : 'password'}
                                name='password'
                                placeholder='Enter Password'
                                onChange={(e) => setValues({ ...values, password: e.target.value })}
                                className='form-control rounded-0 custom-input'
                            />
                            <span
                                className='input-group-text'
                                onClick={togglePasswordVisibility}
                            >
                                <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
                            </span>
                        </div>
                    </div>
                    <button className='btn btn-success w-100 rounded-0 mb-4'>Log in</button>
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
