import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { navLinks } from '../constants/index.js';

const NavItems = ({ onClick = () => {}, className = "" }) => (
  <ul className={`nav-ul ${className}`}>
    {navLinks.map((item) => (
      <li key={item.id} className="nav-li">
        {item.href.startsWith('#') ? (
          <a href={item.href} className="nav-li_a text-sm md:text-base lg:text-lg hover:text-gray-0 transition-colors" onClick={onClick}>
            {item.name}
          </a>
        ) : (
          <Link to={item.href} className="nav-li_a text-sm md:text-base lg:text-lg hover:text-gray-0 transition-colors" onClick={onClick}>
            {item.name}
          </Link>
        )}
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/100 shadow-sm">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-18 lg:h-20">
          <Link to="/" className="flex items-center space-x-1.5 sm:space-x-2 md:space-x-3">
            <img src="/Logo/plotformlogo.png" alt="Logo" className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto" />
            <span className="text-black font-bold text-base sm:text-lg md:text-xl lg:text-2xl">
              Plotform
              <span className="inline-grid grid-cols-2 gap-[1px] sm:gap-[1.5px] md:gap-0.5 w-[6px] sm:w-[7px] md:w-[8px] lg:w-3 h-[6px] sm:h-[7px] md:h-[8px] lg:h-3 ml-0.5 sm:ml-1 md:ml-1.5">
                <span className="bg-black w-[2.5px] sm:w-[3px] md:w-[3.5px] lg:w-[4px] h-[2.5px] sm:h-[3px] md:h-[3.5px] lg:h-[4px]"></span>
              </span>
            </span>
          </Link>

          <button
            onClick={toggleMenu}
            className="text-black hover:text-neutral-600 focus:outline-none sm:hidden flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white hover:bg-gray-200 transition-colors"
            aria-label="Toggle menu">
            <img src={isOpen ? 'assets/close3.svg' : 'assets/menu2.svg'} alt="toggle" className="w-4 sm:w-5 h-4 sm:h-5" />
          </button>

          <nav className="hidden sm:flex items-center">
            <NavItems className="flex space-x-3 sm:space-x-4 md:space-x-6 lg:space-x-8" />
          </nav>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-all duration-300 ease-in-out sm:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`} 
        onClick={closeMenu}
      >
        {/* Mobile menu panel */}
        <div 
          className={`fixed right-0 top-0 h-full w-[280px] bg-white shadow-2xl transform transition-all duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`} 
          onClick={e => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={closeMenu}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <img src="assets/close3.svg" alt="close" className="w-5 h-5" />
          </button>

          {/* Mobile menu header */}
          <div className="p-6 border-b border-gray-100">
            <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
              <img src="/Logo/plotformlogo.png" alt="Logo" className="h-8 w-auto" />
              <span className="text-black font-bold text-lg">
                Plotform
                <span className="inline-grid grid-cols-2 gap-[1px] sm:gap-[1.5px] md:gap-0.5 w-[6px] sm:w-[7px] md:w-[8px] lg:w-3 h-[6px] sm:h-[7px] md:h-[8px] lg:h-3 ml-0.5 sm:ml-1 md:ml-1.5">
                  <span className="bg-black w-[2.5px] sm:w-[3px] md:w-[3.5px] lg:w-[4px] h-[2.5px] sm:h-[3px] md:h-[3.5px] lg:h-[4px]"></span>
                </span>
              </span>
            </Link>
          </div>

          {/* Mobile menu items */}
          <nav className="p-6">
            <NavItems 
              onClick={closeMenu} 
              className="flex flex-col space-y-4"
            />
          </nav>

          {/* Mobile menu footer */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-100 bg-gray-50">
            <div className="flex flex-col space-y-4">
              {/* Social Links */}
              <div className="flex justify-center space-x-8">
                <a 
                  href="https://facebook.com/plotform" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#1877F2] transition-colors"
                  aria-label="Follow us on Facebook"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/>
                  </svg>
                </a>
                <a 
                  href="https://instagram.com/plotform" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#E4405F] transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 0 0 1.384 2.126A5.868 5.868 0 0 0 4.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 0 0 2.126-1.384 5.86 5.86 0 0 0 1.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 0 0-1.384-2.126A5.847 5.847 0 0 0 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 0 1-.899 1.382 3.744 3.744 0 0 1-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 0 1-1.379-.899 3.644 3.644 0 0 1-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 0 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/>
                  </svg>
                </a>
                <a 
                  href="https://linkedin.com/company/plotform" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#0A66C2] transition-colors"
                  aria-label="Follow us on LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
              
              {/* Quick Info */}
              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Have a question? Email us at
                </p>
                <a 
                  href="mailto:hello@plotform.com" 
                  className="text-sm font-medium text-black hover:text-gray-800 transition-colors"
                >
                  hello@plotform.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;