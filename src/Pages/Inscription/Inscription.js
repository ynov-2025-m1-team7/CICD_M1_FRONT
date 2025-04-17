'use client';
import Link from "next/link";
import { useActionState, useEffect } from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Notification from "@/components/Notification";
import {register} from "@/actions/auth";

const initialState = {
    message: "",
}
const Inscription = () => {

    const [state, formAction, pending] = useActionState(register, initialState);
    console.log(state);

    useEffect(() => {
        if (state?.success && state.redirect) {
            window.location.href=state.redirect;
            //similaire:  router.push(state.redirect);
        }
    }, [state]);

    return (
        <form action={formAction}>
            <Input
                type="text"
                required={true}
                label="first name"
                name="firstName" />
            <Input
                type="text"
                label="last name"
                name="lastName" />
            <Input
                type="email"
                label="email"
                name="email" />
            <Input
                type="password"
                label="password" name="password"
            />
            <Button
                type="submit"
                classes="btn__primary"
                disabled={pending}
                label={pending ? "loading..." : "register"} />
            <p className="my__10">
                Vous avez déjà un compte ? <Link href="/auth/login">Connectez-vous</Link>
            </p>
            {state?.message && <Notification message={state.message} type={state.success ? "success" : "error"} />}
        </form>
    )
}

export default Inscription;