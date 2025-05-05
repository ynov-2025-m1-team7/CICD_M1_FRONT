import { useEffect } from "react";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";


const GoogleLogin = () => {
    const navigate = useNavigate();

  useEffect(() => {
    /* Charger le script Google Identity */
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.google.accounts.id.initialize({
        client_id: process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID,
        callback: handleCredentialResponse,
      });

      window.google.accounts.id.renderButton(
        document.getElementById("google-signin-button"),
        {
          theme: "outline",
          size: "large",
        }
      );

      // Optionnel : login automatique
      // window.google.accounts.id.prompt();
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleCredentialResponse = (response) => {
    Cookies.set('jwt_token', response.credential, {
        expires: 7, // en jours
        secure: true, // recommandé en production (HTTPS)
        sameSite: 'Strict', // ou 'Lax', selon le contexte
    });

    navigate("/");
  };

  const parseJwt = (token) => {
    const base64Url = token.split('.')[1];
    const base64 = atob(base64Url);
    return JSON.parse(base64);
  };

  return (
    <div>
      {/* <h2>Connexion avec Google</h2> */}
      <div id="google-signin-button"></div>
    </div>
  );
};

export default GoogleLogin;
