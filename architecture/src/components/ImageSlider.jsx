import React, { useState, useEffect } from 'react';
import './ImageSlider.css'; // Ensure this path is correct

const images = [
  '/projectsAdem/RenderFinal01.jpeg',
    '/projectsAdem/RenderFinal01Night.jpeg',
    '/projectsAdem/RenderFinal2.jpeg',
    '/projectsAdem/RenderFinal3.jpeg',
    '/projectsAdem/Render4Final.jpeg',
    '/projectsAdem/Render6Final.jpeg',
    '/projectsAdem/Render6FinalNate.jpeg',
    '/projectsAdem/RenderFinal7.jpeg',
    '/projectsAdem/project1.jpg',
    '/projectsAdem/Autosallon1.jpeg',
        '/projectsAdem/Autosallon2.jpeg',
        '/projectsAdem/Autosallon3.jpeg',
        '/projectsAdem/Autosallon4.jpeg',
          '/projectsAdem/project4.jpg',
          '/projectsAdem/project7.jpg',
              '/projectsAdem/project9.jpg',
              '/projectsAdem/project8.jpg',

];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true); // State for fade effect

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade out
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true); // Start fade in
      }, 500); // Match this duration with the CSS transition duration
    }, 10000); // Change image every 1 minute

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="slider-container">
      <img 
        src={images[currentIndex]} 
        alt={`Slide ${currentIndex + 1}`} 
        className={`slider-image ${fade ? 'fade-in' : 'fade-out'}`} 
      />
    </div>
  );
};

export default ImageSlider;