import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
//import LivreImage from '../asset/Livre.webp';
import Inscription from './Inscription';


const Login = () => {
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            //const response = await axios.post('http://localhost:3001/Login', inputs);
            localStorage.setItem('token', response.headers['authorization']);
            //navigate('/Bibliothèque');
        } catch (error) {
            console.error(error);
            setError('Identifiants incorrects. Veuillez réessayer.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <LoginForm onSubmit={handleSubmit}>
            {/* <Image src={LivreImage} alt="Livre" /> */}
            <InputField
                type="email"
                placeholder="Email"
                value={inputs.email}
                onChange={(e) => setInputs({...inputs, email: e.target.value})}
            />
            <InputField
                type="password"
                placeholder="Password"
                value={inputs.password}
                onChange={(e) => setInputs({...inputs, password: e.target.value})}
            />
            <SubmitButton type="submit" disabled={loading}>
                {loading ? 'Chargement...' : 'Login'}
            </SubmitButton>

            {error && <ErrorMessage>{error}</ErrorMessage>}
            {loading && <LoadingMessage>Connexion en cours...</LoadingMessage>}

            <InscriptionLink to="/Inscription">s'inscrire</InscriptionLink>
        </LoginForm>
    );
}

export default Login;