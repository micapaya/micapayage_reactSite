import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = (props) => {
    return (
        <div>
            <div className="navigation">
                <ul>
                    <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")} title="Retour à l'accueil">
                        <li className="menuItem">Home</li>
                    </NavLink>
                    <NavLink to="/contact" className={(nav) => (nav.isActive ? "nav-active" : "")} title="si tu veux me contacter click ici">
                        <li className="menuItem">contact</li>
                    </NavLink>
                    <NavLink to="/galerie" className={(nav) => (nav.isActive ? "nav-active" : "")} title="va voir mon travail c'est beau">
                        <li className="menuItem">galeries</li>
                    </NavLink>
                </ul>
            </div>
            
        </div>
    );
};

export default Nav;