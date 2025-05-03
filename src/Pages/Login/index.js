import React, { useState } from 'react';
import axios from 'axios';
import Input from '../../Compossant/Input';
import LoginForm from '../../Compossant/LoginForm/index';

function InputField(props) {
    return React.createElement('input', {
        type: props.type || 'text',
        name: props.name,
        value: props.value || '',
        onChange: props.onChange,
        placeholder: props.placeholder || '',
    });
}

function SubmitButton(props) {
    return React.createElement('button', {
        type: 'submit',
        disabled: props.disabled || false
    }, props.children || 'Se connecter');
}

const Login = () => {
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await axios.post('http://localhost:3001/Login', inputs);
            localStorage.setItem('token', response.headers['authorization']);
        } catch (err) {
            setError('Identifiants incorrects. Veuillez réessayer.');
        } finally {
            setLoading(false);
        }
    };

    return React.createElement(
        LoginForm,
        { onSubmit: handleSubmit },
        [
            React.createElement(InputField, {
                key: 'email',
                type: 'email',
                name: 'email',
                value: inputs.email,
                onChange: handleChange,
                placeholder: 'Entrez votre email'
            }),
            React.createElement('br', { key: 'br1' }),
            React.createElement(InputField, {
                key: 'password',
                type: 'password',
                name: 'password',
                value: inputs.password,
                onChange: handleChange,
                placeholder: 'Entrez votre mot de passe'
            }),
            React.createElement('br', { key: 'br2' }),
            React.createElement(SubmitButton, { key: 'submit', disabled: loading }),
            error ? React.createElement('p', { key: 'error' }, error) : null
        ]
    );
};

export default Login;
