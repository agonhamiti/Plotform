import React, { useState } from 'react';
import OurProjectsNavbar from './OurProjectsNavbar';
import Footer from './Footer'; // Import the Footer component
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaCheck, FaHome, FaBuilding, FaTree, FaCopy, FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa'; // Importing icons

const OurProjects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Track the current image index
  const [isFullScreen, setIsFullScreen] = useState(false); // State to track if the image is in full screen
  const [fullScreenImage, setFullScreenImage] = useState(null); // Store the image for full-screen display
  const [touchStartX, setTouchStartX] = useState(null); // State to track touch start position
  const [copied, setCopied] = useState(''); // State for copied text

  const email = "info@example.com";
  const phone = "+383 43 123 456";
  const location = "80 Bregu Diellit Prishtinë, Kosovo";

  const socialLinks = [
    { icon: <FaFacebookF />, url: 'https://www.facebook.com/agonhamiti' },
    { icon: <FaLinkedinIn />, url: 'https://www.linkedin.com/in/agon-hamiti-3a0013238' },
    { icon: <FaInstagram />, url: 'https://www.instagram.com/agonhamiti' }
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopied(text);
        setTimeout(() => setCopied(''), 2000); // Reset after 2 seconds
      })
      .catch(err => {
        console.error("Failed to copy: ", err);
      });
  };

  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description:
        'This is a modern office building with state-of-the-art amenities designed to foster collaboration and innovation.',
      images: [
        '/models/RenderFinal01.jpeg',
        '/models/RenderFinal01Night.jpeg',
        '/models/RenderFinal2.jpeg',
        '/models/RenderFinal3.jpeg',
        '/models/Render4Final.jpeg',
        '/models/Render6Final.jpeg',
        '/models/Render6FinalNate.jpeg',
      ],
    },
    {
      id: 2,
      title: 'Project 2',
      description:
        'A residential project that blends minimalistic design with functionality, creating a comfortable living space.',
      images: [
        '/projectsAdem/project9.jpg',
        '/projectsAdem/project2.jpg',
        '/projectsAdem/project3.jpg',
      ],
    },
    {
      id: 3,
      title: 'Project 3',
      description:
        'A mixed-use development that brings together residential, commercial, and recreational spaces in a vibrant community.',
      images: [
        '/projectsAdem/project6.jpg',
        '/projectsAdem/project7.jpg',
        '/projectsAdem/project8.jpg',
      ],
    },
    {
      id: 4,
      title: 'Project 4',
      description:
        'A luxury residential complex designed with eco-friendly materials and a focus on sustainable living.',
      images: [
        '/projectsAdem/project1.jpg',
        '/projectsAdem/project2.jpg',
        '/projectsAdem/project3.jpg',
      ],
    },
    {
      id: 5,
      title: 'Project 5',
      description:
        'A high-tech commercial building that integrates cutting-edge technology with innovative design to create a futuristic workspace.',
      images: [
        '/projectsAdem/project6.jpg',
        '/projectsAdem/project7.jpg',
        '/projectsAdem/project8.jpg',
      ],
    },
    {
      id: 6,
      title: 'Project 6',
      description:
        'A multi-purpose sports facility designed for both recreational and professional athletes, featuring state-of-the-art equipment.',
      images: [
        '/projectsAdem/project1.jpg',
        '/projectsAdem/project2.jpg',
        '/projectsAdem/project3.jpg',
      ],
    },
  ];

  const openModal = (project) => {
    setCurrentProject(project);
    setCurrentImageIndex(0); // Reset the image index to 0 when opening the modal
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentProject(null);
    setIsFullScreen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === currentProject.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? currentProject.images.length - 1 : prevIndex - 1
    );
  };

  const handleImageClick = (image, index) => {
    setFullScreenImage(image);
    setIsFullScreen(true);
    setCurrentImageIndex(index); // Track index when clicking on an image for full-screen view
  };

  const closeFullScreen = () => {
    setIsFullScreen(false);
  };

  const nextFullScreenImage = () => {
    const nextIndex = (currentImageIndex + 1) % currentProject.images.length;
    setFullScreenImage(currentProject.images[nextIndex]);
    setCurrentImageIndex(nextIndex);
  };

  const prevFullScreenImage = () => {
    const prevIndex =
      (currentImageIndex - 1 + currentProject.images.length) %
      currentProject.images.length;
    setFullScreenImage(currentProject.images[prevIndex]);
    setCurrentImageIndex(prevIndex);
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (touchStartX === null) return;

    const touchEndX = e.touches[0].clientX;
    const distance = touchStartX - touchEndX;

    if (distance > 50) {
      // Swiped left
      nextFullScreenImage();
      setTouchStartX(null); // Reset after swipe
    } else if (distance < -50) {
      // Swiped right
      prevFullScreenImage();
      setTouchStartX(null); // Reset after swipe
    }
  };

  const handleTouchEnd = () => {
    setTouchStartX(null); // Reset on touch end
  };

  return (
    <div>
      <OurProjectsNavbar />

      {/* Intro Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-28 sm:my-28">
        <h1 className="text-xl sm:text-3xl font-bold">Our Projects</h1>
        <p className="mt-4 text-gray-600 text-sm sm:text-base">
          Explore our diverse portfolio of innovative designs and exceptional work.
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 gap-6 mx-4 sm:grid-cols-2 md:grid-cols-3 lg:mx-16">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
            onClick={() => openModal(project)}
          >
            <img
              src={project.images[0]} // Use the first image for the thumbnail
              alt={project.title}
              className="w-full h-48 sm:h-64 object-cover transition-opacity duration-500 group-hover:opacity-80"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
              <h3 className="text-lg sm:text-2xl font-semibold">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Modal with Slideshow */}
      {isModalOpen && currentProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 px-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeModal();
            }
          }}
        >
          <div
            className="bg-white p-4 sm:p-6 rounded-lg w-full sm:w-3/4 md:w-2/3 relative max-h-screen overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-lg sm:text-2xl font-bold">
                {currentProject.title}
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 text-lg font-semibold"
              >
                Close
              </button>
            </div>
            <p className="mt-4 text-sm sm:text-base text-gray-600">
              {currentProject.description}
            </p>

            {/* Slideshow Controls */}
            <div className="relative mt-6">
              {/* For small devices (Mobile), horizontal scroll */}
              <div className="sm:hidden flex overflow-x-auto space-x-4 pb-4">
                {currentProject.images.map((image, index) => (
                  <div
                    key={index}
                    className={`min-w-[300px] sm:min-w-[400px] md:min-w-[500px] ${
                      currentImageIndex === index ? 'border-4 border-gray-700' : ''
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Project ${currentProject.title} Image ${index + 1}`}
                      className="w-full h-auto rounded-lg shadow-lg object-cover cursor-pointer"
                      onClick={() => handleImageClick(image, index)} // Open image in full screen on click
                    />
                  </div>
                ))}
              </div>

              {/* For large devices (Tablets, Desktops), display image with arrows */}
              <div className="hidden sm:flex justify-center">
                <img
                  src={currentProject.images[currentImageIndex]}
                  alt={`Project ${currentProject.title} Image ${currentImageIndex + 1}`}
                  className="w-full h-auto max-w-[800px] rounded-lg shadow-lg object-cover cursor-pointer"
                  onClick={() => handleImageClick(currentProject.images[currentImageIndex], currentImageIndex)} // Open image in full screen
                />
              </div>

              {/* Navigation Arrows (visible only on larger screens) */}
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent the click from closing the modal
                  prevImage();
                }}
                className="hidden sm:block absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-2xl z-10 p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition duration-200"
              >
                &#10094;
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent the click from closing the modal
                  nextImage();
                }}
                className="hidden sm:block absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-2xl z-10 p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition duration-200"
              >
                &#10095;
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Full Screen Image Modal */}
      {isFullScreen && fullScreenImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50"
          onClick={closeFullScreen} // Close when clicking outside the image
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <img
            src={fullScreenImage}
            alt="Full Screen"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()} // Prevent close when clicking on the image
          />
          <button
            onClick={closeFullScreen}
            className="absolute top-4 right-4 text-white text-4xl z-10 p-4 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition duration-200"
          >
            &times; {/* This represents the "X" symbol */}
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent the click from closing the full-screen modal
              prevFullScreenImage();
            }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl z-10 p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition duration-200"
          >
            &#10094;
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent the click from closing the full-screen modal
              nextFullScreenImage();
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl z-10 p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition duration-200"
          >
            &#10095;
          </button>
        </div>
      )}

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16 sm:my-28">
        <h2 className="text-xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Contact Us</h2>
        
        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
          {/* Phone Card */}
          <div className="p-3 sm:p-4 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
            <div className="flex flex-col items-center gap-3 sm:gap-4">
              <div className="bg-gray-800 p-2 sm:p-3 rounded-full">
                <FaPhone className="text-white text-lg sm:text-xl" />
              </div>
              <div className="text-center">
                <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Phone</h3>
                <a 
                  href={`tel:${phone.replace(/\s+/g, '')}`}
                  className="text-sm sm:text-base text-slate-700 hover:text-black transition-colors block mb-1 sm:mb-2"
                >
                  {phone}
                </a>
                <button 
                  onClick={() => copyToClipboard(phone)} 
                  className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-800"
                >
                  {copied === phone ? (
                    <><FaCheck className="text-emerald-500" /> Copied!</>
                  ) : (
                    <><FaCopy /> Copy</>
                  )}
                </button>
                <div className="mt-3 pt-3 border-t border-slate-100">
                  <p className="text-xs text-slate-400">Click to call or copy number</p>
                </div>
              </div>
            </div>
          </div>

          {/* Email Card */}
          <div className="p-3 sm:p-4 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
            <div className="flex flex-col items-center gap-3 sm:gap-4">
              <div className="bg-gray-800 p-2 sm:p-3 rounded-full">
                <FaEnvelope className="text-white text-lg sm:text-xl" />
              </div>
              <div className="text-center">
                <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Email</h3>
                <a 
                  href={`mailto:${email}`}
                  className="text-sm sm:text-base text-slate-700 hover:text-black transition-colors block mb-1 sm:mb-2"
                >
                  {email}
                </a>
                <button 
                  onClick={() => copyToClipboard(email)}
                  className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-800"
                >
                  {copied === email ? (
                    <><FaCheck className="text-emerald-500" /> Copied!</>
                  ) : (
                    <><FaCopy /> Copy</>
                  )}
                </button>
                <div className="mt-3 pt-3 border-t border-slate-100">
                  <p className="text-xs text-slate-400">Click to send email or copy address</p>
                </div>
              </div>
            </div>
          </div>

          {/* Location Card */}
          <div className="p-3 sm:p-4 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
            <div className="flex flex-col items-center gap-3 sm:gap-4">
              <div className="bg-gray-800 p-2 sm:p-3 rounded-full">
                <FaMapMarkerAlt className="text-white text-lg sm:text-xl" />
              </div>
              <div className="text-center">
                <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Location</h3>
                <p className="text-sm sm:text-base text-slate-700 mb-2">{location}</p>
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-slate-50 to-white rounded-lg text-slate-600 text-sm font-medium border border-slate-200 shadow-sm hover:shadow hover:border-slate-300 hover:text-slate-800 transition-all duration-200"
                >
                  <span>Maps</span>
                  <svg 
                    className="w-4 h-4" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={1.5} 
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                    />
                  </svg>
                </a>
                <div className="mt-3 pt-3 border-t border-slate-100">
                  <p className="text-xs text-slate-400">Click to open in Google Maps</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add this line to create some space between sections */}
      <div className="h-0"></div>

      {/* Footer Section */}
      <footer className="bg-gradient-to-r from-gray-100 to-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 hover:shadow-md transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            <p className="text-slate-600 text-sm">
              © 2024 Arch. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default OurProjects;