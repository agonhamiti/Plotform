import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-section bg-gray-100 py-10 px-6 border-t border-gray-300s flex justify-between items-center flex-wrap gap-5">
      <div className="footer-links text-gray-800 flex gap-4">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="footer-social flex gap-5">
        <a href="https://www.facebook.com/agonhamiti" target="_blank" rel="noopener noreferrer">
          <div className="social-icon bg-gray-500 border-gray-600">
            <img src="/assets/facebook.svg" alt="facebook" className="w-6 h-6" />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/agon-hamiti-3a0013238" target="_blank" rel="noopener noreferrer">
          <div className="social-icon bg-gray-500 border-gray-600">
            <img src="/assets/linkedin2color.svg" alt="linkedin" className="w-6 h-6" />
          </div>
        </a>

        <a href="https://www.instagram.com/agonhamiti" target="_blank" rel="noopener noreferrer">
          <div className="social-icon bg-gray-500 border-gray-600">
            <img src="/assets/instagram3.svg" alt="instagram" className="w-6 h-6" />
          </div>
        </a>
      </div>

      <p className="footer-copy text-gray-800 mt-4">
        © 2024 Arch. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
