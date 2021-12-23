import React, { useEffect, useState } from "react";
import { useLocation } from "wouter";
import useUser from "../../hooks/useUser";

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [, navigate] = useLocation();
    const { login, isLogged } = useUser();

    useEffect(() => {
        if (isLogged) navigate('/')
    }, [isLogged, navigate])

    const handleSubmit = (e) => {
        e.preventDefault();
        login()

    }
    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="username"
                onChange={e => setUsername(e.target.value)}
                value={username} />
            <input type='password'
                onChange={e => setPassword(e.target.value)}
                placeholder="password"
                value={password} />
            <button>Login</button>
        </form>
    )
}