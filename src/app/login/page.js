"use client";
import Image from "next/image"
import { useState } from "react"
import { useSession, signIn, signOut } from "next-auth/react"

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginInProgress, setloginInProgress] = useState(false);
    async function handleFormSubmit(ev) {
        ev.preventDefault();
        setloginInProgress(true);

        await signIn('credentials', {email, password, callbackUrl:'/'});

        setloginInProgress(false);
    }
    return (
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl mb-4">
                Login
            </h1>
            <form className="max-w-xs mx-auto" onSubmit={handleFormSubmit}>
                <input type="email" placeholder="email" name="email" value={email}
                        disabled={loginInProgress}
                        onChange={ev => setEmail(ev.target.value)}
                />
                <input type="password" placeholder="password" name="password" value={password}
                        disabled={loginInProgress}
                        onChange={ev => setPassword(ev.target.value)}
                />
                <button disabled={loginInProgress} type="submit">Login</button>
                <div className="my-4 text-center text-gray-500">
                    or login with provider
                </div>
                <button onClick={() => signIn('google', {callbackUrl:'/'})}
                     className="flex gap-4 justify-center" >
                    <Image src={'/google.png'} width={24} height={24} alt="google"/>
                    Login with google
                </button>
            </form>
        </section>
    )
};
