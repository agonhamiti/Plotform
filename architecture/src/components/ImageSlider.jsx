import React, { useState, useEffect } from 'react';
import './ImageSlider.css'; // Ensure this path is correct

const images = [
  '/models/RenderFinal3.jpeg',
  '/projectsAdem/project3.jpg',
  '/models/Render6Final.jpeg',
  '/projectsAdem/project4.jpg',
  '/projectsAdem/project6.jpg',

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