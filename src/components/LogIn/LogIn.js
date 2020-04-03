import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeHeader from '../Home/HomeHeader';
import Decoration from '../../assets/Decoration.svg';

function regexTest(form) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(form);
}

const validateEmail = form => {
    if (!regexTest(form.email)) {
        return "Podany email jest nieprawidłowy";
    };
    return null;
};

const validatePassword = form => {
    if (form.password.length < 6) {
        return "Podane hasło jest za krótkie";
    };
    return null;
};

const LogIn = () => {

    const [errorEmail, setErrorEmail] = useState(null);
    const [errorPassword, setErrorPassword] = useState(null);
    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const updateField = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errorMsgEmail = validateEmail(form);
        const errorMsgPassword = validatePassword(form);

        if (errorMsgEmail) {
            setErrorEmail(errorMsgEmail);
            return;
        };
        setErrorEmail(null);

        if (errorMsgPassword) {
            setErrorPassword(errorMsgPassword);
            return;
        };
        setErrorPassword(null);
    };

    return (
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
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="form-inputs">
                            <label className="form-email">
                                Email
                    <input type="email" name="email" onChange={updateField} />
                                {errorEmail && <h6 className="error-msg">{errorEmail}</h6>}
                            </label>
                            <label className="form-password">
                                Hasło
                    <input type="password" name="password" onChange={updateField} />
                                {errorPassword && <h6 className="error-msg">{errorPassword}</h6>}
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
}

export default LogIn;