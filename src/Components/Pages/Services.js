import React, { useEffect, useState } from 'react';
import Service from './Service';
import '../Styles/Services.css'

const Services = () => {

    const [services, setServices] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data.slice(0, 6)))
    },[])
    return (
        <div className='text-center'>
            <h1>Here are all services:{services.length}</h1>
            <div className='services'>
                {
                    services.map(service=> <Service
                    key={service._id}
                    service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;