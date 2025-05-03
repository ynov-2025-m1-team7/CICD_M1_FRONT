import React, { useState } from 'react';
import Input from '../Input';

const LoginForm = () => {
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            alert(`Email: ${inputs.email}, Password: ${inputs.password}`);
        }, 1000);
    };

    return React.createElement(
        'form',
        { onSubmit: handleSubmit },
        [
            React.createElement('h1', { key: 'title' }, 'Login'),

            React.createElement(Input, {
                key: 'email',
                type: 'email',
                name: 'email',
                placeholder: 'Email',
                value: inputs.email,
                onChange: handleChange
            }),

            React.createElement(Input, {
                key: 'password',
                type: 'password',
                name: 'password',
                placeholder: 'Password',
                value: inputs.password,
                onChange: handleChange
            }),

            React.createElement(
                'button',
                { key: 'submit', type: 'submit', disabled: loading },
                loading ? 'Chargement...' : 'Login'
            ),

            error
                ? React.createElement('p', {
                    key: 'error',
                    style: { color: 'red' }
                }, error)
                : null,

            React.createElement('p', { key: 'signup' }, "S'inscrire")
        ]
    );
};

export default LoginForm;
