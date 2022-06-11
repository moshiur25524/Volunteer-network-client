import React from 'react';

const Service = ({service}) => {
    const {img, name} = service;
    return (
        <div>
            <p>Name: {name}</p>
        </div>
    );
};

export default Service;