import React from "react";
import { useRoute, Link } from "wouter";
import useUser from "../../hooks/useUser";
import "./index.css";

export default function Header() {
  const { isLogged, logout } = useUser();
  const [match] = useRoute("/login");

  const handleClick = (e) => {
    e.preventDefault();
    logout();
  };

  const renderLoginButtons = ({ isLogged }) => {
    return isLogged ? (
      <Link to="#" onClick={handleClick}>
        Cerrar sesión
      </Link>
    ) : (
      <Link to="/login">Iniciar sesión</Link>
    );
  };

  const content = match ? null : renderLoginButtons({ isLogged });

  return <header className="gif-header">{content}</header>;
}
