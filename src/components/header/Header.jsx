import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom'; // Assurez-vous d'utiliser 'react-router-dom' pour React Router v6
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import BurgerMenu from '../ui/burgerMenu/BurgerMenu';
import { AppContext } from '../../context/context';

const Header = () => {
    // Etat pour gérer l'ouverture du menu burger
    const { menuOpen, setMenuOpen } = useContext(AppContext);
    // Fonction pour alterner l'état du menu burger
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header>
            <img src="/assets/img/logo-table.webp" alt="Logo table avec des livres" />
                <nav className="nav-desktop">
                    <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Accueil</NavLink>
                    <NavLink to="/mes-livres" className={({ isActive }) => isActive ? 'active' : ''}>Mes livres</NavLink>
                    <NavLink to="/recherche" className={({ isActive }) => isActive ? 'active' : ''}>Recherche</NavLink>
                </nav>
            <div className='container-burgerMenu-icon' onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} />
            </div>
            {menuOpen && (
                <BurgerMenu />
            )}
        </header>
    );
};

export default Header;
