import React from 'react'
import './home.scss'
import video from '../../Assets/reflexion.mp4'
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";

const Home = () => {
  return (
    <section className='home'>
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>

      <div className='homeContent container'>
        <div className="textDiv">
          <span className="smallText">
            Our packages
          </span>
          <h1 className="homeTitle">
            Search your Holiday
          </h1>
        </div>

        <div className="carDiv grid">
          <div className="destinationInput">
            <label htmlFor="veterinaria">Search your 
              destintaion:</label>
              <div className="input flex">
                <input type="text" placeholder='Enter 
                name here..... ' />
                <GrLocation  className='icon'/>
              </div>
          </div>
          <div className="dateInput">
            <label htmlFor="date">Select your
              date:</label>
              <div className="input flex">
                <input type="date"/>
              </div>
          </div>
          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max price:</label>
              <h3 className="total">$1500</h3>
            </div>
            <div className="input flex">
              <input type="range" max="1500" 
              min="500" />
            </div>
          </div>

          <div className="searchOptions flex">
            <HiFilter  className="icon" />
            <span>MORE FILTERS</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home