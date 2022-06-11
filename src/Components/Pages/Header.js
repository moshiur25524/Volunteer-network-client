import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <Link class="navbar-brand" to="#">Navbar</Link>
                <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24"/>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="#">Features</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="#">Pricing</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;