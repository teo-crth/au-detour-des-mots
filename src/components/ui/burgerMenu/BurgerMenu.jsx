import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './BurgerMenu.css';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from '../../../context/context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMoon } from '@fortawesome/free-solid-svg-icons';

const BurgerMenu = () => {
    const { menuOpen, setMenuOpen, isDarkMode, toggleTheme } = useContext(AppContext);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLink = () => {
        setMenuOpen(false);
    };

    return (
        <div className='container-burgerMenu'>
            <div className="container-close-icon" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faXmark} />
            </div>
            <nav className='nav-mobile'>
                <NavLink to="/au-detour-des-mots" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleLink}>Accueil</NavLink>
                <NavLink to="/au-detour-des-mots/mes-livres" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleLink}>Mes livres</NavLink>
                <NavLink to="/au-detour-des-mots/recherche" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleLink}>Recherche</NavLink>
                <FontAwesomeIcon className="dark-mode-icon" icon={faMoon} onClick={toggleTheme} />
            </nav>
        </div>
    );
};

export default BurgerMenu;