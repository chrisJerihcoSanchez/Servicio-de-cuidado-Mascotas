// Packages.jsx
import React from 'react';
import './style.css';

import { FaClipboardCheck } from "react-icons/fa";
import { FaSyringe } from "react-icons/fa";
import { FaHeartbeat } from "react-icons/fa";


const Packages = () => {
    const packages = [
        {
            id: 1,
            title: "Paquete Básico",
            price: "$50/mes",
            icon: <FaClipboardCheck className="package-icon" />,
            features: [
                "Consulta general mensual",
                "Desparasitación básica",
                "Vacuna anual",
                "10% descuento en medicamentos"
            ]
        },
        {
            id: 2,
            title: "Paquete Premium",
            price: "$90/mes",
            icon: <FaSyringe className="package-icon" />,
            features: [
                "Consultas ilimitadas",
                "Vacunas completas",
                "Desparasitación premium",
                "Chequeo dental anual",
                "15% descuento en medicamentos"
            ]
        },
        {
            id: 3,
            title: "Paquete Emergencia",
            price: "$120/mes",
            icon: <FaHeartbeat  className="package-icon" />,
            features: [
                "Consultas ilimitadas",
                "Cobertura para emergencias 24/7",
                "Hospitalización incluida (hasta 3 días)",
                "Análisis de laboratorio básicos",
                "20% descuento en medicamentos"
            ]
        }
    ];

    return (
        <section className="packages-section" id="paquetes">
            <div className="container">
                <h2 className="section-title" data-aos="fade-up">Nuestros Paquetes de Cuidado</h2>
                <p className="section-subtitle" data-aos="fade-up">Elige el plan que mejor se adapte a las necesidades de tu mascota</p>
                
                <div className="packages-grid">
                    {packages.map((pkg) => (
                        <div className="package-card" key={pkg.id} data-aos="fade-up">
                            <div className="package-header">
                                {pkg.icon}
                                <h3>{pkg.title}</h3>
                                <p className="price">{pkg.price}</p>
                            </div>
                            <ul className="package-features">
                                {pkg.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                            <button className="btn-primary">Seleccionar</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Packages;