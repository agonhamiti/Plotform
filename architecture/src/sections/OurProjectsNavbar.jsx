import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const OurProjectsNavItems = ({ onClick = () => {} }) => (
  <ul className="nav-ul">
    <li className="nav-li">
      <Link to="/" className="nav-li_a" onClick={onClick}>Home</Link>
    </li>
    
  </ul>
);

const OurProjectsNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <Link to="/" className="text-black font-bold text-xl hover:text-white transition-colors">
            <img src="/assets/logo2arch2.png" alt="Logo" className="h-12 w-auto" />
          </Link>

          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu">
            <img src={isOpen ? 'assets/close3.svg' : 'assets/menu2.svg'} alt="toggle" className="w-6 h-6" />
          </button>

          <nav className="sm:flex hidden">
            <OurProjectsNavItems />
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="p-5">
          <OurProjectsNavItems onClick={closeMenu} />
        </nav>
      </div>
    </header>
  );
};

export default OurProjectsNavbar;