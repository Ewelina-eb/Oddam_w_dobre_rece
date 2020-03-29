import React from 'react';
import { Link } from 'react-scroll';

const HomeHeaderNav = () => (
    <>
            <nav className="header-nav">
                <ul>
                    <li><Link to="/" spy={true} offset={0} smooth={true} duration={500}>Start</Link></li>
                    <li><Link to="simple-steps" spy={true} offset={-45} smooth={true} duration={500}>O co chodzi?</Link></li>
                    <li><Link to="about-us" spy={true} offset={0} smooth={true} duration={500}>O nas</Link></li>
                    <li><Link to="HomeWhoWeHelp" spy={true} offset={0} smooth={true} duration={500}>Fundacje i organizacje</Link></li>
                    <li><Link to="HomeContact" spy={true} offset={0} smooth={true} duration={500}>Kontakt</Link></li>
                </ul>
            </nav>
    </>
);

export default HomeHeaderNav;