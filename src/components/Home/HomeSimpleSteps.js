import React from 'react';
import { Link } from 'react-router-dom';
import Step1 from '../../assets/step1.png';
import Step2 from '../../assets/step2.png';
import Step3 from '../../assets/step3.png';
import Step4 from '../../assets/step4.png';
import Decoration from '../../assets/Decoration.svg';

const HomeSimpleSteps = () => (
    <>
        <section className="simple-steps">
            <div className="title-container">
                <h3>Wystarczą 4 proste kroki</h3>
                <div className="decoration">
                    <img src={Decoration} alt=""></img>
                </div>
            </div>
            <div className="steps-container">
                <div className="step">
                    <img src={Step1} alt=""></img>
                    <h4>Wybierz rzeczy</h4>
                    <div className="step-line">< hr /></div>
                    <p>ubrania, zabawki,<br />sprzęt i inne</p>
                </div>
                <div className="step">
                    <img src={Step2} alt=""></img>
                    <h4>Spakuj je</h4>
                    <div className="step-line">< hr /></div>
                    <p>skorzystaj z<br />worków na śmieci</p>
                </div>
                <div className="step">
                    <img src={Step3} alt=""></img>
                    <h4>Zdecyduj komu<br />chcesz pomóc</h4>
                    <div className="step-line">< hr /></div>
                    <p>wybierz zaufane<br />miejsce</p>
                </div>
                <div className="step">
                    <img src={Step4} alt=""></img>
                    <h4>Zamów kuriera</h4>
                    <div className="step-line">< hr /></div>
                    <p>kurier przyjedzie<br />w dogodnym terminie</p>
                </div>
            </div>
            <Link className="simple-steps-link" to="/logowanie"><button className="btn">Oddaj <br /> rzeczy</button></Link>
        </section>
    </>
);

export default HomeSimpleSteps;