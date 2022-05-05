import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home';

import Nav from './components/Nav';
import About from './components/About';
import Staff from './components/Staff';
import Login from './components/Login';
import Cart from './components/Cart';

const App = () => {
    return (
      <Router>
        <div>
          <Nav />
          <div>
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
              <Route
                path="/about"
                element={<About />}
              />
              <Route
                path="/staff"
                element={<Staff />}
              />
              <Route
                path="/login"
                element={<Login />}
              />
              <Route
                path="/cart"
                element={<Cart />}
              />
            </Routes>
          </div>
        </div>
      </Router>
    );
}


export default App;
