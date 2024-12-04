import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaCheck, FaHome, FaBuilding, FaTree } from 'react-icons/fa'; // Importing icons

const Contact = () => {
  const email = "info@example.com";
  const phone = "+383 43 123 456";
  const location = "80 Bregu Diellit Prishtinë, Kosovo";
  const [copied, setCopied] = useState('');

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

  const openGoogleMaps = () => {
    const encodedLocation = encodeURIComponent(location);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedLocation}`, '_blank');
  };

  return (
    <div id="contact" className="contact-section bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Section */}
          <div className="contact-left p-6 flex-1">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Plotform</h3>
            <p className="mb-4 text-gray-600 text-lg leading-relaxed">
              Your source for innovative architectural solutions. We specialize in transforming spaces through expert interior design and landscaping.
            </p>
          </div>

          {/* Middle Section */}
          <div className="contact-middle p-6 flex-1">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Services</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <FaHome className="text-gray-600 mr-2" />
                <span className="text-lg text-gray-800">Interior</span>
              </li>
              <li className="flex items-center">
                <FaBuilding className="text-gray-600 mr-2" />
                <span className="text-lg text-gray-800">Exteriors</span>
              </li>
              <li className="flex items-center">
                <FaTree className="text-gray-600 mr-2" />
                <span className="text-lg text-gray-800">Yards</span>
              </li>
              <li className="flex items-center">
                <FaHome className="text-gray-600 mr-2" />
                <span className="text-lg text-gray-800">Villa</span>
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="contact-right p-6 flex-1">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Contact</h3>
            <div className="mb-4 text-gray-600 flex items-center">
              <FaMapMarkerAlt className="mr-2" />
              <span className="flex-1">{location}</span>
              <button 
                onClick={openGoogleMaps} 
                className="ml-2 text-blue-600 font-semibold transition duration-200"
                title="Open in Google Maps"
              >
                Open
              </button>
            </div>
            <div className="mb-4 text-gray-600 flex items-center">
              <FaPhone className="mr-2" />
              <span className="flex-1">{phone}</span>
              <button 
                onClick={() => copyToClipboard(phone)} 
                className="ml-2 text-blue-600 font-semibold transition duration-200"
                title="Copy Phone Number"
              >
                Copy
              </button>
              {copied === phone && (
                <span className="ml-2 text-green-500 flex items-center">
                  <FaCheck className="mr-1" /> Copied!
                </span>
              )}
            </div>
            <div className="mb-4 text-gray-600 flex items-center">
              <FaEnvelope className="mr-2" />
              <span className="flex-1">{email}</span>
              <button 
                onClick={() => copyToClipboard(email)} 
                className="ml-2 text-blue-600 font-semibold transition duration-200"
                title="Copy Email Address"
              >
                Copy
              </button>
              {copied === email && (
                <span className="ml-2 text-green-500 flex items-center">
                  <FaCheck className="mr-1" /> Copied!
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;