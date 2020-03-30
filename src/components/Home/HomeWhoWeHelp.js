import React from 'react';
import { Link } from 'react-router-dom';
import Decoration from '../../assets/Decoration.svg';
import Fundations from './Organizations/Fundations';

const HomeWhoWeHelp = () => (
    <>
        <section className="whoWeHelp" id="whoWeHelp">
            <div className="title-container">
                <h3>Komu pomagamy?</h3>
                <div className="decoration">
                    <img src={Decoration} alt=""></img>
                </div>
            </div>
            <div className="whoWeHelp-buttons">
                <Link className="whoWeHelp-link" to="/logowanie"><button className="btn">Fundacjom</button></Link>
                <Link className="whoWeHelp-link" to="/logowanie"><button className="btn">Organizacjom <br /> pozarządowym</button></Link>
                <Link className="whoWeHelp-link" to="/logowanie"><button className="btn">Lokalnym <br /> zbiórkom</button></Link>
            </div>
            <Fundations />
        </section>
    </>
);

export default HomeWhoWeHelp;