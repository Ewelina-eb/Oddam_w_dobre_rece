import React from 'react';

const Fundations = () => (
    <>
        <section className="organizations">
            <div className="organization-desc">
                <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
            </div>
            <div className="organizations-list">
                <div className="organization">
                    <div className="info">
                        <h4>Fundacja “Dbam o Zdrowie”</h4>
                        <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                    </div>
                    <div className="details">
                        <p>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                    </div>
                </div>
                < hr />
                <div className="organization">
                    <div className="info">
                        <h4>Fundacja “Dla dzieci”</h4>
                        <p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                    </div>
                    <div className="details">
                        <p>ubrania, meble, zabawki</p>
                    </div>
                </div>
                < hr />
                <div className="organization">
                    <div className="info">
                        <h4>Fundacja “Bez domu”</h4>
                        <p>Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</p>
                    </div>
                    <div className="details">
                        <p>ubrania, jedzenie, ciepłe koce</p>
                    </div>
                </div>
            </div>

        </section>
    </>
)

export default Fundations;