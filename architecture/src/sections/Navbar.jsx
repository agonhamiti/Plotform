import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { navLinks } from '../constants/index.js';

const NavItems = ({ onClick = () => {} }) => (
  <ul className="nav-ul">
    {navLinks.map((item) => (
      <li key={item.id} className="nav-li">
        {item.href.startsWith('#') ? (
          <a href={item.href} className="nav-li_a" onClick={onClick}> {/* Use anchor tag for hash links */}
            {item.name}
          </a>
        ) : (
          <Link to={item.href} className="nav-li_a" onClick={onClick}> {/* Use Link for regular routes */}
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <Link to="/" className="text-black font-bold text-xl hover:text-white transition-colors"> {/* Use Link for the logo */}
            <img src="/Logo/plotformlogo.png" alt="Logo" className="h-12 w-auto" />
          </Link>

          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu">
            <img src={isOpen ? 'assets/close3.svg' : 'assets/menu2.svg'} alt="toggle" className="w-6 h-6" />
          </button>

          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
        <nav className="p-5">
          <NavItems onClick={closeMenu} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;