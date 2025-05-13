import React from 'react'
import './app.css';
import Navbar from './componentes/Navbar/Navbar';
import Main from './componentes/Main/Main';
import Footer from './componentes/Footer/Footer';
import Home from './componentes/Home/Home';

export const App = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    </>
 )
}

export default App