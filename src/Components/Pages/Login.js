import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import '../Styles/Login.css'

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    const location = useLocation()

    let from = location.state?.from?.pathname || "/";

    const googleSingIn = () => {
        signInWithGoogle()
            .then(() => {
                navigate(from, { replace: true });
            })
    }
    return (
        <div className='w-50 mx-auto my-5 '>
            <div class="card cardInfo">
                <div class="card-header">
                    Featured
                </div>
                <div class="card-body d-flex justify-content-center flex-column align-items-center">
                    <h5 class="card-title">Login With</h5>

                    <div className='d-grid gap-2 col-6 '>
                        <button type="button" class="btn btn-outline-info" onClick={googleSingIn}>Google Signin</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;