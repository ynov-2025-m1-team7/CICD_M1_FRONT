import React, { useState } from 'react';
import LoginForm from '../../Compossant/LoginForm/index';
import IdentificationBanner from '../../Compossant/IdentificationBanner';
import './style.css';

const Login = () => {
    return (
        <div className="login-container">
            <IdentificationBanner title={"Bon retour parmi nous !"} />
            <LoginForm />
        </div>
    );
}

export default Login;