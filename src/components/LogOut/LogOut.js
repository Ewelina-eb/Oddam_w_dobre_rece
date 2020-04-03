import React from 'react';
import { Link } from 'react-router-dom';
import HomeHeader from '../Home/HomeHeader';
import Decoration from '../../assets/Decoration.svg';

const LogOut = () => (
    <>
        <section className="logOut">
            <div className="header-container">
                <HomeHeader />
            </div>
            <div className="logOut-container">
                <div className="title-container">
                    <h3>Wylogowanie nastąpiło <br /> pomyślnie!</h3>
                    <div className="decoration">
                        <img src={Decoration} alt=""></img>
                    </div>
                </div>
                <Link className="mainPage-btn" to="/"><button className="btn">Strona główna</button></Link>
            </div>
        </section>
    </>
);

export default LogOut;