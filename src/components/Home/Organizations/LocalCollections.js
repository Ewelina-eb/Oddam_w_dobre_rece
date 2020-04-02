import React from 'react';
import Pagination from './Pagination';

const LocalCollections = () => (
    <>
        <section className="organizations">
            <div className="organization-desc">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            </div>
            <div className="organizations-list">
                <div className="organization">
                    <div className="info">
                        <h4>Zbiórka “Lorem Ipsum 1”</h4>
                        <p>Quis varius quam quisque id diam vel quam elementum pulvinar.</p>
                    </div>
                    <div className="details">
                        <p>Egestas, sed, tempus</p>
                    </div>
                </div>
                <div className="organization">
                    <div className="info">
                        <h4>Zbiórka “Lorem Ipsum 2”</h4>
                        <p>Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.</p>
                    </div>
                    <div className="details">
                        <p>Ut, aliquam, purus, sit, amet</p>
                    </div>
                </div>
                <div className="organization">
                    <div className="info">
                        <h4>Zbiórka “Lorem Ipsum 3”</h4>
                        <p>Scelerisque in dictum non consectetur a erat nam.</p>
                    </div>
                    <div className="details">
                        <p>Mi, quis, hendrerit, dolor</p>
                    </div>
                </div>
            </div>
            <Pagination />
        </section>
    </>
)

export default LocalCollections;