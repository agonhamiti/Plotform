import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const OurProjectsNavItems = ({ onClick = () => {} }) => (
  <ul className="nav-ul">
    <li className="nav-li">
      <Link to="/" className="nav-li_a" onClick={onClick}>Home</Link>
    </li>
    
  </ul>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 shadow-sm">
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
            <OurProjectsNavItems className="flex space-x-3 sm:space-x-4 md:space-x-6 lg:space-x-8" />
          </nav>
        </div>
      </div>

      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-all duration-300 ease-in-out sm:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`} 
        onClick={closeMenu}
      >
        <div 
          className={`fixed right-0 top-0 h-full w-[280px] bg-white shadow-2xl transform transition-all duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`} 
          onClick={e => e.stopPropagation()}
        >
          <button
            onClick={closeMenu}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <img src="assets/close3.svg" alt="close" className="w-5 h-5" />
          </button>

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

          <nav className="p-6">
            <OurProjectsNavItems 
              onClick={closeMenu} 
              className="flex flex-col space-y-4"
            />
          </nav>

          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-100 bg-gray-50">
            <div className="flex flex-col space-y-4">
              <div className="flex justify-center space-x-8">
                {/* ... existing social links ... */}
              </div>
              
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