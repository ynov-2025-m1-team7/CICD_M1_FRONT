import React, { useState } from 'react';
import axios from 'axios';
import Input from "../Input";
import FormButton from "../FormButton";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import "./style.css";

const LoginForm = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await axios.post('http://localhost:3001/Login', form);
            Cookies.set('token', response.headers['authorization'], {
                path: '/',
                secure: true,
                sameSite: 'Strict',
                expires: 1
            });
        } catch (err) {
            console.error(err);
            setError('Identifiants incorrects.', err);
            throw new Error(error);
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
        <form className="login-form" onSubmit={handleSubmit}>
            <h1 className="login-form__title">Connexion</h1>

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

            {error && <p className="error">{error}</p>}

            <FormButton
                type="submit"
                className="form-button"
                disabled={loading}
                title="Se connecter"
            />

            <p onClick={() => {navigate("/signin")}}>S'inscrire</p>
        </form>
    );
};

export default LoginForm;
