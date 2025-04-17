'use client';
import { useActionState, useEffect } from "react";
import Link from "next/link";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Notification from "@/components/Notification";
import { login } from "@/actions/auth";

const initialState = {
    message: ""
}

const Login = () => {
    const [state, formAction, pending] = useActionState(login, initialState);
    useEffect(() => {
        if (state?.success && state.redirect) {
            window.location.href = state.redirect;
        }
    }, [state]);
    return (
        <form action={formAction}>
            <Input label="email" name="email" />
            <Input label="password" name="password" type="password" />
            <Button
                classes="btn__primary"
                label={pending ? "loading..." : "login"}
                type="submit"
                disabled={pending}
            />
            {state?.message && <Notification message={state.message} type={state.success ? "success" : "error"} />}
            <p className="my__10">
                Vous n'avez pas de compte ? <Link href="/auth/register">Inscrivez-vous</Link>
            </p>
        </form>
    )
}

export default Login;