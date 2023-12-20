import React, { useState, useEffect } from "react";
import '../styles/header.css';
import Imagen1 from '../imagenes/baner1.jpg';
import Imagen2 from '../imagenes/baner2.jpg';

export const Header = () => {
    const images = [Imagen1, Imagen2];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((currentImageIndex + 1) % images.length);
        }, 10000);
        return () => clearInterval(timer);
    }, [currentImageIndex,images.length]);

    const nextImage = () => {
        setCurrentImageIndex((currentImageIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
    };

    return (
        <header>
            <div className="carousel ">
                <button onClick={prevImage}>←</button>
                <img src={images[currentImageIndex]} alt="Imagen del banner"/>
                <button onClick={nextImage}>→</button>
            </div>
            <ul class="menu">
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#cartelera">Cartelera</a></li>
            <li><a href="#proximos">Próximos Estrenos</a></li>
            <li><a href="#contacto">Contacto</a></li>
            </ul>
        </header>
    );
};