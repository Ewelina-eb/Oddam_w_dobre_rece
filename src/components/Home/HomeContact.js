import React from 'react';
import HomeFooter from '../Home/HomeFooter';
import Decoration from '../../assets/Decoration.svg';

const HomeContact = () => (
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
                    <form className="form">
                        <div className="inputs-container">
                            <label className="form-name">
                                Wpisz swoje imię
                    <input type="text" name="name" placeholder="Krzysztof" />
                            </label>
                            <label className="form-email">
                                Wpisz swój email
                    <input type="email" name="emain" placeholder="abc@xyz.pl" />
                            </label>
                        </div>
                        <label className="form-message">
                            Wpisz swoją wiadomość
                    <textarea type="text" name="message" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
                        </label>
                        <input className="form-btn" type="submit" value="Wyślij" />
                    </form>
                </div>
                <HomeFooter />
            </div>
        </section>
    </>
);

export default HomeContact;