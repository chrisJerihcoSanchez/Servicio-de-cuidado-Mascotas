import React, { useState } from 'react';
import './navbar.scss';
import { PiDogFill } from "react-icons/pi";
import { IoMdCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import { Link } from 'react-router-dom'; // 👈 Importamos Link

export const Navbar = () => {
  const [active, setActive] = useState('navBar');

  const showNav = () => {
    setActive('navBar activeNavbar');
  };

  const removeNavbar = () => {
    setActive('navBar');
  };

  return (
    <section className='navBarSection'>
      <header className='header flex'>
        <div className="logoDiv">
          <Link to="/" className='logo flex'>
            <h1><PiDogFill className="icon" /> Huellitas y Bigotes.</h1>
          </Link>
        </div>

        <div className={active}>
          <ul className="navLists flex">

            <li className="navItem">
              <Link to="/" className='navLink'>HOME</Link>
            </li>

            <li className="navItem">
              <Link to="/packages" className="navLink">Packages</Link>
            </li>

            <li className="navItem">
              <Link to="/shop" className='navLink'>Shop</Link>
            </li>

            <li className="navItem">
              <Link to="/about" className='navLink'>About</Link>
            </li>

            <li className="navItem">
              <Link to="/pages" className='navLink'>Pages</Link>
            </li>

            <li className="navItem">
              <Link to="/news" className='navLink'>News</Link>
            </li>

            <li className="navItem">
              <Link to="/contact" className='navLink'>Contact</Link>
            </li>

            <button className='btn'>
              <Link to="/booking">BOOK NOW</Link>
            </button>
          </ul>

          <div onClick={removeNavbar} className="closeNavbar">
            <IoMdCloseCircle className="icon" />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className='icon' />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
