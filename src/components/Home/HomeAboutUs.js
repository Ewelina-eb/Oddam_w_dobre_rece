import React from 'react';
import Decoration from '../../assets/Decoration.svg';
import Signature from '../../assets/Signature.svg';

const HomeAboutUs = () => (
    <>
        <section className="about-us" id="about-us">
            <div className="about-us-content">
                <h3>O nas</h3>
                <div className="decoration">
                    <img src={Decoration} alt=""></img>
                </div>
                <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <div className="signature">
                    <img src={Signature} alt=""></img>
                </div>
            </div>
            <div className="about-us-image"></div>
        </section>
    </>
);

export default HomeAboutUs;