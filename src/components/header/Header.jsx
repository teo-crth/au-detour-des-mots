import React from 'react';
import { NavLink } from 'react-router';
import './Header.css';

const Header = () => {
    return (
            <header>
                <img src="../../../public/assets/img/logo-table.webp" alt="logo table avec des livres" />
                <nav>
                    <NavLink to="/" activeClassName="active">Accueil</NavLink>
                    <NavLink to="/mes-livres" activeClassName="active">Mes livres</NavLink>
                    <NavLink to="/recherche" activeClassName="active">Recherche</NavLink>
                </nav>
            </header>
    );
};

export default Header;