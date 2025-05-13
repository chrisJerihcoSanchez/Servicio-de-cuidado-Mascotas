import React, {useState} from 'react';
import './navbar.scss';
import { PiDogFill } from "react-icons/pi";
import { IoMdCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";

export const Navbar = () => {
  const[active, setActive] = useState('navBar')
  const showNav = ()=>{
    setActive('navBar activeNavbar')
  }

  const removeNavbar = ()=>{
    setActive('navBar')
  }

  return (
    <section className='navBarSection'>
      <header className='header flex'>

        <div className="logoDiv">
          <a href="#" className='logo flex'>
            <h1> <PiDogFill  className="icon"/> Huellitas y Bigotes.</h1>
          </a>
        </div>
        <div className={active}>
          <ul className="navLists flex">

            <li className="navItem">
              <a href="#" className='navLink'>HOME</a>
            </li>

            <li className="navItem">
              <a href="#" className='navLink'>Packages</a>
            </li>

            <li className="navItem">
              <a href="#" className='navLink'>Shop</a>
            </li>

            <li className="navItem">
              <a href="#" className='navLink'>About</a>
            </li>

            <li className="navItem">
              <a href="#" className='navLink'>Pages</a>
            </li>

            <li className="navItem">
              <a href="#" className='navLink'>News</a>
            </li>

            <li className="navItem">
              <a href="#" className='navLink'>Contact</a>
            </li>

            <button className='btn'>
              <a href="#">BOOK NOW</a>
            </button>
          </ul>

          <div onClick={removeNavbar} className="closeNavbar">
            <IoMdCloseCircle className="icon"/>
          </div>
        </div>

        <div onClick={showNav} 
        className="toggleNavbar">
          <TbGridDots className='icon'/>
        </div>

      </header>
    </section>
  )
}

export default Navbar