import React, { useState, useEffect } from 'react';
import fundationsData from './fundations-data';
import Items from './Items';
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

    return (
        <>
            <section className="organizations">
                <div className="organization-desc">
                    <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
                </div>
                <Items items={currentItems} loading={loading} />
                <Pagination itemsPerPage={itemsPerPage} totalItems={items.length} paginate={paginate} />
            </section>
        </>
    );
};

export default Fundations;