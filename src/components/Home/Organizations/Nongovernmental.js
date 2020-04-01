import React from 'react';
import nongovernmentalData from './nongovernmental-data';
import Pagination from './Pagination';

const Nongovernmental = () => {
    const [items] = useState(nongovernmentalData);
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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
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
    )
}

export default Nongovernmental;