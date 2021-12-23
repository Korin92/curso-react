import React from 'react';
import { Link } from 'wouter';
import useUser from '../../hooks/useUser';
import './index.css';

export default function Header() {

    const {isLogged, logout} = useUser();
    const handleClick = e =>{
        e.preventDefault()
        logout()
    }
    return (
        <header className='gif-header'>
            {
                isLogged
                    ? <Link to='#' onClick={handleClick}>
                        Logout
                    </Link>
                    : <Link to='/login'>
                        Login
                    </Link>
            }

        </header>
    )
}