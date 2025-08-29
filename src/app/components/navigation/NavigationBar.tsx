import React from 'react';
import { Link } from 'react-router-dom';
import { Routes } from '../../router/routes';
import './NavigationBar.scss';

export const NavigationBar: React.FC = () => {
    return (
        <nav className="navigation-bar">
            <div className="nav-container">
                <div className="nav-brand">
                    <Link to={Routes.HOME} className="brand-link">
                        <h2>ICCC</h2>
                    </Link>
                </div>
                
                <div className="nav-links">
                    <Link to={Routes.HOME} className="nav-link">
                        Home
                    </Link>
                    <Link to={Routes.ABOUT} className="nav-link">
                        About
                    </Link>
                    <Link to={Routes.CONTACT} className="nav-link">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
};