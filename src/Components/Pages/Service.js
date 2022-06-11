import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { img, name } = service;
    return (
        <Link to={'/register'}>
            <div class="card" style={{width:'18rem'}}>
                <img src={img} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <p class="card-text">{name}</p>
                    </div>
            </div>
        </Link>
    );
};

export default Service;