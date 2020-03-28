import React from 'react';
import { Link } from 'react-scroll';

const HomeHeaderNav = () => (
    <>
            <nav className="header-nav">
                <ul>
                    <li><Link to="/" spy={true} smooth={true} duration={500}>Start</Link></li>
                    <li><Link to="HomeSimpleSteps" spy={true} smooth={true} duration={500}>O co chodzi?</Link></li>
                    <li><Link to="HomeAboutUs" spy={true} smooth={true} duration={500}>O nas</Link></li>
                    <li><Link to="HomeWhoWeHelp" spy={true} smooth={true} duration={500}>Fundacje i organizacje</Link></li>
                    <li><Link to="HomeContact" spy={true} smooth={true} duration={500}>Kontakt</Link></li>
                </ul>
            </nav>
    </>
);

export default HomeHeaderNav;