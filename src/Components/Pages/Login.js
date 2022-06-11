import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const googleSingIn =() =>{
        signInWithGoogle()
    }
    return (
        <div className='w-50 mx-auto my-5'>
            <div class="card">
            <div class="card-header">
                Featured
            </div>
            <div class="card-body mx-auto">
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