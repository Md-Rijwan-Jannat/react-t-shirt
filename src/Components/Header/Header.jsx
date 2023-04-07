import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Header.css'
const Header = () => {

    return (
        <div className='header'>
            <Link to={'/'}>Home</Link>
            <Link to={'/review'}>Order review </Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/contact'}>Contact</Link>
        </div>
    );
};

export default Header;