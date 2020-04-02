import React, { useState } from 'react';
import Decoration from '../../assets/Decoration.svg';
import Fundations from './Organizations/Fundations';
import Nongovernmental from './Organizations/Nongovernmental';
import LocalCollections from './Organizations/LocalCollections';

const HomeWhoWeHelp = () => {
    const [organizations, setOrganizations] = useState("fundations");

    const chosenOrganization = () => {
        if (organizations === "nongovernmental") {
            return <Nongovernmental />;
        } else if (organizations === "localCollections") {
            return <LocalCollections />
        } else {
            return <Fundations />
        }
    };


    return (
        <>
            <section className="whoWeHelp" id="whoWeHelp">
                <div className="title-container">
                    <h3>Komu pomagamy?</h3>
                    <div className="decoration">
                        <img src={Decoration} alt=""></img>
                    </div>
                </div>
                <div className="whoWeHelp-buttons">
                    <div className="whoWeHelp-btn"><button onClick={() => setOrganizations("fundations")} className="btn" id="fundations-btn">Fundacjom</button></div>
                    <div className="whoWeHelp-btn"><button onClick={() => setOrganizations("nongovernmental")} className="btn" id="nongovernmental-btn">Organizacjom <br /> pozarządowym</button></div>
                    <div className="whoWeHelp-btn"><button onClick={() => setOrganizations("localCollections")} className="btn">Lokalnym <br /> zbiórkom</button></div>
                </div>
                {
                    chosenOrganization()
                }
            </section>
        </>
    );
}

export default HomeWhoWeHelp;