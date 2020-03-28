import React from 'react';
import HomeHeader from './HomeHeader';
import { Link } from 'react-router-dom';
import Decoration from '../../assets/Decoration.svg';

const HomeMain = () => (
    <>
        <header className="home-main">
            <HomeHeader />
            <div className="main-image"></div>
            <section className="main-content">
                <div className="main-container">
                    <h2>Zacznij pomagać! <br />
                    Oddaj niechciane rzeczy w zaufane ręce</h2>
                    <div className="main-content-decoration">
                        <img src={Decoration} alt=""></img>
                    </div>
                    <div className="main-content-buttons">
                        <Link className="main-button" to="/logowanie"><button className="btn">Oddaj <br /> rzeczy</button></Link>
                        <Link className="main-button" to="/logowanie"><button className="btn">Zorganizuj <br /> zbiórkę</button></Link>
                    </div>
                </div>
            </section>
        </header>
    </>
);

export default HomeMain;