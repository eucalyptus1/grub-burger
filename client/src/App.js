import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Nav from './components/Nav';
import Menu from './components/Menu/index';
import About from './components/About';
import Staff from './components/Staff';
import Login from './components/Login';
import Cart from './components/Cart';
import Appetizers from './components/Menu/Appetizers';
import Entrees from './components/Menu/Entrees';
import Desserts from './components/Menu/Desserts';
import Drinks from './components/Menu/Drinks';

const App = () => {
    return (
      <Router>
        <div>
          <Nav />
          <div>
            <Routes>
              <Route
                path="/home"
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
              <Route
                path="/menu"
                element={<Menu />}
              />
              <Route
                path="/appetizers"
                element={<Appetizers />}
              />
              <Route
                path="/entrees"
                element={<Entrees />}
              />
              <Route
                path="/desserts"
                element={<Desserts />}
              />
              <Route
                path="/drinks"
                element={<Drinks />}
              />
            </Routes>
          </div>
        </div>
      </Router>
    );
}


export default App;
