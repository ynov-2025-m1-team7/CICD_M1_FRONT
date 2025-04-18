import React, { useState } from 'react';
import axios from 'axios';
import Input from '../../Compossant/Input';
import InscriptionForm from '../../Compossant/InscriptionForm';
//import { useNavigate, Link } from 'react-router-dom';

const Inscription = () => {
    const [formData, setFormData] = useState({
        users: '',
        email: '',
        password: '',
    });

    const [error, setError] = useState('');

    const [isSubmitting, setIsSubmitting] = useState(false);

    //const navigate = useNavigate();

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
            )

            localStorage.setItem('token', response.headers['authorization']);

            if (response.status === 200 || response.status === 201) {

                setFormData({
                    users: '',
                    email: '',
                    password: '',
                });
                //navigate('/');
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
        <InscriptionForm/>
    );
};

export default Inscription;