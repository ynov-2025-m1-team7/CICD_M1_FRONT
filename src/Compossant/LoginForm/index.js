import Input from "../Input";

const LoginForm = () => {
    return (
        <form>
            <Input
                type="email"
                placeholder="Email"
                value={""}
                onChange={() => {}}
            />
            <Input
                type="password"
                placeholder="Password"
                value={""}
                onChange={() => {}}
            />
        <button type="submit" disabled={false}>
            {false ? 'Chargement...' : 'Login'}
        </button>

        {/*error && <ErrorMessage>{error}</ErrorMessage>*/}
        {/*loading && <LoadingMessage>Connexion en cours...</LoadingMessage>*/}

        <p>s'inscrire</p>
    </form>
    );
}

export default LoginForm;