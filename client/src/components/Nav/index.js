import React from "react";

function Nav( { currentPage, handlePageChange }) {
    return (
        <header>
            <nav>
                <ul className="flex-row">
                    <li>
                        <a href="#home" onClick={() => handlePageChange('home')}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#about" onClick={() => handlePageChange('about')}>
                            About Us
                        </a>
                    </li>
                    <li>
                        <a href="#staff" onClick={() => handlePageChange('staff')}>
                            Staff
                        </a>
                    </li>
                    <li>
                        <a href="#login" onClick={() => handlePageChange('login')}>
                            Login
                        </a>
                    </li>
                    <li>
                        <a href="#cart" onClick={() => handlePageChange('cart')}>
                            Cart
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;