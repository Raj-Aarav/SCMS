// src/pages/RegisterPage.js
import React from 'react';
import RegisterForm from '../components/RegisterForm';

import '../styles/RegisterPage.css';
const RegisterPage = () => {
    return (
        <div className="register-page">
            <h2>Register</h2>
            <RegisterForm />
        </div>
    );
};

export default RegisterPage;
