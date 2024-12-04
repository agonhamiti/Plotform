import React from "react";

const TeamModal = ({ isOpen, onClose, teamMembers }) => {
  if (!isOpen) return null; // Ensure modal only renders when open

  // Handler for closing modal on backdrop click
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70"
      onClick={handleBackdropClick} // Attach click handler to the backdrop
    >
      <div className="bg-white rounded-lg p-4 sm:p-6 max-w-xs sm:max-w-lg lg:max-w-3xl w-full shadow-lg max-h-[90vh] overflow-y-auto relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-3xl font-bold p-2"
          aria-label="Close team modal"
        >
          &times;
        </button>

        {/* Header */}
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-2">
          Meet Our Team
        </h2>
        <p className="text-gray-600 text-sm sm:text-base text-center mb-4">
          Our dedicated team is committed to delivering exceptional results and
          innovative solutions. Get to know the people behind our success!
        </p>

        {/* Team Members */}
        {teamMembers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {teamMembers.map((member, index) => (
              <div
                className="bg-white p-4 rounded-lg shadow-md border border-gray-200 transform hover:scale-105 transition-transform"
                key={index}
              >
                {/* Member Image */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-full mx-auto mb-4 border-4 border-gray-300"
                />

                {/* Member Info */}
                <h3 className="text-lg font-semibold text-gray-800 text-center">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-center">{member.title}</p>
                {member.socialLinks?.email && (
                  <p className="text-gray-500 mt-2 text-center text-sm">
                    {member.socialLinks.email}
                  </p>
                )}

                {/* Social Icons */}
                <div className="flex justify-center gap-3 mt-4">
                  {member.socialLinks?.instagram && (
                    <a
                      href={member.socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-colors"
                    >
                      <img
                        src="/assets/instagramblack.svg"
                        alt="Instagram"
                        className="w-5 h-5"
                      />
                    </a>
                  )}
                  {member.socialLinks?.linkedin && (
                    <a
                      href={member.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-colors"
                    >
                      <img
                        src="/assets/linkedinblack.svg"
                        alt="LinkedIn"
                        className="w-5 h-5"
                      />
                    </a>
                  )}
                  {member.socialLinks?.facebook && (
                    <a
                      href={member.socialLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-colors"
                    >
                      <img
                        src="/assets/facebookblack.svg"
                        alt="Facebook"
                        className="w-5 h-5"
                      />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center mt-4">
            <p className="text-gray-500">No team members available at this time.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamModal;
