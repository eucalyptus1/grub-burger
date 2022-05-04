import React, { useState } from 'react';

import '../../index.css';

import Nav from '../Nav';
// import MenuNav from '../MenuNav';
import About from '../About';
import Staff from '../Staff';
import Login from '../Login';
import Cart from '../Cart';

function Home() {

    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
          return <Home />;
        }
        if (currentPage === 'About') {
          return <About />;
        }
        if (currentPage === 'Staff') {
          return <Staff />;
        }
        if (currentPage === 'Login') {
          return <Login />;
        }
        return <Cart />;
      };


      const handlePageChange = (currentPage) => setCurrentPage(currentPage);


  return (
      <div>
          <h1>Grub Burger</h1>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        <div>
            {renderPage()}
        </div>
      </div>
  );
}

export default Home;