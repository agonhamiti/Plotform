import React from "react";
import Slider from "react-slick"; // Import the slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Experience = () => {
  // Custom Left Arrow
  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-transparent text-gray-600 rounded-full p-2 cursor-pointer shadow-lg hover:bg-gray-300 z-10"
      onClick={onClick}
    >
      <svg
        className="w-8 h-8"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 18l-6-6 6-6" />
      </svg>
    </div>
  );

  // Custom Right Arrow
  const NextArrow = ({ onClick }) => (
    <div
      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-transparent text-gray-600 rounded-full p-2 cursor-pointer shadow-lg hover:bg-gray-300 z-10"
      onClick={onClick}
    >
      <svg
        className="w-8 h-8"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 18l6-6-6-6" />
      </svg>
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const images = [
    "/assets/banesa1.jpg",
    "/assets/banesa1.jpg",
    "/assets/banesa1.jpg",
    "/assets/banesa1.jpg",
  ];

  return (
    <div id="experience" className="bg-gray-50 py-16">
      <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
        See Our Latest Projects
      </h2>
      <p className="text-lg text-center text-gray-600 mb-8">
        Explore our recent work to see how we turn creative ideas into beautifully crafted spaces.
      </p>

      <div className="relative max-w-5xl mx-auto">
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={src}
                alt={`Project ${index + 1}`}
                className="w-3/4 h-80 object-cover mx-auto rounded-lg shadow-lg"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* "See All" Button Section Below the Photos */}
      <div className="text-center mt-8">
        <a href="/our-projects">
          <button className="px-6 py-3 bg-gray-800 text-white rounded-md shadow-md hover:bg-gray-700 transition duration-300">
            See All
          </button>
        </a>
      </div>
    </div>
  );
};

export default Experience;
