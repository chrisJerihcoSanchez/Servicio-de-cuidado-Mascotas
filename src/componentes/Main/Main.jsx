import React,  { useEffect } from 'react'
import './main.scss'

import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuClipboardCheck } from "react-icons/lu";

import img from '../../Assets/cuidadora.jpeg'
import img1 from '../../Assets/rescate.jpg'
import img2 from '../../Assets/hospitalizar.webp'
import img3 from '../../Assets/niña.jpg'
import img4 from '../../Assets/domicilio.jpeg'
import img5 from '../../Assets/exotico.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'


const Data =[
  {
    id: 1,
    imgSrc: img,
    destTitle: 'Clínica Veterinaria Patitas Felices',
    location: 'Ciudad de México',
    grade: 'CUIDADO GENERAL',
    fees: 'Desde $300',
    description: 'Atención médica integral para perros y gatos: consultas, desparasitación, vacunas y más. Profesionales dedicados al bienestar animal.'
  },
  {
    id: 2,
    imgSrc: img1,
    destTitle: 'VetSalud Integral',
    location: 'Ciudad de México',
    grade: 'MEDICINA PREVENTIVA',
    fees: 'Desde $350',
    description: 'Vacunación, chequeos generales y asesoramiento nutricional para mantener a tu mascota sana desde cachorra.'
  },
  {
    id: 3,
    imgSrc: img2,
    destTitle: 'Centro Veterinario El Refugio',
    location: 'Ciudad de México',
    grade: 'HOSPITALIZACIÓN Y CIRUGÍA',
    fees: 'Desde $600',
    description: 'Contamos con quirófano, rayos X y hospitalización. Atención especializada para casos graves y cirugías programadas.'
  },
  {
    id: 4,
    imgSrc: img3,
    destTitle: 'Vet Estética y Spa Animalia',
    location: 'Ciudad de México',
    grade: 'ESTÉTICA Y BIENESTAR',
    fees: 'Desde $250',
    description: 'Baños, cortes de pelo, limpieza dental y tratamientos dermatológicos. Consentimos a tu mascota como se merece.'
  },
  {
    id: 5,
    imgSrc: img4,
    destTitle: 'VetMóvil Express',
    location: 'Ciudad de México',
    grade: 'SERVICIO A DOMICILIO',
    fees: 'Desde $400',
    description: 'Veterinarios certificados que acuden a tu hogar para consultas, vacunación y tratamientos básicos. Ideal para mascotas nerviosas.'
  },
    {
      id: 6,
    imgSrc: img5,
    destTitle: 'Exóticos MX Vet',
    location: 'Ciudad de México',
    grade: 'ANIMALES EXÓTICOS',
    fees: 'Desde $2000',
    description: 'Especialistas en aves, reptiles y pequeños mamíferos. Diagnósticos precisos y cuidados específicos para animales no convencionales.'
  }
]


const Main = () => {


    useEffect(()=>{
      Aos.init({duration: 2000})
    })  

  return (
    <section className='main container section'>

      <div className='secTitle'>
        <h3 data-aos="fade-right" className="title">
          Most Visited destinations
        </h3>
      </div>


      <div className="secContent grid">
        {/* So guys, here we are going to use high ordfer array method(map).
        to do that we shall use a list of object in one array. I'm going to
        create an array named data and from that we shall .map() array to
        fetch each desitnation at once. I hope this  will make sence to you!
         */}
        {
          Data.map(({id, imgSrc, destTitle, location, grade, fees, 
            description})=>{
              return(
                <div key={id} data-aos="fade-up"
                 className="singleDestination">
                  {/* Here it will return single id from
                  the map array*/}
                  <div className="imageDiv">
                    <img src={imgSrc} alt={destTitle} />
                  </div>

                  <div className="cardInfo">
                    <h4 className="destTitle">
                      {destTitle}</h4>
                      <span className="continent flex">
                        <HiOutlineLocationMarker  className='icon'/>
                        <span className="name">{location}</span>
                      </span>

                      <div className="fees flex">
                        <div className="grade">
                          <span>{grade}<small>+1</small></span>
                        </div>
                        <div className="price">
                          <h5>{fees}</h5>
                        </div>
                      </div>
                      <div className="desc">
                        <p>{description}</p>
                      </div>
                      <button className='btn flex'>
                        DETAILS <LuClipboardCheck className='icon'/>
                      </button>
                  </div>
                </div>
              )
          })
        }
      </div>
    </section>
  )
}

export default Main