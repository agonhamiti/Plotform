import React, { useState } from "react";
import TeamModal from "../components/TeamModal";

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showMore, setShowMore] = useState(false); // State for showing more text

  const teamMembers = [
    {
      name: "Neeraj Singh",
      title: "Founder & CEO",
      image: "path/to/neeraj.jpg",
      socialLinks: {
        email: "neeraj@example.com",
        facebook: "https://facebook.com/neeraj",
        instagram: "https://instagram.com/neeraj",
        linkedin: "https://linkedin.com/in/neeraj",
      },
    },
    {
      name: "Vipul",
      title: "Director",
      image: "path/to/vipul.jpg",
      socialLinks: {
        email: "vipul@example.com",
        facebook: "https://facebook.com/vipul",
        instagram: "https://instagram.com/vipul",
        linkedin: "https://linkedin.com/in/vipul",
      },
    },
    {
      name: "Prathamesh",
      title: "Team Member",
      image: "path/to/prathamesh.jpg",
      socialLinks: {
        email: "prathamesh@example.com",
        facebook: "https://facebook.com/prathamesh",
        instagram: "https://instagram.com/prathamesh",
        linkedin: "https://linkedin.com/in/prathamesh",
      },
    },
  ];

  return (
    <div id="about" className="bg-gradient-to-b from-gray-100 to-gray-50 pt-28 sm:py-16 lg:pt-44 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-2">
            About Us
          </h3>
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-4">
            Crafting Spaces, Designing Futures
          </h2>
          <p className="mt-4 text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto">
            At Plotform, we believe in the power of creativity, innovation, and collaboration.
          </p>
          <p className="mt-4 text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto">
            What started as a group of passionate architecture and design students has evolved into a thriving professional firm, committed to shaping the future of spaces and structures.
          </p>
          <p className="mt-4 text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Our journey began with small, student-led projects that pushed the boundaries of design, and today, we are proud to deliver large-scale, high-impact projects that reflect the quality, expertise, and ambition we’ve cultivated along the way.
          </p>
          <button
            onClick={() => setShowMore(!showMore)}
            className="mt-6 px-6 py-3 bg-gray-900 text-white font-medium text-base sm:text-lg rounded-full shadow-lg hover:bg-gray-700 transition duration-300 transform hover:scale-105"
          >
            {showMore ? "Read Less" : "Read More"}
          </button>

          {showMore && (
            <div className="mt-6 text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto">
              <p className="mt-4">
                <strong>Our Journey</strong>
                <br />
                Founded by a diverse group of architecture and design students, our collective vision has always been to create a lasting impact in the world of design. We began our journey with hands-on student projects, taking on challenges that allowed us to experiment, learn, and grow. These formative experiences laid the foundation for the creative and innovative solutions we offer today. As we matured, so did our capabilities, transitioning from youthful passion into a highly respected design corporation.
              </p>
              <p className="mt-4">
                <strong>Our Approach</strong>
                <br />
                From the beginning, we embraced an entrepreneurial spirit and a deep commitment to excellence. Over time, our small student collective grew into a fully incorporated design and architecture firm, taking on more complex and larger-scale projects. As our portfolio expanded, so did our reach, with projects spanning from residential designs to large public and commercial spaces.
                <br />
                With every new venture, we’ve maintained the core values that define our work: bold thinking, sustainable design, and an unwavering dedication to client satisfaction. Our journey from a startup to a professional powerhouse in the architectural world is a testament to our team’s talent, resilience, and vision.
              </p>
              <p className="mt-4">
                <strong>Our Work</strong>
                <br />
                Today, Plotform is a trusted name in architecture and design. Our projects range from visionary urban developments to bespoke interior designs, all with an emphasis on functionality, sustainability, and timeless beauty. Each project is an opportunity to transform concepts into realities that inspire and elevate the communities they serve.
                <br />
                Whether you’re seeking innovative solutions for a new development, a renovation, or a design consultation, we bring years of expertise and a forward-thinking approach to every project. Our team is made up of talented architects, designers, and engineers who are all committed to delivering results that exceed expectations.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <TeamModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          teamMembers={teamMembers}
        />
      )}
    </div>
  );
};

export default About;
