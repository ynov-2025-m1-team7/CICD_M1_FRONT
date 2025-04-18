import Input from "../Input";

const InscriptionForm = () => {
    return (
        <form>
            <Input
                name="users"
                type="text"
                label="Nom d'utilisateur"
                placeholder="Nom d'utilisateur"
                value={""}
                onChange={()=> {}}
            />
            <Input
                name="email"
                type="email"
                label="Email"
                placeholder="Email"
                value={""}
                onChange={() => {}}
            />
            <Input
                name="password"
                type="password"
                label="Mot de passe"
                placeholder="Mot de passe"
                value={""}
                onChange={() => {}}
            />
            <Input
                name="confirm_password"
                type="password"
                label="Confirmer le mot de passe"
                placeholder="Confirmer le mot de passe"
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

export default InscriptionForm;