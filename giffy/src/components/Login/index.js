import React, { useEffect, useState } from "react";
import { useLocation } from "wouter";
import useUser from "../../hooks/useUser";
import "./Login.css";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [, navigate] = useLocation();
  const { isLoginLoading, hasLoginError, login, isLogged } = useUser();

  useEffect(() => {
    if (isLogged) {
      navigate("/");
      onLogin && onLogin();
    }
  }, [isLogged, navigate, onLogin]);

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username, password });
  };

  return (
    <>
      <div className="div-form">
        {isLoginLoading && <strong>Comprobando credenciales...</strong>}
        {!isLoginLoading && (
          <form className="form" onSubmit={handleSubmit}>
            <label>
              Nombre de usuario
              <input
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </label>

            <label>
              Constraseña
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
                value={password}
              />
            </label>

            <button className="btn">Entrar</button>
          </form>
        )}
        {hasLoginError && <strong>Credenciales inválidas</strong>}
      </div>
    </>
  );
}
