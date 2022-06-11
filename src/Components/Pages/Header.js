import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';


const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <Link to='/'>
                    <img src='https://i.ibb.co/KGHvHbq/Group-1329.png' alt="" width={200} height={60} />
                </Link>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/donation">Donation</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/events">Events</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/blogs">Blog</Link>
                        </li>
                        <li class="nav-item">
                            {
                                user ?
                                    <button type="button" class="btn btn-danger" onClick={() => { signOut(auth); }}>SIGNOUT</button>

                                    :
                                    <Link class="nav-link" to="/login">
                                        <button type="button" class="btn btn-primary">Login</button>
                                    </Link>
                            }
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/register">
                                <button type="button" class="btn btn-primary">Register</button>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/admin">
                                <button type="button" class="btn btn-dark">Admin</button>
                            </Link>
                        </li>
                        <li class="nav-item">
                            {
                                user && <p>{user.displayName}</p>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;