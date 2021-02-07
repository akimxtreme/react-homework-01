import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import './header.styles.scss';

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/'>Inicio</Link>
            <Link className='option' to='/living-beings'>Reino Animal</Link>
            { currentUser ? (
                <Link className='option' to='/'>Cerrar Sesión</Link>
            ) : (
                <Link className='option' to='/'>Login</Link>
            ) }
        </div>
    </div>
);

export default Header;