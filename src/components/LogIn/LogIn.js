import React from 'react';
import { Link } from 'react-router-dom';
import HomeHeader from '../Home/HomeHeader';
import Decoration from '../../assets/Decoration.svg';

const LogIn = () => (
    <>
        <section className="logIn">
            <div className="header-container">
                <HomeHeader />
            </div>
            <div className="logIn-container">
                <div className="title-container">
                    <h3>Zaloguj się</h3>
                    <div className="decoration">
                        <img src={Decoration} alt=""></img>
                    </div>
                </div>
                <form className="form">
                    <div className="form-inputs">
                        <label className="form-email">
                            Email
                    <input type="email" name="email" />
                        </label>
                        <label className="form-password">
                            Hasło
                    <input type="password" name="password" />
                        </label>
                    </div>
                    <div className="form-buttons">
                        <Link className="form-register-btn" to="/rejestracja"><button className="btn">Załóż konto</button></Link>
                        <button className="form-logIn-btn btn">Zaloguj się</button>
                    </div>
                </form>
            </div>
        </section>
    </>
);

export default LogIn;