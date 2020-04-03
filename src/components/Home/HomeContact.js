import React, { useState } from 'react';
import HomeFooter from '../Home/HomeFooter';
import Decoration from '../../assets/Decoration.svg';
// import Axios from 'axios';

function regexTest(form) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(form);
  }

const validateName = form => {
    if (form.name.length < 2 || form.name.includes(" ")) {
        return "Podane imię jest nieprawidłowe";
    };
    return null;
};

const validateEmail = form => {
    if (!regexTest(form.email)) {
        return "Podany email jest nieprawidłowy";
    };
    return null;
};

const validateMessage = form => {
    if (form.message.length < 120) {
        return "Wiadomość musi mieć co najmniej 120 znaków";
    };
    return null;
};

const HomeContact = () => {
    const [errorName, setErrorName] = useState(null);
    const [errorEmail, setErrorEmail] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    const updateField = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errorMsgName = validateName(form);
        const errorMsgEmail = validateEmail(form);
        const errorMsgMessage = validateMessage(form);

        if (errorMsgName) {
            setErrorName(errorMsgName);
            return;
        };
        setErrorName(null);

        if (errorMsgEmail) {
            setErrorEmail(errorMsgEmail);
            return;
        };
        setErrorEmail(null);

        if (errorMsgMessage) {
            setErrorMessage(errorMsgMessage);
            return;
        };
        setErrorMessage(null);
    };

    return (
        <>
            <section className="home-contact" id="contact">
                <div className="contact-background">
                    <div className="contact-form">
                        <div className="title-container">
                            <h3>Skontaktuj się z nami</h3>
                            <div className="decoration">
                                <img src={Decoration} alt=""></img>
                            </div>
                        </div>
                        <form className="form" onSubmit={handleSubmit}>
                            <div className="inputs-container">
                                <label className="form-name">
                                    Wpisz swoje imię
                    <input type="text" name="name" placeholder="Krzysztof" onChange={updateField} />
                                    {errorName && <h6 className="error-msg">{errorName}</h6>}
                                </label>
                                <label className="form-email">
                                    Wpisz swój email
                    <input type="email" name="email" placeholder="abc@xyz.pl" onChange={updateField} />
                                    {errorEmail && <h6 className="error-msg">{errorEmail}</h6>}
                                </label>
                            </div>
                            <label className="form-message">
                                Wpisz swoją wiadomość
                    <textarea type="text" name="message" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." onChange={updateField} />
                                {errorMessage && <h6 className="error-msg">{errorMessage}</h6>}
                            </label>
                            <input className="form-btn" type="submit" value="Wyślij" />
                        </form>
                    </div>
                    <HomeFooter />
                </div>
            </section>
        </>
    );
}

export default HomeContact;