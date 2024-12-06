import React, { useState, useEffect } from "react";

const ImageCarousel = ({ images, interval, fadeDuration }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(false); // Start fade out
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true); // Start fade in the new image
      }, fadeDuration); // Wait for fade-out duration
    }, interval);

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, [images.length, interval, fadeDuration]);

  return (
    <div className="relative group overflow-hidden rounded-xl shadow-xl h-72 lg:h-80">
      <img
        src={images[currentImageIndex]}
        alt="Project"
        className={`w-full h-full object-cover transition-opacity duration-700 ${fade ? "opacity-100" : "opacity-0"}`}
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
    "/projectsAdem/project4.jpg",
    "/projectsAdem/project7.jpg",
    "/projectsAdem/project6.jpg",
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
              <ImageCarousel images={images1} interval={3500} fadeDuration={300} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
