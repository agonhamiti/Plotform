import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaCheck, FaHome, FaBuilding, FaTree, FaCopy, FaPencilRuler } from 'react-icons/fa';

const Contact = () => {
  const email = "info@example.com";
  const phone = "+383 43 123 456";
  const location = "80 Bregu Diellit Prishtinë, Kosovo";
  const [copied, setCopied] = useState('');
  const [activeTooltip, setActiveTooltip] = useState('');

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopied(text);
        setTimeout(() => setCopied(''), 2000);
      })
      .catch(err => {
        console.error("Failed to copy: ", err);
      });
  };

  const handleEmailClick = (e) => {
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault();
      copyToClipboard(email);
    }
  };

  const openGoogleMaps = () => {
    const encodedLocation = encodeURIComponent(location);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedLocation}`, '_blank');
  };

  const services = [
    { icon: <FaHome />, name: 'Interior', description: 'Modern interior design solutions' },
    { icon: <FaBuilding />, name: 'Exteriors', description: 'Stunning exterior architecture' },
    { icon: <FaTree />, name: 'Yards', description: 'Beautiful landscape design' },
    { icon: <FaPencilRuler />, name: 'Villa', description: 'Luxury villa projects' }
  ];

  return (
    <div id="contact" className="contact-section bg-gradient-to-b from-slate-50 to-white py-8 sm:py-12 md:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          
          {/* Plotform Section */}
          <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-slate-200">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="p-2 sm:p-3 bg-slate-100 rounded-lg sm:rounded-xl">
                <img src="/Logo/plotformlogo.png" alt="Plotform" className="h-6 sm:h-8 w-auto" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800">Plotform</h3>
            </div>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Your source for innovative architectural solutions. We transform spaces through expert design and creative vision, bringing your dreams to reality.
            </p>
            <div className="mt-4 sm:mt-6 flex flex-wrap gap-2 sm:gap-3">
              <span className="px-2 sm:px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs sm:text-sm font-medium">Innovation</span>
              <span className="px-2 sm:px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-xs sm:text-sm font-medium">Design</span>
              <span className="px-2 sm:px-3 py-1 bg-slate-300 text-slate-800 rounded-full text-xs sm:text-sm font-medium">Excellence</span>
            </div>
          </div>

          {/* Services Section */}
          <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Our Services</h3>
            <div className="grid grid-cols-1 gap-4">
              {services.map((service, index) => (
                <div key={index} className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-start gap-4">
                    <div className="mt-1">
                      <div className="p-2 bg-white rounded-lg text-slate-600">
                        {service.icon}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-slate-800">{service.name}</h4>
                      <p className="text-sm text-slate-600">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 md:col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Contact Us</h3>
            <div className="space-y-4">
              {/* Location Card */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <FaMapMarkerAlt className="text-slate-600 text-lg" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-500 mb-1">Location</p>
                    <p className="text-slate-700">{location}</p>
                  </div>
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
                </div>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <FaPhone className="text-slate-600 text-lg" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-500 mb-1">Phone</p>
                    <a href={`tel:${phone.replace(/\s+/g, '')}`} className="text-slate-700">
                      {phone}
                    </a>
                  </div>
                  <button onClick={() => copyToClipboard(phone)} className="mt-1" title="Copy phone number">
                    {copied === phone ? 
                      <FaCheck className="text-emerald-500 text-lg" /> : 
                      <FaCopy className="text-slate-400 text-lg" />
                    }
                  </button>
                </div>
              </div>

              {/* Email Card */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <FaEnvelope className="text-slate-600 text-lg" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-500 mb-1">Email</p>
                    <a href={`mailto:${email}?subject=Inquiry from Website`} className="text-slate-700">
                      {email}
                    </a>
                  </div>
                  <button onClick={() => copyToClipboard(email)} className="mt-1" title="Copy email address">
                    {copied === email ? 
                      <FaCheck className="text-emerald-500 text-lg" /> : 
                      <FaCopy className="text-slate-400 text-lg" />
                    }
                  </button>
                </div>
              </div>

              {/* Helper Text */}
              <div className="mt-6 p-4 bg-slate-50 rounded-xl text-center border border-slate-100">
                <p className="text-sm text-slate-500">
                  Click on contact details to interact or use copy buttons
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;