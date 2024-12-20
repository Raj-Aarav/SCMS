// src/pages/LoginPage.js
import React from 'react';
import LoginForm from '../components/LoginForm';

import '../styles/LoginPage.css';

const LoginPage = () => {
    return (
        <div className="login-page">
            <h2>Login</h2>
            <LoginForm />
        </div>
    );
};

export default LoginPage;
