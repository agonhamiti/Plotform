import React from "react";

const Team = () => {
    const teamMembers = [
        {
          name: "Neeraj Singh",
          title: "Founder & CEO",
          image: "/assets/neeraj.jpg",
          socialLinks: {
            instagram: "https://instagram.com/neeraj",
            email: "neeraj@example.com",
          },
        },
        {
          name: "Vipul",
          title: "Director",
          image: "/assets/vipul.jpg",
          socialLinks: {
            instagram: "https://instagram.com/vipul",
            email: "vipul@example.com",
          },
        },
        {
          name: "Prathamesh",
          title: "Title",
          image: "/assets/prathamesh.jpg",
          socialLinks: {
            instagram: "https://instagram.com/prathamesh",
            email: "prathamesh@example.com",
          },
        },
      ];
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="text-center py-28">
        <h1 className="text-3xl font-bold text-gray-800">Meet Our Team</h1>
      </header>

      {/* Team Members Grid */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamMembers.map((member, index) => (
              <div
                className="bg-white p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 border border-gray-200"
                key={index}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-6 border-4 border-gray-300"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-gray-500">{member.title}</p>
                <div className="mt-4 flex justify-center space-x-4">
                  {member.socialLinks.twitter && (
                    <a
                      href={member.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-twitter text-gray-600 hover:text-blue-500"></i>
                    </a>
                  )}
                  {member.socialLinks.linkedin && (
                    <a
                      href={member.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-linkedin text-gray-600 hover:text-blue-500"></i>
                    </a>
                  )}
                  {member.socialLinks.github && (
                    <a
                      href={member.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github text-gray-600 hover:text-black"></i>
                    </a>
                  )}
                  {member.socialLinks.email && (
                    <a href={`mailto:${member.socialLinks.email}`}>
                      <i className="fas fa-envelope text-gray-600 hover:text-red-500"></i>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

     
    </div>
  );
};

export default Team;
