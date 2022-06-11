import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate()

    const navigateToHome = () =>{
        navigate('/')
    }
    return (
        <div>
            <h1 className='text-center text-danger'>404</h1>
            <p className='text-center text-secondary'>The Page is Missing</p>
            <button type="button" class="btn btn-dark mx-auto" onClick={navigateToHome}>GO Home</button>
        </div>
    );
};

export default NotFound;