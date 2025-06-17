import React, { useState } from 'react';
import axios from 'axios';
import Input from "../Input";
import FormButton from "../FormButton";
import Cookies from 'js-cookie';
import GoogleLogin from '../GoogleAuth';
import { useNavigate } from 'react-router-dom';
import "./style.css";

const InscriptionForm = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await axios.post('http://localhost:3001/SignIn', form);
            Cookies.set('token', response.headers['authorization'], {
                path: '/',
                secure: true,
                sameSite: 'Strict',
                expires: 1
            });
        } catch (err) {
            console.error(err);
            throw new Error("Erreur lors de la récupération des données :", err);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (!name) {
            throw new Error("Name is required for handleChange");
        }

        setForm((prevForm) => ({
            ...prevForm,
            [name]: value
        }));
    };

    return (
        <form className="signin-form" onSubmit={handleSubmit}>
            <h1 className="signin-form__title">S'inscrire</h1>

            <Input
                type="text"
                name="name"
                placeholder="Nom d'utilisateur"
                value={form.name}
                onChange={handleChange}
            />
            <Input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
            />
            <Input
                type="password"
                name="password"
                placeholder="Mot de passe"
                value={form.password}
                onChange={handleChange}
            />
            <Input
                type="password"
                name="confirmPassword"
                placeholder="confirmer mot de passe"
                value={form.confirmPassword}
                onChange={handleChange}
            />

            {error && <p className="error">{error}</p>}

            <FormButton
                type="submit"
                disabled={loading}
                title="Inscription"
            />
            <p onClick={() => {navigate("/login")}}>Connexion</p>
            <p>ou</p>
            <GoogleLogin/>
            
        </form>
    );
};

export default InscriptionForm;
