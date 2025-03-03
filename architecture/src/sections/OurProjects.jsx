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
    { icon: <FaFacebookF />, url: 'https://www.facebook.com/profile.php?id=61570921864197' },
    { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/company/plotformarch/" },
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
      title: 'Urban Center',
      description:
        'A 33,975 m² multifunctional development featuring a hotel, distribution center, wedding hall, gas station, and shopping center, designed to meet diverse community and business needs.',
      images: [
        '/projectsAdem/RenderFinal01.jpeg',
        '/projectsAdem/RenderFinal01Night.jpeg',
        '/projectsAdem/RenderFinal2.jpeg',
        '/projectsAdem/RenderFinal3.jpeg',
        '/projectsAdem/Render4Final.jpeg',
        '/projectsAdem/Render6Final.jpeg',
        '/projectsAdem/Render6FinalNate.jpeg',
        '/projectsAdem/RenderFinal7.jpeg',
        '/projectsAdem/project1.jpg',
      ],
    },
    {
      id: 2,
      title: 'Auto Showroom',
      description: 
        'A modern automotive showroom featuring sleek design elements and optimal display spaces. The project incorporates large glass facades for maximum visibility and natural light, creating an ideal environment for vehicle presentation.',
      images: [
        '/projectsAdem/Autosallon1.jpeg',
        '/projectsAdem/Autosallon2.jpeg',
        '/projectsAdem/Autosallon3.jpeg',
        '/projectsAdem/Autosallon4.jpeg',
      ],
    },
    {
      id: 3,
      title: 'Modern Mountain Villa',
      description:
        'A contemporary villa that combines modern design with traditional elements. Featuring floor-to-ceiling windows, an outdoor entertainment area, and a seamless indoor-outdoor living space. The design merges black metal and warm brick facades, creating a perfect balance between modern luxury and natural surroundings.',
      images: [
        '/projectsAdem/project4.jpg',
        '/projectsAdem/project7.jpg',
      ],
    },
    {
      id: 4,
      title: 'Modern White House',
      description:
        'A striking white modernist residence that embraces geometric simplicity and natural light. The design features clean lines, perforated facades, and multi-level terraces that create a dynamic interplay of light and shadow. This contemporary home seamlessly blends indoor and outdoor spaces while maintaining privacy in an urban setting.',
      images: [
        '/projectsAdem/project9.jpg',
        '/projectsAdem/project8.jpg',
      ],
    },
    /*
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
    */
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-28 sm:mt-36">
        <h1 className="text-2xl sm:text-4xl font-bold mb-3">Our Projects</h1>
        <p className="text-gray-600 text-sm sm:text-base mb-16">
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
              src={project.images[0]}
              alt={project.title}
              className="w-full h-48 sm:h-64 object-cover transition-opacity duration-500 group-hover:opacity-80"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
              <h3 className="text-lg sm:text-2xl font-semibold text-center px-4">{project.title}</h3>
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
            className="bg-white p-4 sm:p-6 rounded-lg w-full sm:w-3/4 md:w-2/3 lg:w-3/4 xl:w-4/5 relative max-h-[90vh] overflow-y-auto"
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
              {/* Mobile view */}
              <div className="sm:hidden flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
                {currentProject.images.map((image, index) => (
                  <div
                    key={index}
                    className={`flex-shrink-0 w-[85vw] h-[50vh] ${
                      currentImageIndex === index ? 'border-4 border-white' : ''
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${currentProject.title} Image ${index + 1}`}
                      className="w-full h-full rounded-lg shadow-lg object-contain bg-gray-50"
                      onClick={() => handleImageClick(image, index)}
                    />
                  </div>
                ))}
              </div>

              {/* Desktop view */}
              <div className="hidden sm:block">
                <img
                  src={currentProject.images[currentImageIndex]}
                  alt={`${currentProject.title} Image ${currentImageIndex + 1}`}
                  className="w-full h-[70vh] rounded-lg shadow-lg object-contain bg-gray-50 mx-auto"
                  onClick={() => handleImageClick(currentProject.images[currentImageIndex], currentImageIndex)}
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
          className="fixed inset-0 bg-black/95 flex justify-center items-center z-50"
          onClick={closeFullScreen}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <img
            src={fullScreenImage}
            alt="Full Screen"
            className="max-w-[95vw] max-h-[95vh] object-contain"
            onClick={(e) => e.stopPropagation()}
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

      {/* Contact Section */}.
      <section id="contact">
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
                  <p className="text-xs text-slate-600">Click to call or copy number</p>
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
                  <p className="text-xs text-slate-600">Click to send email or copy address</p>
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
                  <p className="text-xs text-slate-600">Click to open in Google Maps</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>

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
                  aria-label={`Visit our ${social.icon.type.displayName} page`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            <p className="text-slate-600 text-sm">
              © 2025 Plotform. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default OurProjects;