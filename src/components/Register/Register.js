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

const validateSecondPassword = form => {
    if (form.secondPassword.length < 6) {
        return "Podane hasło jest za krótkie";
    } else if (form.secondPassword !== form.password) {
        return "Podane hasła nie są identyczne";
    }
    return null;
};

const Register = () => {

    const [errorEmail, setErrorEmail] = useState(null);
    const [errorPassword, setErrorPassword] = useState(null);
    const [errorSecondPassword, setErrorSecondPassword] = useState(null);
    const [form, setForm] = useState({
        email: "",
        password: "",
        secondPassword: ""
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
        const errorMsgSecondPassword = validateSecondPassword(form);

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

        if (errorMsgSecondPassword) {
            setErrorSecondPassword(errorMsgSecondPassword);
            return;
        };
        setErrorSecondPassword(null);
    };

    return (
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
                            <label className="form-password">
                                Powtórz hasło
                    <input type="password" name="secondPassword" onChange={updateField} />
                                {errorSecondPassword && <h6 className="error-msg">{errorSecondPassword}</h6>}
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
}

export default Register;