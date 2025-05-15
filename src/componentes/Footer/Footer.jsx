import React,  { useEffect } from 'react'
import './footer.scss'
import video from '../../Assets/killa.mp4'

import { FiSend } from "react-icons/fi";
import { SiPetsathome } from "react-icons/si";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import { FiChevronsRight } from "react-icons/fi";

import Aos from 'aos'
import 'aos/dist/aos.css'


const Footer = () => {

     useEffect(()=>{
      Aos.init({duration: 2000})
    },[])


  return (
    <section className="footer">

      <div className="videoDiv">
        <video src={video} loop autoPlay muted type='killa.mp4'></video>
      </div>

      <div className="secContent container">
        <div className="contacDiv flex">
          <div data-aos="fade-up" className="text">
            <small>STAY CONNECTED</small>
            <h2>We care for your pets</h2>
          </div>


          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder='Enter Email 
            Address'/>
            <button data-aos="fade-up" className='btn flex' type='submit'>
                SEND <FiSend  className='icon'/>
            </button>
          </div>

        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a data-aos="fade-right" href="#" className='logo flex'>
              <SiPetsathome  
              className='icon'/> PetCare.
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
              We are dedicated to providing compassionate
              and professional veterinary care for your pets. 
              From checkups to emergencies, your pet’s
              health is our priority.
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
              <AiOutlineTwitter  className='icon'/>
              <FiYoutube   className='icon'/>
              <FaTelegram   className='icon'/>
              <FaInstagram   className='icon'/>
            </div>
          </div>

          <div className="footerLinks grid">
            {/*primer grupo*/}

            <div data-aos="fade-up"
            data-aos-duration="3000"
             className="linkGroup">
              <span className="groupTitle">
                our clinic
              </span>

              <li className="footerList flex">
                <FiChevronsRight className='icon'/>
                Services
              </li>

              <li className="footerList flex">
                <FiChevronsRight className='icon'/>
                Emergency Care
              </li>

              <li className="footerList flex">
                <FiChevronsRight className='icon'/>
                 Our Team
              </li>

              <li className="footerList flex">
                <FiChevronsRight className='icon'/>
                  Pet Wellness
              </li>

              <li className="footerList flex">
                <FiChevronsRight className='icon'/>
                  Vaccination Plans
              </li>
  
            </div>
            {/*second group*/}
            <div data-aos="fade-up" 
            data-aos-duration="4000"
            className="linkGroup">
              <span className="groupTitle">
                PARTNERS
              </span>

              <li className="footerList flex">
                <FiChevronsRight className='icon'/>
                Local Shelters
              </li>

              <li className="footerList flex">
                <FiChevronsRight className='icon'/>
                Pet Pharmacies
              </li>

              <li className="footerList flex">
                <FiChevronsRight className='icon'/>
                 Grooming Centers
              </li>

              <li className="footerList flex">
                <FiChevronsRight className='icon'/>
                  Pet Food Stores
              </li>

              <li className="footerList flex">
                <FiChevronsRight className='icon'/>
                  Animal Rescues
              </li>
  
            </div>

            {/*tree group*/} 
            <div data-aos="fade-up" 
            data-aos-duration="5000"
            className="linkGroup">
              <span className="groupTitle">
                LAST MINUTE
              </span>

              <li className="footerList flex">
                <FiChevronsRight className='icon'/>
                How to Deworm
              </li>

              <li className="footerList flex">
                <FiChevronsRight className='icon'/>
                Feeding Advice
              </li>

              <li className="footerList flex">
                <FiChevronsRight className='icon'/>
                  Puppy Training
              </li>

              <li className="footerList flex">
                <FiChevronsRight className='icon'/>
                  Cat Behavior
              </li>

              <li className="footerList flex">
                <FiChevronsRight className='icon'/>
                  First Aid for Pets
              </li>
  
            </div>

          </div>
          
          <div data-aos-duration="4000" className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>COPYRIGHTS RESERVED - ISRATECH
              2025
            </small>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Footer