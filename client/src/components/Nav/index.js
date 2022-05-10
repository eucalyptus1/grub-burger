import React from "react";
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <header>
            <h1>Grub Burger</h1>
            <nav>
            
                <ul className="flex-row">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;