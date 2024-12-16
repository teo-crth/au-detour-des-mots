import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header>
                <h1>Au détour des mots</h1>
                <nav>
                    <ul>
                        <li>
                            <a href="#">Accueil</a>
                        </li>
                        <li>
                            <a href="#">Mes livres</a>
                        </li>
                        <li>
                            <a href="#">Recherche</a>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;