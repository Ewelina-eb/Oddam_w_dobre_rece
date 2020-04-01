import React from 'react';

const Items = ({ items, loading }) => {
    if (loading) {
        return <h2>Loading..</h2>;
    };
    return (
        <div className="organizations-list">
            {items.map(item => (
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
    );
};

export default Items;