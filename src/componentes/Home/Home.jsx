import React,{useEffect} from 'react'
import './home.scss'
import video from '../../Assets/reflexion.mp4'
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { CiCircleList } from "react-icons/ci";
import { TbApps } from "react-icons/tb";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

  useEffect(()=>{
      Aos.init({duration: 2000})
  },[])


  return (
    <section className='home'>
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>

      <div className='homeContent container'>
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">
            We heal. We protect. We care.
          </span>
          <h1 data-aos="fade-up" className="homeTitle">
            Lifesaving care for those who love unconditionally
          </h1>
        </div>

        <div data-aos="fade-up" className="carDiv grid">
          <div className="destinationInput">
            <label htmlFor="service">Choose a service:</label>
            <div className="input flex">
              <input type="text" placeholder='e.g. Vaccination, Check-up, Grooming...' />
              <GrLocation className='icon' />
            </div>
          </div>

          <div className="dateInput">
            <label htmlFor="date">Select appointment date:</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>

          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Your budget:</label>
              <h3 className="total">$1500</h3>
            </div>
            <div className="input flex">
              <input type="range" max="1500" min="500" />
            </div>
          </div>

          <div className="searchOptions flex">
            <HiFilter className="icon" />
            <span>MORE OPTIONS</span>
          </div>
        </div>


        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="rigthIcons">
            <FiFacebook  className="icon"/>
            <FaInstagram className="icon"/>
            <FaTiktok  className='icon'/>
          </div>
          <div className="leftIcons">
            <CiCircleList className='icon'/>
            <TbApps className='icon'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home