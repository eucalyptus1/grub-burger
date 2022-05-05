import React from "react";
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <header>
            <h1>Grub Burger</h1>
            <nav>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/staff">Staff</Link>
            <Link to="/login">Login</Link>
            <Link to="/cart">Cart</Link>
            
                {/* <ul className="flex-row">
                    <li>
                        <a href="#Home">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#About">
                            About Us
                        </a>
                    </li>
                    <li>
                        <a href="#Staff">
                            Staff
                        </a>
                    </li>
                    <li>
                        <a href="#Login">
                            Login
                        </a>
                    </li>
                    <li>
                        <a href="#Cart">
                            Cart
                        </a>
                    </li>
                </ul> */}
            </nav>
        </header>
    );
}

export default Nav;