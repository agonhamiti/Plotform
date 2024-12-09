import React, { useState, useEffect } from "react";

const ImageCarousel = ({ images, interval, fadeDuration }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, fadeDuration);
    }, interval);

    return () => clearInterval(intervalId);
  }, [images.length, interval, fadeDuration]);

  const goToNextImage = (e) => {
    e.stopPropagation(); // Prevent closing fullscreen
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPreviousImage = (e) => {
    e.stopPropagation(); // Prevent closing fullscreen
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div className="relative group overflow-hidden rounded-xl shadow-xl h-72 lg:h-80">
        <img
          src={images[currentImageIndex]}
          alt="Project"
          onClick={() => setIsFullscreen(true)}
          className={`w-full h-full object-cover transition-opacity duration-700 cursor-pointer ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        />
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`h-2 w-2 rounded-full transition-all cursor-pointer ${
                index === currentImageIndex ? "bg-black scale-110" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal with Navigation */}
      {isFullscreen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 sm:p-6"
          onClick={() => setIsFullscreen(false)}
        >
          {/* Previous Button */}
          <button
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-white bg-black/30 backdrop-blur-sm rounded-full hover:bg-black/50 transition-all duration-300 group"
            onClick={goToPreviousImage}
          >
            <svg 
              className="w-6 h-6 sm:w-8 sm:h-8 transform group-hover:scale-110 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 19l-7-7 7-7" 
              />
            </svg>
          </button>

          <img
            src={images[currentImageIndex]}
            alt="Project Fullscreen"
            className="max-h-[85vh] w-full max-w-screen-2xl object-contain"
          />

          {/* Next Button */}
          <button
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-white bg-black/30 backdrop-blur-sm rounded-full hover:bg-black/50 transition-all duration-300 group"
            onClick={goToNextImage}
          >
            <svg 
              className="w-6 h-6 sm:w-8 sm:h-8 transform group-hover:scale-110 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </button>

          {/* Close Button */}
          <button
            className="absolute top-4 sm:top-8 right-4 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-white bg-black/30 backdrop-blur-sm rounded-full hover:bg-black/50 transition-all duration-300 group"
            onClick={(e) => {
              e.stopPropagation();
              setIsFullscreen(false);
            }}
          >
            <svg 
              className="w-5 h-5 sm:w-6 sm:h-6 transform group-hover:scale-110 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-white bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full text-sm sm:text-base font-medium">
            {currentImageIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
};

const Button = ({ link, children }) => (
  <a href={link}>
    <button className="mt-8 px-8 py-4 bg-black text-white font-medium rounded-lg shadow-lg hover:bg-gray-800 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-gray-500 transition-all duration-300">
      {children}
    </button>
  </a>
);

const Projects = () => {
  const images1 = [
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

  return (
    <div id="projects" className="bg-gray-50 py-8 pt-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-1 gap-10">
          <div className="flex flex-col justify-between">
            <div className="space-y-6 text-gray-900 mt-12 lg:mt-20">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                Our Projects
              </h2>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-800">
                Crafting Architectural Masterpieces
              </h3>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600">
                Shaping Visions into Stunning Architectural Masterpieces
              </p>
              <Button link="our-projects">Explore Projects</Button>
            </div>

            <div className="mt-12 lg:mt-16">
              <ImageCarousel images={images1} interval={6000} fadeDuration={300} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
