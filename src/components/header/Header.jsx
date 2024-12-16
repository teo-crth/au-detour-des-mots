import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
            <header>
                <h1>Au détour des mots</h1>
                <nav>
                    <NavLink to="/" activeClassName="active">Accueil</NavLink>
                    <NavLink to="/mes-livres" activeClassName="active">Mes livres</NavLink>
                    <NavLink to="/recherche" activeClassName="active">Recherche</NavLink>
                </nav>
            </header>
    );
};

export default Header;