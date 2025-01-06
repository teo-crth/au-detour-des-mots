import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom'; // Assurez-vous d'utiliser 'react-router-dom' pour React Router v6
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMoon } from '@fortawesome/free-solid-svg-icons';
import BurgerMenu from '../ui/burgerMenu/BurgerMenu';
import { AppContext } from '../../context/context';
import logo from '../../../public/assets/images/logo-table.webp';

const Header = () => {
    // Etat pour gérer l'ouverture du menu burger
    const { menuOpen, setMenuOpen } = useContext(AppContext);
    const { isDarkMode, toggleTheme } = useContext(AppContext);
    // Fonction pour alterner l'état du menu burger
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header>
            <NavLink to="/au-detour-des-mots" className={({ isActive }) => isActive ? 'active' : ''}><img src={logo} alt="Logo table avec des livres" /></NavLink>
                <nav className="nav-desktop">
                    <NavLink to="/au-detour-des-mots" className={({ isActive }) => isActive ? 'active' : ''}>Accueil</NavLink>
                    <NavLink to="/au-detour-des-mots/mes-livres" className={({ isActive }) => isActive ? 'active' : ''}>Mes livres</NavLink>
                    <NavLink to="/au-detour-des-mots/recherche" className={({ isActive }) => isActive ? 'active' : ''}>Recherche</NavLink>
                    <FontAwesomeIcon className="dark-mode-icon" icon={faMoon} onClick={toggleTheme}/>
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
