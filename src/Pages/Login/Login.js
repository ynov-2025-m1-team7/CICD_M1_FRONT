import React, { useState } from 'react';
import axios from 'axios';
//import { useNavigate, Link } from 'react-router-dom';
import Inscription from '../Inscription/Inscription';


class LoginForm extends React.Component {
    render() {
        return null;
    }
}

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
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder="Email"
                value={inputs.email}
                onChange={(e) => setInputs({...inputs, email: e.target.value})}
            />
            <input
                type="password"
                placeholder="Password"
                value={inputs.password}
                onChange={(e) => setInputs({...inputs, password: e.target.value})}
            />
            <button type="submit" disabled={loading}>
                {loading ? 'Chargement...' : 'Login'}
            </button>

            {/*error && <ErrorMessage>{error}</ErrorMessage>*/}
            {/*loading && <LoadingMessage>Connexion en cours...</LoadingMessage>*/}

            <p>s'inscrire</p>
        </form>
    );
}

export default Login;