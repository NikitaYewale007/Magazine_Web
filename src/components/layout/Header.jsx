import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white text-xl text-black font-semibold w-full sticky top-0 z-50 shadow-md ">
      <div className="flex justify-between items-center p-4 w-full mx-auto ">
      <nav className="hidden md:flex justify-center space-x-8 w-full ">
          <NavLink
            to="/home"
            className="text-black hover:text-gray-500"
            activeClassName="text-gray-800"
          >
            Home
          </NavLink>
          <NavLink
            to="/magazines"
            className="text-black hover:text-gray-500"
            activeClassName="text-gray-800"
          >
            Magazines
          </NavLink>
          <NavLink
            to="/featured"
            className="text-black hover:text-gray-500"
            activeClassName="text-gray-800"
          >
            Featured
          </NavLink>
          <NavLink
            to="/testimonials"
            className="text-black hover:text-gray-500"
            activeClassName="text-gray-800"
          >
            Testimonials
          </NavLink>
          <NavLink
            to="/about"
            className="text-black hover:text-gray-500"
            activeClassName="text-gray-800"
          >
            About
          </NavLink>
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button className="text-black focus:outline-none" onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-white">
          <div className="space-y-2 p-4">
            <NavLink
              to="/home"
              className="block text-black hover:text-gray-500"
              activeClassName="text-gray-800"
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="block text-black hover:text-gray-500"
              activeClassName="text-gray-800"
              onClick={toggleMenu}
            >
              About
            </NavLink>
            <NavLink
              to="/magazines"
              className="block text-black hover:text-gray-500"
              activeClassName="text-gray-800"
              onClick={toggleMenu}
            >
              Magazines
            </NavLink>
            <NavLink
              to="/featured"
              className="block text-black hover:text-gray-500"
              activeClassName="text-gray-800"
              onClick={toggleMenu}
            >
              Featured
            </NavLink>
            <NavLink
              to="/testimonials"
              className="block text-black hover:text-gray-500"
              activeClassName="text-gray-800"
              onClick={toggleMenu}
            >
              Testimonials
            </NavLink>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
