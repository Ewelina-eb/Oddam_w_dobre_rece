import React from 'react';
import { Link } from 'react-router-dom';
// import * as Scroll from 'react-scroll';
// import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import HomeHeaderNav from './HomeHeaderNav';

const HomeHeader = () => (
    <>
        <header className="home-header">
            <div className="header-autorization">
                <ul>
                    <li><Link to="/logowanie">Zaloguj</Link></li>
                    <li><Link to="/rejestracja">Załóż konto</Link></li>
                </ul>
            </div>
            <HomeHeaderNav />
        </header>
    </>
);

export default HomeHeader;