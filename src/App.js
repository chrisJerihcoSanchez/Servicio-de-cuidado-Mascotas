import React from 'react';
import './app.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './componentes/Navbar/Navbar';
import Main from './componentes/Main/Main';
import Footer from './componentes/Footer/Footer';
import Home from './componentes/Home/Home';
import PackagesPage from './packages/Packages'; // ← Importar desde src/packages

export const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <Main />
            <Footer />
          </>
        } />
        <Route path="/packages" element={
          <>
            <PackagesPage />
            <Footer />
          </>
        } />
      </Routes>
    </Router>
  );
};

export default App;
