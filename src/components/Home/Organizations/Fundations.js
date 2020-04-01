import React, { useState, useEffect } from 'react';
import fundationsData from './fundations-data';
import Pagination from './Pagination';

const Fundations = () => {
    const [items] = useState(fundationsData);
    const [loading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(3);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
    const paginate = pageNumber => setCurrentPage(pageNumber);

    if (loading) {
        return <h2>Loading..</h2>;
    };

    return (
        <>
            <section className="organizations">
                <div className="organization-desc">
                    <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
                </div>
                <div className="organizations-list">
                    {currentItems.map(item => (
                        <>
                            <div key={item.id} className="organization">
                                <div key={item.id} className="info">
                                    <h4 key={item.id}>{item.name}</h4>
                                    <p key={item.id}>{item.mission}</p>
                                </div>
                                <div key={item.id} className="details">
                                    <p key={item.id}>{item.details}</p>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
                <Pagination itemsPerPage={itemsPerPage} totalItems={items.length} paginate={paginate} />
            </section>
        </>
    );
};

export default Fundations;