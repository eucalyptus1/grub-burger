import React from "react";
import { Link } from 'react-router-dom';
import '../../index.css';

function Nav() {
    return (
        <header>
            <h1>
                <a href="/home">Grub Burger</a>
                </h1>
            <nav>
                <ul className="flex-row">
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;