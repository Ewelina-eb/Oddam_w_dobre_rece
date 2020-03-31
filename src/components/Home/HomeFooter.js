import React from 'react';
import Facebook from '../../assets/Facebook.svg';
import Instagram from '../../assets/Instagram.svg';

const HomeFooter = () => (
    <>
    <footer className="home-footer">
        <div className="copyright">
            <h5>Copyright by Coders Lab</h5>
        </div>
        <div className="social-media">
            <a href="">
                <img src={Facebook} alt=""></img>
            </a>
            <a href="">
                <img src={Instagram} alt=""></img>
            </a>
        </div>
    </footer>
    </>
);

export default HomeFooter;