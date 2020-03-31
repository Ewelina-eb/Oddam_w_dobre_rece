import React from 'react';
import { Link } from 'react-router-dom';
import HomeHeader from '../Home/HomeHeader';
import Decoration from '../../assets/Decoration.svg';

const Register = () => (
    <>
        <section className="register">
            <div className="header-container">
                <HomeHeader />
            </div>
            <div className="register-container">
                <div className="title-container">
                    <h3>Załóż konto</h3>
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
                        <label className="form-password">
                            Powtórz hasło
                    <input type="password" name="password" />
                        </label>
                    </div>
                    <div className="form-buttons">
                        <Link className="form-login-btn" to="/logowanie"><button className="btn">Zaloguj się</button></Link>
                        <button className="form-register-btn btn">Załóż konto</button>
                    </div>
                </form>
            </div>
        </section>
    </>
);

export default Register;