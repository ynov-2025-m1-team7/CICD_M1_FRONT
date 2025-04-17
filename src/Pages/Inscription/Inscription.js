import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
//import styled from 'styled-components';

//const StyledForm = styled.form`
  //max-width: 300px;
  //margin: 0 auto;
  //padding: 20px;
  //background-color: #ffffff;
  //border-radius: 8px;
  //box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  //display: flex;
  //flex-direction: column;
  //align-items: center;
  //justify-content: center;
  //height: 100vh;
//`;

//const InputField = styled.input`
  //width: 100%;
 // padding: 10px;
  //margin-bottom: 15px;
  //border: 1px solid #ccc;
  //border-radius: 4px;
//`;

//const SubmitButton = styled.button`
  //width: 100%;
  //padding: 10px;
  //background-color: #4caf50;
  //color: #ffffff;
 // border: none;
  //border-radius: 4px;
  //cursor: pointer;
  //font-size: 16px;

  //&:hover {
    //background-color: #45a049;
  //}

  //&:disabled {
    //background-color: #ccc;
    //cursor: not-allowed;
  //}
//`;

//const LoginFormLink = styled(Link)`
  //margin-top: 10px;
  //color: #333;
  //text-decoration: underline;
  //cursor: pointer;
//`;

//const ErrorMessage = styled.div`
  //color: red;
  //margin-top: 10px;
//`;

const Inscription = () => {
    const [formData, setFormData] = useState({
        users: '',
        email: '',
        password: '',
    });

    const [error, setError] = useState('');

    const [isSubmitting, setIsSubmitting] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        try {

            const response = await axios.post(
                'http://localhost:3001/Inscription',
                formData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            localStorage.setItem('token', response.headers['authorization']);

            if (response.status === 200 || response.status === 201) {

                setFormData({
                    users: '',
                    email: '',
                    password: '',
                });
                navigate('/');
            } else {
                setError('Une erreur est survenue lors de l\'Inscription');
                console.error('Erreur lors de l\'Inscription:', response.status);
            }
        } catch (error) {
            setError('Une erreur est survenue lors de l\'Inscription');
            console.error('Erreur lors de l\'Inscription:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };


    return (
        <StyledForm onSubmit={handleSubmit}>
            <InputField
                type="text"
                name="users"
                placeholder="Nom d'utilisateur"
                value={formData.users}
                onChange={handleInputChange}
            />
            <InputField
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
            />
            <InputField
                type="password"
                name="password"
                placeholder="Mot de passe"
                value={formData.password}
                onChange={handleInputChange}
            />
            <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'En cours...' : 'S\'inscrire'}
            </SubmitButton>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <LoginFormLink to="/">Déjà un compte? Connectez-vous</LoginFormLink>
        </StyledForm>
    );
};

export default Inscription;