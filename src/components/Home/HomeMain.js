import React from 'react';
import HomeHeader from './HomeHeader';
import { Link } from 'react-router-dom';

const HomeMain = () => (
    <>
        <div className="home-main">
            <HomeHeader />
            <div className="main-image">
                <img></img>
            </div>
            <div className="main-content">
                <h2>Zacznij pomagać! <br />
                    Oddaj niechciane rzeczy w zaufane ręce</h2>
                <div className="main-content-decoration"></div>
                <div className="main-content-buttons">
                    <Link to="/logowanie">Oddaj rzeczy</Link>
                    <Link to="/logowanie">Zorganizuj zbiórkę</Link>
                </div>
            </div>
        </div>
    </>
);

export default HomeMain;