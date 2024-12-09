import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { name: 'Facebook', icon: <FaFacebookF />, url: 'https://www.facebook.com/agonhamiti' },
    { name: 'LinkedIn', icon: <FaLinkedinIn />, url: 'https://www.linkedin.com/in/agon-hamiti-3a0013238' },
    { name: 'Instagram', icon: <FaInstagram />, url: 'https://www.instagram.com/agonhamiti' }
  ];

  return (
    <footer className="bg-gradient-to-r from-slate-200 to-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit our ${social.name} page`}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 hover:shadow-md transition-all duration-200"
              >
                {social.icon}
              </a>
            ))}
          </div>
          
          <p className="text-slate-600 text-sm">
            © 2024 Plotform. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
