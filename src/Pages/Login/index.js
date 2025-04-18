import React, { useState } from 'react';
import axios from 'axios';
import Input from '../../Compossant/Input';
import LoginForm from '../../Compossant/LoginForm/index';
//import { useNavigate, Link } from 'react-router-dom';

function InputField(props) {
    return null;
}

function SubmitButton(props) {
    return null;
}

const Login = () => {
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    //const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post('http://localhost:3001/Login', inputs);
            localStorage.setItem('token', response.headers['authorization']);
            //navigate('/dashboard');
        } catch (error) {
            console.error(error);
            setError('Identifiants incorrects. Veuillez réessayer.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <LoginForm/>
    );
}

export default Login;