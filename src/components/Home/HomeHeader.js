import React from 'react';
import { Link } from 'react-router-dom';
import HomeHeaderNav from './HomeHeaderNav';

const HomeHeader = () => (
    <>
        <header className="home-header">
            <div className="header-autorization">
                <ul>
                    <li><Link className="login-btn" to="/logowanie">Zaloguj</Link></li>
                    <li><Link className="register-btn" to="/rejestracja">Załóż konto</Link></li>
                </ul>
            </div>
            <HomeHeaderNav />
        </header>
    </>
);

export default HomeHeader;